import { useRouter } from "next/router";
import { useState } from "react";
import { GitHubSection } from "../../../components/Button/Github";
import { RegisterButton } from "../../../components/Button/Register";
import { SignInButton } from "../../../components/Button/Signin";
import { Divide } from "../../../components/Divide";
import { HighLightText } from "../../../components/HiglightText";
import { InputField } from "../../../components/Input";
import { Container, InputContainer } from "./styles";

import axios, { AxiosError } from "axios";
import { api } from "../../../service/api";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async (e: any) => {
    const payload = { email, password };
    try {
      const res = await api.post("user/api/login", payload);
      const data = res.data;
      router.push("/home");
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
