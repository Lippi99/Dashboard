import { NavLink } from "../Link";
import { Container } from "./styles";

export const NavBar = () => {
  return (
    <Container>
      <nav>
        <ul>
          <NavLink value="Dashboards" to="/home/dashboards" />
        </ul>
        teste
      </nav>
    </Container>
  );
};
