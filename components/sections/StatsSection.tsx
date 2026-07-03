import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STATE_AUTHORITIES, STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="border-y border-white/5 bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-0">
          {STATS.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              className="relative flex min-h-[150px] w-full flex-col items-center justify-center rounded-lg border border-white/5 bg-white/[0.025] px-2 py-6 text-center sm:min-h-[168px] sm:px-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-4"
            >
              <div className="flex min-h-[54px] w-full items-end justify-center font-display text-3xl font-bold leading-none text-transparent bg-gradient-brand bg-clip-text sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
                <span className="truncate tabular-nums">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <p className="mt-4 min-h-[40px] max-w-[13rem] text-balance text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-text-muted sm:text-[11px] lg:text-xs xl:text-[13px]">
                {stat.label}
              </p>
              {index < STATS.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-white/10 lg:block xl:-right-0" />
              )}
            </ScrollReveal>
          ))}
        </div>
        <MarqueeStrip items={STATE_AUTHORITIES} className="mt-12" />
      </div>
    </section>
  );
}
