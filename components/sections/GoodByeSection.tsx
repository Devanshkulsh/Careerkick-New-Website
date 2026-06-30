"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const problems = [
  "Rank vs College Confusion",
  "Lack of Fees & Bond Details",
  "Unclear Cut-offs",
  "Choice Filling Mistakes",
  "NEET Counselling Stress",
];

const itemStep = 112;
const activeSlot = 1; // Updated to 1 so the logic targets the second slot

export default function GoodbyeSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % problems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-surface px-4 py-20 sm:py-24 md:px-8 lg:py-28 xl:py-section">
      <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-violet/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan/10 blur-[110px]" />
      <div className="grid-overlay absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10 xl:gap-14">
        {/* Added relative and z-10 here so the arrow renders above the right card */}
        <div className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
          <span className="mb-5 inline-flex rounded-full border border-violet/30 bg-violet/10 px-4 py-2 text-center font-mono text-[10px] font-medium uppercase tracking-widest text-violet-glow sm:text-xs">
            Less chaos, more clarity
          </span>

          <h2 className="relative mx-auto inline-block max-w-[11ch] font-display text-4xl font-bold leading-[1.05] tracking-normal text-white sm:text-5xl md:text-6xl lg:mx-0 xl:text-7xl">
            Say Goodbye To
            <motion.svg
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 hidden text-violet lg:block lg:-right-24 lg:top-2 lg:w-40 xl:-right-32 xl:top-4 xl:w-48"
              viewBox="0 0 170 110"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 15 75 C 20 30 30 30 35 60 C 55 15 95 15 135 60 M 135 60 L 115 52 M 135 60 L 125 35"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-relaxed text-white/75 sm:mt-8 sm:text-base md:text-lg lg:mx-0 lg:text-white">
            Replace guesswork with structured counselling, verified college
            data, and calm decision-making through every admission round.
          </p>

          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mt-5 h-20 w-28 text-violet sm:h-24 sm:w-32 lg:hidden"
            viewBox="0 0 120 100"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 24 18 C 70 8 96 34 62 82 M 62 82 L 46 62 M 62 82 L 82 66"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>

        <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-base/70 p-4 shadow-elevated backdrop-blur-xl sm:p-5 md:p-6 lg:mx-0 lg:max-w-none xl:p-7">
          <div className="absolute inset-x-8 -bottom-10 h-32 rounded-full bg-gradient-glow opacity-25 blur-3xl" />

          {/* Moved the highlight box down by exactly one itemStep (112px) */}
          <div className="pointer-events-none absolute left-4 right-4 top-32 h-[100px] rounded-lg border border-violet/30 bg-violet/[0.06] sm:left-5 sm:right-5 sm:top-[132px] sm:h-[96px] md:left-6 md:right-6 md:top-[136px]" />

          <div className="relative h-[300px] overflow-hidden sm:h-[328px] md:h-[336px]">
            <motion.div
              className="space-y-3 sm:space-y-4"
              animate={{ y: itemStep * (activeSlot - active) }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
                mass: 0.9,
              }}
            >
              {problems.map((problem, index) => {
                const isActive = active === index;

                return (
                  <motion.div
                    key={problem}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0.42,
                      scale: isActive ? 1 : 0.96,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex h-[100px] items-center gap-3 rounded-lg border px-4 transition-colors duration-300 sm:h-[96px] sm:gap-4 sm:px-5 md:px-6 ${
                      isActive
                        ? "border-violet/50 bg-violet/10 shadow-glow-violet"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-300 sm:h-3 sm:w-3 ${
                        isActive
                          ? "bg-violet shadow-glow-violet"
                          : "bg-white/20"
                      }`}
                    />
                    <span
                      className={`min-w-0 font-display text-xl font-bold leading-tight sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-4xl ${
                        isActive ? "text-violet-glow" : "text-text-faint"
                      }`}
                    >
                      {problem}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
