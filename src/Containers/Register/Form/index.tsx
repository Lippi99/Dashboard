import { SignUpButton } from "../../../components/Button/SignUp";
import { NavLink } from "../../../components/Link";
import { ControlledInput } from "../../../components/ControlledInput";
import { useForm } from "react-hook-form";
import { ControlledSelect } from "../../../components/ControlledSelect";
import { ControlledDataPicker } from "../../../components/ControlledDataPicker";
import { yupResolver } from "@hookform/resolvers/yup";

import { Select } from "antd";

import {
  Container,
  GenreContainer,
  HeaderContainer,
  InputContainer,
  InputGroup,
  PrivacyContainer,
} from "./styles";
import { api } from "../../../services/api";
import axios, { AxiosError } from "axios";
import { schema } from "./schema";
import { openNotificationWithIcon } from "../../../components/Notification";
import moment from "moment";

interface FormProps {
  email: string;
  name: string;
  birth: string;
  gender: string;
  password: string;
  passwordConfirm: string;
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

  const handleRegister = async (data: FormProps) => {
    try {
      const res = await api.post("user/api/register", data);
      const dataRes = res.data;

      reset();
      openNotificationWithIcon("success", "Usuário registrado com sucesso!");
      return dataRes;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response) {
          openNotificationWithIcon("error", response.data.conflict);
        }
      }
    }
  };

  return (
    <Container onSubmit={handleSubmit(handleRegister)}>
      <HeaderContainer style={{ color: "white" }}>
        <span style={{ width: "100%", textAlign: "center" }}>
          Crie sua conta
        </span>
      </HeaderContainer>
      <InputContainer>
        <InputGroup>
          <ControlledInput
            width="100%"
            type="text"
            placeholder="Nome"
            name="name"
            control={control}
            error={errors.name}
          />
        </InputGroup>
        <InputGroup>
          <ControlledInput
            width="100%"
            type="text"
            placeholder="E-mail"
            name="email"
            control={control}
            error={errors.email}
          />
        </InputGroup>
        <InputGroup>
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
        </InputGroup>

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

        <InputGroup>
          <ControlledInput
            width="100%"
            type="password"
            autoComplete="on"
            placeholder="Digite sua senha"
            name="password"
            control={control}
            error={errors.password}
          />
        </InputGroup>

        <InputGroup>
          <ControlledInput
            width="100%"
            type="password"
            autoComplete="on"
            placeholder="Confirme sua senha"
            name="passwordConfirm"
            control={control}
            error={errors.passwordConfirm}
          />
        </InputGroup>
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
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <NavLink to="/" value={"Voltar para o login"} />
      </div>
    </Container>
  );
};
