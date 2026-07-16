import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import type { Ebook } from "@/types/ebook";

type EbookDetailsProps = {
  ebook: Ebook;
  showDownload?: boolean;
};

function getDownloadName(ebook: Ebook) {
  if (ebook.originalFilename) {
    return ebook.originalFilename;
  }

  return ebook.extension ? `${ebook.slug}.${ebook.extension}` : ebook.slug;
}

export function EbookDetails({ ebook, showDownload = false }: EbookDetailsProps) {
  const fileMeta = ebook.fileLabel;

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-8 rounded-lg border border-white/10 bg-gradient-card p-5 shadow-card md:grid-cols-[0.95fr_1.05fr] md:p-7">
      <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-white/10 bg-surface-2">
        {ebook.featuredImageUrl ? (
          <Image
            src={ebook.featuredImageUrl}
            alt={ebook.featuredImageAlt || `${ebook.title} cover`}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-text-muted">
            Cover image unavailable
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-col justify-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-violet-glow">
          {ebook.state}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
          {ebook.title}
        </h2>
        {ebook.description ? (
          <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base lg:text-white">
            {ebook.description}
          </p>
        ) : null}
        {fileMeta ? (
          <p className="mt-5 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-text-muted">
            {fileMeta}
          </p>
        ) : null}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          {showDownload && ebook.mediaFileUrl ? (
            <a
              href={ebook.mediaFileUrl}
              download={getDownloadName(ebook)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-card transition-shadow hover:shadow-glow-violet"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Download E-Book
            </a>
          ) : null}
          <Link
            href="/e-books"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-violet/40 hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to E-Books
          </Link>
        </div>
      </div>
    </div>
  );
}
