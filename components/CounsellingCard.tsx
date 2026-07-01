"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CounsellingIcon, CounsellingProcessStep } from "@/types";
import { cn } from "@/lib/utils";

const accentStyles: Record<CounsellingProcessStep["accent"], string> = {
  blue: "from-violet/20 to-[#8CA0FF]/10 text-violet-glow",
  green: "from-violet/20 to-[#7FEA61]/10 text-violet-glow",
  orange: "from-violet/20 to-[#C4F017]/10 text-violet-glow",
  purple: "from-violet/20 to-magenta/10 text-violet-glow",
  cyan: "from-violet/20 to-cyan/10 text-violet-glow",
  yellow: "from-violet/25 to-violet/10 text-violet-glow",
  red: "from-violet/20 to-[#E0FF5A]/10 text-violet-glow",
  emerald: "from-violet/25 to-[#7FEA61]/15 text-violet-glow",
};

type CounsellingCardProps = {
  step: CounsellingProcessStep;
  index: number;
  positionClassName?: string;
};

export function CounsellingCard({ step, index, positionClassName }: CounsellingCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group relative w-full overflow-hidden rounded-xl border border-white/10 bg-surface-2/80 p-4 shadow-elevated backdrop-blur-xl will-change-transform sm:p-5 lg:absolute lg:w-[330px]",
        positionClassName
      )}
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -12, 0],
              rotate: [0, index % 2 === 0 ? 0.8 : -0.8, 0],
              opacity: [0.92, 1, 0.92],
            }
      }
      whileHover={reduceMotion ? undefined : { y: -16, scale: 1.025, rotate: 0 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{
        opacity: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 },
        y: { duration: 4.6 + index * 0.18, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 },
        rotate: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 },
        default: { type: "spring", stiffness: 260, damping: 24 },
      }}
      tabIndex={0}
      aria-label={`Step ${step.step}: ${step.title}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.11] via-white/[0.03] to-transparent opacity-80" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-glow opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      <div className="relative">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-violet/20 bg-gradient-to-br shadow-card", accentStyles[step.accent])}>
            <ProcessIcon name={step.icon} />
          </div>
          <span className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-widest text-violet-glow">
            {step.status}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-white/45">Step {String(step.step).padStart(2, "0")}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-violet/60 to-transparent" />
        </div>

        <h3 className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">{step.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">{step.description}</p>

        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-brand"
            initial={{ width: "0%" }}
            whileInView={{ width: `${30 + step.step * 8}%` }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
          />
        </div>
      </div>
    </motion.article>
  );
}

function ProcessIcon({ name }: { name: CounsellingIcon }) {
  const common = "h-6 w-6";

  switch (name) {
    case "user-search":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9.5" cy="7" r="4" />
          <circle cx="17" cy="17" r="3" />
          <path d="m21 21-1.9-1.9" />
        </svg>
      );
    case "graduation-cap":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m22 10-10-5-10 5 10 5 10-5Z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </svg>
      );
    case "wallet":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 7H5a3 3 0 0 0 0 6h15v6H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14Z" />
          <path d="M16 13a2 2 0 1 0 0-4" />
        </svg>
      );
    case "file-check":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6" />
          <path d="m9 15 2 2 4-5" />
        </svg>
      );
    case "map":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "mouse-pointer-click":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m3 3 7.1 17 2.3-7.6 7.6-2.3Z" />
          <path d="M14 14 21 21" />
        </svg>
      );
    case "bell-ring":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9" />
          <path d="M10.3 21a2 2 0 0 0 3.4 0" />
          <path d="M4 2C2.8 3 2 4.5 2 6" />
          <path d="M22 6c0-1.5-.8-3-2-4" />
        </svg>
      );
    case "badge-check":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2 15 5l4 .5.5 4 2.5 2.5-2.5 2.5-.5 4-4 .5-3 3-3-3-4-.5-.5-4L2 12l2.5-2.5.5-4 4-.5 3-3Z" />
          <path d="m8.5 12.5 2.2 2.2 4.8-5.4" />
        </svg>
      );
  }
}
