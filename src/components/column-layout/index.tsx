import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface ColumnLayoutProps {
  children?: ReactNode;
  className?: string;
  gap?: number | string;
  style?: CSSProperties;
  wrap?: boolean;
}

export function ColumnLayout({ children, className, gap, style, wrap }: ColumnLayoutProps) {
  return (
    <div
      className={cn('cd-column-layout', wrap && 'cd-column-layout-wrap', className)}
      style={{ ...style, gap }}
    >
      {children}
    </div>
  );
}
