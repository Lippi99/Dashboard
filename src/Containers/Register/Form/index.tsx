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
import { InputLabel, MenuItem, Select } from "@mui/material";
import { ControlledInput } from "../../../components/ControlledInput";
import { useForm } from "react-hook-form";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface FormProps {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
}

interface FormErrors {
  response: {
    conflict: string;
  };
}

export const Form = () => {
  const [open, setOpen] = useState(false);
  const { control } = useForm<FormProps>();

  const handleRegister = async (e: any) => {
    try {
      const res = await api.post("user/api/register", "");
      const data = res.data;
      setOpen(true);

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
          <ControlledInput
            type="text"
            autoComplete="on"
            required
            placeholder="Nome"
            name="name"
            control={control}
          />
          <ControlledInput
            type="text"
            autoComplete="on"
            required
            placeholder="E-mail"
            name="email"
            control={control}
          />
          <ControlledInput
            type="password"
            autoComplete="on"
            required
            placeholder="Digite sua senha"
            name="password"
            control={control}
          />
          <ControlledInput
            type="passwordConfirm"
            autoComplete="on"
            required
            placeholder="Confirme sua senha"
            name="passwordConfirm"
            control={control}
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
    </Suspense>
  );
};
