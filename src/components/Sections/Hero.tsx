import { motion } from "motion/react";
import { ArrowDown, Sparkles, ArrowUpRight } from "lucide-react";
import ThreeCanvas from "../ThreeCanvas";

interface HeroProps {
  onScrollToNext: () => void;
}

export default function Hero({ onScrollToNext }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
    >
      {/* Absolute Ambient Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Soft Indigo glowing orb overlay */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-indigo-900/25 blur-[120px] top-1/10 left-[-10%] sm:left-1/10" />
        {/* Soft Purple glowing orb overlay */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[150px] bottom-1/10 right-1/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Bold Typography & Slogan */}
        <div className="lg:col-span-7 space-y-10 text-left">
          {/* Tagline Badge - Sophisticated line & deep text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <span className="h-[1px] w-12 bg-indigo-500 group-hover:w-16 transition-all duration-300"></span>
            <span className="font-mono text-[10px] tracking-[0.35em] text-indigo-400 font-semibold uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              BEYOND DIGITAL ELEGANCE
            </span>
          </motion.div>

          {/* Heading with Sophisticated serif italicized word pairings */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="text-white font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
            >
              WE BUILD <br />
              <span className="font-serif italic font-light text-indigo-300 normal-case">high esthetic </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200">
                FRICTION
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="max-w-xl text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-light"
            >
              AETHERIA is an award-winning creative laboratory partnering with visionary enterprises to transform static interfaces into immersive mathematical works of art.
            </motion.p>
          </div>

          {/* Action Callouts with Indigo highlight theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button
              onClick={() => {
                const element = document.getElementById("portfolio");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-white hover:bg-zinc-200 text-zinc-950 font-mono text-[11px] uppercase tracking-widest font-black rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer focus:outline-none"
            >
              Explore Exhibits <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border border-white/10 bg-white/5 hover:bg-indigo-950/20 hover:border-indigo-500/30 text-white font-mono text-[11px] uppercase tracking-widest rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
            >
              Our Formula
            </button>
          </motion.div>

          {/* Mini Metadata Readout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="pt-6 border-t border-white/10 flex flex-wrap gap-8 items-center font-mono text-[10px] text-zinc-500 tracking-widest uppercase"
          >
            <div>
              <span className="block text-zinc-600">LOC:</span>
              <span className="text-zinc-300">GENEVA, CH // TOKYO, JP</span>
            </div>
            <div>
              <span className="block text-zinc-600">ENGINE:</span>
              <span className="text-zinc-300">THREE.JS GLSL SHADERS</span>
            </div>
            <div>
              <span className="block text-zinc-600">STATUS:</span>
              <span className="text-emerald-400">ACTIVE PROTOTYPING</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive ThreeCanvas 3D Mesh */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 1.2, ease: "easeOut" }}
          className="lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[600px] relative w-full flex items-center justify-center rounded-2xl bg-zinc-900/[0.15] border border-white/5 backdrop-blur-xl overflow-hidden group shadow-2xl"
        >
          {/* Subtle frame outlines */}
          <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-600 tracking-widest uppercase z-10">
            RENDER LAYER_01 // CHROME_MESH
          </div>
          <div className="absolute top-4 right-4 font-mono text-[9px] text-zinc-600 tracking-widest uppercase z-10 animate-pulse">
            ● GRAPHIC_SYSTEM
          </div>

          <ThreeCanvas />

          <div className="absolute bottom-6 font-mono text-[9px] text-zinc-500 tracking-widest uppercase text-center w-full pointer-events-none">
            DRAG MOUSE TO SWIVEL / DEFORM MODEL
          </div>
        </motion.div>
      </div>

      {/* Vertical Scroll Indicator */}
      <motion.button
        onClick={onScrollToNext}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group focus:outline-none"
        aria-label="Scroll to services"
      >
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest group-hover:text-white transition-colors duration-200">
          Scroll Down
        </span>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-200 bg-zinc-950/20 backdrop-blur-sm">
          <ArrowDown className="w-4 h-4 text-zinc-500 group-hover:text-white" />
        </div>
      </motion.button>
    </section>
  );
}
