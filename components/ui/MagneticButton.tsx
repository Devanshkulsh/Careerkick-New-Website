"use client";

import { useRef, useState } from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
  href?: string;
};

export function MagneticButton({
  children,
  className,
  href,
  onMouseMove,
  onMouseLeave,
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();
  const commonProps = {
    className: cn(
      "inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 font-body text-sm font-semibold text-white shadow-card transition-shadow hover:shadow-glow-violet",
      className
    ),
    animate: reduceMotion ? undefined : offset,
    transition: { type: "spring", stiffness: 220, damping: 18 },
    onMouseMove: (event: MouseEvent<HTMLElement>) => {
      const bounds = ref.current?.getBoundingClientRect();
      if (bounds && !reduceMotion) {
        const x = (event.clientX - (bounds.left + bounds.width / 2)) * 0.3;
        const y = (event.clientY - (bounds.top + bounds.height / 2)) * 0.3;
        setOffset({ x, y });
      }
      onMouseMove?.(event as never);
    },
    onMouseLeave: (event: MouseEvent<HTMLElement>) => {
      setOffset({ x: 0, y: 0 });
      onMouseLeave?.(event as never);
    },
    onClick: (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event as never);
      if (href && !event.defaultPrevented) {
        window.location.href = href;
      }
    },
    ...props,
  } as const;

  return (
    <motion.button
      ref={(node) => {
        ref.current = node;
      }}
      {...commonProps}
    >
      {children}
    </motion.button>
  );
}

