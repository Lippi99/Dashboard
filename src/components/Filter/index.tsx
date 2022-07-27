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
        <Option value="7">Last 7 days </Option>
        <Option value="15">Last 15 days </Option>
        <Option value="30">Last 30 days </Option>
        <Option value="90">Last 90 days </Option>
      </SelectInput>
    </Container>
  );
};
