import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface CenterLayoutProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function CenterLayout({ children, className, style }: CenterLayoutProps) {
  return (
    <div className={cn('cd-center-layout', className)} style={style}>
      {children}
    </div>
  );
}
