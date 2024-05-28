import classNames from 'classnames';
import { ComponentProps, ReactNode } from 'react';
import './index.css';

export type ButtonProps<T> = {
  component?: T;
  className?: string;
  children?: ReactNode;
};

export function Button<
  RootComponentProps extends { className?: string; children?: ReactNode },
  RootComponentType extends 'a' | 'button' | React.JSXElementConstructor<RootComponentProps>,
>({
  className,
  children,
  component,
  ...rest
}: ButtonProps<RootComponentType> & ComponentProps<RootComponentType>) {
  const RootComponent = component || 'button';
  return (
    <RootComponent className={classNames(className)} {...rest}>
      {children}
    </RootComponent>
  );
}

<Button component="a" target="fff" href={123}>
  fff
</Button>;
