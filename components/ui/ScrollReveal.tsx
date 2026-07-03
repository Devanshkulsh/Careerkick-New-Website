"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  variant?: Variants;
  delay?: number;
  className?: string;
};

export function ScrollReveal({ children, variant = fadeUpVariant, delay = 0, className }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variant}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

