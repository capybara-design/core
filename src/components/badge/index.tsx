import cn from 'classnames';
import { CSSProperties, ReactNode, useMemo } from 'react';
import { ColorType } from '../../types/ColorType';
import './index.css';

export interface BadgeProps {
  color?: ColorType;
  count?: number;
  max?: number;
  content?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Badge({
  color = 'normal',
  count,
  max = 99,
  content,
  className,
  style,
}: BadgeProps) {
  const computedContent = useMemo(() => {
    if (content) return content;
    if (count == 0) return null;
    if (count < max) return count;
    return max;
  }, [count, max]);

  return (
    <div className={cn('cd-badge', 'cd-badge-' + color, className)} style={style}>
      <div className="cd-badge-content">{computedContent}</div>
    </div>
  );
}
