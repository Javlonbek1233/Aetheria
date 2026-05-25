import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

const METRICS_LOGS = [
  "DECOUPLING GRAPHICS GRID",
  "ESTABLISHING METRIC SYSTEMS",
  "DEFORMING METALLIC MESHES",
  "CONNECTING PARTICULATE NODES",
  "TUNING SOUND SYNTH FLUIDS",
  "AESTHETIC DEVIATION APPLIED",
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const startTime = Date.now();
    const duration = 2200; // 2.2 seconds complete load sequence

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progressValue = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(progressValue);

      // Rotate console logs dynamically
      const index = Math.min(
        METRICS_LOGS.length - 1,
        Math.floor((progressValue / 100) * METRICS_LOGS.length)
      );
      setLogIndex(index);

      if (progressValue < 100) {
        timer = setTimeout(updateProgress, 30);
      } else {
        // Hold for aesthetic duration then exit
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 800); // Wait for transition out
        }, 400);
      }
    };

    timer = setTimeout(updateProgress, 50);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="global-preloader"
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-zinc-950 p-8 md:p-16 select-none cursor-wait"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Top Label */}
          <div className="flex justify-between items-center text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
            <span>STUDIO METRICS INITIALIZATION</span>
            <span>v4.0.1 // DEV MODE</span>
          </div>

          {/* Middle Cluster - Studio Brand Greeting */}
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-white font-sans font-semibold tracking-tighter text-4xl sm:text-6xl md:text-7xl mb-6 uppercase"
            >
              AETHERIA
            </motion.h1>
            <div className="h-6 overflow-hidden">
              <motion.p
                key={logIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase"
              >
                &gt; {METRICS_LOGS[logIndex]}
              </motion.p>
            </div>
          </div>

          {/* Bottom stats & bar */}
          <div className="space-y-4">
            <div className="flex justify-between items-end font-mono text-zinc-400 text-xs tracking-widest">
              <div>
                <p className="text-[10px] text-zinc-600 uppercase">SYSTEM DEPLOYMENT</p>
                <div className="flex gap-4 mt-1">
                  <span>LATENCY: 12ms</span>
                  <span>VERTEX_COUNT: 4,096</span>
                </div>
              </div>
              <motion.span className="text-4xl md:text-6xl font-light text-white mr-2">
                {progress}%
              </motion.span>
            </div>

            {/* Seamless Linear progress indicator */}
            <div className="relative w-full h-[1px] bg-zinc-800 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-600"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
