import { ChangeEvent } from "react";
import { Input } from "./styles";

export interface InputProps {
  width?: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "search"
    | "checkbox"
    | "button";
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const InputField = ({
  width,
  type,
  placeholder,
  autoComplete,
  required,
  onChange,
  value,
}: InputProps) => {
  return (
    <Input
      width={width}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete}
      type={type}
      placeholder={placeholder}
    />
  );
};
