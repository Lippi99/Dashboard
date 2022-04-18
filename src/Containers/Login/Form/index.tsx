import { GitHubSection } from "../../../components/Button/Github";
import { RegisterButton } from "../../../components/Button/Register";
import { SignInButton } from "../../../components/Button/Signin";
import { Divide } from "../../../components/Divide";
import { HighLightText } from "../../../components/HiglightText";
import { InputField } from "../../../components/Input";

import { Container, InputContainer } from "./styles";

export const Form = () => {
  return (
    <Container>
      <InputContainer>
        <InputField required={true} type="email" placeholder="Email" />
        <InputField
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
