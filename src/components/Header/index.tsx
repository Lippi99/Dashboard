import { LogoutOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { signOut } from "../../context/AuthContext";
import { Box } from "../Box";
import { NavLink } from "../Link";
import { Container } from "./styles";
import NextLink from "next/link";
import { Flex } from "../Flex";

export const Header = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink value="Dashboards" to="/home" />
          </li>
          <li>
            <NavLink value="My Profile" to="/profile" />
          </li>
          <li>
            <NavLink value="About Author" to="/author" />
          </li>
          <Flex
            position="absolute"
            right={0}
            top={0}
            direction="row"
            align="center"
          >
            <Box>
              <button onClick={signOut}>
                <Tooltip title="Logout">
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
