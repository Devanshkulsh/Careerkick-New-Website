"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const youtubeVideoUrl = "https://www.youtube.com/embed/A77ojSzREUU?si=1fLE519yVGMbKmFS";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-base px-4 py-section-mobile text-white md:px-8 md:py-section">
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-violet/10 blur-[110px]" />
      <div className="absolute -right-28 top-24 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-glow opacity-45 blur-3xl" />
      <div className="grid-overlay absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 xl:gap-20">
        <ScrollReveal className="max-w-3xl">
          <span className="mb-5 inline-flex rounded-full border border-violet/30 bg-violet/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-glow shadow-sm sm:text-xs">
            About CareerKick
          </span>

          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-normal text-white sm:text-5xl md:text-6xl xl:text-7xl">
            We built the{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">CareerKick</span>{" "}
            platform for every NEET and JEE aspirant.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            CareerKick is a counselling and admission guidance platform for NEET and JEE aspirants. The aim is to help students understand their options, choose the right course, select suitable colleges and complete the counselling process without confusion.
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Every student has a different score, rank, budget, category, state preference and career goal. CareerKick studies these details properly and prepares a counselling plan that is practical for the student and easy for parents to understand.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12} className="w-full">
          <motion.div
            className="relative mx-auto w-full max-w-3xl pt-2 lg:self-start"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface-2/80 p-2.5 shadow-elevated backdrop-blur-xl sm:rounded-[40px] sm:p-4">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-card sm:rounded-[32px] lg:aspect-[5/4]">
                {youtubeVideoUrl.includes("PASTE_YOUTUBE_EMBED_URL_HERE") ? (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(81,167,10,0.15),transparent_45%),linear-gradient(180deg,#0b1009_0%,#101610_100%)] px-6 text-center">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#8cef32]">
                        YouTube video frame
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                        Paste your YouTube embed URL in
                        <span className="mx-1 text-white">youtubeVideoUrl</span>
                        to show the video here.
                      </p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    title="About CareerKick video"
                    src={getYoutubeEmbedUrl(youtubeVideoUrl)}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
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

  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1`;
}
