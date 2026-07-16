import type { Metadata } from "next";
import { EbookDetails } from "@/components/ebooks/EbookDetails";
import { EbookErrorState } from "@/components/ebooks/EbookErrorState";
import { EbookPageHeader } from "@/components/ebooks/EbookPageHeader";
import {
  getEbookBySlug,
  getSearchParamValue,
  hasDownloadableMedia,
  isValidEbookSlug,
  validateEbookCompletionToken,
} from "@/lib/sanityEbooks";
import { siteConfig } from "@/lib/site";

type EbookDownloadPageProps = {
  searchParams: {
    state?: string | string[];
    token?: string | string[];
  };
};

export const metadata: Metadata = {
  title: `Your E-Book Is Ready | ${siteConfig.name}`,
  description: "Download your selected state E-Book.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function EbookDownloadPage({ searchParams }: EbookDownloadPageProps) {
  const stateSlug = getSearchParamValue(searchParams.state);
  const token = getSearchParamValue(searchParams.token);

  if (!isValidEbookSlug(stateSlug)) {
    return <InvalidDownloadState />;
  }

  const ebook = await getEbookBySlug(stateSlug);
  const hasCompletionToken = await validateEbookCompletionToken(token);

  if (!ebook) {
    return <InvalidDownloadState />;
  }

  if (!hasDownloadableMedia(ebook)) {
    return (
      <section className="section-shell flex min-h-screen items-center pt-28 md:pt-36">
        <div className="relative z-10 mx-auto w-full px-4 md:px-8">
          <EbookErrorState
            title="The download file is currently unavailable."
            description="Please return to the E-Book preview page and try another available resource."
          />
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell min-h-screen pt-28 md:pt-36">
      <div className="noise-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-8">
        <EbookPageHeader
          title="Your E-Book Is Ready"
          description="You can now download the selected E-Book."
        />
        {!hasCompletionToken ? (
          <div className="mx-auto max-w-5xl rounded-lg border border-amber/30 bg-amber/10 px-5 py-4 text-sm leading-relaxed text-amber">
            Download access is currently prepared for external form verification.
            Once the provider supplies a completion token, validate it server-side
            before allowing protected downloads.
          </div>
        ) : null}
        <EbookDetails ebook={ebook} showDownload />
      </div>
    </section>
  );
}

function InvalidDownloadState() {
  return (
    <section className="section-shell flex min-h-screen items-center pt-28 md:pt-36">
      <div className="relative z-10 mx-auto w-full px-4 md:px-8">
        <EbookErrorState
          title="The selected E-Book could not be found."
          description="Please choose an active E-Book from the preview page before downloading."
        />
      </div>
    </section>
  );
}
