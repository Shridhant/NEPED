import { Button } from "@/components/ui/button";

export interface CtaProps {
  ctaEnabled?: boolean;
  text: string;
  link?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function Cta({
  cta,
  invert,
}: {
  cta: CtaProps;
  invert?: boolean;
}) {
  if (!cta.ctaEnabled) return null;

  const variant = cta.variant ?? (invert ? "secondary" : "default");

  if (cta.link) {
    return (
      <Button asChild size={cta.size ?? "default"} variant={variant}>
        <a href={cta.link}>{cta.text}</a>
      </Button>
    );
  }

  return (
    <Button size={cta.size ?? "default"} variant={variant}>
      {cta.text}
    </Button>
  );
}
