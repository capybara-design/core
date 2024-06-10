import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface LoaderProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Loader({ children, className, style }: LoaderProps) {
  return (
    <div className={cn('cd-loader', className)} style={style}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {children}
    </div>
  );
}
