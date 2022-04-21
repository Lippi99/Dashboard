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
import { ChangeEvent, FormEvent, Suspense, useEffect, useState } from "react";
import { api } from "../../../service/api";
import axios, { AxiosError } from "axios";

import { SnackbarMessage } from "../../../components/Snackbar";
import { NavLink } from "../../../components/Link";

interface FormErrors {
  response: {
    conflict: string;
  };
}

export const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [open, setOpen] = useState(false);

  const handleRegister = async (e: any) => {
    const payload = { email, name, password };
    try {
      const res = await api.post("user/api/register", payload);
      const data = res.data;
      setOpen(true);
      setEmail("");
      setName("");
      setPassword("");
      setPasswordConfirm("");
      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response) {
          alert(response.data.conflict);
        }
      }
    }
  };

  return (
    <Suspense>
      <Container onSubmit={(e) => handleRegister(e.preventDefault())}>
        <HeaderContainer style={{ color: "white" }}>
          <NavLink
            to="/"
            value={<ArrowCircleLeftIcon style={{ color: "white" }} />}
          />
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

      {open && (
        <SnackbarMessage
          severity="success"
          message="Usuário cadastrado com sucesso!"
          open={open}
          setOpen={setOpen}
        />
      )}

      {passwordConfirm !== password && (
        <SnackbarMessage
          severity="error"
          message="As senhas não coincidem"
          open={open}
          setOpen={setOpen}
        />
      )}
    </Suspense>
  );
};
