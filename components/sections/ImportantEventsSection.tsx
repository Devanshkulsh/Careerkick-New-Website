"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import { importantEvents } from "@/data/importantEvents";
import type { ImportantEvent } from "@/types";

const accentStyles: Record<ImportantEvent["accent"], { border: string; badge: string }> = {
  violet: { border: "border-violet/30", badge: "bg-violet/10 text-[#7ab800]" },
  cyan: { border: "border-cyan/30", badge: "bg-cyan/10 text-cyan" },
  emerald: { border: "border-emerald/30", badge: "bg-emerald/10 text-emerald-700" },
  amber: { border: "border-[#fbbf24]/30", badge: "bg-[#fbbf24]/10 text-[#b7791f]" },
  blue: { border: "border-blue/30", badge: "bg-blue/10 text-blue-700" },
};

export function ImportantEventsSection() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(importantEvents[0].id);

  const activeEvent = useMemo(
    () => importantEvents.find((event) => event.id === activeId) ?? importantEvents[0],
    [activeId]
  );

  return (
    <section id="important-events" className="relative overflow-hidden bg-[#f7faf4] px-4 py-section-mobile text-slate-900 md:px-8 md:py-section">
      <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#C4F017]/10 blur-[120px]" />
      <div className="absolute -right-28 top-20 h-96 w-96 rounded-full bg-emerald/10 blur-[130px]" />
      <div className="grid-overlay absolute inset-0 opacity-[0.18]" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <SectionLabel className="mx-auto border-[#C4F017]/30 bg-white text-[#7ab800]">
            Important Events by CareerKick
          </SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            <GradientText>Event stories</GradientText> that shaped student confidence.
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Explore the moments CareerKick organized for students, parents and aspirants across summits, webinars and city events.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start xl:gap-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[28px] border border-[#C4F017]/20 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeEvent.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -18 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="p-4 sm:p-5"
                >
                  <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#fff_0%,#f7faf4_100%)] p-3 sm:p-4">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] border border-slate-200 bg-white">
                      <EventPoster event={activeEvent} featured />
                    </div>
                  </div>

                  <div className="px-1 pb-1 pt-5 sm:px-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={cn("rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em]", accentStyles[activeEvent.accent].badge)}>
                        {activeEvent.year}
                      </span>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">
                        Featured event
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                      {activeEvent.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
                      {activeEvent.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-4">
              <div className="mb-3 px-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                More events
              </div>
              <div className="space-y-3">
                {importantEvents.map((event) => {
                  const isActive = event.id === activeId;

                  return (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => setActiveId(event.id)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-[22px] border p-2 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4F017]",
                        isActive
                          ? "border-[#C4F017]/40 bg-[#C4F017]/10 shadow-[0_12px_30px_rgba(196,240,23,0.12)]"
                          : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
                      )}
                      aria-pressed={isActive}
                    >
                      <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-[16px] border border-slate-200 bg-white">
                        <EventPoster event={event} compact />
                      </div>
                      <div className="min-w-0 flex-1 pr-1">
                        <p className="max-h-[3.2rem] overflow-hidden font-display text-sm font-semibold leading-snug text-slate-900 sm:text-base">
                          {event.title}
                        </p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                          {event.year}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function EventPoster({ event, compact = false, featured = false }: { event: ImportantEvent; compact?: boolean; featured?: boolean }) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", compact ? "rounded-[16px]" : "rounded-[20px]")}>
      <Image
        src={event.imageSrc}
        alt={event.title}
        fill
        sizes={compact ? "128px" : "900px"}
        className="object-cover"
        priority={featured}
      />
    </div>
  );
}
