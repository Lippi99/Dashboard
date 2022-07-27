import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import { useContext } from "react";
import { AuthContext, signOut } from "../../context/AuthContext";
import { Box } from "../Box";
import { NavLink } from "../Link";
import { Container } from "./styles";
import NextLink from "next/link";
import { Flex } from "../Flex";

export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <nav>
        <ul>
          <NavLink value="Dashboards" to="/home" />
          <NavLink value="My Profile" to="/profile" />
          <NavLink value="About Author" to="/author" />
          <Flex
            position="absolute"
            right={0}
            top={0}
            direction="row"
            align="center"
          >
            <Box margin="0 30px 0 0">
              <NextLink href="/profile">
                <a>
                  <Avatar
                    style={{
                      background: "var(--purple)",
                      verticalAlign: "middle",
                    }}
                    size="large"
                  >
                    {user?.name}
                  </Avatar>
                </a>
              </NextLink>
            </Box>
            <Box>
              <button onClick={signOut}>
                <Tooltip title="Sair">
                  <LogoutOutlined
                    style={{ fontSize: 25, color: "red" }}
                    size={70}
                  />
                </Tooltip>
              </button>
            </Box>
          </Flex>
        </ul>
      </nav>
    </Container>
  );
};