"use client";

import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import { upcomingEvents } from "@/data/upcomingEvents";
import type { UpcomingEventCard } from "@/types";

const accentStyles: Record<UpcomingEventCard["accent"], { border: string; badge: string; glow: string; ring: string }> = {
  violet: { border: "border-violet/30", badge: "bg-violet/10 text-violet-glow", glow: "shadow-[0_28px_80px_rgba(196,240,23,0.12)]", ring: "border-violet/30" },
  cyan: { border: "border-cyan/30", badge: "bg-cyan/10 text-cyan", glow: "shadow-[0_28px_80px_rgba(84,214,165,0.12)]", ring: "border-cyan/30" },
  emerald: { border: "border-emerald/30", badge: "bg-emerald/10 text-emerald-300", glow: "shadow-[0_28px_80px_rgba(52,211,153,0.12)]", ring: "border-emerald/30" },
  amber: { border: "border-[#fbbf24]/30", badge: "bg-[#fbbf24]/10 text-[#fbbf24]", glow: "shadow-[0_28px_80px_rgba(251,191,36,0.12)]", ring: "border-[#fbbf24]/30" },
  blue: { border: "border-blue/30", badge: "bg-blue/10 text-blue-300", glow: "shadow-[0_28px_80px_rgba(96,165,250,0.12)]", ring: "border-blue/30" },
};

export function EventsSection() {
  const today = startOfToday();
  const futureEvents = upcomingEvents
    .map((event, index) => ({ event, index, date: parseEventDate(event.date) }))
    .filter(({ date }) => date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const nextUpcomingIndex = futureEvents.length > 0 ? futureEvents[0].index : 0;

  return (
    <section id="events" className="relative overflow-hidden bg-base px-4 py-section-mobile md:px-8 md:py-section">
      <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />
      <div className="absolute -right-28 top-20 h-96 w-96 rounded-full bg-cyan/10 blur-[130px]" />
      <div className="grid-overlay absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <SectionLabel className="mx-auto">Upcoming Events</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Our Upcoming <GradientText>Events</GradientText>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg lg:text-white">
            A focused set of counselling events for students and parents who want direct guidance on admission planning, college options and next steps.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {upcomingEvents.map((event, index) => {
            const accent = accentStyles[event.accent];
            const isUpcoming = index === nextUpcomingIndex;

            return (
              <ScrollReveal key={event.id} delay={0.05 + index * 0.05} className="mx-auto h-full w-full max-w-[340px] sm:max-w-none">
                <GlassCard
                  className={cn(
                    "group h-full overflow-hidden border-white/10 bg-surface-2/80 shadow-card backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1",
                    isUpcoming && "border-[#C4F017]/50 shadow-[0_20px_70px_rgba(196,240,23,0.18)]"
                  )}
                >
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className={cn("rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.28em] sm:px-3 sm:text-[10px]", accent.badge)}>
                        {isUpcoming ? "Upcoming" : "Event"}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.28em] text-white/60 sm:px-3 sm:text-[10px]">
                        2026
                      </span>
                    </div>

                    <div className={cn("mx-auto mt-5 w-4/5 max-w-[220px] overflow-hidden rounded-full border-2 bg-white p-1.5 sm:mt-4 sm:w-full sm:max-w-none sm:p-2", accent.ring, isUpcoming && "ring-4 ring-[#C4F017]/10")}>
                      <div className="relative aspect-square w-full overflow-hidden rounded-full bg-white">
                        <Image
                          src={event.imageSrc}
                          alt={event.title}
                          fill
                          sizes="(max-width: 1280px) 50vw, 20vw"
                          className="object-cover"
                          priority={index < 2}
                        />
                      </div>
                    </div>

                    <h3 className="mt-4 text-center font-display text-xl font-semibold text-white sm:mt-5 sm:text-2xl">{event.title}</h3>
                    {isUpcoming ? (
                      <p className="mt-2 text-center text-xs leading-relaxed text-white/75 sm:mt-3 sm:text-sm lg:text-white">
                        {event.location}
                      </p>
                    ) : null}
                    <p className="mt-2 text-center font-display text-base font-semibold text-white/90 sm:mt-3 sm:text-lg">{event.date}</p>
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

function parseEventDate(dateText: string) {
  const parsed = new Date(dateText);
  return Number.isNaN(parsed.getTime()) ? new Date("9999-12-31T00:00:00Z") : parsed;
}

function startOfToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}