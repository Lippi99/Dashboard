import { Select } from "antd";
import { SelectInput } from "../Select";
import { Container } from "./styles";

interface FilterProps {
  filter: string;
  handleChange: (event: any) => void;
}

export const Filter = ({ filter, handleChange }: FilterProps) => {
  const { Option } = Select;
  return (
    <Container>
      <SelectInput
        color="var(--black)"
        backgroundColor="white"
        defaultValue="7"
        value={filter}
        width="200px"
        onChange={handleChange}
      >
        <Option value="7">Últimos 7 dias</Option>
        <Option value="15">Últimos 15 dias</Option>
        <Option value="30">Últimos 30 dias</Option>
        <Option value="90">últimos 90 dias</Option>
      </SelectInput>
    </Container>
  );
};
