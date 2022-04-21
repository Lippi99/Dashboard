import { NavBar } from "../../components/Navbar";
import { Card } from "../../components/Card";
import { AreaChartGraph } from "../../components/Charts/Line";
import { Container, GridItem, InnerContainer } from "./styles";
import { LineChartGraph } from "../../components/Charts/BarColumn";

export const Dashboards = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  const data1 = [
    {
      "name": "Page A",
      "pv": 2400
    },
    {
      "name": "Page B",
      "pv": 1398
    },
  ]

  return (
    <Container>
      <NavBar />
      <GridItem>
        <Card
          width="90%"
          height="400px"
          padding="1rem 1rem 0 1rem"
          title="Novos usuários"
          description="nas últimas semanas"
        >
          <AreaChartGraph data={data} />
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
