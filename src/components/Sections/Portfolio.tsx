import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, ArrowUpRight, X, Calendar, Hash } from "lucide-react";
import { PROJECTS } from "../../data";
import { Project } from "../../types";

const CATEGORIES = ["ALL EXHIBITS", "CREATIVE TECHNOLOGY", "BRAND DESIGN", "UX/UI DESIGN", "WEB DEVELOPMENT"];

export default function Portfolio() {
  const [filter, setFilter] = useState("ALL EXHIBITS");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [deployState, setDeployState] = useState<"init" | "deploying" | "ready">("init");

  const handleSelectProject = (project: Project | null) => {
    setDeployState("init");
    setSelectedProject(project);
  };

  // Filter project records (case-insensitive alignment)
  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "ALL EXHIBITS") return true;
    return proj.category.toUpperCase() === filter;
  });

  return (
    <section id="portfolio" className="relative py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b border-white/5 pb-10">
          <div>
            <span className="font-mono text-indigo-400 text-xs tracking-widest uppercase block mb-3">
              [ CURATED SELECTION ]
            </span>
            <h2 className="text-white font-sans text-4xl sm:text-6xl font-black tracking-tighter uppercase">
              SELECTED <span className="font-serif italic font-light text-indigo-300 normal-case">exhibits</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm font-light">
            Each item represents an intensive collaborative cycle pushing the limits of modern browser rendering, hardware-acceleration, and custom editorial design.
          </p>
        </div>

        {/* Filter Navigation Cluster */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300 transform active:scale-95 focus:outline-none cursor-pointer ${
                filter === cat
                  ? "bg-white text-zinc-950 font-bold"
                  : "bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="group relative cursor-pointer"
              onClick={() => handleSelectProject(project)}
              data-cursor="view"
            >
                {/* Image Wrap */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all duration-500">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  {/* Glass indicator hover slide overlay */}
                  <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center scale-75 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between items-center text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-white font-sans text-lg font-bold group-hover:text-indigo-400 transition-colors duration-200 uppercase">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/[0.03] border border-white/5 font-mono text-[8px] text-zinc-400 uppercase tracking-widest px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Glassmorphism Showcase Popover Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-2xl flex items-center justify-center p-6 sm:p-12 cursor-pointer overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 280 }}
                className="w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-2xl cursor-default overflow-hidden relative shadow-2xl grid grid-cols-1 lg:grid-cols-12"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left Side: Large Portfolio Image */}
                <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto w-full h-full bg-zinc-950 border-r border-white/10 overflow-hidden">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Right Side: Detailed Exhibits data */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-zinc-900/90 relative z-10">
                    <button
                      onClick={() => handleSelectProject(null)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center border border-white/5 cursor-pointer z-20"
                      aria-label="Close project modal"
                    >
                      <X className="w-4 h-4" />
                    </button>

                  <div className="space-y-6">
                    <div>
                      <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase block mb-1">
                        PROJECT PARAMETERS
                      </span>
                      <h3 className="text-white font-sans text-2xl sm:text-3xl font-black uppercase tracking-tight">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <p className="text-zinc-300 text-sm font-light leading-relaxed">
                      {selectedProject.description} Designed around rigid layout mechanics and custom dynamic interactions supporting heavy animation density.
                    </p>

                    {/* Metadata indicators */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        <div>
                          <p className="font-mono text-[8px] text-zinc-500 uppercase">YEAR DEPLOYED</p>
                          <p className="font-sans text-white text-xs font-semibold">{selectedProject.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Hash className="w-4 h-4 text-purple-400" />
                        <div>
                          <p className="font-mono text-[8px] text-zinc-500 uppercase">CATEGORY</p>
                          <p className="font-sans text-white text-xs font-semibold">{selectedProject.category}</p>
                        </div>
                      </div>
                    </div>

                    {/* Taxonomy Tags */}
                    <div>
                      <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-2">TAXONOMY</p>
                      <div className="flex flex-wrap gap-1.5ClassName">
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-zinc-800 border border-white/5 font-mono text-[8px] text-zinc-300 uppercase tracking-widest px-2.5 py-1.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Primary CTA Visit Button */}
                  <div className="pt-6">
                    <button
                      onClick={() => {
                        if (deployState === "init") {
                          setDeployState("deploying");
                          setTimeout(() => {
                            setDeployState("ready");
                          }, 1400);
                        }
                      }}
                      className={`w-full py-4 font-mono text-[11px] uppercase tracking-widest font-black rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                        deployState === "init"
                          ? "bg-white hover:bg-zinc-200 text-zinc-950 cursor-pointer"
                          : deployState === "deploying"
                          ? "bg-indigo-950 text-indigo-300 border border-indigo-500/30 cursor-wait animate-pulse"
                          : "bg-emerald-950 text-emerald-300 border border-emerald-500/30 cursor-default"
                      }`}
                    >
                      {deployState === "init" && (
                        <>
                          Initialize Web-Deploy <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                      {deployState === "deploying" && (
                        <>
                          CALIBRATING RETE LINK...
                        </>
                      )}
                      {deployState === "ready" && (
                        <>
                          DEPLOYED SUCCESSFULLY
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
