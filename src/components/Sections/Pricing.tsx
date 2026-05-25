import { useState } from "react";
import { motion } from "motion/react";
import { Check, Star, HelpCircle } from "lucide-react";
import { PRICING } from "../../data";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="relative py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">

        {/* Section Header */}
        <div className="mb-20 text-center space-y-4">
          <span className="font-mono text-indigo-400 text-xs tracking-widest uppercase block">
            [ CAPITAL ENGAGEMENTS ]
          </span>
          <h2 className="text-white font-sans text-4xl sm:text-6xl font-black tracking-tighter uppercase">
            ENGAGEMENT <span className="font-serif italic font-light text-indigo-300 normal-case">structures</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base font-light">
            Zero surprise fees, predictable outcomes. Select a strategic deployment cycle configured directly around your enterprise’s vision and velocity requirements.
          </p>

          {/* Monthly / Yearly Toggle Switch Container */}
          <div className="pt-6 flex justify-center">
            <div className="relative bg-zinc-900 border border-white/5 p-1 rounded-full flex items-center">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`relative px-6 py-2.5 rounded-full font-mono text-[10px] uppercase font-semibold tracking-wider transition-colors z-10 cursor-pointer focus:outline-none ${
                  billingCycle === "monthly" ? "text-zinc-950" : "text-zinc-400 hover:text-white"
                }`}
              >
                Monthly Plan
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`relative px-6 py-2.5 rounded-full font-mono text-[10px] uppercase font-semibold tracking-wider transition-colors z-10 cursor-pointer focus:outline-none ${
                  billingCycle === "yearly" ? "text-zinc-950" : "text-zinc-400 hover:text-white"
                }`}
              >
                Annual Retainer <span className="text-[8px] text-indigo-400 font-bold ml-1">SAVINGS</span>
              </button>

              {/* Slider background highlight panel */}
              <motion.div
                layoutId="billingCycleSlider"
                className="absolute inset-y-1 rounded-full bg-white"
                style={{
                  left: billingCycle === "monthly" ? 4 : "auto",
                  right: billingCycle === "yearly" ? 4 : "auto",
                  width: billingCycle === "monthly" ? "110px" : "154px",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            </div>
          </div>
        </div>

        {/* Pricing Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING.map((plan, idx) => {
            const calculatedPrice = billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly;
            const savings = plan.price.monthly - plan.price.yearly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`group relative rounded-2xl p-8 md:p-10 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-2xl ${
                  plan.popular
                    ? "bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 border-2 border-indigo-500/30 shadow-indigo-950/10"
                    : "bg-zinc-900/35 border border-white/5 hover:border-white/20 transition-all duration-300"
                }`}
              >
                {/* Popularity Visual Badge Glow */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 z-10">
                    <Star className="w-3 h-3 text-indigo-400 fill-indigo-400" />
                    MOST DEPLOYED
                  </div>
                )}

                {/* Card Title & Billing Numbers */}
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest">
                      SCHEME_{idx + 1}
                    </span>
                    <h3 className="text-white font-sans text-2xl font-black uppercase mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-3 leading-relaxed font-light">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Details */}
                  <div className="py-4 border-t border-b border-white/5 space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-white text-5xl font-sans font-black tracking-tight">
                        ${calculatedPrice.toLocaleString()}
                      </span>
                      <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                        / USD MONTH
                      </span>
                    </div>
                    {billingCycle === "yearly" && (
                      <p className="font-mono text-[9px] text-indigo-400">
                        * COLLECTED ANNUAL RETAINER (SAVED ${savings.toLocaleString()}/MO)
                      </p>
                    )}
                  </div>

                  {/* Benefits Feature Checklist */}
                  <div className="space-y-4">
                    <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                      INCLUDED PIPELINES
                    </p>
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-indigo-400" />
                          </div>
                          <span className="font-sans text-zinc-300 text-xs sm:text-sm font-light">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submission CTA Trigger */}
                <div className="pt-8">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 rounded-xl font-mono text-[11px] uppercase tracking-widest font-black transition-all duration-300 hover:scale-102 active:scale-98 cursor-pointer focus:outline-none ${
                      plan.popular
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/25"
                        : "bg-white hover:bg-zinc-200 text-zinc-950"
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
