import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import { Button } from '../button';
import { useDialog } from './context';
import './header.css';

export interface DialogHeaderProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function DialogHeader({ title, subtitle, className, style }: DialogHeaderProps) {
  const { close } = useDialog();
  return (
    <div className={cn('cd-dialog-header', className)} style={style}>
      <div className="cd-dialog-header-content">
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
      <Button className="cd-dialog-header-close" variant="text" onClick={close}>
        &#x2715;
      </Button>
    </div>
  );
}
