import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail } from "lucide-react";

type Variant = "primary" | "glass" | "outline" | "link";
type Arrow = "right" | "down" | "up-right" | "mail";

const ARROWS = { right: ArrowRight, down: ArrowDown, "up-right": ArrowUpRight, mail: Mail };

const STYLES: Record<Variant, { button: string; circle: string }> = {
  primary: {
    button: "pl-6 pr-1.5 py-1.5 bg-(--brand-accent) text-[#ffffff] hover:bg-(--brand-accent-hover)",
    circle: "w-9 h-9 rounded-full bg-[#ffffff] text-[#000000]",
  },
  glass: {
    button: "pl-6 pr-1.5 py-1.5 bg-white/10 border border-white/25 text-[#ffffff] hover:bg-white/20 backdrop-blur-md",
    circle: "w-9 h-9 rounded-full bg-white/15",
  },
  outline: {
    button: "pl-6 pr-1.5 py-1.5 border border-[#e5e4e4] text-[#000000] hover:border-[#000000]",
    circle: "w-9 h-9 rounded-full bg-(--brand-accent) text-[#ffffff]",
  },
  link: {
    button: "px-3 py-3 text-[#ffffff] hover:text-[#e5e4e4] underline underline-offset-4 decoration-white/40",
    circle: "",
  },
};

/** Pill button with a round arrow, as used in the NEPeD hero. Renders a router Link for `to`, an anchor for `href`, a button for `onClick`. */
export function ArrowPillButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  arrow = "right",
  className = "",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  arrow?: Arrow;
  className?: string;
}) {
  const Icon = ARROWS[arrow];
  const style = STYLES[variant];
  const nudge = arrow === "down" ? "group-hover:translate-y-0.5" : "group-hover:translate-x-0.5";
  const classes = `group inline-flex items-center ${variant === "link" ? "gap-1.5" : "gap-3"} rounded-[1584px] text-[14px] font-medium transition-colors ${style.button} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {variant === "link" ? (
        <Icon size={15} />
      ) : (
        <span className={`${style.circle} flex items-center justify-center transition-transform ${nudge}`}>
          <Icon size={16} />
        </span>
      )}
    </>
  );
  if (onClick) return <button type="button" onClick={onClick} className={`${classes} cursor-pointer`}>{content}</button>;
  if (to) return <Link to={to} className={classes}>{content}</Link>;
  return <a href={href} className={classes}>{content}</a>;
}
