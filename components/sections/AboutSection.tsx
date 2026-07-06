"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-base px-4 py-section-mobile text-white md:px-8 md:py-section">
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-violet/10 blur-[110px]" />
      <div className="absolute -right-28 top-24 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-glow opacity-45 blur-3xl" />
      <div className="grid-overlay absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 xl:gap-20">
        <ScrollReveal className="max-w-3xl">
          <span className="mb-5 inline-flex rounded-full border border-violet/30 bg-violet/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-glow shadow-sm sm:text-xs">
            About CareerKick
          </span>

          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-normal text-white sm:text-5xl md:text-6xl xl:text-7xl">
            We built the{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">CareerKick</span>{" "}
            platform for every NEET and JEE aspirant.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            CareerKick is a counselling and admission guidance platform for NEET and JEE aspirants. The aim is to help students understand their options, choose the right course, select suitable colleges and complete the counselling process without confusion.
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Every student has a different score, rank, budget, category, state preference and career goal. CareerKick studies these details properly and prepares a counselling plan that is practical for the student and easy for parents to understand.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="w-full">
          <motion.div
            className="relative mx-auto w-full max-w-[620px] pt-2"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-violet/10 blur-2xl" />
            <div className="absolute -right-8 top-16 h-32 w-32 rounded-full bg-cyan/10 blur-3xl" />
            <div className="absolute -bottom-8 left-12 h-24 w-24 rounded-full bg-[#51A70A]/10 blur-2xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-surface-2/80 p-2.5 shadow-elevated backdrop-blur-xl sm:rounded-[40px] sm:p-4 text-left">
              <div className="rounded-[24px] bg-[radial-gradient(circle_at_top_left,rgba(81,167,10,0.16),transparent_28%),radial-gradient(circle_at_70%_20%,rgba(81,167,10,0.14),transparent_26%),linear-gradient(180deg,#0b1009_0%,#121a10_100%)] p-4 sm:rounded-[32px] sm:p-6 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.26em] text-white/70 sm:px-4 sm:py-2 sm:text-[11px]">
                    Guidance . clarity . care
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-violet-glow sm:px-4 sm:py-2 sm:text-[11px]">
                    NEET + JEE
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-3 shadow-card sm:mt-6 sm:rounded-[30px] sm:p-5">
                  <Image
                    src="/logo-bg.png"
                    alt="CareerKick"
                    width={405}
                    height={106}
                    className="h-auto w-full rounded-[14px] bg-base object-contain p-2 sm:rounded-[18px] sm:p-4"
                    priority
                  />
                </div>

                <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
                  <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-3.5 sm:rounded-[24px] sm:p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-violet-glow sm:text-[10px]">What we study</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base lg:text-white">
                      Score, rank, budget, category, state preference and career goal.
                    </p>
                  </div>
                  <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-3.5 sm:rounded-[24px] sm:p-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-cyan sm:text-[10px]">What we plan</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base lg:text-white">
                      Course choices, colleges, documents and counselling route.
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-[20px] border border-white/10 bg-white/[0.03] p-3.5 sm:rounded-[24px] sm:p-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/45 sm:text-[10px]">What it becomes</p>
                  <p className="mt-2 text-lg font-semibold leading-relaxed text-white sm:text-xl md:text-2xl">
                    A practical counselling plan that is easy for parents to understand.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}


