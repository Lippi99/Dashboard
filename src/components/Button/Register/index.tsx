import { useRouter } from "next/router";
import { FormEvent } from "react";
import { NavLink } from "../../Link";
import { Container, RegisterText } from "./styles";

export const RegisterButton = () => {
  return (
    <Container>
      <p>Não tem uma conta?</p>
      <RegisterText type="button">
        <NavLink to="/signup" value="Registre-se" />
      </RegisterText>
    </Container>
  );
};
