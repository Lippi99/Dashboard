import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Box } from "../Box";
import { NavLink } from "../Link";
import { Container } from "./styles";
import NextLink from "next/link";

export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <nav>
        <ul>
          <NavLink value="Dashboards" to="/home" />
          <NavLink value="My Profile" to="/profile" />
          <NavLink value="About Author" to="/author" />
          <Box position="absolute" right={0} top={0}>
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
        </ul>
      </nav>
    </Container>
  );
};
