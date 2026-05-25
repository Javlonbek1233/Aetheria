import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "team", label: "Team" },
  { id: "pricing", label: "Pricing" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-zinc-950/70 border-b border-white/5 backdrop-blur-md shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand */}
          <button
            onClick={() => handleLinkClick("hero")}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-white overflow-hidden">
              <span className="font-semibold text-zinc-950 font-sans text-lg tracking-tighter group-hover:scale-125 transition-transform duration-300">
                Æ
              </span>
            </div>
            <div>
              <span className="font-sans font-semibold text-lg text-white tracking-widest block leading-none">
                AETHERIA
              </span>
              <span className="font-mono text-[8px] text-indigo-400 tracking-widest uppercase block mt-1">
                STUDIO v4
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-4 py-2 font-mono text-[11px] uppercase tracking-widest cursor-pointer transition-colors duration-300 focus:outline-none ${
                  activeSection === link.id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTAs / Interactive Status Element */}
          <div className="hidden sm:flex items-center gap-5">
            <div className="flex items-center gap-2 bg-zinc-900 border border-white/5 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
                LAUNCH RETE: ON
              </span>
            </div>
            <button
              onClick={() => handleLinkClick("contact")}
              className="bg-white hover:bg-zinc-200 text-zinc-950 shadow-lg px-5 py-2.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
            >
              Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white cursor-pointer transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Sliding Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-zinc-950/98 backdrop-blur-2xl z-30 lg:hidden px-6 py-12 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-5">
              <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-2 border-b border-white/10 pb-2">
                INDEX SYSTEM
              </p>
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-sans font-semibold text-3xl tracking-tight uppercase cursor-pointer py-1 block ${
                    activeSection === link.id
                      ? "text-indigo-400"
                      : "text-white hover:text-indigo-300"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="space-y-6 pt-10 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  CREATIVE PLATFORM RETE
                </span>
                <span className="font-mono text-[10px] text-indigo-400">ONLINE</span>
              </div>
              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full bg-white text-zinc-950 text-center py-4 rounded-xl font-mono text-[11px] uppercase tracking-widest font-bold"
              >
                Inquire Collaboration
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
