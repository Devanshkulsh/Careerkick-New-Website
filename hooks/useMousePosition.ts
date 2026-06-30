"use client";

import { useEffect, useState } from "react";

export type MousePosition = { x: number; y: number };

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const update = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return position;
}
