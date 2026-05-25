import { motion } from "motion/react";
import { Twitter, Github, Linkedin, Instagram } from "lucide-react";
import { TEAM } from "../../data";

export default function Team() {
  return (
    <section id="team" className="relative py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-right border-r border-indigo-500/30 pr-6 md:pr-10">
          <span className="font-mono text-indigo-400 text-xs tracking-widest uppercase block mb-3">
            [ INTELLECTUAL HUB ]
          </span>
          <h2 className="text-white font-sans text-4xl sm:text-6xl font-black tracking-tighter uppercase">
            CREATIVE <span className="font-serif italic font-light text-indigo-300 normal-case">collaborative</span>
          </h2>
          <p className="max-w-xl ml-auto text-zinc-400 text-sm sm:text-base mt-4 font-light">
            We are a squad of radical visual architects, code poets, and brand taxonomists dedicated to destroying mundane templates and engineering absolute beauty.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 group-hover:border-white/20 transition-all duration-300">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Custom hover glass slider containing bio & socials */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <p className="text-zinc-300 text-xs font-light leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social shortcut anchors */}
                  <div className="flex gap-4 border-t border-white/10 pt-4">
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        aria-label={`${member.name}'s Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Text metadata block */}
              <div className="mt-5 space-y-1">
                <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest block">
                  STAFF NODE // {idx + 1}
                </span>
                <h3 className="text-white font-sans text-xl font-bold uppercase transition-colors group-hover:text-indigo-400">
                  {member.name}
                </h3>
                <p className="text-zinc-400 text-xs font-light">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
