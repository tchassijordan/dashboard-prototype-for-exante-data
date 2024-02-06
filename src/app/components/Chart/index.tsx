"use client";

import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

export const Chart = ({
  data,
  dataKeys,
  xAxisKey,
}: {
  data: Record<string, number | string>[];
  xAxisKey: string;
  dataKeys: string[];
}) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"} minHeight={500}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Legend verticalAlign="bottom" />
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xAxisKey} />
        <YAxis tickLine={false} axisLine={false} />
        {dataKeys.map((key) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke="#2563eb"
            dot={false}
          />
        ))}
        <Tooltip cursor={{ fillOpacity: 0.25 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
