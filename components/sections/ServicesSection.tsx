"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";
import type { ServiceCard } from "@/types";
import { cn } from "@/lib/utils";

const accentStyles: Record<
  ServiceCard["accent"],
  { glow: string; ring: string; fill: string; text: string; dot: string }
> = {
  violet: {
    glow: "shadow-[0_20px_60px_rgba(81,167,10,0.18)]",
    ring: "border-[#51A70A]/30",
    fill: "bg-[#6DCC12]",
    text: "text-[#6DCC12]",
    dot: "#6DCC12",
  },
  cyan: {
    glow: "shadow-[0_20px_60px_rgba(81,167,10,0.18)]",
    ring: "border-[#51A70A]/30",
    fill: "bg-[#6DCC12]",
    text: "text-[#6DCC12]",
    dot: "#6DCC12",
  },
  emerald: {
    glow: "shadow-[0_20px_60px_rgba(81,167,10,0.18)]",
    ring: "border-[#51A70A]/30",
    fill: "bg-[#6DCC12]",
    text: "text-[#6DCC12]",
    dot: "#6DCC12",
  },
  amber: {
    glow: "shadow-[0_20px_60px_rgba(81,167,10,0.18)]",
    ring: "border-[#51A70A]/30",
    fill: "bg-[#6DCC12]",
    text: "text-[#6DCC12]",
    dot: "#6DCC12",
  },
  blue: {
    glow: "shadow-[0_20px_60px_rgba(81,167,10,0.18)]",
    ring: "border-[#51A70A]/30",
    fill: "bg-[#6DCC12]",
    text: "text-[#6DCC12]",
    dot: "#6DCC12",
  },
  rose: {
    glow: "shadow-[0_20px_60px_rgba(81,167,10,0.18)]",
    ring: "border-[#51A70A]/30",
    fill: "bg-[#6DCC12]",
    text: "text-[#6DCC12]",
    dot: "#6DCC12",
  },
};

export function ServicesSection() {
  const routeRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: routeRef,
    offset: ["start 75%", "end 60%"],
  });

  const traveled = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-base px-4 py-section-mobile md:px-8 md:py-section"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-[#51A70A]/10 blur-[120px]" />
        <div className="absolute right-[8%] top-1/3 h-80 w-80 rounded-full bg-[#6DCC12]/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#51A70A]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal className="max-w-3xl">
          <SectionLabel>Our Services</SectionLabel>

          <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            <GradientText>The route</GradientText> from idea to measurable
            growth.
          </h2>

          <p className="mt-5 max-w-2xl text-text-muted md:text-lg">
            Every brand needs the right sequence of strategy, design,
            development, marketing, automation, and reporting. Our services are
            structured as a clear growth path so your business knows exactly
            what comes next.
          </p>
        </ScrollReveal>

        <div ref={routeRef} className="relative mt-16">
          {/* base line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-6 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2"
          />

          {/* green traveled progress line */}
          <motion.div
            aria-hidden
            className="absolute left-6 top-0 w-px origin-top md:left-1/2 md:-translate-x-1/2"
            style={{
              height: "100%",
              scaleY: prefersReducedMotion ? 1 : traveled,
              background:
                "linear-gradient(180deg, #51A70A 0%, #6DCC12 45%, #B6FF5A 100%)",
              boxShadow: "0 0 28px rgba(109, 204, 18, 0.65)",
            }}
          />

          <div className="flex flex-col gap-10 md:gap-4">
            {services.map((service, index) => {
              const accent = accentStyles[service.accent];
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className="relative grid grid-cols-1 items-center gap-6 pl-16 md:grid-cols-[1fr_48px_1fr] md:gap-0 md:pl-0"
                >
                  {/* waypoint dot */}
                  <motion.div
                    aria-hidden
                    className="absolute left-6 top-2 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span
                      className="relative flex h-4 w-4 items-center justify-center rounded-full shadow-[0_0_28px_rgba(109,204,18,0.75)]"
                      style={{ backgroundColor: accent.dot }}
                    >
                      <span
                        className="absolute h-4 w-4 animate-ping rounded-full opacity-40"
                        style={{ backgroundColor: accent.dot }}
                      />
                    </span>
                  </motion.div>

                  {/* card */}
                  <motion.div
                    className={cn(
                      "md:col-start-1",
                      !isLeft && "md:col-start-3",
                      isLeft
                        ? "md:pr-10 md:justify-self-end"
                        : "md:pl-10 md:justify-self-start"
                    )}
                    initial={{ opacity: 0, x: isLeft ? -28 : 28, y: 16 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <GlassCard className="group w-full max-w-md overflow-hidden border-white/10 bg-surface-2/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#51A70A]/40">
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <span
                            className={cn(
                              "rounded-full border bg-[#51A70A]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em]",
                              accent.ring,
                              accent.text
                            )}
                          >
                            Service {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={cn(
                              "h-2.5 w-2.5 rounded-full shadow-[0_0_18px_rgba(109,204,18,0.8)]",
                              accent.fill
                            )}
                          />
                        </div>

                        <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-[#51A70A] via-[#6DCC12] to-[#B6FF5A] shadow-[0_0_20px_rgba(109,204,18,0.65)]"
                          />
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

                        <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-text-muted">
                          {service.description}
                        </p>
                      </div>
                    </GlassCard>
                  </motion.div>

                  <div className="hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}