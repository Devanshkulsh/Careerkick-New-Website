"use client";

import type { FloatingIconName } from "@/types";
import { cn } from "@/lib/utils";

const accentClass: Record<string, string> = {
  blue: "text-[#8CA0FF]",
  green: "text-[#7FEA61]",
  orange: "text-[#C4F017]",
  purple: "text-magenta",
  cyan: "text-cyan",
  yellow: "text-[#E0FF5A]",
  red: "text-[#E0FF5A]",
  emerald: "text-[#7FEA61]",
};

const iconPositions = [
  "left-[4%] top-[10%]",
  "right-[6%] top-[12%]", // Adjusted for better arrow alignment
  "left-[7%] bottom-[14%]",
  "right-[6%] bottom-[12%]",
] as const;

export function FloatingIcons({
  icons,
  accent,
}: {
  icons: FloatingIconName[];
  accent: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      {icons.map((icon, index) => {
        const isArrow = icon.includes("arrow");

        return (
          <div
            key={icon}
            className={cn(
              `absolute ${iconPositions[index]} flex items-center justify-center`,
              isArrow 
                ? "h-20 w-20 text-[#C4F017] drop-shadow-lg" // Proper unboxed arrow styling
                : cn(
                    "h-11 w-11 rounded-[18px] border border-white/10 bg-surface-2/75 backdrop-blur-xl",
                    accentClass[accent] ?? "text-violet-glow"
                  )
            )}
          >
            <FloatingIcon name={icon} />
          </div>
        );
      })}
    </div>
  );
}

function FloatingIcon({ name }: { name: FloatingIconName | string }) {
  const className = name.includes("arrow") ? "h-full w-full" : "h-5 w-5";

  switch (name) {
    case "curved-arrow":
case "arrow":
  return (
    <svg
      className={cn(className, "rotate-12")}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Curved shaft */}
      <path d="M18 92C24 56 58 18 96 40" />

      {/* Arrow head */}
      <path d="M96 40L82 25" />
      <path d="M96 40L78 45" />
    </svg>
  );
    case "bell":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9" />
          <path d="M10.3 21a2 2 0 0 0 3.4 0" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "graduation-cap":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 10-10-5-10 5 10 5 10-5Z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </svg>
      );
    case "check":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "location":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18" />
        </svg>
      );
    case "file":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6" />
        </svg>
      );
    case "wallet":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7H5a3 3 0 0 0 0 6h15v6H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14Z" />
          <path d="M16 13a2 2 0 1 0 0-4" />
        </svg>
      );
    case "map":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "mouse-pointer-click":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 3 7.1 17 2.3-7.6 7.6-2.3Z" />
          <path d="M14 14 21 21" />
        </svg>
      );
    case "badge-check":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 15 5l4 .5.5 4 2.5 2.5-2.5 2.5-.5 4-4 .5-3 3-3-3-4-.5-.5-4L2 12l2.5-2.5.5-4 4-.5 3-3Z" />
          <path d="m8.5 12.5 2.2 2.2 4.8-5.4" />
        </svg>
      );
    default:
      return null;
  }
}