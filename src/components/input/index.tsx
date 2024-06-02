import cn from 'classnames';
import { ReactNode } from 'react';
import './index.css';

export interface InputProps {
  block?: boolean;
  className?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  state?: 'normal' | 'success' | 'warning' | 'error';
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  type?: 'text' | 'search' | 'url' | 'email' | 'password' | 'tel';
  value?: string;
}

export function Input({
  block,
  className,
  defaultValue,
  iconStart,
  iconEnd,
  onChange,
  placeholder,
  size = 'medium',
  state = 'normal',
  type,
  value,
}: InputProps) {
  return (
    <div
      className={cn(
        className,
        'cd-input',
        block && 'cd-input-block',
        'cd-input-' + state,
        'cd-input-' + size,
      )}
    >
      {iconStart && <span className="cd-input-icon cd-input-icon-start">{iconStart}</span>}
      <input
        className="cd-input-element"
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {iconEnd && <span className="cd-input-icon cd-input-icon-end">{iconEnd}</span>}
    </div>
  );
}
