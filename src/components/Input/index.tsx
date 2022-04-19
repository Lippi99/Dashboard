import { ChangeEvent } from "react";
import { Input } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  autoComplete?: string;
  required: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
      className={value !== "" ? "notEmpty" : ""}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete}
      type={type}
      placeholder={placeholder}
    />
  );
};
