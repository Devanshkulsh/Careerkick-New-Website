import type { Metadata } from "next";
import { EbookGrid } from "@/components/ebooks/EbookGrid";
import { EbookPageHeader } from "@/components/ebooks/EbookPageHeader";
import { getActiveEbooks } from "@/lib/sanityEbooks";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `E-Book Preview | ${siteConfig.name}`,
  description: "Download state-wise E-Books for your medical admission journey.",
  alternates: {
    canonical: "/e-books",
  },
  openGraph: {
    title: `E-Book Preview | ${siteConfig.name}`,
    description: "Download state-wise E-Books for your medical admission journey.",
    url: `${siteConfig.url}/e-books`,
    type: "website",
  },
};

export default async function EBooksPage() {
  const ebooks = await getActiveEbooks();

  return (
    <section className="section-shell min-h-screen pt-28 md:pt-36">
      <div className="noise-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 md:px-8">
        <EbookPageHeader
          title="E-Book Preview"
          description="Download the E-Book for your respective state from the options below."
        />
        <EbookGrid ebooks={ebooks} />
      </div>
    </section>
  );
}
