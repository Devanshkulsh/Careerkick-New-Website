"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const youtubeVideoUrl =
  "https://youtube.com/shorts/98BjOfrF55w?si=yHxT8LcVVhwx3-xL";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-base px-4 py-section-mobile text-white md:px-8 md:py-section">
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-violet/10 blur-[110px]" />
      <div className="absolute -right-28 top-24 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-glow opacity-45 blur-3xl" />
      <div className="grid-overlay absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch lg:gap-16 xl:gap-20">
        <ScrollReveal className="max-w-3xl lg:h-full">
          <span className="mb-5 inline-flex rounded-full border border-violet/30 bg-violet/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-glow shadow-sm sm:text-xs">
            About CareerKick
          </span>

          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-normal text-white sm:text-5xl md:text-6xl xl:text-7xl">
            We built the{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              CareerKick
            </span>{" "}
            platform for every NEET and JEE aspirant.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            CareerKick is a counselling and admission guidance platform for NEET
            and JEE aspirants. The aim is to help students understand their
            options, choose the right course, select suitable colleges and
            complete the counselling process without confusion.
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Every student has a different score, rank, budget, category, state
            preference and career goal. CareerKick studies these details properly
            and prepares a counselling plan that is practical for the student
            and easy for parents to understand.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="w-full lg:h-full">
          <motion.div
            className="relative mx-auto flex h-full w-full max-w-3xl items-center justify-center pt-2 lg:self-stretch"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <div className="relative flex h-full w-full items-center justify-center px-2 sm:px-0">
              <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[90px]" />
              <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-[80px]" />

              <motion.div
                className="relative aspect-[9/16] h-auto max-h-[78vh] w-full max-w-[280px] overflow-hidden rounded-[30px] bg-black shadow-[0_34px_90px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.08)] xs:max-w-[300px] sm:max-h-[720px] sm:max-w-[360px] sm:rounded-[42px] md:max-w-[390px] lg:h-full lg:max-h-none lg:w-auto lg:max-w-none"
                whileHover={{ y: -6, scale: 1.012 }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
              >
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[30px] ring-1 ring-inset ring-white/10 sm:rounded-[42px]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-28 bg-gradient-to-t from-black/35 to-transparent" />

                <div className="pointer-events-none absolute left-1/2 top-3 z-40 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/18 backdrop-blur-md sm:top-4 sm:w-20" />

                {youtubeVideoUrl.includes("PASTE_YOUTUBE_EMBED_URL_HERE") ? (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(81,167,10,0.15),transparent_45%),linear-gradient(180deg,#0b1009_0%,#101610_100%)] px-6 text-center">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#8cef32]">
                        YouTube reel frame
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                        Paste your YouTube Shorts URL in
                        <span className="mx-1 text-white">
                          youtubeVideoUrl
                        </span>
                        to show the reel here.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <iframe
                      title="About CareerKick reel"
                      src={getYoutubeEmbedUrl(youtubeVideoUrl)}
                      className="pointer-events-none absolute inset-0 h-full w-full scale-[1.08]"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen={false}
                    />
                    <div className="absolute inset-0 z-20 cursor-default" />
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function getYoutubeEmbedUrl(url: string) {
  const trimmed = url.trim();
  const videoIdMatch = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  const videoId = videoIdMatch?.[1];

  if (!videoId) {
    return trimmed;
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1&showinfo=0`;
}