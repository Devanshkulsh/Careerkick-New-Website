"use client";
import { motion } from "framer-motion";
import { ExternalLink, PlayCircle } from "lucide-react";
import { memo, useMemo, useState } from "react";

const YOUTUBE_CHANNELS = [
  {
    id: "jee-channel",
    name: "CareerKick JEE",
    description:
      "Counseling explainers, round-wise strategy, and rank analysis for JEE aspirants.",
    subscribers: "42,500+",
    channelUrl: "https://www.youtube.com/@CAREERKICKJEE",
  },
  {
    id: "neet-channel",
    name: "CareerKick NEET",
    description:
      "Medical admission guidance with detailed coverage of NEET counseling updates and options.",
    subscribers: "2,05,000+",
    channelUrl: "https://www.youtube.com/@careerkickneet",
  },
  {
    id: "mba-channel",
    name: "CareerKick MBA",
    description:
      "MBA college insights, selection strategy, and profile-building guidance for management aspirants.",
    subscribers: "1720+",
    channelUrl: "https://www.youtube.com/@careerkickmba",
  },
];

const VIDEOS = [
  { id: "1", title: "Video 1", youtubeId: "b2nw5IYVT1c" },
  { id: "2", title: "Video 2", youtubeId: "9R3OiaPeKeU" },
  { id: "3", title: "Video 3", youtubeId: "Ssj6qK3NYpM" },
];

function YouTubeChannelsComponent() {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0].youtubeId);

  const channelNodes = useMemo(() => {
    return YOUTUBE_CHANNELS.map((channel, index) => (
      <motion.div
        key={channel.id}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.15,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-center"
      >
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet/25 bg-violet/10 text-violet-glow">
          <PlayCircle size={26} />
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-white">
          {channel.name}
        </h3>

        <p className="text-sm text-text-muted">
          {channel.subscribers} subscribers
        </p>

        <p className="mt-2 text-sm text-text-muted">{channel.description}</p>

        <a
          href={channel.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-glow transition-colors hover:text-white"
        >
          Visit Channel <ExternalLink size={14} />
        </a>
      </motion.div>
    ));
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-base px-6 py-28 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(81,167,10,0.14),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ✅ CENTERED HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-bold tracking-normal text-white sm:text-5xl">
            Our YouTube Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Learn, explore, and stay updated through our expert video content.
          </p>
        </motion.div>

        {/* ✅ CHANNELS */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">{channelNodes}</div>

        {/* ✅ LAPTOP MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative w-full max-w-3xl">
            {/* Laptop Frame */}
            <div className="rounded-2xl border border-white/10 bg-surface p-3 shadow-elevated">
              {/* Screen */}
              <div className="aspect-video overflow-hidden rounded-xl bg-black">
                <iframe
                  key={activeVideo}
                  src={`https://www.youtube.com/embed/${activeVideo}`}
                  className="h-full w-full"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Base */}
            <div className="mx-auto mt-1 h-3 w-3/4 rounded-b-xl bg-surface-2" />
          </div>
        </motion.div>

        {/* ✅ VIDEO THUMBNAILS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VIDEOS.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveVideo(video.youtubeId)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  className="h-40 w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                {/* Play Icon */}
                <PlayCircle className="absolute inset-0 m-auto text-white w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(YouTubeChannelsComponent);
