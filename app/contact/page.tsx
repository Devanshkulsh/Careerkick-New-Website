import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/contact-page/ContactHeroSection";
import { ContactFormAndDetails } from "@/components/contact-page/ContactFormAndDetails";
import { ContactOfficesSection } from "@/components/contact-page/ContactOfficesSection";

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
    <main className="bg-base text-white">
      <ContactHeroSection />
      <ContactFormAndDetails />
      <ContactOfficesSection />
    </main>
  );
}
