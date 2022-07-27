import moment from "moment";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Box } from "../../src/components/Box";
import { Card } from "../../src/components/Card";
import { LineChartGraph } from "../../src/components/Charts/BarColumn";
import { AreaChartGraph } from "../../src/components/Charts/Line";
import { Filter } from "../../src/components/Filter";
import { Flex } from "../../src/components/Flex";
import { Header } from "../../src/components/Header";
import { AuthContext } from "../../src/context/AuthContext";
import { api } from "../../src/services/api";

interface FilterProps {
  date: string;
  total: number;
}

interface Gender {
  gender: string;
  total: number;
}

export const Home = () => {
  const [filter, setFilter] = useState("7");
  const [filterList, setFilterList] = useState<FilterProps[]>([]);
  const [genderList, setGenderList] = useState<Gender[]>([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchDate = async () => {
      const currentDate = moment().subtract(filter, "day").format("YYYY-MM-DD");
      try {
        const response = await api.get(
          `/user/api/users?endingDate=${currentDate}`
        );

        setFilterList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDate();
  }, [filter]);

  useEffect(() => {
    const fetchGender = async () => {
      try {
        const response = await api.get("/user/api/gender");
        setGenderList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGender();
  }, []);

  const handleChange = (event: string) => {
    return setFilter(event);
  };

  const totalUsers = filterList.reduce((accum, item) => accum + item.total, 0);

  const totalGenders = genderList
    ? genderList.reduce((accum, item) => accum + item.total, 0)
    : "";

  return (
    <>
      <Head>
        <title>Dashboards</title>
        <meta name="description" content="Main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        width="100%"
        position="absolute"
        background="var(--darkBlack)"
        padding="0 4rem 2rem 4rem"
      >
        <Header />
        <Box>
          <h1 style={{ color: "white" }}>{`${
            user && `Welcome, ${user.name}`
          }`}</h1>
        </Box>
        <Box>
          <Filter filter={filter} handleChange={handleChange} />
        </Box>

        <Box>
          <Card
            width="100%"
            height="500px"
            padding="1rem 1rem 0 1rem"
            title={`${totalUsers} New users`}
            description={
              filter === "7"
                ? "Last Week"
                : filter === "15"
                ? "Last two Weeks"
                : filter === "30"
                ? "Last Month"
                : "Last three months"
            }
          >
            <AreaChartGraph data={filterList} />
          </Card>
        </Box>
        <Flex direction="row" wrap="wrap" justify="space-between" gap="1rem">
          <Card
            width="100%"
            height="500px"
            padding="1rem 1rem 0 1rem"
            title={`${totalGenders} genders in database`}
            description={""}
          >
            <LineChartGraph keyItem="gender" data={genderList} />
          </Card>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
