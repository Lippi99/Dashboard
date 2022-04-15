import { useRouter } from "next/router";
import { FormEvent } from "react";
import { Container, RegisterText } from "./styles";

export const RegisterButton = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/register");
  };

  return (
    <Container>
      <p>Não tem uma conta?</p>
      <RegisterText onClick={handleSignUp} type="button">
        Registre-se
      </RegisterText>
    </Container>
  );
};
