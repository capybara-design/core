import classNames from 'classnames';
import { ComponentProps, ReactNode } from 'react';
import './index.css';

export type ButtonProps<T> = {
  component?: T;
  className?: string;
  children?: ReactNode;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
};

export function Button<
  RootComponentProps extends { className?: string; children?: ReactNode },
  RootComponentType extends 'a' | 'button' | React.JSXElementConstructor<RootComponentProps>,
>({
  className,
  children,
  component,
  iconStart,
  iconEnd,
  ...rest
}: ButtonProps<RootComponentType> & ComponentProps<RootComponentType>) {
  const RootComponent = component || 'button';
  return (
    <RootComponent className={classNames(className, 'cd-button')} {...(rest as any)}>
      {iconStart && <span className="cd-button-icon cd-button-icon-start">{iconStart}</span>}
      <span className="cd-button-content">{children}</span>
      {iconEnd && <span className="cd-button-icon cd-button-icon-end">{iconEnd}</span>}
    </RootComponent>
  );
}
