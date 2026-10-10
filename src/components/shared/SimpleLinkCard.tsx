import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Simple framed card (same look as the gallery album cards): photo, title, optional text and a
 * small action label with a round arrow. The whole card is one link — no second button.
 * `fit="contain"` shows the whole photo (product shots) instead of cropping it.
 */
export function SimpleLinkCard({
  to,
  image,
  imageAlt = "",
  fit = "cover",
  badge,
  title,
  text,
  action,
}: {
  to: string;
  image: string;
  imageAlt?: string;
  fit?: "cover" | "contain";
  badge?: ReactNode;
  title: string;
  text?: string;
  action: string;
}) {
  return (
    <Link
      to={to}
      className="group flex h-full w-full flex-col border border-[#e5e4e4] bg-[#ffffff] p-2.5 transition-[border-color,box-shadow] duration-300 hover:border-[#C9D4CD] hover:shadow-[0_1px_2px_rgba(18,67,46,0.06),0_12px_32px_rgba(18,67,46,0.10)] outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent)"
    >
      <div className={`relative aspect-[4/3] w-full overflow-hidden ${fit === "contain" ? "bg-[#F3F6F3]" : "bg-[#e5e4e4]"}`}>
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className={
            fit === "contain"
              ? "h-full w-full object-contain p-4 sm:p-6 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              : "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          }
        />
        {badge && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-[#ffffff]/95 px-2.5 py-1 text-[12px] font-medium text-[#1A2E23] shadow-sm backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 items-end justify-between gap-4 px-2 pt-5 pb-2.5">
        <div className="min-w-0">
          <h3 className="text-[19px] sm:text-[21px] font-light leading-tight tracking-[-0.3px] text-[#1A2E23]">{title}</h3>
          {text && <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-[#5B6660]">{text}</p>}
          <span className="mt-3 block text-[13px] font-medium text-(--brand-accent)">{action}</span>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#e5e4e4] text-[#1A2E23] transition-colors duration-300 group-hover:border-(--brand-accent) group-hover:bg-(--brand-accent) group-hover:text-[#ffffff]">
          <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
