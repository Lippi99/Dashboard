import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "../Link";
import { Container } from "./styles";

export const NavBar = () => {
  return (
    <Container>
      <nav>
        <ul>
          <NavLink value="Dashboards" to="/home/dashboards" />
          <NavLink value="About me" to="/home/dashboards" />
          <NavLink value="About creator" to="/home/dashboards" />
        </ul>
      </nav>
    </Container>
  );
};
