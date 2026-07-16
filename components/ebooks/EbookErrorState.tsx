import Link from "next/link";

type EbookErrorStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

export function EbookErrorState({
  title,
  description,
  actionLabel = "Back to E-Books",
}: EbookErrorStateProps) {
  return (
    <div className="mx-auto max-w-2xl rounded-lg border border-white/10 bg-gradient-card p-8 text-center shadow-card">
      <p className="font-display text-2xl font-semibold text-white">{title}</p>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-text-muted">
        {description}
      </p>
      <Link
        href="/e-books"
        className="mt-6 inline-flex rounded-full border border-violet/30 bg-violet/10 px-5 py-3 text-sm font-semibold text-violet-glow transition-colors hover:border-violet/60 hover:bg-violet/15"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
