"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { offices } from "@/data/offices";
import { cn } from "@/lib/utils";
import type { OfficeBranch } from "@/types";

type OfficesSectionProps = {
  items?: OfficeBranch[];
  className?: string;
};

export function OfficesSection({ items = offices, className }: OfficesSectionProps) {
  const [activeOffice, setActiveOffice] = useState<OfficeBranch | null>(null);

  useEffect(() => {
    if (!activeOffice) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveOffice(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeOffice]);

  return (
    <section className={cn("relative overflow-hidden bg-[#f7faf4] px-4 py-16 text-slate-950 sm:py-section-mobile md:px-8 md:py-section", className)}>
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#51A70A]/10 blur-[110px]" />
      <div className="absolute -right-28 bottom-16 h-96 w-96 rounded-full bg-emerald/10 blur-[120px]" />
      <div className="grid-overlay absolute inset-0 opacity-[0.18]" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[#51A70A]/30 bg-white px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-widest text-[#51A70A] shadow-sm sm:mb-5 sm:px-4 sm:text-xs">
            Our Offices
          </span>
          <h2 className="mx-auto max-w-4xl font-display text-[1.85rem] font-bold leading-[1.08] tracking-normal text-slate-900 min-[390px]:text-[2rem] sm:text-4xl md:text-5xl xl:text-6xl">
            Meet CareerKick{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              where guidance begins.
            </span>
          </h2>
        </ScrollReveal>

        <motion.div
          className="mx-auto mt-8 grid max-w-[360px] gap-4 sm:mt-10 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
          }}
        >
          {items.map((office, index) => (
            <ScrollReveal key={office.id} delay={index * 0.05}>
              <OfficeCard office={office} onOpen={() => setActiveOffice(office)} />
            </ScrollReveal>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeOffice ? (
          <OfficeModal office={activeOffice} onClose={() => setActiveOffice(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function OfficeCard({ office, onOpen }: { office: OfficeBranch; onOpen: () => void }) {
  return (
    <motion.article
      className="group relative h-full overflow-hidden rounded-[18px] border border-[#51A70A]/14 bg-white p-1.5 shadow-[0_12px_36px_rgba(15,23,42,0.08)] sm:rounded-[20px] sm:shadow-[0_14px_44px_rgba(15,23,42,0.08)]"
      initial={{ opacity: 0, y: 28, rotateX: 8, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, transparent 0%, rgba(81,167,10,0.26) 28%, rgba(255,255,255,0.7) 50%, rgba(81,167,10,0.24) 72%, transparent 100%)",
          backgroundSize: "220% 100%",
        }}
        animate={{ backgroundPosition: ["220% 0%", "-120% 0%"] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative rounded-[16px] bg-white p-1.5 sm:rounded-[18px]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-[#eaf2e5] sm:aspect-[4/3] sm:rounded-[16px]">
          <motion.div layoutId={`office-image-${office.id}`} className="absolute inset-0">
            <OfficeImage office={office} className="transition-transform duration-700 group-hover:scale-110" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/10 opacity-70" />
          <motion.span
            className="absolute right-3 top-3 rounded-full border border-white/70 bg-white/86 px-2.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#367d07] shadow-sm backdrop-blur"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
          >
            {office.status === "coming-soon" ? "Soon" : "Open"}
          </motion.span>
        </div>

        <div className="relative px-2 pb-2 pt-3 sm:px-2.5 sm:pb-2.5">
          <motion.h3 layoutId={`office-title-${office.id}`} className="font-display text-[1.7rem] font-bold leading-none text-slate-950 sm:text-3xl lg:text-2xl xl:text-3xl">
            {office.branch}
          </motion.h3>
          <button
            type="button"
            onClick={onOpen}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#51A70A]/10 px-4 py-2.5 text-xs font-bold text-[#367d07] shadow-sm ring-1 ring-[#51A70A]/18 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-brand hover:text-[#050704] hover:shadow-[0_14px_34px_rgba(81,167,10,0.22)] focus-visible:shadow-[0_0_0_2px_#51A70A,0_0_0_6px_#f7faf4] sm:px-5"
            aria-label={`View ${office.branch} office details`}
          >
            View more details
            <ArrowIcon />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function OfficeModal({ office, onClose }: { office: OfficeBranch; onClose: () => void }) {
  const isComingSoon = office.status === "coming-soon";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center px-0 pt-8 sm:items-center sm:px-6 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`office-modal-title-${office.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button
        type="button"
        className="absolute inset-0 cursor-default bg-slate-950/64 backdrop-blur-xl"
        onClick={onClose}
        aria-label="Close office details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="relative max-h-[92dvh] w-full max-w-6xl overflow-hidden rounded-t-[28px] border border-white/70 bg-[#fbfdf8] shadow-[0_40px_120px_rgba(15,23,42,0.34)] sm:rounded-[28px]"
        initial={{ y: 70, scale: 0.96, rotateX: 0, opacity: 0 }}
        animate={{ y: 0, scale: 1, rotateX: 0, opacity: 1 }}
        exit={{ y: 54, scale: 0.97, rotateX: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#51A70A]/18 blur-[80px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-[90px]" />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#51A70A]/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#51A70A]/14"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        {[0, 1, 2, 3].map((spark) => (
          <motion.span
            key={spark}
            className="pointer-events-none absolute hidden h-2 w-2 rounded-full bg-[#51A70A] shadow-[0_0_24px_rgba(81,167,10,0.9)] sm:block"
            style={{
              left: `${18 + spark * 18}%`,
              top: `${18 + (spark % 2) * 58}%`,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.22, 0.9, 0.22], scale: [0.8, 1.35, 0.8] }}
            transition={{ duration: 2.8 + spark * 0.35, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-950/10 bg-white/92 text-slate-950 shadow-sm transition-colors hover:bg-[#eef7e8] focus-visible:shadow-[0_0_0_2px_#51A70A,0_0_0_6px_#f7faf4] sm:right-4 sm:top-4 sm:h-11 sm:w-11"
          aria-label="Close office details"
        >
          <CloseIcon />
        </button>

        <div className="relative z-10 grid max-h-[92dvh] overflow-y-auto lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
          <div className="relative flex min-h-0 flex-col gap-2 bg-[#eaf2e5] p-2.5 pt-12 sm:min-h-[500px] sm:gap-3 sm:p-4 lg:min-h-[640px] lg:p-5">
            <div className="relative h-[230px] overflow-hidden rounded-[20px] border border-white/80 bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04),0_16px_44px_rgba(15,23,42,0.10)] min-[390px]:h-[270px] sm:h-auto sm:min-h-[360px] sm:flex-1 sm:rounded-[24px] sm:shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04),0_22px_70px_rgba(15,23,42,0.12)]">
              <motion.div layoutId={`office-image-${office.id}`} className="absolute inset-0">
                <OfficeImage office={office} priority fit="contain" className="p-2 sm:p-3" />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.42),transparent_34%),linear-gradient(180deg,transparent_70%,rgba(5,7,4,0.08)_100%)] sm:rounded-[24px]" />
            </div>

            <div className="rounded-[18px] border border-white/75 bg-white/86 p-3 shadow-sm backdrop-blur sm:rounded-[22px] sm:p-4">
              <motion.p
                className="font-mono text-[9px] font-semibold uppercase tracking-[0.26em] text-[#51A70A] sm:text-[10px] sm:tracking-[0.3em]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
              >
                CareerKick Branch
              </motion.p>
              <motion.h3
                id={`office-modal-title-${office.id}`}
                layoutId={`office-title-${office.id}`}
                className="mt-1.5 font-display text-3xl font-bold leading-none text-slate-950 sm:mt-2 sm:text-5xl"
              >
                {office.branch}
              </motion.h3>
            </div>
          </div>

          <div className="relative flex flex-col justify-center p-4 pb-5 sm:p-8 lg:p-10">
            <div className="mb-5 sm:mb-7">
              <motion.div
                className="inline-flex w-max rounded-full border border-[#51A70A]/24 bg-[#51A70A]/10 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.24em] text-[#367d07] sm:text-[10px] sm:tracking-[0.28em]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {isComingSoon ? "Coming Soon" : "Office Details"}
              </motion.div>
              <motion.h4
                className="mt-3 font-display text-2xl font-bold leading-tight text-slate-950 sm:mt-4 sm:text-4xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
              >
                {office.branch} Branch
              </motion.h4>
            </div>

            <motion.div
              className="space-y-3 sm:space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.16 } },
              }}
            >
              <DetailBlock title="Address">
                <p>{office.address}</p>
              </DetailBlock>

              <DetailBlock title="Contact">
                {office.contacts.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {office.contacts.map((contact) => (
                      <a
                        key={contact}
                        href={`tel:${contact.replace(/\s/g, "")}`}
                        className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full border border-slate-950/10 bg-white px-3 py-2 text-center text-xs font-semibold text-slate-800 shadow-sm transition-colors hover:border-[#51A70A]/30 hover:text-[#367d07] min-[430px]:flex-none sm:text-sm"
                      >
                        {contact}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p>Contact details will be available soon.</p>
                )}
              </DetailBlock>
            </motion.div>

            <motion.a
              href={office.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3.5 text-sm font-bold text-[#050704] shadow-[0_18px_44px_rgba(81,167,10,0.24)] transition-transform hover:-translate-y-0.5 focus-visible:shadow-[0_0_0_2px_#51A70A,0_0_0_6px_#f7faf4] sm:mt-8 sm:w-max sm:px-7 sm:py-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
            >
              Open in Google Maps
              <ArrowIcon />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-950/8 bg-white/78 p-3.5 text-sm font-medium leading-relaxed text-slate-700 shadow-sm backdrop-blur sm:p-4"
      variants={{
        hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.38, ease: "easeOut" }}
    >
      <p className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#51A70A] sm:text-[10px] sm:tracking-[0.26em]">
        {title}
      </p>
      {children}
    </motion.div>
  );
}

function OfficeImage({
  office,
  priority,
  className,
  fit = "cover",
}: {
  office: OfficeBranch;
  priority?: boolean;
  className?: string;
  fit?: "cover" | "contain";
}) {
  if (!office.image) {
    return (
      <div className={cn("absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#ffffff_0%,#eef7e8_34%,#dcebd4_100%)]", className)}>
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#51A70A]/20 bg-white shadow-[0_20px_60px_rgba(81,167,10,0.16)] sm:h-32 sm:w-32">
          <span className="font-display text-4xl font-bold text-[#51A70A] sm:text-5xl">
            {office.branch.charAt(0)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={office.image}
      alt={`${office.branch} office`}
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className={cn(fit === "contain" ? "object-contain" : "object-cover", className)}
      priority={priority}
    />
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
