import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { Container } from "./styles";

interface FilterProps {
  handleChange: (event: SelectChangeEvent) => void;
}

export const Filter = ({ handleChange }: FilterProps) => {
  

  return (
    <Container>
    <Box sx={{ maxWidth: 300 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
      <Select
        defaultValue="7"
        style={{ background: "white" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="date"
        onChange={handleChange}
      >
        <MenuItem value={"7"}>Últimos 7 dias</MenuItem>
        <MenuItem value={"15"}>Últimos 15 dias</MenuItem>
        <MenuItem value={"30"}>Últimos 30 dias</MenuItem>
        <MenuItem value={"90"}>Últimos 90 dias</MenuItem>
      </Select>
    </FormControl>
  </Box>
  </Container>
  )
}