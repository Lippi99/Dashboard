import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { SignUpBtn } from "./styles";

interface SignUpButtonProps {
  type?: any;
  isLoading?: boolean;
}

export const SignUpButton = ({ type, isLoading }: SignUpButtonProps) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <SignUpBtn type={type}>
      {isLoading ? (
        <Spin size="large" spinning={isLoading} indicator={antIcon} />
      ) : (
        <span style={{ fontSize: "17px" }}>Sign up</span>
      )}
    </SignUpBtn>
  );
};
