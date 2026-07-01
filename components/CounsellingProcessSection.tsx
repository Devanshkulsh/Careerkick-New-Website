"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CounsellingWorkflow } from "@/components/CounsellingWorkflow";
import { CTAButtons } from "@/components/CTAButtons";

export function CounsellingProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf4] px-4 py-section-mobile text-slate-900 md:px-8 md:py-section">
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#C4F017]/10 blur-[110px]" />
      <div className="absolute -right-28 bottom-16 h-96 w-96 rounded-full bg-emerald/10 blur-[120px]" />
      <div className="grid-overlay absolute inset-0 opacity-[0.18]" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="relative z-20 mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[#C4F017]/30 bg-white px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-widest text-[#7ab800] shadow-sm sm:mb-5 sm:px-4 sm:text-xs">
            Complete Counselling Process
          </span>

          <h2 className="mx-auto max-w-3xl font-display text-[2rem] font-bold leading-[1.08] tracking-normal text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl">
            From Your NEET Rank to <span className="bg-gradient-brand bg-clip-text text-transparent">Final Admission.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-relaxed text-white sm:mt-6 sm:text-base md:text-lg md:text-slate-700">
            CareerKick guides students throughout the complete counselling journey, from profile evaluation and college planning to choice filling, allotment guidance, reporting, and final admission support.
          </p>

          <div className="mx-auto mt-4 max-w-2xl rounded-lg border border-[#C4F017]/20 bg-white px-4 py-4 text-sm font-medium leading-relaxed text-slate-700 shadow-[0_12px_40px_rgba(16,24,40,0.08)] backdrop-blur-xl sm:mt-5">
            Trusted guidance throughout every counselling stage with expert support, personalized planning, and real-time updates.
          </div>

          <CTAButtons />
        </ScrollReveal>

        <ScrollReveal className="mt-10 sm:mt-12" delay={0.12}>
          <CounsellingWorkflow />
        </ScrollReveal>
      </div>
    </section>
  );
}
