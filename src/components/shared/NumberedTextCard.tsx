import type { LucideIcon } from "lucide-react";

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
}: {
  icon: LucideIcon;
  index: number;
  text?: string;
  title?: string;
  points?: string[];
  image?: { src: string; alt: string; fit?: "cover" | "contain" };
  /** Show points as a numbered list (1., 2., …) instead of bullets */
  ordered?: boolean;
}) {
  return (
    <div className="h-full bg-[#f5f5f5] rounded-[12px] p-6 sm:p-7 flex flex-col gap-10 border border-transparent hover:border-[#e5e4e4] transition-colors">
      {image && (
        <div className={`-mx-3 -mt-3 sm:-mx-4 sm:-mt-4 -mb-4 rounded-[10px] overflow-hidden aspect-[16/10] ${image.fit === "contain" ? "bg-[#ffffff] p-4" : "bg-[#e5e4e4]"}`}>
          <img src={image.src} alt={image.alt} className={`w-full h-full ${image.fit === "contain" ? "object-contain" : "object-cover"}`} />
        </div>
      )}
      <div className="flex items-center justify-between">
        <span className="w-12 h-12 rounded-full bg-[#e5e4e4] text-[#1c1c1c] flex items-center justify-center">
          <Icon size={20} />
        </span>
        <span className="text-[12px] font-mono text-[#8d8d8d]">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="space-y-4">
        {title && (
          <h3 className={`${text ? "text-[18px] sm:text-[20px]" : "text-[22px] sm:text-[26px]"} font-light text-[#000000] tracking-[-0.5px] leading-tight`}>{title}</h3>
        )}
        {text && (
          <p className={title ? "text-[14px] sm:text-[15px] text-[#666666] leading-relaxed" : "text-[17px] sm:text-[19px] text-[#000000] leading-snug tracking-[-0.2px]"}>
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
