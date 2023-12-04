export type SearchProps = {
  value: string;
  setValue: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
