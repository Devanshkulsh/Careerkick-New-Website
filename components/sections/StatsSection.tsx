import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STATE_AUTHORITIES, STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="border-y border-white/5 bg-surface py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
          {STATS.map((stat, index) => (
            <ScrollReveal key={stat.label} className="relative text-center">
              <div className="font-display text-4xl font-bold text-transparent bg-gradient-brand bg-clip-text md:text-6xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-widest text-text-muted md:text-sm">{stat.label}</p>
              {index < STATS.length - 1 && <span className="absolute right-0 top-2 hidden h-20 w-px bg-white/10 md:block" />}
            </ScrollReveal>
          ))}
        </div>
        <MarqueeStrip items={STATE_AUTHORITIES} className="mt-12" />
      </div>
    </section>
  );
}
