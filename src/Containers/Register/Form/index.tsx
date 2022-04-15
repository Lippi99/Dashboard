import { SignUpButton } from "../../../components/Button/SignUp";
import { InputField } from "../../../components/Input";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import {
  Container,
  HeaderContainer,
  InputContainer,
  PrivacyContainer,
} from "./styles";
import Router from "next/router";

export const Form = () => {
  return (
    <Container>
      <HeaderContainer style={{ color: "white" }}>
        <button type="button" onClick={() => Router.push("/")}>
          <ArrowCircleLeftIcon />
        </button>
        <span style={{ marginLeft: "2rem" }}>Crie sua conta</span>
      </HeaderContainer>
      <InputContainer>
        <InputField
          required={true}
          type="email"
          placeholder="Email"
          autoComplete="off"
        />
        <InputField required={true} type="text" placeholder="Seu nome" />
        <InputField required={true} type="password" placeholder="Sua senha" />
        <InputField
          required={true}
          type="password"
          placeholder="Confirme sua senha"
        />
      </InputContainer>
      <PrivacyContainer>
        <span>
          Ao se registrar, você aceita nossos{" "}
          <a href="#">termos de uso e a nossa política de privacidade</a>
        </span>
      </PrivacyContainer>
      <div style={{ padding: "0 4rem" }}>
        <SignUpButton />
      </div>
    </Container>
  );
};
