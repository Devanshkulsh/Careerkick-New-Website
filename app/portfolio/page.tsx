import type { Metadata } from "next";
import HeroPortfolio from "@/components/portfolio/HeroPortfolio";
import PositioningSection from "@/components/portfolio/PositioningSection";
import AdmissionGraph from "@/components/portfolio/AdmissionGraph";
import PartnerMarquee from "@/components/portfolio/PartnerMarquee";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import HowWork from "@/components/portfolio/HowWork";
import RevenueImpact from "@/components/portfolio/RevenueImpact";
import SmoothManagementSection from "@/components/portfolio/SmoothManagementSection";
import ExpertTeamPortalSection from "@/components/portfolio/ExpertTeamPortalSection";
import SuccessStories from "@/components/portfolio/SuccessStories";
import { DataShow } from "@/components/portfolio/DataShow";
import BenefitsSection from "@/components/portfolio/BenefitsSection";
import ValueAddedServices from "@/components/portfolio/ValueAddedServices";
import ThoughtLeadership from "@/components/portfolio/ThoughtLeadership";
import TestimonialSection from "@/components/portfolio/TestimonialSection";
import SocialPresence from "@/components/portfolio/SocialPresence";
import CTASection from "@/components/portfolio/CTASection";
import ContactSection from "@/components/portfolio/ContactSection";

export const metadata: Metadata = {
  title: "Portfolio | Careerkick",
  description:
    "See the Careerkick portfolio of counselling capabilities, student outcomes, and decision support areas.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <HeroPortfolio />
      <PositioningSection />
      <AdmissionGraph />
      <PartnerMarquee />
      <AchievementsSection />
      <HowWork />
      <RevenueImpact />
      <SmoothManagementSection />
      <ExpertTeamPortalSection />
      <SuccessStories />
      <DataShow />
      <BenefitsSection />
      <ValueAddedServices />
      <ThoughtLeadership />
      <TestimonialSection />
      <SocialPresence />
      <CTASection />
      <ContactSection />
    </>
  );
}
