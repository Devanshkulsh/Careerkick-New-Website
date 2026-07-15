import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Disclaimer | Careerkick",
  description:
    "Read the Careerkick disclaimer page structure for counseling advice and outcomes.",
  alternates: {
    canonical: "/policies/disclaimer",
  },
};

const points = [
  "Counselling suggestions are guidance, not guaranteed admission outcomes.",
  "Cut-offs, fee information, and seat availability can change during the admission cycle.",
  "Users should verify final details with the official authorities and institutions.",
];

export default function DisclaimerPage() {
  return (
    <main className="relative overflow-hidden bg-base px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />
      <div className="absolute -right-20 top-24 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-5xl">
        <SectionLabel>Disclaimer</SectionLabel>
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Disclaimer page structure for Careerkick content.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          This page can hold the final admission disclaimer and update notes so
          users understand how to interpret the guidance on the site.
        </p>

        <GlassCard className="mt-10 p-6">
          <div className="space-y-4">
            {points.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-text-muted">
                {point}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
