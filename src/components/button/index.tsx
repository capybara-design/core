import classNames from 'classnames';
import { ComponentProps, ReactNode } from 'react';
import './index.css';

export type ButtonProps<C> = {
  component?: C;
  className?: string;
  children?: ReactNode;
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
  iconStart,
  iconEnd,
  ...rest
}: ButtonProps<C> & ComponentProps<C>) {
  const Comp = component || 'button';
  return (
    <Comp className={classNames(className, 'cd-button')} {...(rest as any)}>
      {iconStart && <span className="cd-button-icon cd-button-icon-start">{iconStart}</span>}
      <span className="cd-button-content">{children}</span>
      {iconEnd && <span className="cd-button-icon cd-button-icon-end">{iconEnd}</span>}
    </Comp>
  );
}
