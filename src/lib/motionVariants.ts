import type { Transition, Variants } from "framer-motion";

/** Ultra-smooth custom cubic bezier curve (Emil Kowalski / Apple design standard) */
export const easeOut: Transition["ease"] = [0.23, 1, 0.32, 1];

/** Scroll-reveal with subtle progressive de-blur and fade-up */
export const fadeUpOnView = {
  initial: { opacity: 0, y: 22, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: easeOut },
};

/** Same as fadeUpOnView, with a starting delay for staggering adjacent siblings */
export function fadeUpOnViewDelayed(delay: number) {
  return {
    initial: { opacity: 0, y: 22, filter: "blur(8px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, ease: easeOut, delay },
  };
}

/** Stagger container for card grids and sequential child elements */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/** Stagger item with tasteful de-blur and smooth fade */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easeOut },
  },
};

/** Page-level entrance transition with gradual de-blurring */
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 14, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(4px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};
