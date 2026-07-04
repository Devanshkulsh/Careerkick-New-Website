import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { STATE_AUTHORITIES, STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="border-y border-white/5 bg-surface py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-0">
          {STATS.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              className="relative flex min-h-[132px] w-full flex-col items-center justify-center rounded-lg border border-white/5 bg-white/[0.025] px-2 py-5 text-center sm:min-h-[150px] sm:px-3 sm:py-6 lg:min-h-[160px] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-3 xl:px-4"
            >
              <div className="flex min-h-[46px] w-full items-end justify-center bg-gradient-brand bg-clip-text font-display text-3xl font-bold leading-none text-transparent sm:min-h-[54px] sm:text-4xl md:text-5xl lg:text-[2.55rem] xl:text-5xl">
                <span className="whitespace-nowrap tabular-nums">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <p className="mt-3 min-h-[34px] max-w-[8.5rem] text-balance text-[9px] font-medium uppercase leading-relaxed tracking-[0.13em] text-text-muted sm:mt-4 sm:min-h-[38px] sm:max-w-[10rem] sm:text-[10px] md:text-[11px] lg:text-[10px] lg:tracking-[0.12em] xl:text-xs">
                {stat.label}
              </p>
              {index < STATS.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-white/10 lg:block" />
              )}
            </ScrollReveal>
          ))}
        </div>
        <MarqueeStrip items={STATE_AUTHORITIES} className="mt-8 sm:mt-10 lg:mt-12" />
      </div>
    </section>
  );
}
