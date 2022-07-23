import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GitHubSection } from "../../../components/Button/Github";
import { RegisterButton } from "../../../components/Button/Register";
import { SignInButton } from "../../../components/Button/Signin";
import { Divide } from "../../../components/Divide";
import { HighLightText } from "../../../components/HiglightText";
import { InputField } from "../../../components/Input";
import { Container, InputContainer } from "./styles";

import axios, { AxiosError } from "axios";
import { api } from "../../../services/api";
import { openNotificationWithIcon } from "../../../components/Notification";
import { AuthContext } from "../../../context/AuthContext";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const router = useRouter();

  const handleLogin = async (e: any) => {
    const payload = { email, password };
    await signIn(payload);
  };

  return (
    <Container onSubmit={(e) => handleLogin(e.preventDefault())}>
      <InputContainer>
        <InputField
          width="100%"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required={true}
          type="email"
          placeholder="Email"
        />
        <InputField
          width="100%"
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
