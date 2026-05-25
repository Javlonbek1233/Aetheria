import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

interface ContactProps {
  selectedPlan: string;
}

export default function Contact({ selectedPlan }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFocused, setIsFocused] = useState<string | null>(null);

  // Auto-populate the selected pricing plan as subject
  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        subject: `Engagement Inquiry: ${selectedPlan}`,
      }));
    }
  }, [selectedPlan]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please populate all mandatory fields (* Name, Email, Message) to initiate connection.");
      return;
    }

    setFormStatus("submitting");

    // Simulate luxury API communication latency
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">

        {/* Section Header */}
        <div className="mb-20 text-center space-y-4">
          <span className="font-mono text-indigo-400 text-xs tracking-widest uppercase block">
            [ SECURE INTEGRATION ]
          </span>
          <h2 className="text-white font-sans text-4xl sm:text-6xl font-black tracking-tighter uppercase">
            ESTABLISH <span className="font-serif italic font-light text-indigo-300 normal-case">connection</span>
          </h2>
          <p className="max-w-xl mx-auto text-zinc-400 text-sm sm:text-base font-light">
            Ready to initiate a transformation sprint? Complete the secure protocol field set below and our creative team will establish direct contact within 24 working hours.
          </p>
        </div>

        {/* Info Grid and Main Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Grid: Studio Parameters/Addresses */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
            <div className="space-y-6">
              <span className="block font-mono text-[9px] text-zinc-500 tracking-widest uppercase border-b border-white/10 pb-2">
                LOCATIONAL TERMINALS
              </span>
              
              <div className="space-y-6 font-sans text-sm font-light text-zinc-300">
                {/* Geneva Terminal */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white uppercase text-base">Geneva Terminal</h4>
                    <p className="text-zinc-400 mt-1">Rue de la Synagogue, 1204 Genève, Switzerland</p>
                    <p className="font-mono text-[10px] text-zinc-500 mt-1.5 uppercase">GMT+1: 09:00 - 18:00</p>
                  </div>
                </div>

                {/* Tokyo Terminal */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white uppercase text-base">Tokyo Terminal</h4>
                    <p className="text-zinc-400 mt-1">Shibuya 2-chome, Shibuya City, Tokyo 150-0002, Japan</p>
                    <p className="font-mono text-[10px] text-zinc-500 mt-1.5 uppercase">GMT+9: 10:00 - 19:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* General Enquiries & Social lists */}
            <div className="space-y-4">
              <span className="block font-mono text-[9px] text-zinc-500 tracking-widest uppercase border-b border-white/10 pb-2">
                SYSTEM COMMUNICATORS
              </span>
              <div className="space-y-2 font-mono text-xs text-zinc-400 uppercase">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>DIRECT INTAKE:</span>
                  <a href="mailto:inquire@aetheria.studio" className="text-white hover:underline">
                    inquire@aetheria.studio
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>GENERAL RESPONSIVENESS:</span>
                  <span className="text-white">Under 24H</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Grid: Interactive Field Form */}
          <div className="lg:col-span-7 bg-zinc-900/35 border border-white/5 p-8 sm:p-10 rounded-2xl backdrop-blur-md relative overflow-hidden shadow-2xl">
            {/* Soft backdrop lighting bloom mapping */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-indigo-500/5 blur-[50px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div
                  key="success-prompt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-16 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-10 h-10 text-indigo-400" />
                  </div>
                  <div className="space-y-2 max-w-sm">
                    <h3 className="text-white font-sans text-2xl font-black uppercase tracking-tight">
                      CONNECTION CONFIRMED
                    </h3>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                      Your secured payload has been successfully integrated into our dispatch network. A custom strategist will establish contact within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-3 bg-white text-zinc-950 font-mono text-[10px] uppercase font-bold tracking-widest rounded-lg cursor-pointer hover:bg-zinc-200 transition-colors duration-200"
                  >
                    Reset Connection Terminal
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form-fields"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-2">
                    TRANSMISSION FORM DATA
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2 relative">
                      <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setIsFocused("name")}
                        onBlur={() => setIsFocused(null)}
                        className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-zinc-200 font-sans text-sm font-light focus:outline-none transition-all duration-300 ${
                          isFocused === "name" ? "border-indigo-500 shadow-lg shadow-indigo-950/20" : "border-white/10"
                        }`}
                        placeholder="e.g. Liam Sterling"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2 relative">
                      <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setIsFocused("email")}
                        onBlur={() => setIsFocused(null)}
                        className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-zinc-200 font-sans text-sm font-light focus:outline-none transition-all duration-300 ${
                          isFocused === "email" ? "border-indigo-500 shadow-lg shadow-indigo-950/20" : "border-white/10"
                        }`}
                        placeholder="e.g. liam@sterling.com"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2 relative">
                    <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                      Subject Matter
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      onFocus={() => setIsFocused("subject")}
                      onBlur={() => setIsFocused(null)}
                      className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-zinc-200 font-sans text-sm font-light focus:outline-none transition-all duration-300 ${
                        isFocused === "subject" ? "border-indigo-500 shadow-lg shadow-indigo-950/20" : "border-white/10"
                      }`}
                      placeholder={selectedPlan ? `Engagement Inquiry: ${selectedPlan}` : "e.g. Premium WebGL Simulation Project"}
                    />
                  </div>

                  {/* Message textarea Input */}
                  <div className="space-y-2 relative">
                    <label className="block font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                      Transmission Payload (Message) *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setIsFocused("message")}
                      onBlur={() => setIsFocused(null)}
                      className={`w-full px-4 py-4 rounded-lg bg-zinc-950 border text-zinc-200 font-sans text-sm font-light focus:outline-none transition-all duration-300 ${
                        isFocused === "message" ? "border-indigo-500 shadow-lg shadow-indigo-950/20" : "border-white/10"
                      }`}
                      placeholder="Detail your requirements, project timelines, and approximate digital parameters..."
                    />
                  </div>

                  {errorMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-mono text-rose-400 text-xs tracking-wider"
                    >
                      {errorMessage}
                    </motion.p>
                  )}

                  {/* Submit button trigger */}
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 bg-white hover:bg-zinc-200 text-zinc-950 font-mono text-[11px] uppercase tracking-widest font-black rounded-lg flex items-center justify-center gap-2.5 shadow-2xl transition-all duration-300 hover:scale-102 active:scale-98 disabled:opacity-50 disabled:cursor-wait cursor-pointer focus:outline-none"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-zinc-950 border-t-transparent animate-spin" />
                          LAUNCHING SECURED UPLOAD...
                        </>
                      ) : (
                        <>
                          Transmit Payload <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Corporate Legal & Technical Footer block */}
        <div className="mt-28 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
          <div className="text-left">
            <p>© 2026 AETHERIA LAB. ALL RIGHTS CONFIGURED.</p>
            <p className="mt-1 text-zinc-650">CRAFTED FOR EXECUTIVE CHROME & MODERN WEBGL SYSTEMS.</p>
          </div>
          <div className="text-left md:text-right space-x-6">
            <a href="#" className="hover:text-indigo-400">INDEX PROTOCOL</a>
            <a href="#" className="hover:text-purple-400">GDPR RETE</a>
            <a href="#" className="hover:text-pink-400">SENSORY SYSTEM</a>
          </div>
        </div>

      </div>
    </section>
  );
}
