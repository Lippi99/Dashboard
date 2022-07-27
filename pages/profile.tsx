import { DownloadOutlined, WarningOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import Head from "next/head";
import { useContext } from "react";
import { Box } from "../src/components/Box";
import { Flex } from "../src/components/Flex";
import { Header } from "../src/components/Header";
import { InputField } from "../src/components/Input";
import { AuthContext } from "../src/context/AuthContext";

export function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="profile" />
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
          width="500px"
          height="500px"
          borderRadius="7px"
          position="absolute"
          padding="20px 30px 40px 30px"
          left="50%"
          top="50%"
          background="var(--lightBlack)"
          transform="translate(-50%, -50%)"
        >
          <Box margin="0 0 30px 0">
            <h1
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Account data
            </h1>
          </Box>
          <Box>
            <InputField
              width="100%"
              type="text"
              value={user?.email}
              placeholder=""
            />
          </Box>
          <Box margin="30px 0">
            <InputField
              width="100%"
              type="text"
              value={user?.name}
              placeholder=""
            />
          </Box>
          <Box margin="30px 0">
            <InputField
              width="100%"
              type="text"
              value={user?.gender}
              placeholder=""
            />
          </Box>
          <Box margin="0 0 30px 0">
            <InputField
              width="100%"
              type="text"
              value={user?.bith}
              placeholder=""
            />
          </Box>
          <Flex align="center" justify="center" width="100%">
            <Button
              style={{
                width: "100%",
                height: "40px",
                background: "var(--purple)",
                border: "1px solid var(--purple)",
                color: "white",
              }}
              type="primary"
              shape="round"
            >
              <Flex justify="center">
                <span style={{ paddingRight: "5px" }}>Update Profile</span>
                <Box>
                  <Tooltip title="Soon">
                    <WarningOutlined style={{ fontSize: "20px" }} />
                  </Tooltip>
                </Box>
              </Flex>
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
