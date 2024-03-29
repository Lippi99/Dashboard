import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Box } from "../src/components/Box";
import { RegisterButton } from "../src/components/Button/Register";
import { SignInButton } from "../src/components/Button/Signin";
import { ControlledInput } from "../src/components/ControlledInput";
import { Flex } from "../src/components/Flex";
import { HighLightText } from "../src/components/HiglightText";
import { AuthContext } from "../src/context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../src/components/Form";
import nookies from "nookies";

interface Login {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email("E-mail invalid").required("E-mail required"),
  password: yup.string().required("Password required"),
});

const Home: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const { signIn, isLoading } = useContext(AuthContext);

  const handleLogin = async (data: Login) => {
    await signIn(data);
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        width="100%"
        minHeight="100vh"
        background="var(--darkBlack)"
        justify="center"
        align="center"
      >
        <Form
          maxWidth="500px"
          width="100%"
          height="100%"
          background="var(--lightBlack)"
          margin="0 auto"
          padding="4rem 4rem"
          borderRadius="7px"
          onSubmit={handleSubmit(handleLogin)}
        >
          <Flex width="100%" align="center" direction="column" padding="1rem 0">
            <Box width="100%" margin="0 0 2rem 0">
              <ControlledInput
                width="100%"
                type="email"
                placeholder="E-mail"
                name="email"
                control={control}
                error={errors.email}
              />
            </Box>
            <Box width="100%">
              <ControlledInput
                width="100%"
                type="password"
                placeholder="Password"
                name="password"
                control={control}
                error={errors.password}
              />
            </Box>
          </Flex>
          <HighLightText text="Forgot my password" />
          <SignInButton isLoading={isLoading} />
          <RegisterButton />
        </Form>
      </Flex>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  if (cookies["nextAuth.token"]) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
