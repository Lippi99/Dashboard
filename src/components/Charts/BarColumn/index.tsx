import {
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  Area,
  Cell,
} from "recharts";
import { DataKey } from "recharts/types/util/types";

interface ChartProps {
  data: any;
  keyItem: DataKey<any>;
}

export const LineChartGraph = ({ data, keyItem }: ChartProps) => {
  const colors = ["blue", "pink", "yellow"];

  return (
    <ResponsiveContainer width="99%" height={"80%"}>
      <BarChart data={data}>
        <XAxis dataKey={keyItem} />
        <YAxis />
        <Tooltip cursor={false} />
        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        <Bar dataKey="total">
          {data.map((entry: any, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index]}
              stroke={colors[index]}
              strokeWidth={1}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
