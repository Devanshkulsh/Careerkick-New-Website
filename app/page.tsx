import { AppDownloadSection } from "@/components/sections/AppDownloadSection";
import AppShowcaseSection from "@/components/sections/AppShowcaseSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CollegeSection } from "@/components/sections/CollegeSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import GoodbyeSection from "@/components/sections/GoodByeSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WebinarsSection } from "@/components/sections/WebinarsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <GoodbyeSection />
      <AppShowcaseSection />
      {/* <FeaturesSection /> */}
      {/* <HowItWorksSection /> */}
      {/* <PlatformSection /> */}
      {/* <CollegeSection /> */}
      {/* <WebinarsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <PricingSection /> */}
      {/* <BlogSection /> */}
      {/* <AppDownloadSection /> */}
    </>
  );
}
