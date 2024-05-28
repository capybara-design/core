import { ComponentProps } from 'react';

export type WithCompProp<
  OwnProps,
  T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = OwnProps & ComponentProps<T> & { component: T };
