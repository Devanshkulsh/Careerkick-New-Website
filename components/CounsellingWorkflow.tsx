"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedArrow } from "@/components/AnimatedArrow";
import { AnimatedTimeline } from "@/components/AnimatedTimeline";
import { FloatingIcons } from "@/components/FloatingIcons";
import { WorkflowBackground } from "@/components/WorkflowBackground";
import { counsellingProcess } from "@/data/counsellingProcess";
import { cn } from "@/lib/utils";

const accentRing: Record<(typeof counsellingProcess)[number]["accent"], string> = {
  blue: "ring-[#8CA0FF]/30",
  green: "ring-[#7FEA61]/30",
  orange: "ring-[#C4F017]/30",
  purple: "ring-magenta/30",
  cyan: "ring-cyan/30",
  yellow: "ring-[#E0FF5A]/30",
  red: "ring-[#E0FF5A]/30",
  emerald: "ring-[#7FEA61]/30",
};

const accentBorder: Record<(typeof counsellingProcess)[number]["accent"], string> = {
  blue: "border-[#8CA0FF]/30 bg-[#8CA0FF]/10 text-[#8CA0FF]",
  green: "border-[#7FEA61]/30 bg-[#7FEA61]/10 text-[#7FEA61]",
  orange: "border-[#C4F017]/30 bg-[#C4F017]/10 text-[#C4F017]",
  purple: "border-magenta/30 bg-magenta/10 text-magenta",
  cyan: "border-cyan/30 bg-cyan/10 text-cyan",
  yellow: "border-[#E0FF5A]/30 bg-[#E0FF5A]/10 text-[#E0FF5A]",
  red: "border-[#E0FF5A]/30 bg-[#E0FF5A]/10 text-[#E0FF5A]",
  emerald: "border-[#7FEA61]/30 bg-[#7FEA61]/10 text-[#7FEA61]",
};

export function CounsellingWorkflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = counsellingProcess[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-surface-2/55 shadow-elevated backdrop-blur-xl sm:rounded-[32px]">
      <WorkflowBackground />

      <div className="relative grid gap-0 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr]">
        <aside className="relative z-10 border-b border-white/10 bg-black/10 px-3 py-4 sm:px-5 sm:py-5 lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
          <div className="max-w-sm">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-glow sm:text-xs">Workflow tabs</p>
            <h3 className="mt-2 font-display text-xl font-bold leading-tight text-white sm:mt-3 sm:text-2xl">
              Complete counselling process
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65 sm:mt-3">
              Tap a step to see the full journey from profile discussion to final admission.
            </p>
          </div>

          <div className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-2 lg:block lg:space-y-2.5">
            {counsellingProcess.map((step, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group flex w-full items-start gap-3 rounded-[18px] border px-3 py-3 text-left outline-none transition-colors focus-visible:shadow-[0_0_0_2px_#C4F017,0_0_0_5px_#050704] sm:rounded-[20px] sm:px-4",
                    active
                      ? cn("border-white/15 bg-white/[0.06] shadow-card", accentRing[step.accent])
                      : "border-white/8 bg-black/20 hover:border-white/15 hover:bg-white/[0.04]"
                  )}
                  aria-pressed={active}
                >
                  <span className={cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold sm:h-9 sm:w-9 sm:text-sm", accentBorder[step.accent])}>
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-display text-[12px] font-semibold leading-tight text-white sm:text-sm">{step.title}</span>
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-violet shadow-glow-violet" />}
                    </span>
                    <span className="mt-1 block text-[10px] leading-relaxed text-white/55 sm:text-[11px]">
                      {step.status}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="relative flex min-h-[0] items-stretch justify-center px-3 py-4 sm:px-5 sm:py-6 lg:min-h-[720px] lg:px-6 lg:py-7">
          <AnimatedTimeline activeIndex={activeIndex} accent={activeStep.accent} />
          <FloatingIcons icons={activeStep.orbitIcons} accent={activeStep.accent} />
          <AnimatedArrow className="right-[4%] top-[4%] z-20 w-[110px] lg:w-[130px]" delay={0.18} tone="accent" />
          <AnimatedArrow className="left-[4%] bottom-[4%] z-20 w-[120px] lg:w-[140px]" delay={0.42} flip tone="accent" />

          <div className="relative z-10 flex w-full items-center justify-center">
            <motion.div
              key={activeStep.step}
              className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[24px] border border-white/10 bg-surface-2/85 p-4 shadow-elevated backdrop-blur-xl sm:rounded-[32px] sm:p-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.11] via-white/[0.02] to-transparent" />
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={cn("rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest", accentBorder[activeStep.accent])}>
                    {activeStep.status}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                    Step {String(activeStep.step).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-3 sm:gap-4">
                  <div className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border bg-gradient-to-br text-white shadow-card sm:h-16 sm:w-16 sm:rounded-[20px]", accentBorder[activeStep.accent])}>
                    <StepIcon name={activeStep.icon} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display text-[1.35rem] font-bold leading-tight text-white sm:text-4xl">
                      {activeStep.title}
                    </h4>
                    <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-white sm:mt-3 sm:text-base lg:text-white">
                      {activeStep.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 xl:grid-cols-3">
                  {activeStep.highlights.map((item) => (
                    <div key={item} className="rounded-[18px] border border-white/10 bg-white/[0.03] px-3 py-3 text-[13px] leading-relaxed text-white/70 sm:text-sm">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 lg:mt-6 lg:grid-cols-[1.3fr_0.7fr]">
                  <div className="rounded-[24px] border border-white/10 bg-black/15 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-glow">What happens here</p>
                    <p className="mt-3 text-[13px] leading-relaxed text-white/70 sm:text-sm">
                      This stage builds on the previous one and prepares the next move in the counselling journey, so the student always knows what to do and when to do it.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">Focus</p>
                    <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                      {activeStep.status}
                    </p>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-brand"
                        initial={{ width: "0%" }}
                        animate={{ width: `${42 + activeStep.step * 5}%` }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepIcon({ name }: { name: (typeof counsellingProcess)[number]["icon"] }) {
  const common = "h-7 w-7";

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
