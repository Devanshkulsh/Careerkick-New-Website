"use client";

import { useEffect, useRef, useState } from "react";
import { easeOutExpo, formatNumber } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
};

export function AnimatedCounter({ end, duration = 2.5, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const tick = (timestamp: number) => {
      start ??= timestamp;
      const elapsed = (timestamp - start) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      setValue(Math.round(end * easeOutExpo(progress)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, end, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
}
