export type CheckboxProps = {
  checked: boolean;
  onChange: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
