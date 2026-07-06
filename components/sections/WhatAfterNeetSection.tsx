"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const roadmap = [
  { step: "01", title: "Course Selection", body: "Choose the right medical, AYUSH, nursing, veterinary, or allied-health path." },
  { step: "02", title: "Shortlist Counselling Portal", body: "Map eligible state, AIQ, deemed, private, and institutional counselling routes." },
  { step: "03", title: "College Selection", body: "Compare seats, fees, cut-offs, location, bonds, and reporting requirements." },
];

const courses = [
  { code: "MBBS", name: "Bachelor of Medicine & Bachelor of Surgery", icon: "stethoscope" },
  { code: "BDS", name: "Bachelor of Dental Surgery", icon: "tooth" },
  { code: "BAMS", name: "Bachelor of Ayurvedic Medicine and Surgery", icon: "leaf" },
  { code: "BHMS", name: "Bachelor of Homeopathic Medicine and Surgery", icon: "bottle" },
  { code: "BUMS", name: "Bachelor of Unani Medicine and Surgery", icon: "herb" },
  { code: "BNYS", name: "Bachelor of Naturopathy and Yogic Science", icon: "yoga" },
  { code: "BVSc & AH", name: "Bachelor of Veterinary Science & Animal Husbandry", icon: "paw" },
  { code: "B.Sc Nursing", name: "Bachelor of Science in Nursing", icon: "dna" },
  { code: "And Many More", name: "Allied Health & Paramedical Courses", icon: "more" },
];

const highlights = [
  { nationality: "Indian", registered2024: "24,02,774", appeared2024: "23,30,090", qualified2024: "13,13,740", registered2025: "22,73,528", appeared2025: "22,06,968", qualified2025: "12,34,991" },
  { nationality: "Foreign", registered2024: "1,196", appeared2024: "1,122", qualified2024: "696", registered2025: "939", appeared2025: "870", qualified2025: "529" },
  { nationality: "NRI", registered2024: "1,304", appeared2024: "1,214", qualified2024: "801", registered2025: "741", appeared2025: "694", qualified2025: "405" },
  { nationality: "OCI", registered2024: "805", appeared2024: "736", qualified2024: "616", registered2025: "861", appeared2025: "786", qualified2025: "606" },
  { nationality: "Total", registered2024: "24,06,079", appeared2024: "23,33,162", qualified2024: "13,15,853", registered2025: "22,76,069", appeared2025: "22,09,318", qualified2025: "12,36,531" },
];

const cutoffs = [
  { category: "UR/EWS", percentile: ">=50th percentile", marks2023: "720-137", marks2024: "720-162", marks2025: "686-144" },
  { category: "OBC/SC/ST", percentile: ">=40th percentile", marks2023: "136-107", marks2024: "161-127", marks2025: "143-113" },
  { category: "UR/EWS & PwBD", percentile: ">=45th percentile", marks2023: "136-121", marks2024: "161-144", marks2025: "143-127" },
  { category: "OBC/SC & PwBD", percentile: ">=40th percentile", marks2023: "120-107", marks2024: "143-127", marks2025: "126-113" },
  { category: "ST & PwBD", percentile: ">=40th percentile", marks2023: "120-108", marks2024: "142-127", marks2025: "126-113" },
];

