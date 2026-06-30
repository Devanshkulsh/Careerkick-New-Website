"use client";

import { useState } from "react";
import { PRICING_PLANS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn, formatNumber } from "@/lib/utils";

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-surface px-4 py-section-mobile md:px-8 md:py-section">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="text-center">
          <SectionLabel>Simple Packages</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">Unlock Your Counselling Advantage</h2>
          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-base p-1">
            <button type="button" onClick={() => setAnnual(false)} className={cn("rounded-full px-5 py-2 text-sm font-semibold", !annual ? "bg-white text-base" : "text-text-muted")}>Monthly</button>
            <button type="button" onClick={() => setAnnual(true)} className={cn("rounded-full px-5 py-2 text-sm font-semibold", annual ? "bg-white text-base" : "text-text-muted")}>Annual <span className="text-amber">20% off</span></button>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <ScrollReveal key={plan.name}>
                <GlassCard className={cn("relative h-full p-7", plan.isFeatured && "scale-[1.02] border-violet shadow-glow-violet")}>
                  {plan.isFeatured && <span className="absolute right-6 top-6 rounded-full bg-amber px-3 py-1 font-mono text-xs font-bold text-base">MOST POPULAR</span>}
                  <h3 className="font-display text-3xl font-semibold text-white">{plan.name}</h3>
                  <div className="mt-6 font-display text-5xl font-bold text-transparent bg-gradient-brand bg-clip-text">INR {formatNumber(price)}</div>
                  <p className="mt-2 text-sm text-text-faint">/{annual ? "year" : "month"}</p>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => <li key={feature} className="text-sm text-text-muted"><span className="mr-2 text-cyan">OK</span>{feature}</li>)}
                    {plan.unavailable?.map((feature) => <li key={feature} className="text-sm text-text-faint line-through"><span className="mr-2">-</span>{feature}</li>)}
                  </ul>
                  <MagneticButton className={cn("mt-8 w-full", !plan.isFeatured && "border border-white/10 bg-none bg-surface")}>{plan.name === "Starter" ? "Book Free Call" : `Start ${plan.name}`}</MagneticButton>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
