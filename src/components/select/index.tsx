export interface SelectProps {
  options: any[];
}

export function Select({ options }: SelectProps) {
  return (
    <select>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
