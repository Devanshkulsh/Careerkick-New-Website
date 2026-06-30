import { TESTIMONIALS } from "@/lib/constants";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function TestimonialCard({ item }: { item: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="mr-5 min-w-[320px] rounded-xl border border-white/10 bg-surface-2 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand font-display font-bold text-white">{item.name.slice(0, 1)}</div>
        <div>
          <p className="font-semibold text-white">{item.name}</p>
          <p className="text-xs text-text-faint">{item.rank} / Got into {item.college}</p>
        </div>
      </div>
      <p className="mt-4 text-amber">*****</p>
      <p className="mt-4 text-sm italic text-text-muted">&quot;{item.quote}&quot;</p>
      <span className="mt-5 inline-block rounded-full bg-violet/10 px-3 py-1 text-xs text-violet-glow">{item.year}</span>
    </div>
  );
}

function TestimonialRow({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...TESTIMONIALS].reverse() : TESTIMONIALS;
  return (
    <div className="mask-fade-x overflow-hidden">
      <div className={reverse ? "flex w-max animate-marquee-reverse hover:[animation-play-state:paused]" : "flex w-max animate-marquee hover:[animation-play-state:paused]"} style={{ "--marquee-duration": reverse ? "28s" : "35s" } as React.CSSProperties}>
        {[...items, ...items].map((item, index) => <TestimonialCard key={`${item.name}-${index}`} item={item} />)}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-base py-section-mobile md:py-section">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <ScrollReveal>
          <SectionLabel>Success Stories</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">1,20,000+ Students Trust Careerkick</h2>
        </ScrollReveal>
      </div>
      <div className="mt-12 space-y-5">
        <TestimonialRow />
        <TestimonialRow reverse />
      </div>
      <MarqueeStrip items={["NEET 2026", "MBBS", "AIQ", "State Quota"]} className="mx-auto mt-12 max-w-5xl px-4" speed={24} />
    </section>
  );
}
