import type { Ebook } from "@/types/ebook";
import { EbookCard } from "@/components/ebooks/EbookCard";
import { EbookErrorState } from "@/components/ebooks/EbookErrorState";

type EbookGridProps = {
  ebooks: Ebook[];
};

export function EbookGrid({ ebooks }: EbookGridProps) {
  if (ebooks.length === 0) {
    return (
      <EbookErrorState
        title="No E-Books are currently available."
        description="Please check back soon for state-wise admission resources."
      />
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2">
      {ebooks.map((ebook) => (
        <EbookCard key={ebook._id} ebook={ebook} />
      ))}
    </div>
  );
}
