import { ChangeEvent, FormEvent } from "react";
import { Input } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  autoComplete?: string;
  required: boolean;
  onChange?: any;
  value?: string | number;
}

export const InputField = ({
  type,
  placeholder,
  autoComplete,
  required,
  onChange,
  value,
}: InputProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete}
      type={type}
      placeholder={placeholder}
    />
  );
};
