import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface ColumnLayoutProps {
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  children?: ReactNode;
  className?: string;
  gap?: number | string;
  style?: CSSProperties;
  wrap?: boolean;
}

export function ColumnLayout({ align, children, className, gap, style, wrap }: ColumnLayoutProps) {
  return (
    <div
      className={cn('cd-column-layout', wrap && 'cd-column-layout-wrap', className)}
      style={{ ...style, gap, alignItems: align }}
    >
      {children}
    </div>
  );
}
