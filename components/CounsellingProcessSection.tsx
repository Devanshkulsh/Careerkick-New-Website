"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButtons } from "@/components/CTAButtons";
import { BlogCard } from "@/components/blog/BlogCard";
import { cn } from "@/lib/utils";
import { counsellingProcessVideos } from "@/data/counsellingProcessVideos";
import type { WPPost } from "@/types/wordpress";
import type { CounsellingNotification } from "@/lib/sanityNotifications";

type CounsellingTab = {
  title: string;
  description: string;
  kicker: string;
  icon: string;
  points: string[];
  metric: string;
  kind?:
    "video" | "blogs" | "notifications" | "cutoff" | "courses" | "colleges";
};

const counsellingTabs: CounsellingTab[] = [
  {
    title: "Notifications",
    description:
      "Stay ahead with timely updates on counselling rounds, deadlines, and critical announcements.",
    kicker: "Live alerts",
    icon: "notification",
    points: [
      "Round-wise deadlines",
      "Document and reporting reminders",
      "Important authority announcements",
    ],
    metric: "Never miss a critical date",
    kind: "notifications",
  },
  {
    title: "Cut-off Analysis",
    description:
      "Analyze past cut-offs and seat availability to understand trends and evaluate your chances.",
    kicker: "Rank intelligence",
    icon: "cutoff",
    points: [
      "Previous round cut-offs",
      "Category and quota trends",
      "Seat movement visibility",
    ],
    metric: "Smarter chance evaluation",
    kind: "cutoff",
  },
  {
    title: "Courses after NEET",
    description:
      "Compare medical, AYUSH, nursing, veterinary, and allied-health paths after NEET.",
    kicker: "Courses after NEET",
    icon: "courses",
    points: [
      "Medical and dental options",
      "AYUSH and nursing tracks",
      "Allied-health pathways",
    ],
    metric: "Choose the right course path",
    kind: "courses",
  },
  {
    title: "Colleges",
    description:
      "Explore colleges with all essential information, insights, and counselling data.",
    kicker: "College explorer",
    icon: "college",
    points: [
      "Fees, bonds, seats, and location",
      "Counselling data in one view",
      "Shortlist-ready college insights",
    ],
    metric: "Clear college comparison",
    kind: "colleges",
  },
  {
    title: "Allotment Mapping",
    description:
      "See where candidates are allotted across counsellings to identify vacancies and predict movement in upcoming rounds.",
    kicker: "Movement map",
    icon: "mapping",
    points: [
      "Round-wise allotment patterns",
      "Vacancy and upgrade signals",
      "Better next-round predictions",
    ],
    metric: "Understand seat movement",
  },
  {
    title: "Video Guides",
    description: "",
    kicker: "Watch and learn",
    icon: "video",
    points: [
      "Counselling explainers",
      "Choice filling guidance",
      "Next-step walkthroughs",
    ],
    metric: "Guidance in simple videos",
    kind: "video",
  },
  {
    title: "Blogs",
    description:
      "Read practical NEET counselling updates, college comparison guides, and deadline-focused admission insights.",
    kicker: "Latest updates",
    icon: "blogs",
    points: [
      "Counselling strategy articles",
      "College comparison guides",
      "Deadline and admission explainers",
    ],
    metric: "Stay ahead with useful reads",
    kind: "blogs",
  },
];

const videoPlaylist = counsellingProcessVideos.map((video) => ({
  ...video,
  videoId: getYoutubeVideoId(video.youtubeUrl),
}));

const youtubeChannels = [
  {
    id: "careerkick-neet",
    title: "Careerkick NEET",
    subscribers: "206K subscribers",
    href: "https://www.youtube.com/@careerkickneet",
  },
  {
    id: "careerkick-jee",
    title: "Careerkick JEE",
    subscribers: "42.8K subscribers",
    href: "https://www.youtube.com/@CAREERKICKJEE",
  },
];

function getYoutubeVideoId(url: string) {
  const trimmed = url.trim();
  const match = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );

  return match?.[1] ?? "";
}

