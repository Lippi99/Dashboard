import { SignInBtn } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface ButtonProps {
  isLoading?: boolean;
}

export const SignInButton = ({ isLoading }: ButtonProps) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <SignInBtn type="submit">
      {isLoading ? (
        <Spin size="large" spinning={isLoading} indicator={antIcon} />
      ) : (
        <span style={{ fontSize: "17px" }}>Entrar</span>
      )}
    </SignInBtn>
  );
};
