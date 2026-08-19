import React from "react";
import { Link } from "react-router-dom";

export function SectionLabel({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`text-[12px] font-normal tracking-[0.12px] uppercase ${
        dark ? "text-[#8d8d8d]" : "text-[#8d8d8d]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  children,
  className = "",
  size = "lg",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "display";
  dark?: boolean;
}) {
  const sizeClasses = {
    sm: "text-[22px] leading-[1.25] tracking-[-0.44px]",
    md: "text-[28px] sm:text-[36px] leading-[1.2] tracking-[-0.72px]",
    lg: "text-[36px] sm:text-[62px] leading-[1.1] tracking-[-1.55px]",
    display: "text-[56px] sm:text-[100px] md:text-[168px] leading-[0.8] tracking-[-4.2px]",
  }[size];

  return (
    <h2
      className={`font-light font-sans ${sizeClasses} ${
        dark ? "text-[#ffffff]" : "text-[#000000]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function TextArrowButton({
  children,
  to,
  href,
  onClick,
  dark = false,
  variant = "pill",
  className = "",
}: {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  dark?: boolean;
  variant?: "pill" | "inline";
  className?: string;
}) {
  const colorClass = dark ? "text-[#ffffff]" : "text-[#000000]";
  const borderClass = variant === "pill" ? (dark ? "border border-white/20 hover:border-white/60" : "border border-black/20 hover:border-black/60") : "";
  const paddingClass = variant === "pill" ? "px-[16px] py-[10px] sm:py-[13px] rounded-[80px]" : "py-1";

  const content = (
    <span
      className={`inline-flex items-center gap-2 text-[13px] sm:text-[15px] font-normal tracking-[0.15px] transition-all duration-200 group ${colorClass} ${borderClass} ${paddingClass} ${className}`}
    >
      <span>{children}</span>
      <span className="text-[16px] transition-transform duration-200 group-hover:translate-x-1">→</span>
    </span>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  if (href) {
    return <a href={href}>{content}</a>;
  }
  return <button onClick={onClick} type="button" className="cursor-pointer">{content}</button>;
}

export function FilledDarkButton({
  children,
  to,
  href,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const content = (
    <span
      className={`inline-flex items-center justify-center bg-[#1c1c1c] text-[#ffffff] text-[13px] font-medium px-[16px] py-[12px] sm:py-[14px] rounded-[80px] hover:bg-[#070707] transition-all duration-200 tracking-[0.15px] ${className}`}
    >
      {children}
    </span>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  if (href) {
    return <a href={href}>{content}</a>;
  }
  return <button onClick={onClick} type="button" className="cursor-pointer">{content}</button>;
}

export function NumberedItem({
  num,
  title,
  subtitle,
  href,
  to,
}: {
  num: string;
  title: string;
  subtitle?: string;
  href?: string;
  to?: string;
}) {
  const content = (
    <div className="group border-t border-[#e5e4e4] py-6 sm:py-7 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 transition-colors duration-200 hover:bg-[#e5e4e4]/20 px-2 rounded-[8px]">
      <div className="flex items-baseline gap-6 sm:gap-10">
        <span className="text-[12px] text-[#8d8d8d] font-normal w-6 shrink-0">{num}</span>
        <div>
          <h3 className="text-[18px] sm:text-[20px] font-normal text-[#000000] tracking-[-0.2px] group-hover:text-[#b75928] transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[14px] text-[#666666] mt-1 max-w-[500px] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <span className="text-[#8d8d8d] text-[16px] group-hover:text-[#000000] group-hover:translate-x-1 transition-all pl-12 sm:pl-0">
        →
      </span>
    </div>
  );

  if (to) {
    return <Link to={to} className="block">{content}</Link>;
  }
  if (href) {
    return <a href={href} className="block">{content}</a>;
  }
  return content;
}

export function PillBadge({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center text-[12px] font-medium px-[14px] py-[6px] rounded-[1584px] tracking-[0.12px] ${
        dark
          ? "bg-white/10 text-[#ffffff] border border-white/15"
          : "bg-[#e5e4e4] text-[#000000]"
      } ${className}`}
    >
      {children}
    </span>
  );
}

export function LoraEditorialBlock({
  children,
  author,
  role,
  className = "",
}: {
  children: React.ReactNode;
  author?: string;
  role?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-[640px] ${className}`}>
      <blockquote className="font-serif italic text-[16px] sm:text-[18px] text-[#000000] leading-[1.6] tracking-[0.011em]">
        “{children}”
      </blockquote>
      {author && (
        <div className="mt-4 pt-3 border-t border-[#e5e4e4] flex items-center justify-between text-[12px]">
          <span className="font-medium text-[#000000]">{author}</span>
          <span className="text-[#8d8d8d]">{role}</span>
        </div>
      )}
    </div>
  );
}
