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
import { ChangeEvent, FormEvent, useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleNameFix = (name: string) => {
    if (name.length < 5) {
      throw new Error("É necessário que o campo tenha mais carácteres");
    }
  };

  const passwordEqualsConfirm = (passwordConfirm: string, password: string) => {
    if (passwordConfirm !== password) {
      throw new Error("As senhas não coincidem");
    }

    if (passwordConfirm.length < 6 && password.length < 6) {
      throw new Error("Precisam ter mais de 6 carácteres");
    }
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleNameFix(name);
    passwordEqualsConfirm(passwordConfirm, password);

    setEmail("");
    setName("");
    setPassword("");
    setPasswordConfirm("");
    console.log({ email, name, password, passwordConfirm });
  };

  return (
    <Container onSubmit={submitForm}>
      <HeaderContainer style={{ color: "white" }}>
        <button type="button" onClick={() => Router.push("/")}>
          <ArrowCircleLeftIcon />
        </button>
        <span style={{ marginLeft: "2rem" }}>Crie sua conta</span>
      </HeaderContainer>
      <InputContainer>
        <InputField
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required={true}
          type="email"
          placeholder="Email"
          autoComplete="off"
        />
        <InputField
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          required={true}
          type="text"
          placeholder="Seu nome"
        />
        <InputField
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          required={true}
          type="password"
          placeholder="Sua senha"
        />
        <InputField
          value={passwordConfirm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPasswordConfirm(e.target.value);
          }}
          required={true}
          type="password"
          placeholder="Confirme sua senha"
        />
      </InputContainer>
      <PrivacyContainer>
        <span>
          Ao se registrar, você aceita nossos{" "}
          <a
            target="_blank"
            href="https://www.rocketseat.com.br/"
            rel="noreferrer"
          >
            termos de uso e a nossa política de privacidade
          </a>
        </span>
      </PrivacyContainer>
      <div style={{ padding: "0 4rem" }}>
        <SignUpButton />
      </div>
    </Container>
  );
};
