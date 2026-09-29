import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type SubnavItem = { id: string; label: string };

/** Sticky tab bar under the navbar; jumps to each section and underlines the one in view. Scrolls sideways on phones. */
export function SectionSubnav({ items, label }: { items: SubnavItem[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-160px 0px -55% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className="-mt-16 sm:-mt-24 sticky top-16 lg:top-[84px] z-30 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#dbe5de]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex gap-7 sm:gap-10 overflow-x-auto [scrollbar-width:none]">
        {items.map(({ id, label: text }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "true" : undefined}
            className={`relative shrink-0 py-4 sm:py-5 text-[14px] sm:text-[15px] font-semibold whitespace-nowrap transition-colors duration-300 ease-in-out ${
              active === id ? "text-[#12432E]" : "text-[#5B6660] hover:text-[#1A2E23]"
            }`}
          >
            {text}
            {active === id ? (
              <motion.span layoutId={`subnav-${label}`} className="absolute left-0 right-0 bottom-0 h-[3px] rounded-full bg-[#1E6F4C]" transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }} />
            ) : null}
          </a>
        ))}
      </div>
    </nav>
  );
}
