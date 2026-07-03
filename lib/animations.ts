import type { Variants } from "framer-motion";

export const primaryEase = [0.16, 1, 0.3, 1] as const;

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: primaryEase }
  }
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: primaryEase } }
};

export const slideLeftVariant: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: primaryEase } }
};

export const slideRightVariant: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: primaryEase } }
};

export const scaleUpVariant: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: primaryEase } }
};

export const blurUpVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(20px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: primaryEase } }
};

export const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

export const cardHoverVariant = {
  scale: 1.02,
  y: -6,
  transition: { type: "spring", stiffness: 400, damping: 25 }
};

export const charVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.04, ease: primaryEase }
  }
};