function getYoutubeEmbedUrl(url: string) {
  const videoId = getYoutubeVideoId(url);

  if (!videoId) {
    return url.trim();
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1`;
}

function getYoutubeThumbnailUrl(url: string) {
  const videoId = getYoutubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
}

const featuredColleges = [
  {
    name: "BHU - Faculty of Ayurveda, Varanasi",
    imageSrc:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783588884/ChatGPT_Image_Jul_8_2026_05_25_57_PM_2_atj3bk.png",
    accent: "from-[#f97316]/70 via-[#fbbf24]/35 to-[#fde68a]/10",
  },
  {
    name: "NIA Jaipur - National Institute of Ayurveda, Jaipur",
    imageSrc:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783425008/2_v8sy2x.png",
    accent: "from-[#51A70A]/70 via-[#86efac]/30 to-[#d1fae5]/10",
  },
  {
    name: "ITRA Jamnagar, Gujarat - Institute of Teaching & Research in Ayurveda",
    imageSrc:
      "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783425009/1_hhcazc.png",
    accent: "from-[#0ea5e9]/70 via-[#38bdf8]/30 to-[#dbeafe]/10",
  },
];

const collegeIcons = [
  { name: "Location", icon: "pin", x: "8%", y: "60%" },
  { name: "Accommodation", icon: "home", x: "30%", y: "18%" },
  { name: "Food", icon: "fork", x: "56%", y: "12%" },
  { name: "Clinical", icon: "plus", x: "79%", y: "30%" },
  { name: "Social", icon: "at", x: "92%", y: "64%" },
];

const neetCourses = [
  {
    code: "MBBS",
    name: "Bachelor of Medicine & Bachelor of Surgery",
    icon: "stethoscope",
  },
  { code: "BDS", name: "Bachelor of Dental Surgery", icon: "tooth" },
  {
    code: "BAMS",
    name: "Bachelor of Ayurvedic Medicine and Surgery",
    icon: "leaf",
  },
  {
    code: "BHMS",
    name: "Bachelor of Homeopathic Medicine and Surgery",
    icon: "bottle",
  },
  {
    code: "BUMS",
    name: "Bachelor of Unani Medicine and Surgery",
    icon: "herb",
  },
  {
    code: "BNYS",
    name: "Bachelor of Naturopathy and Yogic Science",
    icon: "yoga",
  },
  {
    code: "BVSc & AH",
    name: "Bachelor of Veterinary Science & Animal Husbandry",
    icon: "paw",
  },
  { code: "B.Sc Nursing", name: "Bachelor of Science in Nursing", icon: "dna" },
  {
    code: "And Many More",
    name: "Allied Health & Paramedical Courses",
    icon: "more",
  },
];

const fallbackNotifications: CounsellingNotification[] = [
  {
    id: "fallback-mcc-registration",
    title: "NEET UG Counselling 2026 - Round 1 Registration",
    subtitle:
      "Registration and payment window opens for All India Quota, deemed, central, and ESIC seats.",
    category: "MCC Notice",
    dateLabel: "JUL 21",
    linkLabel: "Registration Portal",
    linkUrl: "#",
    variant: "notice",
  },
  {
    id: "fallback-state-schedule",
    title: "Maharashtra NEET UG Counselling",
    subtitle:
      "State quota registration, document upload, and fee payment schedule is live.",
    category: "State Counselling",
    startLabel: "Jul 25, 10:00 am",
    endLabel: "Aug 2, 05:00 pm",
    linkLabel: "View Schedule",
    linkUrl: "#",
    variant: "schedule",
  },
  {
    id: "fallback-choice-filling",
    title: "Choice Filling For Round 2 Ends at 4pm Today!",
    subtitle:
      "Lock your MBBS/BDS choices before the deadline to avoid missing preferred colleges.",
    category: "Urgent Alert",
    dateLabel: "Today",
    variant: "urgent",
  },
];

const mccCutoffRows = [
  {
    course: "MBBS",
    gen: ["27360", "525"],
    ews: ["30921", "521"],
    obc: ["27421", "525"],
    sc: ["139123", "439"],
    st: ["164804", "425"],
  },
  {
    course: "BDS",
    gen: ["70846", "485"],
    ews: ["75671", "481"],
    obc: ["72138", "484"],
    sc: ["242438", "384"],
    st: ["361901", "331"],
  },
  {
    course: "BAMS",
    gen: ["90115", "471"],
    ews: ["93713", "468"],
    obc: ["91836", "470"],
    sc: ["246949", "382"],
    st: ["289217", "362"],
  },
  {
    course: "BHMS",
    gen: ["172189", "420"],
    ews: ["192629", "409"],
    obc: ["172569", "420"],
    sc: ["331789", "343"],
    st: ["560764", "262"],
  },
  {
    course: "BUMS",
    gen: ["163606", "425"],
    ews: ["214015", "398"],
    obc: ["173760", "420"],
    sc: ["451851", "297"],
    st: ["730540", "216"],
  },
];

const upSeatAllotmentRows = [
  {
    course: "MBBS",
    gen: ["32774", "519"],
    ews: ["33103", "519"],
    obc: ["32905", "519"],
    sc: ["192636", "406"],
    st: ["543243", "267"],
  },
  {
    course: "BDS",
    gen: ["36937", "514"],
    ews: "NA",
    obc: ["36152", "515"],
    sc: ["201966", "404"],
    st: ["659060", "234"],
  },
  {
    course: "BAMS",
    gen: ["68248", "487"],
    ews: ["72396", "484"],
    obc: ["70514", "485"],
    sc: ["234827", "388"],
    st: ["689909", "236"],
  },
  {
    course: "BHMS",
    gen: ["209518", "400"],
    ews: ["233408", "388"],
    obc: ["220476", "395"],
    sc: ["415976", "310"],
    st: ["1232122", "124"],
  },
  {
    course: "BUMS",
    gen: ["122835", "449"],
    ews: ["153119", "431"],
    obc: ["142189", "438"],
    sc: ["494182", "283"],
    st: "NA",
  },
];

export function CounsellingProcessSection({
  blogPosts = [],
  notifications = [],
}: {
  blogPosts?: WPPost[];
  notifications?: CounsellingNotification[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileTabsOpen, setIsMobileTabsOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(
    videoPlaylist[0]?.id ?? "",
  );
  const activeTab = counsellingTabs[activeIndex];
  const activeVideo =
    videoPlaylist.find((video) => video.id === activeVideoId) ??
    videoPlaylist[0];
  const hasActiveVideoUrl = Boolean(activeVideo?.youtubeUrl.trim());
  const isVideo = activeTab.kind === "video";
  const isBlogs = activeTab.kind === "blogs";
  const isNotifications = activeTab.kind === "notifications";
  const isCutoff = activeTab.kind === "cutoff";
  const isCourses = activeTab.kind === "courses";
  const isColleges = activeTab.kind === "colleges";

  return (
    <section className="relative overflow-hidden bg-[#f7faf4] px-4 py-section-mobile text-slate-950 md:px-8 md:py-section">
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#51A70A]/10 blur-[110px]" />
      <div className="absolute -right-28 bottom-16 h-96 w-96 rounded-full bg-emerald/10 blur-[120px]" />
      <div className="grid-overlay absolute inset-0 opacity-[0.18]" />

      <div className="relative mx-auto max-w-[1500px]">
        <ScrollReveal className="relative z-20 mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[#51A70A]/30 bg-white px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-widest text-[#51A70A] shadow-sm sm:mb-5 sm:px-4 sm:text-xs">
            Counselling Toolkit
          </span>

          <h2 className="mx-auto max-w-4xl font-display text-[2rem] font-bold leading-[1.08] tracking-normal text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl">
            Everything you need to move through{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              counselling with clarity.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-relaxed text-slate-700 sm:mt-6 sm:text-base md:text-lg">
            Track updates, study cut-offs, compare colleges, map allotments,
            watch guides, and organize your choice list in one guided flow.
          </p>

          <CTAButtons />
        </ScrollReveal>

        <ScrollReveal className="mt-10 sm:mt-12" delay={0.12}>
          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black bg-cover bg-center bg-no-repeat shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            style={{
              backgroundImage: isCutoff
                ? "url('https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783586008/ChatGPT_Image_Jul_9_2026_01_57_01_PM_dbwwtc.png')"
                : undefined,
            }}
          >
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[#020402]/95" />
            <AnimatePresence mode="wait" initial={false}>
              {isVideo ? (
                <motion.div
                  key="video-card-background"
                  className="absolute inset-0 z-[2]"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  {hasActiveVideoUrl ? (
                    <>
                      <iframe
                        title="Careerkick video guide"
                        src={getYoutubeEmbedUrl(activeVideo?.youtubeUrl ?? "")}
                        className="h-full w-full scale-125 object-cover"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="absolute inset-0 bg-black/72" />
                    </>
                  ) : (
                    <div className="absolute inset-0 z-[2] bg-[#050704]/45" />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="black-card-background"
                  className="absolute inset-0 z-[2] bg-[#050704]/45"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>

            <div className="grid-overlay absolute inset-0 z-[3] opacity-10" />
            <div className="absolute -right-24 -top-24 z-[3] h-72 w-72 rounded-full bg-[#51A70A]/18 blur-[90px]" />
            <div className="absolute -bottom-28 left-10 z-[3] h-80 w-80 rounded-full bg-cyan/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col lg:grid lg:min-h-[680px] lg:grid-cols-[410px_1fr] xl:grid-cols-[430px_1fr]">
              <div className="border-b border-white/10 px-3 py-3 lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileTabsOpen((current) => !current)}
                  className="flex w-full items-center justify-between rounded-2xl border border-slate-500/30 bg-white/8 px-4 py-3 text-left text-white shadow-[0_14px_38px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                  aria-expanded={isMobileTabsOpen}
                  aria-label="Toggle counselling tabs"
                >
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.28em] text-[#8cef32]">
                      Section tabs
                    </span>
                    <span className="mt-1 block truncate font-display text-base font-semibold">
                      {activeTab.title}
                    </span>
                  </span>
                  <span className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-black/35 text-white">
                    {isMobileTabsOpen ? <CloseIcon /> : <MenuIcon />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isMobileTabsOpen ? (
                    <motion.div
                      key="mobile-tabs"
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="mt-3 overflow-hidden rounded-2xl border border-white/12 bg-black/45 p-2 backdrop-blur-xl"
                    >
                      <div className="max-h-[52vh] overflow-y-auto pr-1">
                        <div className="grid gap-2">
                          {counsellingTabs.map((tab, index) => {
                            const active = index === activeIndex;

                            return (
                              <button
                                key={`mobile-${tab.title}`}
                                type="button"
                                onClick={() => {
                                  setActiveIndex(index);
                                  setIsMobileTabsOpen(false);
                                }}
                                className={cn(
                                  "flex min-h-[54px] w-full items-center gap-3 rounded-2xl border-[0.75px] px-3 py-3 text-left transition-all duration-300",
                                  active
                                    ? "border-slate-400/40 bg-white/16 shadow-[0_16px_36px_rgba(81,167,10,0.12)]"
                                    : "border-slate-600/30 bg-white/6 hover:border-slate-500/45 hover:bg-white/10",
                                )}
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#51A70A] shadow-card">
                                  <FeatureIcon name={tab.icon} />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block truncate font-display text-sm font-semibold text-white">
                                    {tab.title}
                                  </span>
                                  <span className="block truncate text-[11px] text-white/60">
                                    {tab.kicker}
                                  </span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <aside className="relative z-30 hidden flex-col justify-center px-3 py-6 text-white lg:flex lg:px-8 lg:py-10">
                <div className="mb-6 max-w-[450px] sm:mb-8 lg:mb-10">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8cef32] sm:text-xs">
                    Services
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-[1.05] text-white sm:text-4xl lg:text-5xl">
                    What We Offer
                  </h3>
                </div>

                <div className="grid w-full gap-3 sm:grid-cols-2 lg:max-w-[450px] lg:grid-cols-1">
                  {counsellingTabs.map((tab, index) => {
                    const active = index === activeIndex;

                    return (
                      <motion.button
                        key={tab.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "group flex w-full items-center gap-3 rounded-full border-[0.75px] px-4 py-3 text-left text-white transition-all duration-500 ease-out backdrop-blur-xl focus-visible:shadow-[0_0_0_2px_#51A70A,0_0_0_5px_#050704]",
                          active
                            ? "min-h-[110px] w-full items-start rounded-2xl border-slate-400/40 bg-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:min-h-[132px] lg:max-w-[450px]"
                            : "min-h-[60px] w-full border-slate-600/30 bg-white/10 pr-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:border-slate-500/45 hover:bg-white/15 lg:max-w-max",
                        )}
                        aria-pressed={active}
                        layout
                        whileHover={{ y: -1.5 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 24,
                        }}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#51A70A] shadow-card">
                          <FeatureIcon name={tab.icon} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-base font-semibold leading-tight text-white">
                            {tab.title}
                          </span>
                          {active && tab.description && (
                            <span className="mt-2 block w-full text-xs leading-relaxed text-white/68 sm:mt-3 sm:max-w-sm sm:text-sm">
                              {tab.description}
                            </span>
                          )}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </aside>

              <div className="relative z-10 min-h-[420px] overflow-hidden p-3 text-white sm:p-6 lg:min-h-[680px] lg:p-8">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeTab.title}
                    className={cn(
  "relative z-10 flex min-h-[340px] flex-col items-center justify-center sm:min-h-[450px] lg:min-h-[616px]",
  isVideo &&
    "min-h-0 w-full items-stretch justify-start sm:min-h-0 lg:absolute lg:inset-8 lg:w-auto lg:items-center lg:justify-center lg:min-h-0",
)}
                    initial={{
                      opacity: 0,
                      y: 24,
                      scale: 0.985,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -14,
                      scale: 0.985,
                      filter: "blur(10px)",
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {isNotifications ? (
                      <NotificationsVisual
                        activeIndex={activeIndex}
                        notifications={
                          notifications.length > 0
                            ? notifications
                            : fallbackNotifications
                        }
                      />
                    ) : isBlogs ? (
                      <BlogsVisual
                        activeIndex={activeIndex}
                        posts={blogPosts}
                      />
                    ) : isCutoff ? (
                      <CutoffVisual
                        activeTab={activeTab}
                        activeIndex={activeIndex}
                      />
                    ) : isVideo ? (
                      <VideoGuidesVisual
                        activeTab={activeTab}
                        activeIndex={activeIndex}
                        activeVideoId={activeVideo?.id ?? ""}
                        onSelectVideo={setActiveVideoId}
                      />
                    ) : isCourses ? (
                      <CoursesVisual
                        activeTab={activeTab}
                        activeIndex={activeIndex}
                      />
                    ) : isColleges ? (
                      <CollegesVisual
                        activeTab={activeTab}
                        activeIndex={activeIndex}
                      />
                    ) : !isVideo ? (
                      <FeatureVisual
                        activeTab={activeTab}
                        activeIndex={activeIndex}
                      />
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CoursesVisual({
  activeTab,
  activeIndex,
}: {
  activeTab: CounsellingTab;
  activeIndex: number;
}) {
  return (
    <div className="flex h-full min-h-[400px] w-full flex-col justify-between py-4 lg:min-h-[520px] lg:py-0">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#51A70A]/55 bg-[#51A70A]/15 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#51A70A]">
            {activeTab.kicker}
          </span>
          <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/75">
            Tab {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
          {activeTab.title}
        </h4>
        <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white/82 sm:mt-5 sm:text-base lg:text-lg">
          {activeTab.description}
        </p>
      </div>

      <div className="mt-8 grid w-full gap-3 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {neetCourses.map((course) => (
          <div
            key={course.code}
            className="group relative flex min-h-[88px] items-center gap-3 overflow-hidden rounded-2xl border border-white/12 bg-white p-3 text-slate-950 shadow-[0_28px_60px_rgba(0,0,0,0.18),0_10px_0_rgba(6,76,5,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#51A70A]/45 hover:shadow-[0_34px_74px_rgba(0,0,0,0.24),0_14px_0_rgba(6,76,5,0.10)] sm:min-h-[112px] sm:gap-4 sm:p-4"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.65)_28%,rgba(255,255,255,0.15)_100%)] opacity-90" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#51A70A]/10 blur-2xl" />
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#064c05] text-white shadow-md transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
              <CourseIcon name={course.icon} />
            </span>
            <span className="relative min-w-0">
              <span className="block font-display text-lg font-bold leading-none text-[#064233] sm:text-xl">
                {course.code}
              </span>
              <span className="mt-1.5 block text-xs font-medium leading-relaxed text-slate-600 sm:text-sm">
                {course.name}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollegesVisual({
  activeTab,
  activeIndex,
}: {
  activeTab: CounsellingTab;
  activeIndex: number;
}) {
  const [activeCollegeIndex, setActiveCollegeIndex] = useState(0);

  const activeCollege =
    featuredColleges[activeCollegeIndex] ?? featuredColleges[0];

  // Icons moved upward so they do not overlap the center image card
  const desktopIconArcPositions = [
    { left: "5%", top: "52%" },
    { left: "24%", top: "28%" },
    { left: "50%", top: "10%" },
    { left: "76%", top: "28%" },
    { left: "95%", top: "52%" },
  ];

  const mobileIconArcPositions = [
    { left: "10%", top: "78%" },
    { left: "29%", top: "48%" },
    { left: "50%", top: "18%" },
    { left: "71%", top: "48%" },
    { left: "90%", top: "78%" },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCollegeIndex(
        (current) => (current + 1) % featuredColleges.length,
      );
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full min-h-[400px] w-full flex-col justify-between py-4 lg:min-h-[520px] lg:py-0">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#51A70A]/55 bg-[#51A70A]/15 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#51A70A]">
            {activeTab.kicker}
          </span>

          <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/75">
            Tab {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
          {activeTab.title}
        </h4>

        <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white/82 sm:mt-5 sm:text-base lg:text-lg">
          {activeTab.description}
        </p>
      </div>

      <div className="relative isolate mt-8 flex min-h-[540px] w-full flex-col items-center justify-start overflow-hidden px-3 py-3 sm:mt-10 sm:min-h-[570px] sm:px-6 sm:py-6 lg:min-h-[500px] lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-[54%] h-[70%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#51A70A]/12 blur-[90px]" />
        <div className="pointer-events-none absolute right-12 top-12 h-32 w-32 rounded-full bg-cyan/10 blur-[70px]" />
        <div className="pointer-events-none absolute bottom-10 left-12 h-36 w-36 rounded-full bg-[#51A70A]/10 blur-[80px]" />

        {/* Mobile top icons */}
        <div className="relative z-40 h-[180px] w-full max-w-[360px] pt-4 sm:hidden">
          {collegeIcons.map((item, index) => {
            const position = mobileIconArcPositions[index];

            return (
              <span
                key={`mobile-${item.name}`}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
                style={{
                  left: position.left,
                  top: position.top,
                }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white text-slate-700 shadow-[0_14px_34px_rgba(0,0,0,0.28)] min-[390px]:h-10 min-[390px]:w-10">
                  <FeatureIcon name={item.icon} />
                </span>

                <span className="w-[68px] whitespace-normal break-words text-center text-[8px] font-semibold leading-tight text-white/82 min-[390px]:w-[76px] min-[390px]:text-[9px]">
                  {item.name}
                </span>
              </span>
            );
          })}
        </div>

        {/* Desktop top icons */}
        <div className="pointer-events-none absolute left-1/2 top-5 z-40 hidden h-[320px] w-full max-w-[940px] -translate-x-1/2 sm:block lg:top-10">
          {collegeIcons.map((item, index) => {
            const position = desktopIconArcPositions[index];

            return (
              <span
                key={item.name}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
                style={{
                  left: position.left,
                  top: position.top,
                }}
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-full border border-white/20 bg-white text-slate-700 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:h-14 sm:w-14">
                  <FeatureIcon name={item.icon} />
                </span>

                <span className="max-w-[120px] text-sm font-semibold leading-tight text-white/88">
                  {item.name}
                </span>
              </span>
            );
          })}
        </div>

        {/* Main + upcoming card stage */}
        <div
          className="relative z-30 mt-4 flex w-full max-w-[590px] items-center justify-center sm:mt-[150px] lg:max-w-[900px] lg:mt-[135px]"
          style={{ perspective: "1400px" }}
        >
          {/* Main center image card */}
          <AnimatePresence mode="wait">
            <motion.article
              key={`active-${activeCollege.name}`}
              initial={{
                opacity: 0,
                rotateY: 78,
                scale: 0.92,
                x: 42,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                scale: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                rotateY: -78,
                scale: 0.92,
                x: -42,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.72,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative z-20 flex h-full w-full flex-col overflow-hidden rounded-[28px] border border-white/14 bg-white p-3 text-slate-950 shadow-[0_34px_90px_rgba(0,0,0,0.38),0_14px_0_rgba(81,167,10,0.08)] sm:rounded-[36px] sm:p-4 lg:max-w-[650px] lg:translate-x-24 lg:h-[560px] xl:max-w-[700px] xl:translate-x-28 xl:h-[600px]"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${activeCollege.accent} opacity-20`}
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />

              <div className="relative flex-1 overflow-hidden rounded-[22px] border border-white/70 bg-slate-100 shadow-[0_18px_46px_rgba(0,0,0,0.18)] sm:rounded-[30px]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={activeCollege.imageSrc}
                    alt={activeCollege.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 92vw, (max-width: 1280px) 60vw, 560px"
                    priority
                  />
                </div>
              </div>

              <div className="relative flex min-h-[72px] items-center justify-center px-2 pb-2 pt-4 text-center sm:min-h-[88px] sm:pt-5 lg:min-h-[104px]">
                <h5 className="mx-auto max-w-[92%] font-display text-base font-bold leading-snug text-slate-950 sm:text-2xl">
                  {activeCollege.name}
                </h5>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="relative z-50 mt-7 flex items-center justify-center gap-2">
          {featuredColleges.map((college, index) => {
            const active = index === activeCollegeIndex;

            return (
              <button
                key={college.name}
                type="button"
                onClick={() => setActiveCollegeIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  active
                    ? "w-8 bg-[#8cef32]"
                    : "w-2 bg-white/25 hover:bg-white/50",
                )}
                aria-label={`Show ${college.name}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function VideoGuidesVisual({
  activeTab,
  activeIndex,
  activeVideoId,
  onSelectVideo,
}: {
  activeTab: CounsellingTab;
  activeIndex: number;
  activeVideoId: string;
  onSelectVideo: (videoId: string) => void;
}) {
  const playlist = useMemo(() => [...videoPlaylist, ...videoPlaylist], []);

  return (
    <div className="relative flex w-full flex-col gap-4 py-1 sm:gap-5 lg:h-full lg:min-h-full lg:gap-4 lg:py-0">
      <div className="w-full max-w-3xl">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <span className="rounded-full border border-[#51A70A]/55 bg-[#51A70A]/15 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8cef32] backdrop-blur-xl sm:tracking-[0.28em]">
            {activeTab.kicker}
          </span>

          <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/75 backdrop-blur-xl sm:tracking-[0.24em]">
            Tab {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="mt-4 max-w-2xl font-display text-[1.75rem] font-bold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
          {activeTab.title}
        </h4>
      </div>

      <div className="relative mt-1 flex w-full flex-1 flex-col gap-4 lg:mt-4 lg:pb-[172px]">
        <div className="grid gap-3 sm:grid-cols-2 lg:gap-3">
          {youtubeChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${channel.title} on YouTube`}
              className="group relative overflow-hidden rounded-2xl border border-white/18 bg-white/[0.11] p-3 text-left shadow-[0_18px_46px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#51A70A]/55 hover:bg-white/[0.16] sm:p-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-[#51A70A]/14 opacity-80" />
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-red-500/18 blur-2xl" />

              <div className="relative flex min-h-[96px] flex-col justify-between sm:min-h-[122px]">
                <div className="flex items-start justify-between gap-2.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_16px_36px_rgba(220,38,38,0.32)] sm:h-11 sm:w-11">
                    <PlayIcon />
                  </span>

                  <span className="rounded-full border border-white/16 bg-black/25 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur-xl sm:px-3 sm:text-[10px] sm:tracking-[0.2em]">
                    YouTube
                  </span>
                </div>

                <div className="mt-3 min-w-0">
                  <p className="break-words font-display text-sm font-semibold leading-tight text-white sm:text-lg">
                    {channel.title}
                  </p>
                  <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#8cef32] sm:text-xs">
                    {channel.subscribers}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="lg:absolute lg:inset-x-0 lg:bottom-0">
          <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8cef32] sm:text-xs sm:tracking-[0.28em]">
                Video playlist
              </p>

            </div>

            <div
              className="mask-fade-x overflow-hidden pb-0"
              style={{ "--marquee-duration": "44s" } as CSSProperties}
            >
              <div className="flex w-max gap-3 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
                {playlist.map((video, index) => {
                  const isActive = video.id === activeVideoId;
                  const isPlayable = Boolean(video.youtubeUrl.trim());
                  const thumbnailUrl = getYoutubeThumbnailUrl(video.youtubeUrl);

                  return (
                    <button
                      key={`${video.id}-${index}`}
                      type="button"
                      onClick={() => isPlayable && onSelectVideo(video.id)}
                      disabled={!isPlayable}
                      className={cn(
                        "group relative flex w-[148px] shrink-0 overflow-hidden rounded-2xl border text-left transition-all duration-300 sm:w-[200px] md:w-[230px] lg:w-[240px]",
                        isPlayable
                          ? "border-white/12 bg-black/35 hover:-translate-y-0.5 hover:border-[#51A70A]/45 hover:bg-black/50"
                          : "cursor-not-allowed border-white/8 bg-black/25 opacity-60",
                        isActive &&
                          "border-[#51A70A]/55 bg-[#51A70A]/12 shadow-[0_0_0_1px_rgba(81,167,10,0.2)]"
                      )}
                      aria-pressed={isActive}
                      aria-label={
                        isPlayable
                          ? `Play ${video.title}`
                          : `${video.title} coming soon`
                      }
                    >
                      <div className="relative aspect-video w-full">
                        {thumbnailUrl ? (
                          <Image
                            src={thumbnailUrl}
                            alt={video.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,rgba(81,167,10,0.24),rgba(0,0,0,0.78))]">
                            <PlayIcon />
                          </div>
                        )}

                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.18)_100%)]" />

                        {isActive ? (
                          <div className="absolute left-2 top-2 rounded-full border border-white/15 bg-black/45 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-white/80 backdrop-blur sm:text-[9px] sm:tracking-[0.2em]">
                            Playing
                          </div>
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationsVisual({
  activeIndex,
  notifications,
}: {
  activeIndex: number;
  notifications: CounsellingNotification[];
}) {
  return (
    <div className="flex h-full min-h-[400px] w-full flex-col justify-between py-4 lg:min-h-[520px] lg:py-0">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#51A70A]/55 bg-[#51A70A]/15 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#51A70A]">
            Live alerts
          </span>
          <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/75">
            Tab {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
          Notifications
        </h4>
        <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white/82 sm:mt-5 sm:text-base lg:text-lg">
          Stay ahead with timely updates on counselling rounds, deadlines, and
          critical announcements.
        </p>
      </div>

      <div className="relative mt-7 min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-3 sm:mt-10 sm:rounded-3xl sm:p-6 lg:min-h-[500px]">
        <div className="absolute -left-16 bottom-4 h-40 w-40 rounded-full bg-red-600/12 blur-[70px]" />
        <div className="absolute right-5 top-5 hidden h-14 w-14 items-center justify-center rounded-full bg-[#fff6dd] text-slate-950 shadow-card sm:flex lg:right-7 lg:top-7 lg:h-16 lg:w-16">
          <NotificationBellIcon />
        </div>
        <div className="absolute bottom-5 left-5 hidden h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_18px_46px_rgba(220,38,38,0.34)] sm:flex lg:bottom-7 lg:left-6 lg:h-16 lg:w-16">
          <AlertIcon />
        </div>

        <div className="relative z-10 grid gap-3 sm:gap-4 lg:mx-auto lg:block lg:min-h-[435px] lg:max-w-[920px]">
          {notifications.slice(0, 3).map((notification, index) => (
            <NotificationCard
              key={notification.id || notification.title}
              notification={notification}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NotificationCard({
  notification,
  index,
}: {
  notification: CounsellingNotification;
  index: number;
}) {
  const variant = notification.variant || "notice";
  const isUrgent = variant === "urgent";
  const isSchedule = variant === "schedule";
  const positionClass =
    index === 0
      ? "lg:absolute lg:left-0 lg:top-0 lg:z-10 lg:w-[55%]"
      : index === 1
        ? "lg:absolute lg:left-[18%] lg:top-[128px] lg:z-20 lg:w-[58%]"
        : "lg:absolute lg:right-0 lg:top-[238px] lg:z-30 lg:w-[54%]";

  return (
    <article
      className={cn(
        "rounded-xl border bg-white p-3 text-slate-950 shadow-[0_18px_46px_rgba(0,0,0,0.30)] sm:rounded-2xl sm:p-5",
        positionClass,
        isUrgent && "border-red-200 bg-red-50",
        isSchedule && "border-orange-200",
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        {notification.dateLabel ? (
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-orange-50 font-display font-bold text-orange-600 sm:h-16 sm:w-16",
              isUrgent &&
                "h-auto w-max rounded-full bg-red-100 px-3 py-1.5 text-xs text-red-600 sm:px-4 sm:py-2 sm:text-sm",
            )}
          >
            {isUrgent ? (
              notification.dateLabel
            ) : (
              <>
                <span className="text-xs uppercase leading-none sm:text-sm">
                  {notification.dateLabel.split(" ")[0]}
                </span>
                <span className="mt-0.5 text-xl leading-none sm:mt-1 sm:text-3xl">
                  {notification.dateLabel.split(" ")[1] || ""}
                </span>
              </>
            )}
          </div>
        ) : null}

        <div
          className={cn(
            "min-w-0 flex-1",
            isSchedule && "border-l-4 border-orange-500 pl-3 sm:pl-4",
          )}
        >
          {notification.startLabel || notification.endLabel ? (
            <div className="mb-3 inline-flex max-w-full flex-wrap rounded-full bg-orange-50 px-3 py-1.5 text-[11px] font-bold leading-snug text-orange-600 sm:text-xs">
              {notification.startLabel}
              {notification.startLabel && notification.endLabel ? " -> " : ""}
              {notification.endLabel}
            </div>
          ) : null}
          {notification.category ? (
            <p
              className={cn(
                "text-xs font-bold text-orange-600",
                isUrgent && "text-red-600",
              )}
            >
              {notification.category}
            </p>
          ) : null}
          <h5
            className={cn(
              "mt-1 break-words font-display text-base font-bold leading-tight text-slate-950 sm:text-xl",
              isUrgent && "text-red-700",
            )}
          >
            {notification.title}
          </h5>
          {notification.subtitle ? (
            <p className="mt-2 text-xs font-medium leading-relaxed text-slate-600 sm:text-base">
              {notification.subtitle}
            </p>
          ) : null}
          {notification.linkLabel ? (
            <a
              href={notification.linkUrl || "#"}
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-sky-600"
            >
              <span aria-hidden="true">-&gt;</span>
              {notification.linkLabel}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function BlogsVisual({
  activeIndex,
  posts,
}: {
  activeIndex: number;
  posts: WPPost[];
}) {
  return (
    <div className="flex h-full min-h-[400px] w-full flex-col justify-between py-4 lg:min-h-[520px] lg:py-0">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#51A70A]/55 bg-[#51A70A]/15 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#51A70A]">
            Latest updates
          </span>
          <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/75">
            Tab {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
          Blogs
        </h4>
        <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white/82 sm:mt-5 sm:text-base lg:text-lg">
          Read practical NEET counselling updates, college comparison guides,
          and deadline-focused admission insights.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              compact
              priority={index < 3}
              className="bg-black/55"
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-[#51A70A]/18 bg-black/55 p-6 text-sm font-medium text-white/68 backdrop-blur-xl">
          Blog updates are loading. Please check the full blog section below.
        </div>
      )}
    </div>
  );
}

function CutoffVisual({
  activeTab,
  activeIndex,
}: {
  activeTab: CounsellingTab;
  activeIndex: number;
}) {
  return (
    <div className="relative flex h-full min-h-[400px] w-full flex-col overflow-hidden py-4 lg:min-h-[520px] lg:py-0">
      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#51A70A]/55 bg-[#51A70A]/15 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#51A70A]">
            {activeTab.kicker}
          </span>
          <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/75">
            Tab {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
          {activeTab.title}
        </h4>
        <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white/82 sm:mt-5 sm:text-base lg:text-lg">
          {activeTab.description}
        </p>
      </div>

      <div className="relative z-10 mt-4 space-y-5 overflow-hidden">
        <div className="rounded-[28px] border border-white/80 bg-white p-2.5 text-black shadow-[0_30px_90px_rgba(15,23,42,0.14),0_14px_34px_rgba(81,167,10,0.12),0_0_0_1px_rgba(81,167,10,0.06)] sm:p-3">
          <div className="rounded-[22px] border border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdf8_100%)] px-3 py-3 sm:px-4 sm:py-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <h5 className="font-display text-base font-semibold leading-tight text-[#06402b] sm:text-lg">
                  MCC / All India Quota (15%) Last Year Cut-Off
                </h5>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse bg-white text-left text-[10px] text-black sm:text-xs">
                <thead>
                  <tr className="border-y border-[#51A70A]/25 text-[#0f5b08]">
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      Courses
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      GEN
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      EWS
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      OBC
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      SC
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      ST
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mccCutoffRows.map((row, index) => (
                    <tr
                      key={row.course}
                      className={cn(
                        "border-b border-slate-100",
                        index % 2 === 1 && "bg-slate-50/80",
                      )}
                    >
                      <td className="px-2 py-2 font-semibold text-black sm:px-2.5">
                        {row.course}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffValue(row.gen)}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffValue(row.ews)}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffValue(row.obc)}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffValue(row.sc)}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffValue(row.st)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/80 bg-white p-2.5 text-black shadow-[0_30px_90px_rgba(15,23,42,0.14),0_14px_34px_rgba(81,167,10,0.12),0_0_0_1px_rgba(81,167,10,0.06)] sm:p-3">
          <div className="rounded-[22px] border border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdf8_100%)] px-3 py-3 sm:px-4 sm:py-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <h5 className="font-display text-base font-semibold leading-tight text-[#06402b] sm:text-lg">
                  UP State Quota (85%) Category / Course Wise Cut-Off
                </h5>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse bg-white text-left text-[10px] text-black sm:text-xs">
                <thead>
                  <tr className="border-y border-[#51A70A]/25 text-[#0f5b08]">
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      Courses
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      GEN
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      EWS
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      OBC
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      SC
                    </th>
                    <th className="px-2 py-2 font-display font-bold tracking-wide">
                      ST
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {upSeatAllotmentRows.map((row, index) => (
                    <tr
                      key={row.course}
                      className={cn(
                        "border-b border-slate-100",
                        index % 2 === 1 && "bg-slate-50/80",
                      )}
                    >
                      <td className="px-2 py-2 font-semibold text-black sm:px-2.5">
                        {row.course}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffCell(row.gen)}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffCell(row.ews)}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffCell(row.obc)}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffCell(row.sc)}
                      </td>
                      <td className="px-2 py-2 sm:px-2.5">
                        {renderCutoffCell(row.st)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderCutoffValue([rank, marks]: string[]) {
  return (
    <span className="font-semibold text-black">
      {rank}/<span className="text-red-600">{marks}</span>
    </span>
  );
}

function renderCutoffCell(value: string | string[]) {
  if (typeof value === "string") {
    return <span className="font-semibold text-black">{value}</span>;
  }

  return renderCutoffValue(value);
}

function FeatureVisual({
  activeTab,
  activeIndex,
}: {
  activeTab: CounsellingTab;
  activeIndex: number;
}) {
  return (
    <div className="flex h-full min-h-[400px] w-full flex-col justify-between py-4 lg:min-h-[520px] lg:py-0">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#51A70A]/55 bg-[#51A70A]/15 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#51A70A]">
            {activeTab.kicker}
          </span>
          <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/75">
            Tab {String(activeIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
          {activeTab.title}
        </h4>
        <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white/82 sm:mt-5 sm:text-base lg:text-lg">
          {activeTab.description}
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-[1fr_0.72fr]">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {activeTab.points.map((point) => (
            <div
              key={point}
              className="rounded-xl border border-[#51A70A]/18 bg-black/55 px-4 py-3 text-xs font-medium leading-relaxed text-white/82 backdrop-blur-xl sm:py-4 sm:text-sm"
            >
              {point}
            </div>
          ))}
        </div>

        <div className="flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#51A70A]/45 bg-[#51A70A]/12 p-4 shadow-[0_20px_70px_rgba(81,167,10,0.16)] backdrop-blur-xl sm:min-h-[180px] sm:p-5">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#51A70A]">
            Outcome
          </p>
          <p className="mt-4 font-display text-xl font-semibold leading-tight text-white sm:mt-5 sm:text-2xl lg:text-3xl">
            {activeTab.metric}
          </p>
          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10 sm:mt-6">
            <motion.div
              className="h-full rounded-full bg-gradient-brand"
              initial={{ width: "0%" }}
              animate={{ width: `${58 + activeIndex * 6}%` }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const common = "h-5 w-5";

  switch (name) {
    case "notification":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9" />
          <path d="M10.3 21a2 2 0 0 0 3.4 0" />
        </svg>
      );
    case "cutoff":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="m7 15 4-4 3 3 5-7" />
        </svg>
      );
    case "college":
    case "home":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 21h18" />
          <path d="M5 21V9l7-4 7 4v12" />
          <path d="M9 21v-7h6v7" />
        </svg>
      );
    case "courses":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
          <path d="M8 7h8" />
          <path d="M8 11h6" />
        </svg>
      );
    case "mapping":
    case "pin":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "video":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5.5v13l10-6.5-10-6.5Z" />
        </svg>
      );
    case "choice":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 6h13" />
          <path d="M8 12h13" />
          <path d="M8 18h13" />
          <path d="m3 6 1 1 2-2" />
          <path d="m3 12 1 1 2-2" />
          <path d="m3 18 1 1 2-2" />
        </svg>
      );
    case "blogs":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h10" />
        </svg>
      );
    case "fork":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 3v8" />
          <path d="M8 3v8" />
          <path d="M6 3v18" />
          <path d="M17 3v18" />
          <path d="M14 3h6v8h-6Z" />
        </svg>
      );
    case "plus":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    case "at":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
        </svg>
      );
    default:
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
  }
}

function CourseIcon({ name }: { name: string }) {
  const common = "h-6 w-6 sm:h-7 sm:w-7";

  switch (name) {
    case "tooth":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 2h10c1.5 0 2.5 1.5 2.5 3 0 2.5-1.5 4-1.5 5 0 2 .5 4 1 6 .5 2-1 4-3 4H8c-2 0-3.5-2-3-4 .5-2 1-4 1-6 0-1-1.5-2.5-1.5-5C4.5 3.5 5 2 7 2z" />
          <path d="M12 2v20" />
        </svg>
      );
    case "leaf":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 21c8-2 13-7 14-16-9 1-14 6-16 14" />
          <path d="M9 15c2 0 4 0 7-3" />
        </svg>
      );
    case "bottle":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 2h6" />
          <path d="M10 2v6l-2 3v9h8v-9l-2-3V2" />
          <path d="M8 14h8" />
        </svg>
      );
    case "herb":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14c4 0 7-3 8-7" />
          <path d="M8 14c1 3 3 4 6 4" />
        </svg>
      );
    case "yoga":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="5" r="2" />
          <path d="M12 8v6" />
          <path d="m7 21 5-7 5 7" />
          <path d="M5 11h14" />
        </svg>
      );
    case "paw":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="7" cy="8" r="2.5" />
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M7 14c-2 0-4 1.5-4 4 0 2.5 1.5 5 5 5h8c3.5 0 5-2.5 5-5 0-2.5-2-4-4-4-2 0-3 1.5-5 1.5S9 14 7 14z" />
        </svg>
      );
    case "dna":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 3c8 4 2 14 10 18" />
          <path d="M17 3C9 7 15 17 7 21" />
          <path d="M8 7h8" />
          <path d="M8 17h8" />
        </svg>
      );
    case "more":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      );
    default:
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 4v8a6 6 0 0 0 12 0V4" />
          <path d="M12 18v3" />
          <path d="M8 21h8" />
        </svg>
      );
  }
}

function NotificationBellIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9" />
      <path d="M10.3 21a2 2 0 0 0 3.4 0" />
      <path d="M18 4h.01" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 10 18H2L12 3Z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.5v13l10-6.5-10-6.5Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
