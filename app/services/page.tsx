import type { Metadata } from "next";
import Link from "next/link";
import { FEATURES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Services | Careerkick",
  description:
    "Explore Careerkick services for NEET counselling, college comparison, choice filling, and admission support.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-base px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />
      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>Services</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <section>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Services shaped around{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                the admission journey
              </span>
              .
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted md:text-xl">
              The services page is now a real route where the team can expand
              each counselling offering. It is designed to explain the journey
              from first call to final reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                Book a call
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-violet/30 hover:bg-white/10"
              >
                Meet the team
              </Link>
            </div>
          </section>

          <div className="grid gap-4">
            {FEATURES.map((feature) => (
              <GlassCard key={feature.id} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-mono text-sm text-violet-glow">
                    {feature.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-white">
                      {feature.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
