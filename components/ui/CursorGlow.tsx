"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    setEnabled(query.matches);
    const onChange = () => setEnabled(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (x || y) {
      setVisible(true);
    }
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 h-[400px] w-[400px] rounded-full bg-gradient-glow mix-blend-screen"
      animate={{ x: x - 200, y: y - 200, opacity: visible ? 0.15 : 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.4 }}
    />
  );
}

