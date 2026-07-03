"use client";

import { useRef, useState } from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn, clamp } from "@/lib/utils";

type TiltCardProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

export function TiltCard({ children, className, onMouseMove, onMouseLeave, ...props }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn("transform-gpu", className)}
      style={{ transformPerspective: 1000 }}
      animate={reduceMotion ? undefined : rotation}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (bounds && !reduceMotion) {
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          setRotation({
            rotateX: clamp(y * -18, -12, 12),
            rotateY: clamp(x * 18, -12, 12)
          });
        }
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        setRotation({ rotateX: 0, rotateY: 0 });
        onMouseLeave?.(event);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

