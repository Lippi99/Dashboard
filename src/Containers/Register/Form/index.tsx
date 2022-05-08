import { SignUpButton } from "../../../components/Button/SignUp";
import { NavLink } from "../../../components/Link";
import { ControlledInput } from "../../../components/ControlledInput";
import { useForm } from "react-hook-form";
import { ControlledSelect } from "../../../components/ControlledSelect";
import { ControlledDataPicker } from "../../../components/ControlledDataPicker";
import { yupResolver } from "@hookform/resolvers/yup";

import { notification, Select } from "antd";

import {
  Container,
  GenreContainer,
  HeaderContainer,
  InputContainer,
  PrivacyContainer,
} from "./styles";
import { Suspense, useState } from "react";
import { api } from "../../../service/api";
import axios, { AxiosError } from "axios";
import { schema } from "./schema";
import { NotificationApi } from "antd/lib/notification";

interface FormProps {
  email: string;
  name: string;
  birth: string;
  gender: string;
  password: string;
  passwordConfirm: string;
}

interface FormErrors {
  response: {
    conflict: string;
  };
}

const { Option } = Select;

export const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const openNotificationWithIcon = (type: NotificationApi) => {
    notification[type]({
      message: "Usuário registrado com sucesso!",
    });
  };

  const handleRegister = async (data: FormProps) => {
    try {
      const res = await api.post("user/api/register", data);
      const dataRes = res.data;

      reset({ name: "", birth: "" });
      console.log(data);
      openNotificationWithIcon("success" as any);
      return dataRes;
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
      <Container onSubmit={handleSubmit(handleRegister)}>
        <HeaderContainer style={{ color: "white" }}>
          <NavLink to="/" value={""} />
          <span style={{ marginLeft: "2rem" }}>Crie sua conta</span>
        </HeaderContainer>
        <InputContainer>
          <div
            style={{ width: "48%", display: "flex", flexDirection: "column" }}
          >
            <ControlledInput
              width="100%"
              type="text"
              placeholder="Nome"
              name="name"
              control={control}
              error={errors.name}
            />
          </div>
          <div
            style={{ width: "48%", display: "flex", flexDirection: "column" }}
          >
            <ControlledInput
              width="100%"
              type="text"
              placeholder="E-mail"
              name="email"
              control={control}
              error={errors.email}
            />
          </div>
          <div
            style={{ width: "48%", display: "flex", flexDirection: "column" }}
          >
            <ControlledDataPicker
              width="100%"
              borderRadius="10px"
              height="48px"
              background="#121214"
              border="1px solid #121214"
              name="birth"
              control={control}
              error={errors.birth}
            />
          </div>

          <GenreContainer>
            <ControlledSelect
              width="100%"
              background="#121214"
              border="1px solid #121214"
              control={control}
              name="gender"
              borderRadius="20px"
              size="large"
              placeholder="Selecione o seu gênero"
              error={errors.gender}
            >
              <Option value="Masculino">Masculino</Option>
              <Option value="Feminino">Feminino</Option>
              <Option value="Prefiro não me identificar">
                Prefiro não me identificar
              </Option>
            </ControlledSelect>
          </GenreContainer>

          <div
            style={{ width: "48%", display: "flex", flexDirection: "column" }}
          >
            <ControlledInput
              width="100%"
              type="password"
              autoComplete="on"
              placeholder="Digite sua senha"
              name="password"
              control={control}
              error={errors.password}
            />
          </div>

          <div
            style={{ width: "48%", display: "flex", flexDirection: "column" }}
          >
            <ControlledInput
              width="100%"
              type="password"
              autoComplete="on"
              placeholder="Confirme sua senha"
              name="passwordConfirm"
              control={control}
              error={errors.passwordConfirm}
            />
          </div>
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
          <SignUpButton type="submit" />
        </div>
      </Container>
    </Suspense>
  );
};
