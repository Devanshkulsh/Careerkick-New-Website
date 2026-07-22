"use client";

import { motion } from "framer-motion";

type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Student Profile Discussion",
    description:
      "The process starts with understanding the student profile. Careerkick checks the score, rank, category, state preference, course interest, budget and college expectations.",
  },
  {
    step: 2,
    title: "Course and College Planning",
    description:
      "After profile discussion, the team suggests suitable course options and college possibilities. This gives the student a clear direction before starting the counselling process.",
  },
  {
    step: 3,
    title: "Budget and State Counselling Planning",
    description:
      "Careerkick helps parents understand the expected fee range, state counselling options, government and private college possibilities and practical admission routes.",
  },
  {
    step: 4,
    title: "Document Pre-Screening",
    description:
      "All required documents are checked in advance. This helps avoid last-minute stress during registration, verification or reporting.",
  },
  {
    step: 5,
    title: "Counselling Road Map Preparation",
    description:
      "A clear road map is prepared for the student. It includes the suitable counselling route, important stages, choice filling strategy and round-wise planning.",
  },
  {
    step: 6,
    title: "Portal Registration and Choice Filling Support",
    description:
      "Careerkick guides the student during portal registration and choice filling. The aim is to avoid common mistakes and make choices according to the student profile and admission chances.",
  },
  {
    step: 7,
    title: "Round-wise Updates and Allotment Guidance",
    description:
      "The team keeps students updated about important dates, official notices, round results and allotment-related steps.",
  },
  {
    step: 8,
    title: "Reporting and Final Admission Support",
    description:
      "Once allotment is received, Careerkick helps the student understand reporting steps, fee payment, documents, upgrade options and final admission formalities.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf4] px-4 py-20 text-slate-900 sm:px-6 md:px-8 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#51A70A]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-96 w-96 rounded-full bg-[#51A70A]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
        >
          <motion.div variants={fadeUpVariants}>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#51A70A]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.45em] text-[#51A70A]">
                How It Works
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-normal text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
              Our Proven
              <span className="mt-2 block bg-gradient-brand bg-clip-text text-transparent">
                8-Step Process
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="max-w-2xl text-sm font-medium leading-relaxed text-slate-700 sm:mt-8 sm:text-base md:text-lg lg:mb-8"
          >
            From profile discussion to final admission support, every step is
            guided with clarity, strategy, and personalised counselling for the
            student’s future.
          </motion.p>
        </motion.div>

        {/* Process Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="relative mt-16 sm:mt-20 lg:mt-24"
        >
          {/* Mobile vertical connector line */}
          <div className="pointer-events-none absolute left-[31px] top-0 h-full w-px bg-[#51A70A]/20 lg:hidden" />

          <div className="grid gap-x-12 gap-y-14 lg:grid-cols-4 lg:gap-y-20">
            {processSteps.map((item) => {
              const isLast = item.step === 8;

              return (
                <motion.article
                  key={item.step}
                  variants={fadeUpVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="group relative pl-20 lg:pl-0"
                >
                  {/* Step Badge */}
                  <div className="relative z-10 mb-7 flex lg:justify-center">
                    <motion.div
                      className={[
                        "flex h-16 w-16 items-center justify-center rounded-full border shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-300 sm:h-20 sm:w-20",
                        isLast
                          ? "border-[#51A70A] bg-[#51A70A] text-white shadow-[0_18px_50px_rgba(81,167,10,0.28)] group-hover:border-[#51A70A] group-hover:bg-white group-hover:text-[#51A70A] group-hover:shadow-[0_18px_50px_rgba(81,167,10,0.18)]"
                          : "border-[#51A70A]/45 bg-white text-[#51A70A] group-hover:border-[#51A70A] group-hover:bg-[#51A70A] group-hover:text-white group-hover:shadow-[0_18px_50px_rgba(81,167,10,0.28)]",
                      ].join(" ")}
                    >
                      {isLast ? (
                        <CheckIcon />
                      ) : (
                        <span className="font-display text-2xl font-bold sm:text-3xl">
                          {item.step}
                        </span>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="max-w-sm lg:mx-auto">
                    <h3 className="font-display text-xl font-bold leading-snug text-slate-950 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm font-medium leading-7 text-slate-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-[#51A70A]/0 opacity-0 blur-2xl transition-all duration-300 group-hover:bg-[#51A70A]/8 group-hover:opacity-100" />
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
