import { Children, type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

type MobileShowMoreProps = {
  children: ReactNode;
  initialCount?: number;
  className?: string;
  buttonClassName?: string;
  showLabel?: string;
  hideLabel?: string;
};

export function MobileShowMore({
  children,
  initialCount = 3,
  className,
  buttonClassName,
  showLabel = "Show all",
  hideLabel = "Show less",
}: MobileShowMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const items = Children.toArray(children);
  const hasHiddenItems = items.length > initialCount;

  return (
    <>
      {/* Each item is at least as tall as its grid cell, so cards in a row match in height (fixed heights still apply) */}
      <div className={className}>
        {items.map((child, index) => (
          <div key={index} className={cn("[&>*]:min-h-full", index >= initialCount && !expanded ? "hidden sm:block" : "")}>
            {child}
          </div>
        ))}
      </div>

      {hasHiddenItems ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className={cn(
            "sm:hidden mt-5 min-h-11 w-full border border-[#1E6F4C] px-5 text-[14px] font-medium text-[#1E6F4C] transition-colors active:bg-[#1E6F4C] active:text-[#ffffff]",
            buttonClassName,
          )}
        >
          {expanded ? hideLabel : showLabel}
        </button>
      ) : null}
    </>
  );
}
