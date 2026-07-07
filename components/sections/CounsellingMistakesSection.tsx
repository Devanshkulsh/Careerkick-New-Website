"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const mistakes = [
  {
    number: "01",
    title: "Registering on the Wrong Counselling Portal",
    detail: "Applying through an incorrect or unauthorized portal can lead to disqualification.",
    icon: "portal",
  },
  {
    number: "02",
    title: "Lack of Awareness of Counselling Rules & Guidelines",
    detail: "Not understanding official regulations may result in critical errors.",
    icon: "rules",
  },
  {
    number: "03",
    title: "Uploading Incorrect, Blurred, or Fake Documents",
    detail: "Improper documentation can lead to rejection during verification.",
    icon: "document",
  },
  {
    number: "04",
    title: "Confusion Between All India Quota and State Quota",
    detail: "Misunderstanding AIQ 15% and State Quota 85% can affect your chances significantly.",
    icon: "quota",
  },
  {
    number: "05",
    title: "Missing Important Mop-Up Round Rules",
    detail: "Overlooking key rules can lead to last-minute seat losses or missed opportunities.",
    icon: "clock",
  },
  {
    number: "06",
    title: "Lack of Clarity on Withdrawal & Resignation Policies",
    detail: "Misunderstanding these rules may result in forfeiture of security deposits.",
    icon: "policy",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function CounsellingMistakesSection() {
  const [showNumber, setShowNumber] = useState(false);
  const phoneNumber = "7393062116";

  return (
    <section className="relative overflow-hidden bg-base px-4 py-14 text-white md:px-8 md:py-20">
      <motion.div
        aria-hidden="true"
        className="absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#51A70A]/12 blur-[110px] pointer-events-none"
        animate={{ x: [0, 12, 0], y: [0, -10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-32 bottom-16 h-96 w-96 rounded-full bg-[#6DCC12]/10 blur-[130px] pointer-events-none"
        animate={{ x: [0, -14, 0], y: [0, 12, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="grid-overlay absolute inset-0 opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#061204] p-5 shadow-elevated sm:p-7 md:p-10 lg:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(81,167,10,0.28),transparent_28%),radial-gradient(circle_at_12%_78%,rgba(109,204,18,0.14),transparent_30%)] pointer-events-none" />
            <motion.div
              aria-hidden="true"
              className="absolute -right-8 top-10 h-24 w-24 rounded-full border border-[#51A70A]/20 bg-white/[0.03] backdrop-blur-md"
              animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute right-16 top-24 h-4 w-4 rounded-full bg-[#8cef32] shadow-[0_0_22px_rgba(140,239,50,0.45)]"
              animate={{ scale: [1, 1.4, 1], opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute -bottom-6 -left-4 select-none font-display text-[5rem] font-black leading-none text-white/[0.03] pointer-events-none sm:-bottom-8 sm:-left-6 sm:text-[8rem] md:-bottom-12 md:-left-8 md:text-[12rem] lg:text-[14rem]">
              ALERT
            </div>

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
              <motion.div variants={itemVariants} className="flex flex-col items-start">
                <motion.div
                  className="inline-flex rounded-full border border-[#51A70A]/35 bg-[#51A70A]/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8cef32] shadow-sm sm:text-xs"
                  animate={{ boxShadow: [
                    "0 0 0 rgba(81,167,10,0)",
                    "0 0 24px rgba(81,167,10,0.12)",
                    "0 0 0 rgba(81,167,10,0)"
                  ]}}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  Avoid seat loss
                </motion.div>
                <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-white">One counselling mistake can</span>
                  <motion.span
                    className="block bg-gradient-brand bg-clip-text pb-1 text-transparent"
                    animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    cost you a seat.
                  </motion.span>
                </h2>
                <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/75 sm:text-base lg:text-white">
                  UG medical counselling is rule-heavy. One wrong portal, document, quota choice, or round decision can change the entire allotment outcome.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <StatPill label="6 common errors" value="Watch for" />
                  <StatPill label="Seat safety" value="Stronger checks" />
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <motion.a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-brand px-6 py-4 font-display text-base font-bold text-white shadow-card transition-shadow hover:shadow-glow-violet focus-visible:shadow-[0_0_0_2px_#51A70A,0_0_0_6px_#050704] sm:w-auto"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Free Call
                  </motion.a>

                  <div
                    className="relative w-full sm:w-auto"
                    onMouseEnter={() => setShowNumber(true)}
                    onMouseLeave={() => setShowNumber(false)}
                    onFocus={() => setShowNumber(true)}
                    onBlur={() => setShowNumber(false)}
                  >

                    <motion.div
                      initial={false}
                      animate={
                        showNumber
                          ? { opacity: 1, y: 0, scale: 1 }
                          : { opacity: 0, y: 10, scale: 0.96 }
                      }
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-max -translate-x-1/2"
                    >
                      <div className="rounded-2xl border border-white/10 bg-[#0d1d09]/95 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8cef32]">
                          Call now
                        </p>
                        <p className="mt-1 font-display text-lg font-bold tracking-[0.12em] text-white">
                          {phoneNumber}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative flex justify-center lg:justify-end"
              >
                <motion.div
                  className="relative w-full max-w-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-xl transition-transform duration-300 sm:max-w-xs sm:p-7"
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <div className="relative flex flex-col items-center text-center">
                    <span
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber/30 bg-amber/10 text-4xl font-black text-amber shadow-inner sm:h-20 sm:w-20 sm:text-5xl"
                    >
                      !
                    </span>
                    <p className="mt-5 font-display text-2xl font-bold leading-none text-white">
                      Seat Lost
                    </p>
                    <p className="mt-4 max-w-[220px] text-xs font-medium leading-relaxed text-white/60 sm:text-sm">
                      Most errors are preventable when every step is checked before submission.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-6 md:mt-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-[#51A70A]/25 bg-surface-2/80 p-4 shadow-elevated backdrop-blur-xl sm:p-6 md:p-8"
          >
            <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
              <motion.div variants={itemVariants}>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#8cef32]">
                  Common counselling mistakes
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                  Check these before every action.
                </h3>
              </motion.div>
              <motion.span
                variants={itemVariants}
                className="inline-flex shrink-0 items-center rounded-full border border-[#51A70A]/30 bg-[#51A70A]/10 px-5 py-2.5 text-sm font-semibold text-[#8cef32]"
              >
                6 critical checks
              </motion.span>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {mistakes.map((mistake, index) => (
                <motion.article
                  key={mistake.number}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md transition-colors duration-300 hover:border-[#51A70A]/45 hover:bg-black/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)] sm:flex-row sm:gap-5 sm:p-5"
                >
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#51A70A]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
                    <motion.span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand font-display text-xl font-bold text-white shadow-md sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl"
                      whileHover={{ rotate: -6, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 250, damping: 16 }}
                    >
                      {mistake.number}
                    </motion.span>
                    <motion.span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#8cef32] shadow-sm transition-colors group-hover:bg-white group-hover:text-[#51A70A] sm:h-12 sm:w-12"
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <MistakeIcon name={mistake.icon} />
                    </motion.span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <h4 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">
                      {mistake.title}
                    </h4>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-white/75 md:text-white">
                      {mistake.detail}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-sm backdrop-blur-md"
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8cef32]">
        {label}
      </div>
      <div className="mt-1 font-display text-sm font-bold text-white">{value}</div>
    </motion.div>
  );
}

function MistakeIcon({ name }: { name: string }) {
  const common = "h-5 w-5 sm:h-6 sm:w-6";

  switch (name) {
    case "portal":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 18v3" />
          <path d="m8 11 2 2 5-5" />
        </svg>
      );
    case "rules":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 19.5V5a2 2 0 0 1 2-2h11" />
          <path d="M6 17h12a2 2 0 0 1 0 4H6a2 2 0 0 1 0-4Z" />
          <path d="M9 7h6" />
          <path d="M9 11h4" />
        </svg>
      );
    case "document":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6" />
          <path d="m9 14 6 6" />
          <path d="m15 14-6 6" />
        </svg>
      );
    case "quota":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v18" />
          <path d="M5 7h14" />
          <path d="m6 7-3 6h6Z" />
          <path d="m18 7-3 6h6Z" />
        </svg>
      );
    case "clock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
          <path d="m17 3 2 2" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 21s7-4 7-11V5l-7-3-7 3v5c0 7 7 11 7 11Z" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      );
  }
}
