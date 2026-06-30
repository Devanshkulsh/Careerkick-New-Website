"use client";

import { type RefObject, useEffect, useState } from "react";

export function useInView<T extends Element>(ref: RefObject<T>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isInView) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView, options, ref]);

  return isInView;
}
