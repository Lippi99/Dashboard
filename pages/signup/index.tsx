import Head from "next/head";
import { useForm } from "react-hook-form";
import { ControlledInput } from "../../src/components/ControlledInput";
import { ControlledSelect } from "../../src/components/ControlledSelect";
import { Flex } from "../../src/components/Flex";
import { Select } from "antd";
import { SignUpButton } from "../../src/components/Button/SignUp";
import { NavLink } from "../../src/components/Link";
import { Box } from "../../src/components/Box";
import { ControlledDataPicker } from "../../src/components/ControlledDataPicker";
import { openNotificationWithIcon } from "../../src/components/Notification";
import axios, { AxiosError } from "axios";
import { api } from "../../src/services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

interface FormProps {
  email: string;
  name: string;
  birth: string;
  gender: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup.object({
  name: yup.string().required("Name required"),
  email: yup.string().email("E-mail invalid").required("E-mail required"),
  birth: yup.string().required("Birth required"),
  gender: yup.string().required("Gender required"),
  password: yup.string().required("Password required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required("New password required"),
});

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const { Option } = Select;

  const handleRegister = async (data: FormProps) => {
    setIsLoading(true);
    try {
      const response = await api.post("user/api/register", data);
      reset();
      openNotificationWithIcon("success", "User registered successfully");
      response.data;
      setIsLoading(false);
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error) && error.response?.status == 400) {
        openNotificationWithIcon("error", "E-mail already registered");
      } else {
        openNotificationWithIcon(
          "error",
          "There was an error in the call, contact your administrator"
        );
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Create account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        width="100%"
        height="100vh"
        background="var(--darkBlack)"
        justify="center"
        align="center"
      >
        <form
          onSubmit={handleSubmit(handleRegister)}
          style={{
            maxWidth: "700px",
            width: "100%",
            overflowY: "auto",
            borderRadius: "10px",
            backgroundColor: "var(--lightBlack)",
            margin: "0 auto",
            padding: "1rem 0",
          }}
        >
          <Flex
            width="100%"
            align="center"
            justify="space-between"
            rowGap="2rem"
            wrap="wrap"
            padding="1.5rem 4rem"
          >
            <Flex width="48%" direction="column">
              <ControlledInput
                width="100%"
                type="text"
                placeholder="Name"
                name="name"
                control={control}
                error={errors.name}
              />
            </Flex>
            <Flex width="48%" direction="column">
              <ControlledInput
                width="100%"
                type="text"
                placeholder="E-mail"
                name="email"
                control={control}
                error={errors.email}
              />
            </Flex>
            <Flex width="48%" direction="column">
              <ControlledDataPicker
                width="100%"
                borderRadius="10px"
                height="56px"
                background="#121214"
                border="1px solid #121214"
                name="birth"
                control={control}
                error={errors.birth}
              />
            </Flex>
            <Flex width="48%" direction="column">
              <ControlledSelect
                width="100%"
                backgroundColor="#121214"
                color="white"
                border="1px solid #121214"
                control={control}
                name="gender"
                borderRadius="7px"
                size="large"
                placeholder="Select Gender"
                error={errors.gender}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Not identified">Not identified</Option>
              </ControlledSelect>
            </Flex>
            <Flex width="48%" direction="column">
              <ControlledInput
                width="100%"
                type="password"
                placeholder="Password"
                name="password"
                control={control}
                error={errors.password}
              />
            </Flex>
            <Flex width="48%" direction="column">
              <ControlledInput
                width="100%"
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirm"
                control={control}
                error={errors.passwordConfirm}
              />
            </Flex>

            <Flex direction="row" align="center">
              <span style={{ color: "white" }}>
                By registering, you accept our{" "}
                <a
                  style={{ color: "var(--purple)", textDecoration: "none" }}
                  target="_blank"
                  href="#"
                  rel="noreferrer"
                >
                  Terms of use and our privacy policy
                </a>
              </span>
            </Flex>
          </Flex>
          <Box padding="0 2rem">
            <SignUpButton isLoading={isLoading} type="submit" />
          </Box>
          <Flex align="center" justify="center" margin="1rem">
            <NavLink to="/" value={"Back to login"} />
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default SignUp;
