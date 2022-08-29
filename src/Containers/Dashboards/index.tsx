import { Card } from "../../components/Card";
import { AreaChartGraph } from "../../components/Charts/Line";
import { Container, GridItem, InnerContainer } from "./styles";
import { LineChartGraph } from "../../components/Charts/BarColumn";
import { useContext, useState } from "react";
import "moment/locale/pt-br";
import "moment/locale/pt-br";
import { Filter } from "../../components/Filter";
import { AuthContext } from "../../context/AuthContext";

interface FilterProps {
  createdAt: string;
  createdAtFormatted: string;
  email?: string;
  name?: string;
  total: number;
  password?: string;
  genre?: string;
}

export const Dashboards = () => {
  const [filter, setFilter] = useState("7");
  const [filterUser, setFilterUser] = useState<FilterProps[]>([]);

  const user = useContext(AuthContext);

  const data1 = [
    {
      name: "Page A",
      pv: 2400,
    },
    {
      name: "Page B",
      pv: 1398,
    },
  ];

  const handleChange = (event: string) => {
    return setFilter(event);
  };

  return (
    <Container>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <h1 style={{ color: "white" }}>{`${
          user && user.user?.gender === "Feminino"
            ? `Seja bem vinda, ${user.user?.name}`
            : `Seja bem vindo, ${user.user?.name}`
        }`}</h1>
      </div>
      <Filter filter={filter} handleChange={handleChange} />
      <GridItem>
        <Card
          width="90%"
          height="400px"
          padding="1rem 1rem 0 1rem"
          title={`${filterUser.length} Novos usuários`}
          description={
            filter === "7"
              ? "Na última semana"
              : filter === "15"
              ? "Nas últimas semanas"
              : filter === "30"
              ? "No último mês"
              : "Nos últimos meses"
          }
        >
          <AreaChartGraph data={filterUser} />
        </Card>
      </GridItem>
      <InnerContainer>
        <GridItem>
          <Card
            width="90%"
            height="400px"
            padding="1rem 1rem"
            title="Gênero"
            description="nas últimas semanas"
          >
            <LineChartGraph data={data1} />
          </Card>
        </GridItem>
        <GridItem>
          <Card
            width="90%"
            height="400px"
            padding="1rem 1rem"
            title="Faixa etária"
            description="nas últimas semanas"
          >
            <LineChartGraph data={data1} />
          </Card>
        </GridItem>
      </InnerContainer>
    </Container>
  );
};
