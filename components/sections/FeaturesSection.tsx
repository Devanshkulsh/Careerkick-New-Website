import { FEATURES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const spanClass = {
  large: "md:col-span-2",
  medium: "md:col-span-1",
  small: "md:col-span-1"
};

export function FeaturesSection() {
  return (
    <section id="features" className="bg-base px-4 py-section-mobile md:px-8 md:py-section">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="max-w-3xl">
          <SectionLabel>Careerkick Services</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">Guidance for every admission decision.</h2>
          <p className="mt-5 text-text-muted md:text-lg">Careerkick combines expert counselling, verified admission data, and practical choice-filling support for NEET aspirants and parents.</p>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <ScrollReveal key={feature.id} className={cn(spanClass[feature.size])}>
              <GlassCard className="group relative h-full overflow-hidden p-6">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-glow opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5 font-mono text-sm text-cyan">{feature.icon}</div>
                  <h3 className="font-display text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-4 text-sm text-text-muted">{feature.description}</p>
                  <GradientText className="mt-8 inline-block font-mono text-xs uppercase tracking-widest">Explore service</GradientText>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

