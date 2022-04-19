import axios, { AxiosError } from "axios";
import { useState } from "react";
import { GitHubSection } from "../../../components/Button/Github";
import { RegisterButton } from "../../../components/Button/Register";
import { SignInButton } from "../../../components/Button/Signin";
import { Divide } from "../../../components/Divide";
import { HighLightText } from "../../../components/HiglightText";
import { InputField } from "../../../components/Input";
import { api } from "../../../service/api";

import { Container, InputContainer } from "./styles";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    const payload = { email, password };
    try {
      const res = await api.post("user/api/login", payload);
      const data = res.data;
      alert("Usuário logado!");
      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response) {
          alert(response.data.error);
        }
      }
    }
  };

  return (
    <Container onSubmit={(e) => handleLogin(e.preventDefault())}>
      <InputContainer>
        <InputField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required={true}
          type="email"
          placeholder="Email"
        />
        <InputField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="on"
          required={true}
          type="password"
          placeholder="Password"
        />
      </InputContainer>
      <HighLightText text="Esqueci minha senha" />
      <SignInButton />
      <RegisterButton />
      <Divide />
      <GitHubSection />
    </Container>
  );
};
