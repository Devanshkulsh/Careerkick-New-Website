import { WEBINARS } from "@/lib/constants";
import { TiltCard } from "@/components/ui/TiltCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WebinarsSection() {
  return (
    <section className="bg-base px-4 py-section-mobile md:px-8 md:py-section">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionLabel>Live Events</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">Learn From the Experts</h2>
          <p className="mt-5 max-w-2xl text-text-muted md:text-lg">Live Q&A, strategy sessions, and admission planning sessions for NEET aspirants and parents.</p>
        </ScrollReveal>
        <div className="mt-12 flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {WEBINARS.map((webinar) => (
            <TiltCard key={webinar.title} className="min-w-[300px]">
              <GlassCard className="h-full p-6">
                <div className="mb-5 h-36 rounded-lg bg-gradient-brand opacity-80" />
                <span className="rounded-full bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan">{webinar.isUpcoming ? "UPCOMING" : "RECORDED"}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">{webinar.title}</h3>
                <p className="mt-3 text-sm font-medium text-text-muted">{webinar.speaker}, {webinar.credential}</p>
                <p className="mt-4 font-mono text-xs text-cyan">{webinar.date} / {webinar.time}</p>
                <a href="#" className="mt-6 inline-block font-semibold text-violet-glow">{webinar.isUpcoming ? "Register Now" : "Watch Recording"}</a>
              </GlassCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

