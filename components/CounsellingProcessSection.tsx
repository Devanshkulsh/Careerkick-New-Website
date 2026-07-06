"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTAButtons } from "@/components/CTAButtons";
import { BlogCard } from "@/components/blog/BlogCard";
import { cn } from "@/lib/utils";
import type { WPPost } from "@/types/wordpress";
import type { CounsellingNotification } from "@/lib/sanityNotifications";

type CounsellingTab = {
  title: string;
  description: string;
  kicker: string;
  icon: string;
  points: string[];
  metric: string;
  kind?: "video" | "blogs" | "notifications";
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
    description:
      "Simple videos explaining counselling, choice filling, and next steps.",
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
    title: "Choice List",
    description: "Organize your preferences with an easy choice filling tool.",
    kicker: "Preference builder",
    icon: "choice",
    points: [
      "Build and reorder choices",
      "Plan safe and target options",
      "Keep your final list structured",
    ],
    metric: "Choice filling made cleaner",
  },
];

const youtubeEmbedUrl =
  "https://www.youtube.com/embed/Mgg3PdGm9wk?si=xpXnOExAEok_YgoP";

const fallbackNotifications: CounsellingNotification[] = [
  {
    id: "fallback-mcc-registration",
    title: "NEET UG Counselling 2026 - Round 1 Registration",
    subtitle: "Registration and payment window opens for All India Quota, deemed, central, and ESIC seats.",
    category: "MCC Notice",
    dateLabel: "JUL 21",
    linkLabel: "Registration Portal",
    linkUrl: "#",
    variant: "notice",
  },
  {
    id: "fallback-state-schedule",
    title: "Maharashtra NEET UG Counselling",
    subtitle: "State quota registration, document upload, and fee payment schedule is live.",
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
    subtitle: "Lock your MBBS/BDS choices before the deadline to avoid missing preferred colleges.",
    category: "Urgent Alert",
    dateLabel: "Today",
    variant: "urgent",
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
  const activeTab = counsellingTabs[activeIndex];
  const isVideo = activeTab.kind === "video";
  const isBlogs = activeTab.kind === "blogs";
  const isNotifications = activeTab.kind === "notifications";

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
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <AnimatePresence mode="wait">
              {isVideo ? (
                <motion.div
                  key="video-card-background"
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.35 }}
                >
                  <iframe
                    title="CareerKick video guide"
                    src={`${youtubeEmbedUrl}&autoplay=1&mute=1&controls=0&loop=1&playlist=Mgg3PdGm9wk&modestbranding=1&rel=0`}
                    className="h-full w-full scale-125 object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-black/72" />
                </motion.div>
              ) : (
                <motion.div
                  key="black-card-background"
                  className="absolute inset-0 bg-[#050704]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              )}
            </AnimatePresence>

            <div className="grid-overlay absolute inset-0 opacity-10" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#51A70A]/18 blur-[90px]" />
            <div className="absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-cyan/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col lg:grid lg:min-h-[680px] lg:grid-cols-[410px_1fr] xl:grid-cols-[430px_1fr]">
              <aside className="flex flex-col justify-center px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-10">
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
                      <button
                        key={tab.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "group flex w-full items-center gap-3 rounded-full border px-4 py-3 text-left text-white transition-all duration-300 focus-visible:shadow-[0_0_0_2px_#51A70A,0_0_0_5px_#050704]",
                          active
                            ? "min-h-[110px] w-full items-start rounded-2xl border-white/12 bg-white/14 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:min-h-[132px] lg:max-w-[450px]"
                            : "min-h-[60px] w-full border-white/8 bg-white/12 pr-6 shadow-card backdrop-blur-md hover:border-[#51A70A]/45 hover:bg-white/18 lg:max-w-max",
                        )}
                        aria-pressed={active}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#51A70A] shadow-card">
                          <FeatureIcon name={tab.icon} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-base font-semibold leading-tight text-white">
                            {tab.title}
                          </span>
                          {active && (
                            <span className="mt-2 block w-full text-xs leading-relaxed text-white/68 sm:mt-3 sm:max-w-sm sm:text-sm">
                              {tab.description}
                            </span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              <div className="relative min-h-[450px] overflow-hidden p-4 text-white sm:p-6 lg:min-h-[680px] lg:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.title}
                    className="relative z-10 flex min-h-[400px] flex-col items-center justify-center sm:min-h-[450px] lg:min-h-[616px]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {isNotifications ? (
                      <NotificationsVisual
                        activeIndex={activeIndex}
                        notifications={notifications.length > 0 ? notifications : fallbackNotifications}
                      />
                    ) : isBlogs ? (
                      <BlogsVisual activeIndex={activeIndex} posts={blogPosts} />
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
          Stay ahead with timely updates on counselling rounds, deadlines, and critical announcements.
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
              isUrgent && "h-auto w-max rounded-full bg-red-100 px-3 py-1.5 text-xs text-red-600 sm:px-4 sm:py-2 sm:text-sm",
            )}
          >
            {isUrgent ? (
              notification.dateLabel
            ) : (
              <>
                <span className="text-xs uppercase leading-none sm:text-sm">{notification.dateLabel.split(" ")[0]}</span>
                <span className="mt-0.5 text-xl leading-none sm:mt-1 sm:text-3xl">{notification.dateLabel.split(" ")[1] || ""}</span>
              </>
            )}
          </div>
        ) : null}

        <div className={cn("min-w-0 flex-1", isSchedule && "border-l-4 border-orange-500 pl-3 sm:pl-4")}>
          {notification.startLabel || notification.endLabel ? (
            <div className="mb-3 inline-flex max-w-full flex-wrap rounded-full bg-orange-50 px-3 py-1.5 text-[11px] font-bold leading-snug text-orange-600 sm:text-xs">
              {notification.startLabel}
              {notification.startLabel && notification.endLabel ? " -> " : ""}
              {notification.endLabel}
            </div>
          ) : null}
          {notification.category ? (
            <p className={cn("text-xs font-bold text-orange-600", isUrgent && "text-red-600")}>
              {notification.category}
            </p>
          ) : null}
          <h5 className={cn("mt-1 break-words font-display text-base font-bold leading-tight text-slate-950 sm:text-xl", isUrgent && "text-red-700")}>
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
          Read practical NEET counselling updates, college comparison guides, and deadline-focused admission insights.
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
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {activeTab.points.map((point) => (
            <div
              key={point}
              className="rounded-xl border border-[#51A70A]/18 bg-black/55 px-4 py-3 text-xs font-medium leading-relaxed text-white/82 backdrop-blur-xl sm:py-4 sm:text-sm"
            >
              {point}
            </div>
          ))}
        </div>

        <div className="flex min-h-[140px] flex-col justify-between rounded-2xl border border-[#51A70A]/45 bg-[#51A70A]/12 p-4 shadow-[0_20px_70px_rgba(81,167,10,0.16)] backdrop-blur-xl sm:min-h-[180px] sm:p-5">
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
