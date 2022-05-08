import { SignUpButton } from "../../../components/Button/SignUp";
import { NavLink } from "../../../components/Link";
import { ControlledInput } from "../../../components/ControlledInput";
import { useForm } from "react-hook-form";
import { ControlledSelect } from "../../../components/ControlledSelect";
import { ControlledDataPicker } from "../../../components/ControlledDataPicker";

import { Select } from "antd";

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

interface FormProps {
  email: string;
  name: string;
  birth: Date;
  genre: string;
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
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm<FormProps>();

  const handleRegister = async (data?: FormProps) => {
    try {
      const res = await api.post("user/api/register", data);
      const dataRes = res.data;
      setOpen(true);
      console.log(data);
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
          <ControlledInput
            width="48%"
            type="text"
            autoComplete="on"
            required
            placeholder="Nome"
            name="name"
            control={control}
          />
          <ControlledInput
            width="48%"
            type="text"
            autoComplete="on"
            required
            placeholder="E-mail"
            name="email"
            control={control}
          />

          <ControlledDataPicker
            width="48%"
            borderRadius="10px"
            height="48px"
            background="#121214"
            border="1px solid #121214"
            name="birth"
            control={control}
          />

          <GenreContainer>
            <ControlledSelect
              width="100%"
              background="#121214"
              border="1px solid #121214"
              control={control}
              name="genre"
              borderRadius="20px"
              size="large"
              placeholder="Selecione o seu gênero"
            >
              <Option value="Masculino">Masculino</Option>
              <Option value="Feminino">Feminino</Option>
              <Option value="Prefiro não me identificar">
                Prefiro não me identificar
              </Option>
            </ControlledSelect>
          </GenreContainer>

          <ControlledInput
            width="48%"
            type="password"
            autoComplete="on"
            required
            placeholder="Digite sua senha"
            name="password"
            control={control}
          />
          <ControlledInput
            width="48%"
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
    </Suspense>
  );
};
