import { Input } from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  autoComplete?: string;
  required: boolean;
}

export const InputField = ({
  type,
  placeholder,
  autoComplete,
  required,
}: InputProps) => {
  return (
    <Input
      required={required}
      autoComplete={autoComplete}
      type={type}
      placeholder={placeholder}
    />
  );
};
