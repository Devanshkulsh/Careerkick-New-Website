"use client";

import { motion } from "framer-motion";

const phones = [
  {
    id: "institutes",
    title: "Institutes",
    subtitle: "Search institutes",
    align: "left",
  },
  {
    id: "home",
    title: "All India Counselling",
    subtitle: "UG Medical",
    align: "center",
  },
  {
    id: "fees",
    title: "Fee, Stipend & Bond",
    subtitle: "All India Counselling",
    align: "right",
  },
] as const;

const phoneVariants = {
  hidden: (align: string) => ({
    opacity: 0,
    y: 120,
    x: align === "left" ? 190 : align === "right" ? -190 : 0,
    rotate: align === "left" ? -4 : align === "right" ? 4 : 0,
    scale: align === "center" ? 0.96 : 0.9,
  }),
  visible: (align: string) => ({
    opacity: 1,
    y: align === "center" ? 0 : 18,
    x: 0,
    rotate: align === "left" ? -7 : align === "right" ? 7 : 0,
    scale: align === "center" ? 1 : 0.94,
    transition: {
      type: "spring",
      stiffness: 92,
      damping: 18,
      mass: 0.9,
      delay: align === "center" ? 0 : align === "left" ? 0.12 : 0.22,
    },
  }),
};

export default function AppShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-base px-3 py-16 sm:px-4 sm:py-24 md:px-8 lg:py-28 xl:py-section">
      <div className="absolute -left-36 top-24 h-80 w-80 rounded-full bg-violet/10 blur-[110px]" />
      <div className="absolute -right-28 bottom-24 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      <div className="grid-overlay absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="relative mx-auto flex min-h-[350px] w-full max-w-sm items-end justify-center overflow-visible sm:min-h-[520px] sm:max-w-5xl lg:min-h-[620px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="absolute bottom-0 left-1/2 h-24 w-[92%] -translate-x-1/2 rounded-full bg-gradient-glow opacity-30 blur-3xl sm:h-32 sm:w-[82%]" />
          <div className="absolute bottom-0 left-1/2 h-20 w-full max-w-4xl -translate-x-1/2 bg-gradient-to-t from-base via-base/80 to-transparent sm:h-24" />

          <div className="relative z-10 flex w-full items-end justify-center">
            {phones.map((phone) => (
              <motion.div
                key={phone.id}
                custom={phone.align}
                variants={phoneVariants}
                className={`${phone.align === "center" ? "z-30" : "z-20"} -mx-12 shrink-0 sm:-mx-5 md:mx-0`}
              >
                <IphoneMockup emphasis={phone.align === "center"}>
                  <AppScreen id={phone.id} title={phone.title} subtitle={phone.subtitle} />
                </IphoneMockup>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative z-30 mx-auto mt-8 max-w-3xl text-center sm:mt-10 md:mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-violet/30 bg-violet/10 px-3 py-2 text-center font-mono text-[10px] font-medium uppercase tracking-widest text-violet-glow sm:mb-5 sm:px-4 sm:text-xs">
            Careerkick web app
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-normal text-white sm:text-5xl md:text-6xl">
            Your Counselling Companion, <br className="hidden sm:block" /> Wherever You Are
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-base md:text-lg">
            Receive critical counselling updates, compare colleges, track fees, and keep your NEET admission plan moving from your phone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function IphoneMockup({
  children,
  emphasis = false,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`relative h-[330px] w-[158px] rounded-[2.15rem] bg-gradient-to-br from-[#f8faf7] via-[#151816] to-[#050605] p-[3px] shadow-[0_32px_80px_rgba(0,0,0,0.55),inset_0_0_0_1px_rgba(255,255,255,0.35)] ring-1 ring-white/20 sm:h-[470px] sm:w-[228px] sm:rounded-[3rem] md:h-[540px] md:w-[260px] ${
        emphasis ? "shadow-[0_40px_100px_rgba(196,240,23,0.22),0_28px_80px_rgba(0,0,0,0.65)]" : ""
      }`}
    >
      <div className="absolute -left-[4px] top-20 h-10 w-[4px] rounded-l-full bg-gradient-to-b from-[#5b625c] to-[#171a18] sm:-left-[5px] sm:top-24 sm:h-12 sm:w-[5px]" />
      <div className="absolute -left-[4px] top-32 h-8 w-[4px] rounded-l-full bg-gradient-to-b from-[#5b625c] to-[#171a18] sm:-left-[5px] sm:top-40 sm:h-9 sm:w-[5px]" />
      <div className="absolute -right-[4px] top-28 h-12 w-[4px] rounded-r-full bg-gradient-to-b from-[#5b625c] to-[#171a18] sm:-right-[5px] sm:top-32 sm:h-16 sm:w-[5px]" />
      <div className="pointer-events-none absolute inset-[3px] rounded-[2rem] border border-white/15 sm:rounded-[2.8rem]" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#050606] p-[5px] sm:rounded-[2.78rem] sm:p-[7px] md:p-2">
        <div className="relative h-full w-full overflow-hidden rounded-[1.65rem] bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] sm:rounded-[2.25rem] md:rounded-[2.35rem]">
        <div className="absolute left-1/2 top-1.5 z-30 flex h-4 w-16 -translate-x-1/2 items-center justify-end rounded-full bg-black pr-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.35)] sm:top-2 sm:h-6 sm:w-24 sm:pr-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#161b1c] shadow-[inset_0_0_2px_rgba(255,255,255,0.35)] sm:h-2 sm:w-2" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-br from-white/60 via-white/10 to-transparent" />
        <div className="pointer-events-none absolute -right-16 top-10 z-20 h-[120%] w-28 rotate-12 bg-white/15 blur-sm" />
        <div className="relative z-10 flex h-7 items-center justify-between px-4 pt-2 text-[8px] font-bold text-zinc-900 sm:h-10 sm:px-6 sm:pt-3 sm:text-[10px]">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-2.5 rounded-sm border border-zinc-900 sm:h-2 sm:w-3" />
            <span className="h-1.5 w-2.5 rounded-sm bg-zinc-900 sm:h-2 sm:w-3" />
          </span>
        </div>
        <div className="relative z-10 h-[calc(100%-1.75rem)] overflow-hidden px-2 pb-3 pt-2 sm:h-[calc(100%-2.5rem)] sm:px-4 sm:pb-4 sm:pt-3">
          {children}
        </div>
        </div>
      </div>
    </div>
  );
}

function AppScreen({
  id,
  title,
  subtitle,
}: {
  id: (typeof phones)[number]["id"];
  title: string;
  subtitle: string;
}) {
  if (id === "institutes") {
    return (
      <div className="h-full">
        <Header title={title} action="Filters" />
        <SearchBar />
        <div className="mt-2 space-y-2 sm:mt-3 sm:space-y-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className={`h-16 sm:h-24 ${item === 0 ? "bg-gradient-to-br from-violet/30 to-cyan/25" : "bg-zinc-100"}`} />
              <div className="p-2 sm:p-3">
                <div className="h-2.5 w-4/5 rounded bg-zinc-800 sm:h-3" />
                <div className="mt-2 h-2 w-2/3 rounded bg-zinc-200" />
                <div className="mt-2 flex gap-1.5 sm:mt-3 sm:gap-2">
                  <TinyStat label="90" />
                  <TinyStat label="State" />
                  <TinyStat label="2026" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "fees") {
    return (
      <div className="h-full">
        <Header title={title} action="Info" />
        <p className="mt-1 text-[8px] font-semibold text-orange-500 sm:text-[10px]">{subtitle}</p>
        <div className="mt-3 rounded-full bg-zinc-100 p-1 sm:mt-5">
          <div className="grid grid-cols-3 text-center text-[8px] font-semibold text-zinc-400 sm:text-[10px]">
            <span>2023</span>
            <span>2024</span>
            <span className="rounded-full bg-white py-1 text-orange-500 shadow-sm">2025</span>
          </div>
        </div>
        <div className="mt-3 text-center text-[8px] leading-relaxed text-zinc-500 sm:mt-5 sm:text-[10px]">
          9,532 records. Click each record for detailed bond and fee information.
        </div>
        <div className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="rounded-xl border border-zinc-100 bg-zinc-50 p-2 sm:p-3">
              <div className="h-2.5 w-4/5 rounded bg-zinc-300 sm:h-3" />
              <div className="mt-2 h-2 w-1/2 rounded bg-zinc-200" />
              <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
                <TinyStat label="Fees" />
                <TinyStat label="Bond" />
                <TinyStat label="Penalty" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white sm:h-8 sm:w-8 sm:text-xs">S</div>
          <div>
            <p className="text-[9px] text-zinc-400">Hello</p>
            <p className="text-[10px] font-bold text-zinc-900 sm:text-xs">Sheldon Cooper</p>
          </div>
        </div>
        <div className="rounded-full bg-zinc-100 px-2 py-1 text-[8px] font-bold text-zinc-700 sm:px-3 sm:text-[9px]">My Choice</div>
      </div>
      <SearchBar />
      <div className="mt-3 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-violet/20 p-3 text-center sm:mt-4 sm:p-4">
        <p className="text-xs font-bold text-orange-500 sm:text-sm">{title}</p>
        <p className="mt-1 text-[10px] text-zinc-500">{subtitle}</p>
        <div className="mt-3 grid grid-cols-5 gap-1.5 sm:mt-4 sm:gap-2">
          {["Web", "Quota", "Reg", "Docs", "Whats"].map((item) => (
            <div key={item} className="rounded-lg bg-white p-1.5 text-[7px] font-semibold text-zinc-500 shadow-sm sm:rounded-xl sm:p-2 sm:text-[8px]">
              <div className="mx-auto mb-1 h-4 w-4 rounded-full bg-violet/20 sm:h-5 sm:w-5" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
        <div className="rounded-xl border border-zinc-100 bg-white p-2 shadow-sm sm:p-3">
          <div className="h-3 w-12 rounded bg-violet/30 sm:h-4 sm:w-16" />
          <div className="mt-4 h-2 w-full rounded bg-zinc-200" />
        </div>
        <div className="rounded-xl border border-zinc-100 bg-white p-2 shadow-sm sm:p-3">
          <div className="h-3 w-12 rounded bg-cyan/30 sm:h-4 sm:w-16" />
          <div className="mt-4 h-2 w-full rounded bg-zinc-200" />
        </div>
      </div>
      <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
        {["My Choice lists", "AIQ R1 Priority List", "Maharashtra Govt List"].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-xl bg-zinc-50 px-2.5 py-2 text-[8px] font-semibold text-zinc-500 sm:px-3 sm:py-3 sm:text-[10px]">
            <span>{item}</span>
            <span>&gt;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Header({ title, action }: { title: string; action: string }) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-xs font-bold text-zinc-950 sm:text-lg">{title}</h3>
      <span className="rounded-full bg-zinc-100 px-2 py-1 text-[8px] font-bold text-zinc-600 sm:px-3 sm:text-[9px]">{action}</span>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="mt-3 rounded-full bg-zinc-100 px-3 py-2 sm:mt-4 sm:px-4 sm:py-3">
      <div className="h-2 w-3/5 rounded bg-zinc-200" />
    </div>
  );
}

function TinyStat({ label }: { label: string }) {
  return (
    <div className="rounded-md bg-zinc-50 px-1.5 py-1.5 text-center text-[7px] font-bold text-zinc-400 sm:rounded-lg sm:px-2 sm:py-2 sm:text-[8px]">
      {label}
    </div>
  );
}

function Badge({ icon, platform, rating }: { icon: React.ReactNode; platform: string; rating: string }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-surface px-4 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-sm font-semibold text-white">{platform} <span className="ml-1 text-violet">up</span></p>
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-violet-glow">{rating}</span>
          <div className="flex text-amber">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg className="h-5 w-5 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.365 21.435c-1.464.093-2.613-.672-3.804-.672-1.171 0-2.483.748-3.784.69-2.613-.111-5.074-2.222-6.402-4.632-2.705-4.873-1.839-10.73 1.902-12.729 1.484-.8 3.033-1.076 4.341-1.076 1.408 0 2.853.518 3.963 1.284.97-.748 2.408-1.378 4.02-1.378 1.839 0 3.708.766 4.974 2.15-4.149 2.112-3.483 7.842.748 9.584-1.153 2.915-3.353 6.643-5.958 6.779zM15.413 5.467c.784-.972 1.333-2.318 1.189-3.664-1.206.056-2.651.841-3.473 1.812-.728.841-1.333 2.223-1.171 3.551 1.353.111 2.671-.729 3.455-1.699z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg className="h-5 w-5 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}
