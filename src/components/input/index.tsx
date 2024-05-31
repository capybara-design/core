import cn from 'classnames';
import './index.css';

export interface InputProps {
  className?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  type?: 'text' | 'search' | 'url' | 'email' | 'password' | 'tel';
}

export function Input({ className, defaultValue, onChange, type, value }: InputProps) {
  return (
    <div className={cn(className, 'cd-input')}>
      <input
        className="cd-input-element"
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
