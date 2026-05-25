import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function InteractiveCursor() {
  const [hoverState, setHoverState] = useState<"default" | "hover" | "view" | "drag">("default");
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Position state with dampening springs for inertia
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const trailX = useSpring(mouseX, { damping: 40, stiffness: 120, mass: 0.8 });
  const trailY = useSpring(mouseY, { damping: 40, stiffness: 120, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Scan for targets and handle custom cursor types
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestLink = target.closest("a, button, [role='button']");
      const closestPortfolioItem = target.closest("[data-cursor='view']");
      const closestDraggable = target.closest("[data-cursor='drag']");

      if (closestPortfolioItem) {
        setHoverState("view");
      } else if (closestDraggable) {
        setHoverState("drag");
      } else if (closestLink) {
        setHoverState("hover");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Delayed Outer Ring / Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-white/25 mix-blend-difference hidden md:block"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: hoverState === "hover" ? 64 : hoverState === "view" ? 80 : hoverState === "drag" ? 72 : 36,
          height: hoverState === "hover" ? 64 : hoverState === "view" ? 80 : hoverState === "drag" ? 72 : 36,
          backgroundColor: hoverState === "view" ? "rgba(255,255,255,0.1)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Instant Main Pointer Dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-white mix-blend-difference flex items-center justify-center font-mono text-[9px] tracking-widest text-black font-semibold uppercase hidden md:flex"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: hoverState === "default" ? 8 : hoverState === "hover" ? 12 : 60,
          height: hoverState === "default" ? 8 : hoverState === "hover" ? 12 : 60,
        }}
      >
        {hoverState === "view" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white brightness-200"
          >
            view
          </motion.span>
        )}
        {hoverState === "drag" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white brightness-200"
          >
            drag
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
