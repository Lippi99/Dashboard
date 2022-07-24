import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  Area,
} from "recharts";

interface ChartProps {
  data: any[];
}

export const AreaChartGraph = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="99%" height="80%">
      <AreaChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area
          fillOpacity={1}
          opacity="0.7"
          type="linear"
          strokeWidth={2}
          dot={{
            stroke: "#ffffff",
            strokeWidth: 2,
            r: 4,
            strokeDasharray: "",
          }}
          dataKey="total"
          stroke="#81c995"
          fill="#3e9256"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
