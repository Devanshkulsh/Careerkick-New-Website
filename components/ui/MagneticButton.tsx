"use client";

import { useRef, useState } from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
};

export function MagneticButton({ children, className, onMouseMove, onMouseLeave, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 font-body text-sm font-semibold text-white shadow-card transition-shadow hover:shadow-glow-violet",
        className
      )}
      animate={reduceMotion ? undefined : offset}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (bounds && !reduceMotion) {
          const x = (event.clientX - (bounds.left + bounds.width / 2)) * 0.3;
          const y = (event.clientY - (bounds.top + bounds.height / 2)) * 0.3;
          setOffset({ x, y });
        }
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        setOffset({ x: 0, y: 0 });
        onMouseLeave?.(event);
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
