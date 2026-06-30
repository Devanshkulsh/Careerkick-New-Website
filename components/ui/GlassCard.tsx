import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-gradient-card shadow-card backdrop-blur-xl transition-all duration-300 ease-out",
        hoverEffect && "hover:-translate-y-1 hover:border-violet/40 hover:shadow-elevated",
        className
      )}
    >
      {children}
    </div>
  );
}
