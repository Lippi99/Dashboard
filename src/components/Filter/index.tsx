import { Select } from "antd";
import { SelectInput } from "../Select";
import { Container } from "./styles";

interface FilterProps {
  handleChange: (event: any) => void;
}

export const Filter = ({ handleChange }: FilterProps) => {
  const { Option } = Select;
  return (
    <Container>
      <SelectInput defaultValue="7" width="200px" onChange={handleChange}>
        <Option value="7">Últimos 7 dias</Option>
        <Option value="15">Últimos 15 dias</Option>
        <Option value="30">Últimos 30 dias</Option>
        <Option value="90">últimos 90 dias</Option>
      </SelectInput>
    </Container>
  );
};
