import type { Metadata } from "next";
import Link from "next/link";
import { FEATURES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import ServicesHero from "@/components/services/ServicesHero";
import AdmissionTimeline from "@/components/services/AdmissionTimeline";
import AchievementsSection from "@/components/services/AchievementsSection";
import PricingSection from "@/components/services/PricingSection";
import ServicesContactSection from "@/components/services/ServicesContactSection";
import ServicesCTASection from "@/components/services/ServicesCTASection";


export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <AdmissionTimeline />
      <AchievementsSection />
      <PricingSection />
      <ServicesContactSection />
      <ServicesCTASection />
    </>
  );
}
