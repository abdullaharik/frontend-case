export type CheckboxProps = {
  checked: boolean;
  onClick: (value: boolean) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
