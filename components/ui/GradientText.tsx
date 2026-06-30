import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
};

export function GradientText({ children, className, animated = false }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-brand bg-clip-text text-transparent",
        animated && "animate-gradient-shift bg-[length:200%_200%]",
        className
      )}
    >
      {children}
    </span>
  );
}
