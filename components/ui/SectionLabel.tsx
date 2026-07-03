import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("mb-5 inline-flex rounded-full border border-violet/30 bg-violet/10 px-4 py-2 font-mono text-xs font-medium uppercase tracking-widest text-cyan", className)}>
      {children}
    </div>
  );
}

