import { NavBar } from "../../components/Navbar";
import { Card } from "../../components/Card";
import { AreaChartGraph } from "../../components/Charts/Line";
import { Container, GridItem, InnerContainer } from "./styles";
import { LineChartGraph } from "../../components/Charts/BarColumn";
import { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import moment from "moment";
import "moment/locale/pt-br";
import { api } from "../../service/api";
import { Filter } from "../../components/Filter";

interface FilterProps {
  createdAt: string;
  fullCreatedAt: string;
  email?: string;
  name?: string;
  total: number;
  password?: string;
}

export const Dashboards = () => {
  const [filter, setFilter] = useState("7");
  const [filterUser, setFilterUser] = useState<FilterProps[]>([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = moment.utc();
      const dateFormat = "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]";

      const compareDates = moment.utc().subtract(filter, "days");
      const formatDate = compareDates.format(dateFormat);

      const currentDateFormatted = currentDate.format(dateFormat);
      const queryDate = `fromDate=${currentDateFormatted}&toDate=${formatDate}`;

      try {
        const res = await api.get(`dashboards/api/filter?${queryDate}`);
        const data = res.data;

        let filterUserUpdatedArr: FilterProps[] = [];

        const filter = data.map((user: FilterProps) => {
          const { createdAt } = user;
          moment.locale("pt-br");
          const createdAtUpdated = moment(createdAt).format("D.MMM");
          const fullUpdatedCreated = moment(createdAt).format("LL");

          filterUserUpdatedArr.push({
            createdAt: createdAtUpdated,
            fullCreatedAt: fullUpdatedCreated,
            total: 0,
          });

          let preventDuplicatedElement = filterUserUpdatedArr.filter(
            (value, index, self) =>
              index ===
              self.findIndex(
                (t) =>
                  t.createdAt === value.createdAt &&
                  t.createdAt === value.createdAt
              )
          );
          preventDuplicatedElement.map((element) => {
            if (fullUpdatedCreated === element.fullCreatedAt) {
              element.total++;
            } 
          });
          setFilterUser(preventDuplicatedElement);
          return filter;
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [filter]);

  const handleChange = (event: SelectChangeEvent) => {
    return setFilter(event.target.value as string);
  };

  let countUsers = 0;
  filterUser.forEach((total) => (countUsers += total.total || 0));


  return (
    <Container>
      <NavBar />
      <Filter handleChange={handleChange} />
      <GridItem>
        <Card
          width="90%"
          height="400px"
          padding="1rem 1rem 0 1rem"
          title={`${countUsers} Novos usuários`}
          description={
            filter === "7"
              ? "Na última semana"
              : filter === "15"
              ? "Nas últimas semanas"
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
