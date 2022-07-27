import { useRouter } from "next/router";
import { FormEvent } from "react";
import { NavLink } from "../../Link";
import { Container, RegisterText } from "./styles";

export const RegisterButton = () => {
  return (
    <Container>
      <p>Does not have an account?</p>
      <RegisterText type="button">
        <NavLink to="/signup" value="Register" />
      </RegisterText>
    </Container>
  );
};
