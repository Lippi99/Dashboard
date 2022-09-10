import { Box } from "../src/components/Box";
import { Header } from "../src/components/Header";
import NextImage from "next/image";
import { Flex } from "../src/components/Flex";
import Head from "next/head";
import { GetServerSideProps } from "next";
import nookies from "nookies";

export function Author() {
  return (
    <>
      <Head>
        <title>Author</title>
        <meta name="description" content="Author page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        width="100%"
        minHeight="100vh"
        position="absolute"
        background="var(--darkBlack)"
        padding="0 4rem 2rem 4rem"
      >
        <Header />

        <Box
          width="100%"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          padding="0 4rem 0 4rem"
        >
          <Flex justify="space-between" align="center" direction="column">
            <Flex justify="center" margin="0 0 40px 0">
              <NextImage
                width={300}
                height={300}
                src="/me.jpg"
                alt="me"
                layout="fixed"
                objectFit="cover"
                className="rounded-full"
                priority
              />
            </Flex>
            <Box width="50%" margin="0 auto">
              <h1 style={{ color: "white" }}>About Author</h1>
              <p style={{ color: "white", textAlign: "justify" }}>
                My name is Phillip, I have been working in the technology area
                since 2020. I did an internship with automation of unit tests,
                support and infrastructure. Still in that year, I had started my
                studies in web development, focusing on Interface development
                (Front-End). In 2021, I got the opportunity to work at NOCLAF
                TECH as a Front-End Developer. However, my services are
                outsourced to the company Navegg, where I perform maintenance
                and new updates on their internal systems. I work with ReactJS,
                NextJS, TypeScript and some UI (User Interface) libraries like
                Ant Design, Styled-Components and StitchesJS.
              </p>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);

  if (!cookies["nextAuth.token"]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Author;
