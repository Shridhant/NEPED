import * as React from "react";
import { Link } from "react-router-dom";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type HoverRevealItem = {
  title: string;
  text: string;
  /** Optional "Read More" style link */
  link?: { label: string; to: string };
  /** Image shown beside the list while this item is active; a placeholder panel is shown when omitted */
  image?: { src: string; alt: string };
};

/**
 * Numbered list beside a large image. Hovering / focusing / tapping an item expands it
 * and cross-fades the image to that item's picture.
 */
export function HoverRevealList({ items, className }: { items: HoverRevealItem[]; className?: string }) {
  const [active, setActive] = React.useState(0);

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch", className)}>
      {/* List */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        {items.map((item, idx) => {
          const isActive = idx === active;
          return (
            <div
              key={item.title + idx}
              onMouseEnter={() => setActive(idx)}
              className={cn(
                "rounded-[14px] border transition-colors duration-300",
                isActive ? "bg-[#f5f5f5] border-transparent" : "bg-[#ffffff] border-[#e5e4e4] hover:border-[#cfcfcf]",
              )}
            >
              <button
                type="button"
                aria-expanded={isActive}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                className="w-full text-left px-5 sm:px-6 py-5 flex items-baseline gap-3 cursor-pointer"
              >
                <span className={cn("font-mono text-[14px] transition-colors", isActive ? "text-(--brand-accent)" : "text-[#8d8d8d]")}>
                  {idx + 1}.
                </span>
                <span className="text-[19px] sm:text-[22px] font-light text-[#000000] tracking-[-0.3px] leading-snug">{item.title}</span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-6 space-y-4">
                    <p className="text-[15px] text-[#494949] leading-relaxed">{item.text}</p>
                    {item.link && (
                      <Link
                        to={item.link.to}
                        className="inline-block text-[14px] font-medium text-(--brand-accent) underline underline-offset-4 hover:text-(--brand-accent-hover)"
                      >
                        {item.link.label}
                      </Link>
                    )}
                    {/* Image inline on small screens */}
                    <div className="lg:hidden rounded-[12px] overflow-hidden aspect-[16/10]">
                      <RevealImage item={item} index={idx} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image (large screens) */}
      <div className="hidden lg:block lg:col-span-7 relative rounded-[20px] overflow-hidden min-h-[460px]">
        {items.map((item, idx) => (
          <div
            key={item.title + idx}
            aria-hidden={idx !== active}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
              idx === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]",
            )}
          >
            <RevealImage item={item} index={idx} />
          </div>
        ))}
      </div>
    </div>
  );
}

const PLACEHOLDER_TINTS = ["from-[#193f32] to-[#2d7d3a]", "from-[#2d7d3a] to-[#9fd68f]", "from-[#0f2a21] to-[#193f32]", "from-[#256a31] to-[#193f32]"];

function RevealImage({ item, index }: { item: HoverRevealItem; index: number }) {
  if (item.image) {
    return <img src={item.image.src} alt={item.image.alt} className="w-full h-full object-cover" />;
  }
  return (
    <div className={cn("w-full h-full bg-gradient-to-br flex flex-col items-center justify-center gap-3 text-[#ffffff]/80", PLACEHOLDER_TINTS[index % PLACEHOLDER_TINTS.length])}>
      <ImageIcon size={36} strokeWidth={1.25} />
      <span className="text-[12px] font-mono uppercase tracking-[0.14em]">Image placeholder {index + 1}</span>
    </div>
  );
}
