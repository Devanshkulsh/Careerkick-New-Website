import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import type { Ebook } from "@/types/ebook";

type EbookCardProps = {
  ebook: Ebook;
};

export function EbookCard({ ebook }: EbookCardProps) {
  const formHref = `/e-books/form?state=${encodeURIComponent(ebook.slug)}`;

  return (
    <article className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        {ebook.featuredImageUrl ? (
          <Image
            src={ebook.featuredImageUrl}
            alt={ebook.featuredImageAlt || `${ebook.title} cover`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-card text-sm text-text-muted">
            Cover image unavailable
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-violet-glow">
            {ebook.state}
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
            {ebook.title}
          </h2>
          {ebook.description ? (
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-muted lg:text-white">
              {ebook.description}
            </p>
          ) : null}
        </div>
        <Link
          href={formHref}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-card transition-shadow hover:shadow-glow-violet"
        >
          <Download aria-hidden="true" className="h-4 w-4" />
          Download
        </Link>
      </div>
    </article>
  );
}
