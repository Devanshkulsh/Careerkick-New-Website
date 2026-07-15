import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";
import BrandStory from "@/components/about/BrandStory";
import MissionVision from "@/components/about/MissionVision";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import YouTubeChannels from "@/components/about/YouTubeChannels";
import OfficeLocations from "@/components/about/OfficeLocations";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import CTABanner from "@/components/about/CTABanner";

export const metadata: Metadata = {
  title: "About | Careerkick",
  description:
    "Learn how Careerkick helps NEET and JEE aspirants plan counselling, compare colleges, and move through admissions with confidence.",
  alternates: {
    canonical: "/about",
  },
};

const pillars = [
  {
    title: "Clear guidance",
    body: "We turn rank, quota, category, budget, and state preference into a practical counselling plan.",
  },
  {
    title: "Verified decisions",
    body: "Every shortlist is built around real admission context, not guesswork or generic advice.",
  },
  {
    title: "Family friendly",
    body: "Parents get a simple view of fees, deadlines, reporting steps, and the tradeoffs behind each option.",
  },
];

const journeyPoints = [
  "Understand the student profile and goals.",
  "Shortlist colleges and counselling routes.",
  "Prepare documents and reporting timelines.",
  "Stay supported until final admission steps are complete.",
];

export default function AboutPage() {
  return (
    <>
      <BrandStory />
      <MissionVision />
      <WhyChooseUs />
      <YouTubeChannels />
      <OfficeLocations />
      <JourneyTimeline />
      <CTABanner />
      </>
  );
}
