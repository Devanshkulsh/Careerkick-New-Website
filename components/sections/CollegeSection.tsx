import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const comparison = [
  ["College", "Course", "Fee", "Chance"],
  ["MAMC Delhi", "MBBS", "INR 15k", "Target"],
  ["Madras MC", "MBBS", "INR 13k", "High"],
  ["BJMC Ahmedabad", "MBBS", "INR 25k", "Target"],
  ["GMC Kozhikode", "MBBS", "INR 34k", "Safe"]
];

export function CollegeSection() {
  return (
    <section id="neet-pg" className="bg-surface px-4 py-section-mobile md:px-8 md:py-section">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <SectionLabel>College Guidance</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">Compare colleges beyond the closing rank.</h2>
          <p className="mt-5 text-text-muted md:text-lg">Fees, location, quota, category movement, bond rules, and admission chance sit beside cut-off data, so every option has context.</p>
        </ScrollReveal>
        <ScrollReveal>
          <GlassCard className="overflow-hidden p-0">
            {comparison.map((row, rowIndex) => (
              <div key={row.join("-")} className="grid grid-cols-4 gap-3 border-b border-white/5 px-5 py-4 text-sm last:border-b-0">
                {row.map((cell) => (
                  <span key={cell} className={rowIndex === 0 ? "font-mono text-xs uppercase tracking-widest text-cyan" : "truncate text-text-muted first:text-white"}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

