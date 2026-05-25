import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Components
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import InteractiveCursor from "./components/InteractiveCursor";
import ParticleSystem from "./components/ParticleSystem";

// Sections
import Hero from "./components/Sections/Hero";
import Services from "./components/Sections/Services";
import Portfolio from "./components/Sections/Portfolio";
import Team from "./components/Sections/Team";
import Pricing from "./components/Sections/Pricing";
import Blog from "./components/Sections/Blog";
import Contact from "./components/Sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedPlan, setSelectedPlan] = useState("");

  // Handle plan selection from pricing card CTA
  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    // Smooth scroll down to secure transmission form
    const contactElem = document.getElementById("contact");
    contactElem?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll Spy: Automatically update active nav index highlight based on viewport offset
  useEffect(() => {
    if (loading) return;

    const sections = ["hero", "services", "portfolio", "team", "pricing", "blog", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 350; // offset benchmark

      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* 1. Animated preloader sequence */}
      <Loader onComplete={() => setLoading(false)} />

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full"
          >
            {/* 2. Global Particulate Constellation Background Layer */}
            <ParticleSystem />

            {/* 3. Interactive Cursor Node (Lag-free trails) */}
            <InteractiveCursor />

            {/* 4. Sliding Glassmorphism Nav Header */}
            <Navbar
              activeSection={activeSection}
              onNavigate={(id) => {
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: "smooth" });
                setActiveSection(id);
              }}
            />

            {/* 5. Main Exhibits / Page Sections */}
            <main className="w-full relative z-10">
              <Hero
                onScrollToNext={() => {
                  const element = document.getElementById("services");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              />
              <Services />
              <Portfolio />
              <Team />
              <Pricing onSelectPlan={handleSelectPlan} />
              <Blog />
              <Contact selectedPlan={selectedPlan} />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
