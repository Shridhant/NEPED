declare module 'react-wrap-balancer' {
  import * as React from 'react';
  
  export interface BalancerProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    ratio?: number;
    children?: React.ReactNode;
  }
  
  export default function Balancer(props: BalancerProps): React.JSX.Element;
}
