import { cn } from "@/lib/utils";

type MarqueeStripProps = {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
};

export function MarqueeStrip({ items, speed = 40, direction = "left", className }: MarqueeStripProps) {
  const repeated = [...items, ...items];
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)} style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}>
      <div className={cn("flex w-max gap-4 whitespace-nowrap hover:[animation-play-state:paused]", direction === "left" ? "animate-marquee" : "animate-marquee-reverse")}>
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="font-mono text-xs uppercase tracking-widest text-text-faint">
            {item}
            <span className="px-4 text-violet">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

