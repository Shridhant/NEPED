import { motion } from "framer-motion";

/** Inner-page hero: Deep Forest panel with faint river lines, gold eyebrow and serif title. */
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="px-2.5 sm:px-4 pt-2.5 sm:pt-4">
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-(--brand-surface) text-[#ffffff]">
        <svg viewBox="0 0 1440 440" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M0 360 C240 300 420 380 720 320 C1000 262 1200 330 1440 280" fill="none" stroke="#E8A33D" strokeOpacity="0.2" strokeWidth="2" />
          <path d="M0 400 C260 340 460 420 740 360 C1020 300 1220 370 1440 320" fill="none" stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="2" />
        </svg>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-14 pt-14 sm:pt-20 pb-16 sm:pb-24 space-y-6"
        >
          {/* not uppercased: "NEPeD" must keep its lowercase e */}
          <span className="block text-[14px] font-semibold tracking-[0.06em] text-(--brand-accent-on-dark)">{eyebrow}</span>
          <h1 className="font-serif text-[48px] sm:text-[76px] leading-[1] tracking-[-0.5px] text-balance">{title}</h1>
          {intro ? <p className="max-w-[720px] text-[17px] sm:text-[20px] text-[#ffffff]/90 leading-[1.55]">{intro}</p> : null}
        </motion.div>
      </div>
    </section>
  );
}
