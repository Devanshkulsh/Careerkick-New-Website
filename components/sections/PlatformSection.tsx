"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const colleges = ["MAMC Delhi", "Madras MC", "BJMC Ahmedabad", "KMC Manipal", "GMC Kozhikode"];

export function PlatformSection() {
  return (
    <section id="platform" className="overflow-hidden bg-base px-4 py-section-mobile md:px-8 md:py-section">
      <div className="mx-auto max-w-7xl text-center">
        <ScrollReveal>
          <SectionLabel>The Careerkick Method</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">Your NEET Admission Command Center</h2>
          <p className="mx-auto mt-5 max-w-2xl text-text-muted md:text-lg">Everything a NEET aspirant needs: prediction, planning, documentation, and counsellor-led support.</p>
        </ScrollReveal>

        <motion.div
          className="relative mt-14 rounded-xl border border-white/10 bg-surface-2 text-left shadow-elevated"
          initial={{ opacity: 0, y: 80, rotateX: 15, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 90, damping: 18, duration: 1.2 }}
        >
          <div className="absolute inset-x-16 -bottom-12 h-28 rounded-full bg-gradient-glow opacity-70 blur-3xl" />
          <div className="relative border-b border-white/10 p-4">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-magenta" /><span className="h-3 w-3 rounded-full bg-amber" /><span className="h-3 w-3 rounded-full bg-cyan" />
              <div className="ml-4 flex-1 rounded-full bg-base px-4 py-2 font-mono text-xs text-text-faint">careerkick.in/admission-planner</div>
            </div>
          </div>
          <div className="relative grid min-h-[520px] gap-0 md:grid-cols-[88px_1fr_320px]">
            <aside className="hidden border-r border-white/10 p-4 md:block">
              {["D", "R", "C", "W", "S"].map((item) => <div key={item} className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-white/5 font-mono text-xs text-cyan">{item}</div>)}
            </aside>
            <main className="p-5 md:p-8">
              <div className="mb-5 flex flex-wrap gap-2">
                {["AIQ", "Round 2", "MBBS", "Govt", "High chance"].map((chip) => <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-text-muted">{chip}</span>)}
              </div>
              <div className="overflow-hidden rounded-lg border border-white/10">
                {colleges.map((college, index) => (
                  <div key={college} className="grid grid-cols-4 gap-3 border-b border-white/5 px-4 py-4 text-sm text-text-muted last:border-b-0">
                    <span className="font-medium text-white">{college}</span><span>AIR {index * 1840 + 1810}</span><span>INR {(index + 1) * 18}k</span><span className="text-cyan">{88 - index * 7}%</span>
                  </div>
                ))}
              </div>
            </main>
            <aside className="border-t border-white/10 p-5 md:border-l md:border-t-0 md:p-8">
              <div className="rounded-lg border border-violet/30 bg-violet/10 p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">Rank Predictor</p>
                <p className="mt-4 font-display text-4xl font-bold text-white">92%</p>
                <p className="mt-2 text-sm text-text-muted">Projected admission chance for selected quota list.</p>
              </div>
              <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-xl font-semibold text-white">Upcoming Webinar</p>
                <p className="mt-2 text-sm text-text-muted">NEET 2026 MBBS Strategy, 7 PM IST</p>
              </div>
            </aside>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Personal guidance", "Verified admission data", "Online and branch support"].map((chip) => (
            <span key={chip} className="rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-text-muted">{chip}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

