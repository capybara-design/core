import classNames from 'classnames';
import { ComponentProps, ReactNode } from 'react';
import './index.css';

export type ButtonProps<C> = {
  component?: C;
  className?: string;
  children?: ReactNode;
  variant?: 'line' | 'fill' | 'text';
  color?: 'normal' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'medium' | 'small' | 'large';
  block?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
};

export function Button<
  P extends { className?: string; children?: ReactNode },
  C extends 'a' | 'button' | React.JSXElementConstructor<P>,
>({
  className,
  children,
  component,
  variant = 'line',
  color = 'normal',
  size = 'medium',
  iconStart,
  iconEnd,
  ...rest
}: ButtonProps<C> & ComponentProps<C>) {
  const Comp = component || 'button';
  return (
    <Comp
      className={classNames(
        className,
        'cd-button',
        'cd-button-' + variant,
        'cd-button-' + color,
        'cd-button-' + size,
      )}
      {...(rest as any)}
    >
      {iconStart && <span className="cd-button-icon cd-button-icon-start">{iconStart}</span>}
      <span className="cd-button-content">{children}</span>
      {iconEnd && <span className="cd-button-icon cd-button-icon-end">{iconEnd}</span>}
    </Comp>
  );
}
