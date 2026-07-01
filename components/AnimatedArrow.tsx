"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedArrowProps = {
  className?: string;
  delay?: number;
  flip?: boolean;
  tone?: "light" | "accent";
};

export function AnimatedArrow({
  className,
  delay = 0,
  flip = false,
  tone = "light",
}: AnimatedArrowProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      className={cn(
        "pointer-events-none absolute hidden lg:block",
        tone === "accent" ? "text-violet-glow/80" : "text-white/80",
        className,
      )}
      viewBox="0 0 150 100"
      fill="none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      aria-hidden="true"
      style={{ scaleX: flip ? -1 : 1 }}
    >
      <>
        {/* Curved line */}
        <motion.path
          d="M18 68 C42 28 82 24 118 44 C126 49 132 56 136 60"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{
            pathLength: {
              duration: 1.1,
              ease: "easeOut",
              delay,
            },
            y: {
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            },
          }}
        />

        {/* Arrow head */}
        <motion.path
          d="M136 60 L123 46"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            pathLength: {
              duration: 0.25,
              delay: delay + 0.85,
            },
          }}
        />

        <motion.path
          d="M136 60 L118 59"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            pathLength: {
              duration: 0.25,
              delay: delay + 0.85,
            },
          }}
        />
      </>
    </motion.svg>
  );
}
