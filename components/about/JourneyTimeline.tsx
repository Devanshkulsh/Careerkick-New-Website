"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { memo, useRef } from "react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlight?: boolean;
}

const CARD_EASE = [0.22, 1, 0.36, 1] as const;

const MILESTONES: Milestone[] = [
  {
    year: "2017",
    title: "Careerkick Founded",
    description:
      "Started as India's first online JEE counseling platform with transparent guidance at its core.",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784094060/founded_fayfhr.png",
    imageAlt: "Careerkick founding journey milestone",
    highlight: true,
  },
  {
    year: "2019",
    title: "YouTube Launch",
    description:
      "Launched dedicated channels for JEE, NEET, and MBA aspirants to scale free counseling awareness.",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784094054/counseling_tjrwlp.png",
    imageAlt: "Careerkick YouTube education launch",
  },
  {
    year: "2021",
    title: "100K Students Milestone",
    description:
      "Guided over one lakh students with structured counseling systems and expert-backed decisions.",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784094054/trust_zhqjxc.png",
    imageAlt: "Students celebrating counseling success",
  },
  {
    year: "2023",
    title: "300+ College Network",
    description:
      "Built India's largest college partnership network for better admission opportunities and planning.",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784094054/counseling_tjrwlp.png",
    imageAlt: "College partnership growth milestone",
    highlight: true,
  },
  {
    year: "2024",
    title: "Pan-India Offices",
    description:
      "Expanded physical presence to Noida, Kanpur, and Gorakhpur for stronger on-ground support.",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784094060/founded_fayfhr.png",
    imageAlt: "Careerkick office expansion across India",
  },
  {
    year: "2025",
    title: "1 Million Strong",
    description:
      "Crossed 10 lakh students guided, marking a national milestone in counseling impact.",
    image: "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784094054/trust_zhqjxc.png",
    imageAlt: "National milestone of one million students guided",
    highlight: true,
  },
];

const TimelineCard = memo(function TimelineCard({
  milestone,
  align,
}: {
  milestone: Milestone;
  align: "left" | "right";
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: CARD_EASE }}
      className={`group relative w-full ${align === "left" ? "md:origin-left" : "md:origin-right"}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-[#51A70A]/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

      <div
        className={`relative rounded-3xl p-px ${
          milestone.highlight
            ? "[background:linear-gradient(to_bottom,rgba(81,167,10,0.55),rgba(109,204,18,0.22),transparent)]"
            : "[background:linear-gradient(to_bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.05),transparent)]"
        }`}
      >
        <article className="flex flex-col overflow-hidden rounded-3xl border border-[#51A70A]/15 bg-white shadow-[0_20px_60px_rgba(16,24,40,0.08)]">
          {/* Square Image Container */}
          <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
            <img
              src={milestone.image}
              alt={milestone.imageAlt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
              loading="lazy"
            />

            {/* Overlay linear */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

            {/* Year Tag */}
            <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
              <CalendarDays size={12} className="text-violet-glow" />
              {milestone.year}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex grow flex-col justify-center p-6 sm:p-7">
            <h3 className="font-display text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
              {milestone.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
              {milestone.description}
            </p>
          </div>
        </article>
      </div>
    </motion.div>
  );
});

const MilestoneItem = memo(function MilestoneItem({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full">
      {/* Grid Layout */}
      <div className="grid grid-cols-[48px_1fr] items-start gap-6 md:grid-cols-[1fr_80px_1fr] md:gap-12">
        {/* Left Side (Desktop) */}
        <div className="hidden md:block">
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: CARD_EASE }}
            >
              <TimelineCard milestone={milestone} align="right" />
            </motion.div>
          )}
        </div>

        {/* Center Indicator */}
        <div className="relative flex justify-center pt-12 md:pt-20">
          <div className="z-20 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-slate-900 shadow-xl ring-2 ring-[#51A70A] sm:h-12 sm:w-12">
            <span className="text-[10px] font-black text-violet-glow sm:text-xs">
              {milestone.year}
            </span>
          </div>
          {/* Glow effect */}
          <div className="absolute top-12 h-12 w-12 rounded-full bg-[#51A70A] blur-xl md:top-20" />
        </div>

        {/* Right Side (Mobile Default + Desktop Right) */}
        <div className="w-full pb-8">
          {(!isLeft ||
            (typeof window !== "undefined" && window.innerWidth < 768)) && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: CARD_EASE }}
              className={isLeft ? "md:hidden" : ""}
            >
              <TimelineCard milestone={milestone} align="left" />
            </motion.div>
          )}
          {/* Logic to show on right side for desktop even-indexed items */}
          {!isLeft && (
            <div className="hidden md:block">
              {/* Handled by the motion.div above, but ensures spacing */}
            </div>
          )}
          {/* Ensure Left items on mobile show on the right column */}
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: CARD_EASE }}
              className="md:hidden"
            >
              <TimelineCard milestone={milestone} align="left" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
});

function JourneyTimelineComponent() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 20%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="journey-timeline"
      className="relative w-full overflow-hidden bg-white px-4 py-20 text-slate-900 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(81,167,10,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-5xl lg:text-6xl"
          >
            The Careerkick Journey
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-700">
            From a bold idea to nationwide impact, each milestone reflects our
            commitment to student-first admissions outcomes.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-slate-900/10 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated Line */}
          <svg
            className="absolute left-6 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-1/2"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M1 0 L1 100"
              stroke="#51A70A"
              strokeWidth="4"
              fill="none"
              style={{ pathLength }}
            />
          </svg>

          <div className="flex flex-col space-y-4 md:space-y-0">
            {MILESTONES.map((milestone, index) => (
              <MilestoneItem
                key={milestone.year}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(JourneyTimelineComponent);
