import {
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  ResponsiveContainer,
  Area,
} from "recharts";

interface ChartProps {
  data: any;
}

export const LineChartGraph = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="99%" height={"80%"}>
    <BarChart data={data}>
      {/* <CartesianGrid  /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip cursor={false} />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
    </ResponsiveContainer>
  );
};
