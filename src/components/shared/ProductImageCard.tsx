import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/** Large photo card with the title at the bottom and a round arrow notched into the bottom-right corner. */
export function ProductImageCard({
  to,
  image,
  title,
  subtitle,
  tag,
}: {
  to: string;
  image: string;
  title: string;
  subtitle?: string;
  tag?: string;
}) {
  return (
    <Link to={to} className="group relative block rounded-[16px] overflow-hidden aspect-[4/3] bg-[#1c1c1c]">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-[#070707]/10 to-transparent" />
      {tag && (
        <span className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-1 rounded-[1584px] bg-black/55 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#ffffff] uppercase tracking-wider">
          {tag}
        </span>
      )}
      <div className="absolute left-6 bottom-6 sm:left-8 sm:bottom-8 pr-24">
        <h3 className="text-[24px] sm:text-[32px] font-light text-[#ffffff] tracking-[-0.6px] leading-tight">{title}</h3>
        {subtitle && <p className="mt-1 text-[14px] sm:text-[15px] text-[#ffffff]/75">{subtitle}</p>}
      </div>
      <span className="absolute right-0 bottom-0 w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] rounded-tl-[24px] bg-[#ffffff] flex items-center justify-center">
        <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-(--brand-accent) text-[#ffffff] flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
          <ArrowUpRight size={20} />
        </span>
      </span>
    </Link>
  );
}
