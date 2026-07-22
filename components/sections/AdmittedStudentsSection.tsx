"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { GradientText } from "@/components/ui/GradientText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { admittedStudents } from "@/data/admittedStudents";
import { cn } from "@/lib/utils";
import type { AdmittedStudent } from "@/types";

type AdmittedStudentsSectionProps = {
  title?: string;
  subtitle?: string;
  students?: AdmittedStudent[];
  className?: string;
};

export function AdmittedStudentsSection({
  title = "Our Admitted Students",
  subtitle = "A glimpse of students who moved closer to their dream campuses with Careerkick guidance.",
  students = admittedStudents,
  className,
}: AdmittedStudentsSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-base px-4 py-section-mobile md:px-8 md:py-section", className)}>
      <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-violet/10 blur-[120px]" />
      <div className="absolute -right-28 top-24 h-96 w-96 rounded-full bg-cyan/10 blur-[130px]" />
      <div className="grid-overlay absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <SectionLabel className="mx-auto">Admissions</SectionLabel>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {title.includes("Students") ? (
              <>
                {title.replace("Students", "")}
                <GradientText>Students</GradientText>
              </>
            ) : (
              title
            )}
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-text-muted sm:text-lg lg:text-white">
              {subtitle}
            </p>
          ) : null}
        </ScrollReveal>

        <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-5 md:mt-14 md:space-y-8">
          <StudentMarqueeRow students={students} direction="right" duration={54} priorityCount={6} />
          <StudentMarqueeRow students={students} direction="left" duration={58} />
        </div>
      </div>
    </section>
  );
}

function StudentMarqueeRow({
  students,
  direction,
  duration,
  priorityCount = 0,
}: {
  students: AdmittedStudent[];
  direction: "left" | "right";
  duration: number;
  priorityCount?: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const repeatedStudents = useMemo(() => [...students, ...students], [students]);

  useCenterHighlight(rowRef, repeatedStudents.length);

  return (
    <div
      ref={rowRef}
      className="relative left-1/2 w-[100vw] -translate-x-1/2 overflow-hidden py-1.5 sm:py-2"
      style={{
        "--marquee-duration": `${duration}s`,
        maskImage:
          "linear-gradient(90deg, transparent 0, black clamp(1.25rem, 8vw, 4rem), black calc(100% - clamp(1.25rem, 8vw, 4rem)), transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0, black clamp(1.25rem, 8vw, 4rem), black calc(100% - clamp(1.25rem, 8vw, 4rem)), transparent 100%)",
      } as React.CSSProperties}
      aria-label="Admitted student photos"
    >
      <ul
        className={cn(
          "flex w-max list-none gap-3 whitespace-nowrap sm:gap-5 md:gap-6 lg:gap-7",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        )}
      >
        {repeatedStudents.map((student, index) => (
          <li key={`${direction}-${student.id}-${index}`} className="shrink-0">
            <StudentPhotoCard student={student} priority={index < priorityCount} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function StudentPhotoCard({ student, priority }: { student: AdmittedStudent; priority?: boolean }) {
  return (
    <div
      data-student-card
      className="relative aspect-[3/4] w-[clamp(92px,28vw,118px)] overflow-hidden rounded-[16px] border border-white/10 bg-surface-2 shadow-card sm:w-[148px] sm:rounded-lg md:w-[184px] lg:w-[216px]"
      style={{
        filter:
          "grayscale(calc((1 - var(--center-power, 0)) * 100%)) brightness(calc(0.84 + (var(--center-power, 0) * 0.24)))",
        transform: "scale(calc(0.96 + (var(--center-power, 0) * 0.09)))",
        boxShadow:
          "0 4px 24px rgba(0,0,0,0.40), 0 0 calc(var(--center-power, 0) * 42px) rgba(81,167,10,0.28)",
        willChange: "transform, filter",
      }}
    >
      <Image
        src={student.image}
        alt={`Admitted student ${student.id}`}
        fill
        sizes="(max-width: 640px) 28vw, (max-width: 768px) 148px, (max-width: 1024px) 184px, 216px"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}

function useCenterHighlight(rowRef: React.RefObject<HTMLDivElement>, cardCount: number) {
  useEffect(() => {
    const row = rowRef.current;
    if (!row) {
      return;
    }

    const cards = Array.from(row.querySelectorAll<HTMLElement>("[data-student-card]"));
    let frameId = 0;

    const updateCards = () => {
      const viewportCenter = window.innerWidth / 2;
      const activeRange = Math.min(Math.max(window.innerWidth * 0.42, 190), 430);

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        const rawPower = Math.max(0, 1 - distance / activeRange);
        // Smoothstep makes neighboring cards interpolate naturally instead of snapping.
        const centerPower = rawPower * rawPower * (3 - 2 * rawPower);

        card.style.setProperty("--center-power", centerPower.toFixed(3));
      });

      frameId = window.requestAnimationFrame(updateCards);
    };

    frameId = window.requestAnimationFrame(updateCards);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [cardCount, rowRef]);
}
