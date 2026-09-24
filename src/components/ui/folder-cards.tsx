import { motion, type Transition } from "motion/react";
import type { LucideIcon } from "lucide-react";

/*
 * Adapted from the "FolderCards" component: a folder that slides down on hover to
 * reveal a floating object. Site changes: the background photo is replaced by a soft
 * gradient, the floating object is a lucide icon (no third-party images), and the card
 * fills its grid cell instead of a fixed 300px width.
 */

export interface FolderCardItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** CSS background for the card (e.g. a linear-gradient) */
  background: string;
  folderColor: string;
  borderColor: string;
  textColor: string;
  subTextColor: string;
  iconColor: string;
}

const gpuSpringTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.75,
  restDelta: 0.0005,
  restSpeed: 0.0005,
};

export function FolderCard({ card }: { card: FolderCardItem }) {
  const Icon = card.icon;

  return (
    <motion.div
      className="group relative isolate block h-[420px] w-full cursor-default select-none overflow-hidden rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transform-gpu [backface-visibility:hidden] [contain:paint]"
      style={{ border: `10px solid ${card.borderColor}`, boxSizing: "border-box" }}
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      {/* Gradient background (scales on hover) */}
      <motion.div
        className="absolute inset-0 z-0 transform-gpu will-change-[transform]"
        style={{ background: card.background }}
        variants={{ initial: { scale: 1 }, hover: { scale: 1.09 } }}
        transition={gpuSpringTransition}
      />

      {/* Floating icon, revealed when the folder slides down */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[130px] z-10 flex -translate-x-1/2 justify-center transform-gpu will-change-[transform]"
        variants={{ initial: { y: 0, scale: 0.96 }, hover: { y: -110, scale: 1.05 } }}
        transition={gpuSpringTransition}
      >
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 1.5, -1.5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-24 w-24 items-center justify-center rounded-[24px] bg-white/70 backdrop-blur-md shadow-[0_18px_24px_rgba(0,0,0,0.12)]"
        >
          <Icon size={44} strokeWidth={1.5} color={card.iconColor} />
        </motion.div>
      </motion.div>

      {/* Folder */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-[80px] z-20 h-[400px] transform-gpu will-change-[transform]"
        variants={{ initial: { y: 0 }, hover: { y: 40 } }}
        transition={gpuSpringTransition}
      >
        <svg
          viewBox="0 0 280 380"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full drop-shadow-[0_-10px_20px_rgba(0,0,0,0.08)]"
        >
          <path
            d="M 0,20 C 0,9 9,0 20,0 L 122,0 C 133,0 140,5.5 143.5,15 C 147,24.5 154,30 164,30 L 262,30 C 272,30 280,38 280,48 L 280,380 L 0,380 Z"
            fill={card.folderColor}
          />
        </svg>

        <div
          className="absolute left-6 top-4 font-mono text-[3.5rem] font-bold tabular-nums leading-none tracking-tighter select-none"
          style={{ color: card.textColor }}
        >
          {card.number}
        </div>

        <motion.div
          className="absolute right-6 top-[46px] flex h-6 w-6 transform-gpu items-center justify-center will-change-[transform]"
          variants={{ initial: { x: 0, scale: 1 }, hover: { x: 4, scale: 1.15 } }}
          transition={gpuSpringTransition}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke={card.textColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none h-5 w-5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Text */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex flex-col gap-2 p-5 pb-[22px]">
        <h3 className="select-none text-[17px] font-medium leading-snug tracking-tight" style={{ color: card.textColor }}>
          {card.title}
        </h3>
        <p className="select-none text-[14px] leading-relaxed" style={{ color: card.subTextColor }}>
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default FolderCard;
