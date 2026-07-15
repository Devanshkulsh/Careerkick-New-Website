"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Trusted Guidance",
    desc: "Thousands of students rely on our expert counselling for secure admissions.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "End-to-End Support",
    desc: "From counselling to final admission, we handle everything seamlessly.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Proven Results",
    desc: "Consistent success in securing top colleges across India.",
  },
  {
    icon: <Users size={28} />,
    title: "Personalized Approach",
    desc: "Every student gets tailored guidance based on their goals.",
  },
];

export default function WhyChooseUs() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative w-full overflow-hidden bg-base py-32 text-white"
      onMouseMove={(e) => {
        setMouse({ x: e.clientX, y: e.clientY });
      }}
    >
      {/* 🌟 Dynamic Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(81,167,10,0.14), transparent 60%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-3xl font-bold tracking-normal text-white sm:text-5xl">
            Why Choose <span className="bg-gradient-brand bg-clip-text text-transparent">Careerkick</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            We don’t just guide you — we ensure your success with precision,
            strategy, and unmatched expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl bg-gradient-to-b from-violet/30 to-white/0 p-px"
            >
              {/* Inner Card */}
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-card backdrop-blur-xl transition-all duration-300 group-hover:border-violet/40 group-hover:bg-white/[0.08] group-hover:shadow-elevated">

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-violet/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="mb-4 text-violet-glow transition group-hover:text-white">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mb-2 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
