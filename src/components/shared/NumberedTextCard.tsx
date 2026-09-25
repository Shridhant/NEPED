import type { LucideIcon } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";

/**
 * Text card: icon, two-digit number and a statement — used for objectives, aims and similar lists.
 * Optionally shows a photo on top, a title, and a list of points instead of (or after) the statement.
 */
export function NumberedTextCard({
  icon: Icon,
  index,
  text,
  title,
  points,
  image,
  ordered = false,
  blurBackground,
}: {
  icon: LucideIcon;
  index: number;
  text?: string;
  title?: string;
  points?: string[];
  image?: { src: string; alt: string; fit?: "cover" | "contain" };
  /** Show points as a numbered list (1., 2., …) instead of bullets */
  ordered?: boolean;
  /** Photo shown heavily blurred behind the card with a dark gradient (text turns light) */
  blurBackground?: string;
}) {
  const dark = Boolean(blurBackground);
  return (
    <div
      className={`relative overflow-hidden h-full rounded-[12px] p-6 sm:p-7 flex flex-col gap-10 border transition-colors ${
        dark ? "bg-[#1c1c1c] border-white/10 hover:border-white/25" : "bg-[#f5f5f5] border-transparent hover:border-[#e5e4e4]"
      }`}
    >
      {blurBackground && (
        // Blurred-photo glow + dark gradient (from the Spotify card background style)
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[140%] -translate-x-1/2 -translate-y-1/2">
          <img src={blurBackground} alt="" className="absolute inset-0 h-full w-full object-cover brightness-150 blur-[50px] select-none" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0,rgba(0,0,0,0.8))]" />
        </div>
      )}
      {image && (
        <div className={`relative z-[1] -mx-3 -mt-3 sm:-mx-4 sm:-mt-4 -mb-4 rounded-[10px] overflow-hidden aspect-[16/10] ${image.fit === "contain" ? "bg-[#ffffff] p-4" : "bg-[#e5e4e4]"}`}>
          <img src={image.src} alt={image.alt} className={`w-full h-full ${image.fit === "contain" ? "object-contain" : "object-cover"}`} />
        </div>
      )}
      <div className="relative z-[1] flex items-center justify-between">
        <span className={`w-12 h-12 rounded-full flex items-center justify-center ${dark ? "bg-white/15 text-[#ffffff] backdrop-blur-md" : "bg-[#e5e4e4] text-[#1c1c1c]"}`}>
          <Icon size={20} />
        </span>
        <span className={`text-[12px] font-mono ${dark ? "text-[#ffffff]/70" : "text-[#8d8d8d]"}`}>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="relative z-[1] space-y-4">
        {title && (
          <BlurReveal as="h3" inView className={`${text ? "text-[18px] sm:text-[20px]" : "text-[22px] sm:text-[26px]"} font-light ${dark ? "text-[#ffffff]" : "text-[#000000]"} tracking-[-0.5px] leading-tight`}>{title}</BlurReveal>
        )}
        {text && (
          <p className={title ? `text-[14px] sm:text-[15px] leading-relaxed ${dark ? "text-[#ffffff]/80" : "text-[#666666]"}` : `text-[17px] sm:text-[19px] leading-snug tracking-[-0.2px] ${dark ? "text-[#ffffff]" : "text-[#000000]"}`}>
            {text}
          </p>
        )}
        {points && (
          <ul className="space-y-3">
            {points.map((point, pointIndex) => (
              <li key={point} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#262626] leading-relaxed">
                {ordered ? (
                  <span className="min-w-[1.5em] text-[#8d8d8d] font-mono text-[13px] pt-[3px] shrink-0">{pointIndex + 1}.</span>
                ) : (
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#8d8d8d] shrink-0" />
                )}
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
