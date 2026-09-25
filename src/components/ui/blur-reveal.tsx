import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type React from "react";

/*
 * Adapted from the "BlurReveal" component: text appears letter by letter out of a blur.
 * Site changes:
 * - no blur on WebKit (iPhone / iPad / Safari): animating `filter: blur()` next to the frosted
 *   navbar makes WebKit paint black boxes or skip painting the page — letters just fade and rise;
 * - respects "reduce motion" (text shows immediately);
 * - "use client" removed (Vite app).
 */

export interface BlurRevealProps {
  children: string;
  className?: string;
  delay?: number;
  speedReveal?: number;
  speedSegment?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
  onAnimationStart?: () => void;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
  inView?: boolean;
  once?: boolean;
  letterSpacing?: string | number;
}

/** WebKit = Safari on any device, and every browser on iPhone / iPad. */
function isWebKit() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const safari = /AppleWebKit/.test(ua) && !/Chrome|Chromium|Edg|OPR|Firefox|Android/.test(ua);
  return iOS || safari;
}

export function BlurReveal({
  children,
  className,
  delay = 0,
  speedReveal = 1.5,
  speedSegment = 0.5,
  trigger = true,
  onAnimationComplete,
  onAnimationStart,
  as = "p",
  style,
  inView = false,
  once = true,
  letterSpacing,
}: BlurRevealProps) {
  const [noBlur] = useState(isWebKit);
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduceMotion) {
    const Tag = as as React.ElementType;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const stagger = 0.03 / speedReveal;
  const baseDuration = 0.3 / speedSegment;
  const hiddenFilter = noBlur ? {} : { filter: "blur(12px)" };
  const shownFilter = noBlur ? {} : { filter: "blur(0px)" };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: stagger, delayChildren: delay } },
    exit: { transition: { staggerChildren: stagger, staggerDirection: -1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, ...hiddenFilter },
    visible: { opacity: 1, y: 0, ...shownFilter, transition: { duration: baseDuration } },
    exit: { opacity: 0, y: 10, ...hiddenFilter },
  };

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionTag
          initial="hidden"
          whileInView={inView ? "visible" : undefined}
          animate={inView ? undefined : "visible"}
          exit="exit"
          variants={containerVariants}
          viewport={{ once }}
          className={className}
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
          style={style}
        >
          <span className="sr-only">{children}</span>
          {children &&
            children.split(" ").map((word, wordIndex, wordsArray) => (
              <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap" aria-hidden="true">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`char-${wordIndex}-${charIndex}`}
                    variants={itemVariants}
                    className="inline-block"
                    style={letterSpacing ? { marginRight: letterSpacing } : undefined}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < wordsArray.length - 1 && (
                  <motion.span key={`space-${wordIndex}`} variants={itemVariants} className="inline-block">
                    &nbsp;
                  </motion.span>
                )}
              </span>
            ))}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}

export default BlurReveal;
