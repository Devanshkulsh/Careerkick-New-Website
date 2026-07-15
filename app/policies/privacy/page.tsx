import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy Policy | Careerkick",
  description:
    "Read the Careerkick privacy policy structure for counseling and website information.",
  alternates: {
    canonical: "/policies/privacy",
  },
};

const points = [
  "Information submitted through forms or calls is used to support counselling and admission guidance.",
  "Website analytics may be used to improve content, performance, and user experience.",
  "Sensitive student information should be handled according to the final policy copy before launch.",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-base px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />
      <div className="absolute -right-20 top-24 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-5xl">
        <SectionLabel>Privacy Policy</SectionLabel>
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Privacy policy structure for the Careerkick website.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Add the final legal copy here when the policy is ready. This folder
          structure is now in place so the site can expand without changing the
          navbar again.
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
