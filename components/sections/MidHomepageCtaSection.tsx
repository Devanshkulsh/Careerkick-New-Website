"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const trustPoints = [
  "Course selection clarity",
  "Counselling portal planning",
  "Choice filling support",
  "Deadline and document checks",
];

export function MidHomepageCtaSection() {
  return (
    <section className="relative overflow-hidden bg-base px-4 py-10 text-white md:px-8 md:py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#51A70A]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#51A70A]/45 to-transparent" />
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#51A70A]/12 blur-[110px]" />
      <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#6DCC12]/10 blur-[120px]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />

      <ScrollReveal className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-2/80 p-4 shadow-elevated backdrop-blur-xl sm:p-5 md:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(81,167,10,0.20),transparent_32%),radial-gradient(circle_at_86%_78%,rgba(109,204,18,0.16),transparent_30%)]" />
          <div className="relative grid gap-6 rounded-[24px] border border-white/8 bg-black/24 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-[#51A70A]/35 bg-[#51A70A]/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8cef32] sm:px-4 sm:py-2 sm:text-xs">
                Ready for the next step?
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-normal text-white sm:text-4xl md:text-5xl">
                Turn your NEET score into a{" "}
                <span className="text-[#8cef32]">clear admission plan.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/72 sm:text-base lg:text-white">
                Speak with CareerKick before counselling choices become rushed. We help you understand course options, portals, quotas, documents, and college priorities.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {trustPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/72 sm:text-sm"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:w-[260px] lg:flex-col">
              <motion.a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-brand px-6 py-4 font-display text-base font-bold text-white shadow-card transition-shadow hover:shadow-glow-violet focus-visible:shadow-[0_0_0_2px_#51A70A,0_0_0_6px_#050704]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Free Call
              </motion.a>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-[#51A70A]/50 hover:bg-[#51A70A]/10 focus-visible:shadow-[0_0_0_2px_#51A70A,0_0_0_6px_#050704]"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
