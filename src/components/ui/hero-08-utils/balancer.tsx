import * as React from "react";

export interface BalancerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
}

export function Balancer({
  as: Component = "span",
  children,
  className,
  ...props
}: BalancerProps) {
  const Comp = Component as React.ElementType;
  return (
    <Comp className={className} style={{ display: "inline-block", textWrap: "balance" }} {...props}>
      {children}
    </Comp>
  );
}

export default Balancer;
