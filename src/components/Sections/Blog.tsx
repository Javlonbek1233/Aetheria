import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, X, ArrowUpRight, BookOpen } from "lucide-react";
import { BLOGS } from "../../data";
import { BlogPost } from "../../types";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="relative py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">

        {/* Section Header */}
        <div className="mb-20 text-left border-l border-indigo-500/30 pl-6 md:pl-10">
          <span className="font-mono text-indigo-400 text-xs tracking-widest uppercase block mb-3">
            [ INTELLECT LAB ]
          </span>
          <h2 className="text-white font-sans text-4xl sm:text-6xl font-black tracking-tighter uppercase">
            STUDIO <span className="font-serif italic font-light text-indigo-300 normal-case">editorial</span>
          </h2>
          <p className="max-w-xl text-zinc-400 text-sm mt-4 font-light">
            We document our deep research cycles, mathematical aesthetics, and GPU-driven design guidelines as active entries for visionary developers and designers.
          </p>
        </div>

        {/* Blogs Feed - Editorial List/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onClick={() => setSelectedPost(post)}
              className="group bg-zinc-900/35 border border-white/5 hover:border-white/20 p-6 rounded-2xl flex flex-col justify-between cursor-pointer backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-5">
                {/* Image thumb */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-white/5">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-zinc-950/80 border border-white/10 backdrop-blur-sm font-mono text-[8px] text-zinc-300 px-2.5 py-1 rounded tracking-widest uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Date & read-timer metadata */}
                <div className="flex items-center gap-4 text-zinc-500 font-mono text-[9px] tracking-widest uppercase">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                    {post.date}
                  </span>
                  <span>//</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-600" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title and abstract */}
                <div className="space-y-3">
                  <h3 className="text-white font-sans text-xl font-bold uppercase leading-snug group-hover:text-indigo-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & CTA footer */}
              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="text-white text-xs font-semibold leading-tight">{post.author.name}</h4>
                    <p className="text-zinc-500 text-[9px] font-mono uppercase tracking-widest">{post.author.role}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 group-hover:scale-105 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Dynamic Editorial Popup Details Drawer Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-2xl flex items-center justify-center p-6 sm:p-12 cursor-pointer overflow-y-auto"
              onClick={() => setSelectedPost(null)}
            >
              <motion.article
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 280 }}
                className="w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-2xl cursor-default overflow-hidden relative shadow-2xl p-8 sm:p-12 space-y-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center border border-white/5 cursor-pointer"
                  aria-label="Close article popover"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Heading with author info */}
                <div className="space-y-6 border-b border-white/10 pb-6">
                  <div className="flex flex-wrap items-center gap-4 text-zinc-500 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase">
                    <span className="bg-white/5 px-2.5 py-1.5 rounded text-white">{selectedPost.category}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{selectedPost.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{selectedPost.readTime}</span>
                  </div>

                  <h3 className="text-white font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight">
                    {selectedPost.title}
                  </h3>

                  {/* Author detail block */}
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedPost.author.avatarUrl}
                      alt={selectedPost.author.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-white text-sm font-semibold">{selectedPost.author.name}</h4>
                      <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">{selectedPost.author.role}</p>
                    </div>
                  </div>
                </div>

                {/* Complete dynamic reading text */}
                <div className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light space-y-6">
                  <p className="font-semibold text-white/90">
                    {selectedPost.excerpt}
                  </p>
                  <p>
                    {selectedPost.content} In establishing advanced digital portfolios, motion is rarely cosmetic—it is the direct manifestation of structural and narrative logic.
                  </p>
                  <p>
                    Every transition represents a deliberate alignment of typographic sizes, structural grids, and physics assets. By mapping tactile dampening formulas to standard viewport scrolling triggers, we create digital products that feel physically responsive to the observer.
                  </p>
                </div>

                {/* Close/Aesthetic action row */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                    END ARCHIVE ARCHITECTURE ENTRY // REFERENCE_ID: {selectedPost.id}
                  </p>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-zinc-200 text-zinc-950 font-mono text-[10px] uppercase font-bold tracking-widest rounded-lg cursor-pointer transition-colors"
                  >
                    Exit Exhibit
                  </button>
                </div>
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
