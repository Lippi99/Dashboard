import { SignUpBtn } from "./styles";

interface SignUpButtonProps {
  type?: any;
}

export const SignUpButton = ({ type }: SignUpButtonProps) => {
  return <SignUpBtn type={type}>Cadastrar</SignUpBtn>;
};
