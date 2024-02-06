"use client";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { format } from "date-fns";

interface ChartProps {
  data: Record<string, number | string>[];
  xAxisKey: string;
  dataKeys: string[];
}

const formatChartData = (
  data: Record<string, number | string>[],
  dateKey: string
) => {
  return data.map((value) => ({
    ...value,
    [dateKey]: format(new Date(value[dateKey]), "dd MMM yyyy"),
  }));
};

export const Chart = ({ data, dataKeys, xAxisKey }: ChartProps) => {
  const chartBarRadius: [number, number, number, number] = [4, 4, 0, 0];

  return (
    <ResponsiveContainer width={"100%"} height={"100%"} minHeight={500}>
      <BarChart
        data={formatChartData(data, xAxisKey)}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Legend verticalAlign="bottom" />
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xAxisKey} />
        <YAxis tickLine={false} axisLine={false} />
        {dataKeys.map((key) => (
          <Bar key={key} dataKey={key} fill="#1da1df" radius={chartBarRadius} />
        ))}
        <Tooltip cursor={{ fillOpacity: 0.1 }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
