"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Book Your Free Call", body: "Share your NEET rank, category, budget, preferred states, and admission goals with the Careerkick team.", visual: ["Name: Ananya", "AIR: 52,406", "Quota: State + AIQ"] },
  { title: "Explore Your Options", body: "Search colleges, compare fees, review cut-offs, and shortlist realistic MBBS choices.", visual: ["Course: MBBS", "Budget: INR 1L", "Chance: High"] },
  { title: "Decide With Confidence", body: "Use counsellor recommendations, expert sessions, and choice-fill guidance before locking your list.", visual: ["1. Stanley MC", "2. Madras MC", "3. KIMS Hubballi"] }
];

export function HowItWorksSection() {
  const progress = useScrollProgress();
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(Math.min(2, Math.floor((progress * 6) % 3)));
  }, [progress]);

  return (
    <section className="bg-surface px-4 py-section-mobile md:px-8 md:py-section">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <ScrollReveal>
          <SectionLabel>The Process</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">From NEET Score to MBBS Seat in 3 Steps</h2>
          <div className="relative mt-12 space-y-8 pl-16">
            <div className="absolute left-6 top-6 h-[calc(100%-48px)] w-1 rounded-full bg-white/10" />
            <motion.div className="absolute left-6 top-6 h-[calc(100%-48px)] w-1 origin-top rounded-full bg-gradient-brand" style={{ scaleY: (active + 1) / 3 }} />
            {steps.map((step, index) => (
              <button key={step.title} type="button" className="relative block text-left" onClick={() => setActive(index)}>
                <span className={cn("absolute -left-16 flex h-12 w-12 items-center justify-center rounded-full border font-display text-sm font-bold", active === index ? "border-transparent bg-gradient-brand text-white shadow-glow-violet" : "border-white/10 bg-surface text-text-muted")}>
                  0{index + 1}
                </span>
                <span className="block font-display text-2xl font-semibold text-white">{step.title}</span>
                <span className="mt-2 block text-sm text-text-muted">{step.body}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <motion.div key={active} className="rounded-xl border border-white/10 bg-surface-2 p-8 shadow-elevated md:p-10" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
            <p className="font-mono text-xs uppercase tracking-widest text-cyan">Step 0{active + 1}</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-white">{steps[active].title}</h3>
            <p className="mt-3 text-text-muted">{steps[active].body}</p>
            <div className="mt-8 space-y-3">
              {steps[active].visual.map((item, index) => (
                <motion.div key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-4 font-mono text-sm text-text-muted" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.12 }}>
                  <span className="mr-3 text-cyan">OK</span>{item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

