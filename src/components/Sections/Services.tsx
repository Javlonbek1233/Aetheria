import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Boxes, Compass, Cpu, Tv, ChevronRight, Check } from "lucide-react";
import { SERVICES } from "../../data";
import { Service } from "../../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Helper to resolve icon dynamically
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Boxes":
        return <Boxes className="w-6 h-6 text-cyan-400" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-purple-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case "Tv":
        return <Tv className="w-6 h-6 text-emerald-400" />;
      default:
        return <Boxes className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-left border-l border-indigo-500/30 pl-6 md:pl-10">
          <span className="font-mono text-indigo-400 text-xs tracking-widest uppercase block mb-3">
            [ CAPABILITY ENGINE ]
          </span>
          <h2 className="text-white font-sans text-4xl sm:text-6xl font-black tracking-tighter uppercase">
            OUR STRATEGIC <span className="font-serif italic font-light text-indigo-300 normal-case">formula</span>
          </h2>
          <p className="max-w-2xl text-zinc-400 text-sm sm:text-base mt-4 font-light">
            We deconstruct common digital structures and restore them as elite spatial events designed for cognitive resonance and maximum aesthetic performance.
          </p>
        </div>

        {/* Bento Grid Services Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onClick={() => setSelectedService(service)}
              className="group relative h-[310px] rounded-2xl bg-zinc-900/35 border border-white/5 hover:border-white/20 p-8 md:p-10 flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-md transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {/* Dynamic Gradient Soft Accent Background Blob (Awwwards design trend) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}
              />

              {/* Top Row: Category Tracker */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
                  {service.category} // GRID_{idx + 1}
                </span>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-200">
                  {renderIcon(service.icon)}
                </div>
              </div>

              {/* Core Content */}
              <div className="relative z-10 max-w-sm mt-8">
                <h3 className="text-white font-sans text-2xl font-bold tracking-tight uppercase mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light line-clamp-2 pb-1 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Row: Callout button trigger */}
              <div className="relative z-10 flex justify-between items-center border-t border-white/5 pt-4">
                <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase group-hover:text-white transition-colors">
                  Investigate System Spec
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 group-hover:scale-105 transition-all duration-300">
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Detail Overlay Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-pointer"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-xl bg-zinc-900 border border-white/10 p-8 sm:p-10 rounded-2xl cursor-default space-y-8 relative overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Background ambient radial glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedService.accentColor} opacity-20 pointer-events-none z-0`}
                />

                {/* Top header block */}
                <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4">
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
                      {selectedService.category}
                    </span>
                    <h3 className="text-white font-sans text-2xl sm:text-3xl font-black uppercase mt-1">
                      {selectedService.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {renderIcon(selectedService.icon)}
                  </div>
                </div>

                {/* Extended specification description */}
                <p className="relative z-10 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                  {selectedService.description} We deploy premium digital architectures meticulously optimized, providing bespoke animations and lightning fast response patterns.
                </p>

                {/* Capabilities check-list */}
                <div className="relative z-10 space-y-4">
                  <span className="block font-mono text-[10px] text-zinc-400 tracking-widest uppercase border-b border-white/5 pb-2">
                    TECHNOLOGY PROTOCOLS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.details.map((detail, dIdx) => (
                       <div key={dIdx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-indigo-400" />
                        </div>
                        <span className="font-sans text-zinc-300 text-xs sm:text-sm font-light">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer close button */}
                <div className="relative z-10 pt-6">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-white/5 text-[11px] font-mono uppercase tracking-widest rounded-lg cursor-pointer transition-colors duration-200"
                  >
                    Close Specification
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
