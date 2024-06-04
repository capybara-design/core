import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface ArrowStepsProps {
  current?: number;
  onChange?: (current: number) => void;
  items: { label: ReactNode }[];
  flatCap?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function ArrowSteps({
  items,
  current = 0,
  onChange,
  flatCap,
  className,
  style,
}: ArrowStepsProps) {
  return (
    <div
      className={cn('cd-arrow-steps', flatCap && 'cd-arrow-steps-flat-cap', className)}
      style={style}
    >
      {items.map(({ label }, index) => (
        <ArrowStepsItem
          key={index}
          status={calcStatus(index, current)}
          onClick={() => onChange?.(index)}
          selectable={!!onChange}
        >
          {label}
        </ArrowStepsItem>
      ))}
    </div>
  );
}

interface ArrowStepsItemProps {
  status?: 'finish' | 'process' | 'wait';
  children?: ReactNode;
  onClick?: () => void;
  selectable?: boolean;
}

function ArrowStepsItem({ children, status, onClick, selectable }: ArrowStepsItemProps) {
  return (
    <div
      className={cn(
        'cd-arrow-steps-item',
        'cd-arrow-steps-item-' + status,
        selectable && 'cd-arrow-steps-item-selectable',
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function calcStatus(index: number, current: number) {
  if (index === current) return 'process';
  return index > current ? 'wait' : 'finish';
}
