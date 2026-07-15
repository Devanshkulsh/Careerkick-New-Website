import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Policies | Careerkick",
  description:
    "Read Careerkick privacy, terms, and disclaimer pages from a dedicated policy hub.",
  alternates: {
    canonical: "/policies",
  },
};

const policyPages = [
  {
    title: "Privacy Policy",
    href: "/policies/privacy",
    description:
      "How we handle information, counselling details, and website activity.",
  },
  {
    title: "Terms",
    href: "/policies/terms",
    description:
      "The usage rules for the website, services, and available content.",
  },
  {
    title: "Disclaimer",
    href: "/policies/disclaimer",
    description:
      "Important limits around counselling guidance, updates, and outcomes.",
  },
];

export default function PoliciesPage() {
  return (
    <main className="relative overflow-hidden bg-base px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />
      <div className="absolute -right-24 top-16 h-96 w-96 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>Policies</SectionLabel>
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            A central place for the{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              legal pages
            </span>{" "}
            that support the site.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted md:text-xl">
            This hub keeps the navbar route simple while giving the site a
            structured home for privacy, terms, and disclaimer content.
          </p>
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {policyPages.map((page) => (
            <GlassCard key={page.href} className="p-5">
              <h2 className="font-display text-2xl font-semibold text-white">
                {page.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {page.description}
              </p>
              <Link
                href={page.href}
                className="mt-5 inline-flex text-sm font-semibold text-violet-glow transition-colors hover:text-white"
              >
                Open page
              </Link>
            </GlassCard>
          ))}
        </section>
      </div>
    </main>
  );
}