export function WhatAfterNeetSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf4] px-4 py-16 text-slate-950 md:px-8 md:py-24">
      {/* Background Blurs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#51A70A]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-0 h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-[140px] pointer-events-none" />
      <div className="grid-overlay absolute inset-0 opacity-[0.14] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="overflow-hidden rounded-3xl bg-[#061204] shadow-[0_28px_90px_rgba(6,18,4,0.25)]">
            <div className="relative grid min-h-[360px] gap-10 overflow-hidden p-8 text-white md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(81,167,10,0.48),transparent_30%),linear-gradient(135deg,#050704_0%,#073800_100%)]" />
              
              {/* Responsive Watermark */}
              <div className="absolute -bottom-10 -left-6 text-[100px] font-black leading-none text-white/[0.03] select-none sm:-bottom-16 sm:-left-10 sm:text-[160px] md:text-[220px]">
                NEET
              </div>
              
              <div className="relative z-10 flex flex-col justify-center max-w-3xl">
                <div className="inline-flex items-center self-start rounded-full border border-[#51A70A]/40 bg-[#51A70A]/15 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#8cef32]">
                  Roadmap after result
                </div>
                <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  What After <span className="block mt-2 bg-gradient-to-r from-[#51A70A] to-[#8cef32] bg-clip-text text-transparent">NEET?</span>
                </h2>
                <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-white/80 sm:text-lg md:text-xl">
                  Your complete roadmap for counselling, course selection, and securing your path to becoming a doctor.
                </p>
              </div>

              <div className="relative z-10 flex min-h-[200px] items-center justify-center lg:min-h-full">
                <motion.div
                  className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur-xl sm:h-52 sm:w-52 md:h-64 md:w-64"
                  animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-4 rounded-full border border-[#51A70A]/30 sm:inset-6 md:inset-8" />
                  <span className="font-display text-[6rem] font-bold leading-none text-white drop-shadow-2xl sm:text-[8rem] md:text-[10rem]">
                    ?
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="grid gap-4 border-t border-white/10 bg-gradient-to-r from-[#003d00] to-[#071407] p-4 sm:grid-cols-3 sm:p-5 md:gap-6 lg:p-8">
              {roadmap.map((item) => (
                <div key={item.step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-colors hover:bg-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#51A70A] bg-[#51A70A]/10 text-xl font-bold text-[#8cef32]">
                      {item.step}
                    </span>
                    <h3 className="font-display text-lg font-semibold leading-tight text-white md:text-xl">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-6 sm:mt-8">
          <ScrollReveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-[#51A70A]/20 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:p-8">
              <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#51A70A]">Courses after NEET</p>
                  <h3 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-[#083b25] sm:text-4xl">
                    Pick the right path before you pick the college.
                  </h3>
                </div>
                <span className="inline-flex shrink-0 rounded-full bg-[#51A70A]/10 px-4 py-2 text-sm font-bold text-[#245e05]">
                  9 Specialized Tracks
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <div key={course.code} className="group flex min-h-[112px] items-center gap-4 rounded-2xl border border-slate-200 bg-[#fbfdf9] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#51A70A]/40 hover:shadow-lg hover:shadow-[#51A70A]/5 sm:p-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#064c05] text-white shadow-md transition-transform group-hover:scale-105">
                      <CourseIcon name={course.icon} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-xl font-bold leading-none text-[#064233]">{course.code}</p>
                      <p className="mt-1.5 line-clamp-2 text-xs font-medium leading-relaxed text-slate-600 sm:text-sm">{course.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Tables stacked vertically to avoid extreme squishing on desktop */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8">
          <DataTableCard title="NEET UG Highlights Over The Last Two Years" eyebrow="Nationality Data">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-[#075a08] text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">Nationality</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap text-white/80">Registered (2024)</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">Appeared (2024)</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">Qualified (2024)</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap border-l border-white/20 text-white/80">Registered (2025)</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">Appeared (2025)</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap text-[#8cef32]">Qualified (2025)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {highlights.map((row) => (
                  <tr key={row.nationality} className="bg-white hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900 whitespace-nowrap">{row.nationality}</td>
                    <td className="px-5 py-4 font-medium text-slate-600 whitespace-nowrap">{row.registered2024}</td>
                    <td className="px-5 py-4 font-semibold text-slate-800 whitespace-nowrap">{row.appeared2024}</td>
                    <td className="px-5 py-4 font-semibold text-[#075a08] whitespace-nowrap">{row.qualified2024}</td>
                    <td className="px-5 py-4 font-medium text-slate-600 whitespace-nowrap border-l border-slate-100">{row.registered2025}</td>
                    <td className="px-5 py-4 font-semibold text-slate-800 whitespace-nowrap">{row.appeared2025}</td>
                    <td className="px-5 py-4 font-bold text-[#51A70A] whitespace-nowrap">{row.qualified2025}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTableCard>

          <DataTableCard title="Category-wise Qualified Cut-off Trend Analysis" eyebrow="Last Three Years">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-[#075a08] text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">Category</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">Qualifying Percentile</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">2023 Marks</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap">2024 Marks</th>
                  <th className="px-5 py-4 font-semibold whitespace-nowrap text-[#8cef32]">2025 Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {cutoffs.map((row) => (
                  <tr key={row.category} className="bg-white hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900 whitespace-nowrap">{row.category}</td>
                    <td className="px-5 py-4 font-medium text-slate-600 whitespace-nowrap">{row.percentile}</td>
                    <td className="px-5 py-4 font-semibold text-slate-700 whitespace-nowrap">{row.marks2023}</td>
                    <td className="px-5 py-4 font-semibold text-slate-700 whitespace-nowrap">{row.marks2024}</td>
                    <td className="px-5 py-4 font-bold text-[#51A70A] whitespace-nowrap">{row.marks2025}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </DataTableCard>
        </div>
      </div>
    </section>
  );
}

function DataTableCard({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal>
      <div className="rounded-3xl border border-[#51A70A]/20 bg-white p-4 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-5 md:p-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#51A70A]">{eyebrow}</p>
        <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">{title}</h3>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 sm:mt-6">
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
}

function CourseIcon({ name }: { name: string }) {
  const common = "h-7 w-7";

  switch (name) {
    case "tooth":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 2h10c1.5 0 2.5 1.5 2.5 3 0 2.5-1.5 4-1.5 5 0 2 .5 4 1 6 .5 2-1 4-3 4H8c-2 0-3.5-2-3-4 .5-2 1-4 1-6 0-1-1.5-2.5-1.5-5C4.5 3.5 5 2 7 2z" />
          <path d="M12 2v20" />
        </svg>
      );
    case "leaf":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 21c8-2 13-7 14-16-9 1-14 6-16 14" />
          <path d="M9 15c2 0 4 0 7-3" />
        </svg>
      );
    case "bottle":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 2h6" />
          <path d="M10 2v6l-2 3v9h8v-9l-2-3V2" />
          <path d="M8 14h8" />
        </svg>
      );
    case "herb":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14c4 0 7-3 8-7" />
          <path d="M8 14c1 3 3 4 6 4" />
        </svg>
      );
    case "yoga":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="5" r="2" />
          <path d="M12 8v6" />
          <path d="m7 21 5-7 5 7" />
          <path d="M5 11h14" />
        </svg>
      );
    case "paw":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="7" cy="8" r="2.5" />
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M7 14c-2 0-4 1.5-4 4 0 2.5 1.5 5 5 5h8c3.5 0 5-2.5 5-5 0-2.5-2-4-4-4-2 0-3 1.5-5 1.5S9 14 7 14z" />
        </svg>
      );
    case "dna":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 3c8 4 2 14 10 18" />
          <path d="M17 3C9 7 15 17 7 21" />
          <path d="M8 7h8" />
          <path d="M8 17h8" />
        </svg>
      );
    case "more":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 4v8a6 6 0 0 0 12 0V4" />
          <path d="M12 18v3" />
          <path d="M8 21h8" />
        </svg>
      );
  }
}
