"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  Phone,
  GraduationCap,
  BookOpen,
  School,
  Stethoscope,
} from "lucide-react";
import { memo, useCallback, useRef } from "react";

const CTA_BANNER_CONTENT = {
  title: "Ready To Plan Your Dream Admission Journey?",
  description:
    "Connect with Careerkick's expert counselors and build a personalized strategy for your next admission cycle.",
  primaryAction: {
    label: "Book Counseling Session",
    href: "https://careerkick.in",
  },
  secondaryAction: {
    label: "Call Us Now",
    href: "tel:+917390950914",
  },
};

const FloatingElement = ({
  children,
  className,
  delay = 0,
  duration = 6,
}: any) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    className={`absolute hidden items-center justify-center rounded-2xl border border-violet/20 bg-white/[0.05] p-5 text-violet-glow/45 shadow-card backdrop-blur-md lg:flex ${className}`}
  >
    {children}
  </motion.div>
);

function CTABannerComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handlePrimaryClick = useCallback(() => {
    window.open(CTA_BANNER_CONTENT.primaryAction.href, "_blank");
  }, []);

  const handleSecondaryClick = useCallback(() => {
    window.location.href = CTA_BANNER_CONTENT.secondaryAction.href;
  }, []);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  // Subtle rotation for the container
  const rotateX = useTransform(springY, [-500, 500], [5, -5]);
  const rotateY = useTransform(springX, [-500, 500], [-5, 5]);

  // Inverse movement for icons to create depth
  const iconX = useTransform(springX, [-500, 500], [20, -20]);
  const iconY = useTransform(springY, [-500, 500], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative flex w-full items-center justify-center overflow-hidden bg-base px-4 py-20 text-white sm:px-6 sm:py-32"
    >
      {/* 🌌 LAYER 1: BACKGROUND GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(81,167,10,0.18),transparent_70%)]" />

      {/* 🎓 LAYER 2: FLOATING ELEMENTS */}
      <motion.div
        style={{ x: iconX, y: iconY, perspective: 1000 }}
        className="pointer-events-none absolute inset-0 z-0 mx-auto max-w-7xl"
      >
        {/* Top Left */}
        <FloatingElement
          className="top-[10%] left-[5%] sm:left-[10%]"
          duration={5}
        >
          <GraduationCap size={38} />
        </FloatingElement>

        {/* Top Right */}
        <FloatingElement
          className="top-[15%] right-[5%] sm:right-[10%]"
          delay={1}
          duration={7}
        >
          <Stethoscope size={30} />
        </FloatingElement>

        {/* Bottom Left */}
        <FloatingElement
          className="bottom-[15%] left-[8%] sm:left-[12%]"
          delay={0.5}
          duration={6}
        >
          <BookOpen size={34} />
        </FloatingElement>

        {/* Bottom Right */}
        <FloatingElement
          className="bottom-[10%] right-[8%] sm:right-[12%]"
          delay={1.5}
          duration={8}
        >
          <School size={40} />
        </FloatingElement>
      </motion.div>

      {/* ⚡ LAYER 3: AMBIENT LIGHTING */}
      <motion.div
        animate={{ opacity: [0, 0, 0.2, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 8 }}
        className="pointer-events-none absolute inset-0 bg-violet/5 mix-blend-overlay"
      />

      {/* 📦 LAYER 4: MAIN CONTENT CARD */}
      <div className="relative z-10 w-full max-w-4xl">
        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-6 py-16 text-center shadow-elevated backdrop-blur-2xl sm:px-16 sm:py-24"
        >
          {/* Inner Decorative Glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 bg-violet/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 bg-violet-glow/20 blur-[100px]" />

          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-normal text-white sm:text-5xl lg:text-6xl">
            {CTA_BANNER_CONTENT.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg md:text-xl">
            {CTA_BANNER_CONTENT.description}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <motion.button
              onClick={handlePrimaryClick}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 28px rgba(81,167,10,0.32)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-brand px-10 py-5 text-sm font-bold text-white shadow-card transition-all sm:w-auto"
            >
              {CTA_BANNER_CONTENT.primaryAction.label}
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.button>

            <motion.button
              onClick={handleSecondaryClick}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-10 py-5 text-sm font-bold text-white backdrop-blur-md transition-all sm:w-auto"
            >
              <Phone size={18} />
              {CTA_BANNER_CONTENT.secondaryAction.label}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CTABannerComponent);
