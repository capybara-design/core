import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface LoaderProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Loader({ size, color, children, className, style }: LoaderProps) {
  return (
    <div className={cn('cd-loader', className)} style={{ ...style, fontSize: size, color }}>
      <div className="cd-loader-circle cd-loader-circle-1" />
      <div className="cd-loader-circle cd-loader-circle-2" />
      <div className="cd-loader-circle cd-loader-circle-3" />
      {children}
    </div>
  );
}
