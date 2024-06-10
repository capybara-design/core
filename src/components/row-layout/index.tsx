import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface RowLayoutProps {
  inline?: boolean;
  children?: ReactNode;
  className?: string;
  gap?: number | string;
  style?: CSSProperties;
  wrap?: boolean;
}

export function RowLayout({ inline, children, className, gap, style, wrap }: RowLayoutProps) {
  return (
    <div
      className={cn(
        'cd-row-layout',
        inline && 'cd-row-layout-inline',
        wrap && 'cd-row-layout-wrap',
        className,
      )}
      style={{ ...style, gap }}
    >
      {children}
    </div>
  );
}
