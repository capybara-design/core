import cn from 'classnames';
import './index.css';

export interface InputProps {
  block?: boolean;
  className?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'text' | 'search' | 'url' | 'email' | 'password' | 'tel';
  value?: string;
}

export function Input({
  block,
  className,
  defaultValue,
  onChange,
  placeholder,
  size = 'medium',
  type,
  value,
}: InputProps) {
  return (
    <div className={cn(className, 'cd-input', block && 'cd-input-block', 'cd-input-' + size)}>
      <input
        className="cd-input-element"
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
