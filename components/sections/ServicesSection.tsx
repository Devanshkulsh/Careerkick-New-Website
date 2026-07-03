"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";
import type { ServiceCard } from "@/types";
import { cn } from "@/lib/utils";

const accentStyles: Record<ServiceCard["accent"], { glow: string; ring: string; fill: string }> = {
  violet: { glow: "shadow-[0_20px_60px_rgba(81,167,10,0.12)]", ring: "border-violet/25", fill: "bg-violet/10" },
  cyan: { glow: "shadow-[0_20px_60px_rgba(81,167,10,0.12)]", ring: "border-cyan/25", fill: "bg-cyan/10" },
  emerald: { glow: "shadow-[0_20px_60px_rgba(52,211,153,0.12)]", ring: "border-emerald/25", fill: "bg-emerald/10" },
  amber: { glow: "shadow-[0_20px_60px_rgba(251,191,36,0.12)]", ring: "border-[#fbbf24]/25", fill: "bg-[#fbbf24]/10" },
  blue: { glow: "shadow-[0_20px_60px_rgba(96,165,250,0.12)]", ring: "border-blue/25", fill: "bg-blue/10" },
  rose: { glow: "shadow-[0_20px_60px_rgba(251,113,133,0.12)]", ring: "border-rose/25", fill: "bg-rose/10" },
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-base px-4 py-section-mobile md:px-8 md:py-section">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="max-w-3xl">
          <SectionLabel>What CareerKick Offers</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">
            <GradientText>Services</GradientText>{" "}
            that make counselling feel clear and practical.
          </h2>
          <p className="mt-5 max-w-2xl text-text-muted md:text-lg">
            CareerKick turns confusing admission steps into a simple, guided workflow for students and parents. Each service focuses on a real counselling problem and helps the student move with confidence.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const accent = accentStyles[service.accent];

            return (
              <ScrollReveal key={service.id} delay={index * 0.05} className="h-full">
                <GlassCard className="group h-full overflow-hidden border-white/10 bg-surface-2/80 transition-transform duration-300 hover:-translate-y-1">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-white/60">
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={cn("h-2.5 w-2.5 rounded-full", accent.fill)} />
                    </div>

                    <div
                      className={cn(
                        "mt-4 overflow-hidden rounded-[24px] border bg-white p-4",
                        accent.ring,
                        accent.glow
                      )}
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-white">
                        <Image
                          src={service.imageSrc}
                          alt={service.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-contain p-2"
                          priority={index < 2}
                        />
                      </div>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{service.description}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


