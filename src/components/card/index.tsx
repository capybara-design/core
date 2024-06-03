import classNames from 'classnames';
import { ComponentProps, ReactNode } from 'react';
import './index.css';

export type CardProps<C> = {
  component?: C;
  className?: string;
  children?: ReactNode;
  variant?: 'line' | 'shadow' | 'text';
  size?: 'medium' | 'small' | 'large';
  block?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
};

export function Card<
  P extends { className?: string; children?: ReactNode },
  C extends 'a' | 'div' | React.JSXElementConstructor<P>,
>({
  className,
  children,
  component,
  variant = 'line',
  size = 'medium',
  iconStart,
  iconEnd,
  ...rest
}: CardProps<C> & ComponentProps<C>) {
  const Comp = component || 'div';
  return (
    <Comp
      className={classNames(className, 'cd-card', 'cd-card-' + variant, 'cd-card-' + size)}
      {...(rest as any)}
    >
      {iconStart && <span className="cd-card-icon cd-card-icon-start">{iconStart}</span>}
      <div className="cd-card-content">{children}</div>
      {iconEnd && <span className="cd-card-icon cd-card-icon-end">{iconEnd}</span>}
    </Comp>
  );
}
