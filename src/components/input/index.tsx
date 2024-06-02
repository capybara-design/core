import cn from 'classnames';
import { ReactNode } from 'react';
import './index.css';

export interface InputProps {
  block?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  preview?: boolean;
  readOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
  state?: 'normal' | 'success' | 'warning' | 'error';
  type?: 'text' | 'search' | 'url' | 'email' | 'password' | 'tel';
  value?: string;
}

export function Input({
  block,
  className,
  defaultValue,
  disabled,
  iconStart,
  iconEnd,
  onChange,
  placeholder,
  preview,
  readOnly,
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
        disabled && 'cd-input-disabled',
        readOnly && 'cd-input-readonly',
        preview && 'cd-input-preview',
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
        disabled={disabled}
        readOnly={readOnly || preview}
      />
      {iconEnd && <span className="cd-input-icon cd-input-icon-end">{iconEnd}</span>}
    </div>
  );
}
