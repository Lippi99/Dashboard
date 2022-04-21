import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Label,
} from "recharts";

interface RadarProps {
  data: any;
}

export const RadarChartGraph = ({ data }: RadarProps) => {
  return (
    <ResponsiveContainer width="99%" height="80%">
      <RadarChart
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" color="white" />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
