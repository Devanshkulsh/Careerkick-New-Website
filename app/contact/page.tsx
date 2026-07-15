import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { offices } from "@/data/offices";

export const metadata: Metadata = {
  title: "Contact | Careerkick",
  description:
    "Reach Careerkick for counselling support, office locations, and direct admission guidance.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-base px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />
      <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>Contact</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <section>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Let’s make the next admission step{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                easier
              </span>
              .
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted md:text-xl">
              This route gives the team a dedicated contact page for calls,
              office addresses, and admissions support. It can later grow into a
              proper form, support inbox, or appointment flow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:7393062116"
                className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
              >
                Call now
              </a>
              <a
                href="https://wa.me/917393062116"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-violet/30 hover:bg-white/10"
              >
                WhatsApp support
              </a>
            </div>
          </section>

          <GlassCard className="overflow-hidden border-white/10 bg-surface-2/80 p-6 shadow-elevated">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan">
              Direct support
            </p>
            <div className="mt-4 space-y-4">
              {offices.slice(0, 3).map((office) => (
                <div key={office.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h2 className="font-display text-xl font-semibold text-white">
                    {office.branch}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {office.address}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {office.contacts.map((contact) => (
                      <Link
                        key={contact}
                        href={`tel:${contact.replace(/\s+/g, "")}`}
                        className="text-violet-glow transition-colors hover:text-white"
                      >
                        {contact}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <section className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {offices.map((office) => (
            <GlassCard key={office.id} className="p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-violet-glow">
                Office
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                {office.branch}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {office.address}
              </p>
            </GlassCard>
          ))}
        </section>
      </div>
    </main>
  );
}
