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
import type { CustomBarLabelProps } from "./types";
import { CUMULATIVE_FUND_FLOW } from "./constants";

export const Chart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"} minHeight={500}>
      <LineChart
        data={CUMULATIVE_FUND_FLOW}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Legend verticalAlign="top" height={50} />
        <CartesianGrid vertical={false} />
        <XAxis dataKey="date" />
        <YAxis tickLine={false} axisLine={false} />
        <Line type="monotone" dataKey={"em equity [etf]"} stroke="#2563eb" />
        <Line
          type="monotone"
          dataKey={"em equity [non-etf]"}
          stroke="#030712"
        />
        <Tooltip cursor={{ fillOpacity: 0.25 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

const CustomBarLabel = ({ labelProps, dataKey }: CustomBarLabelProps) => {
  const { x, y, width, value } = labelProps;

  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
      fontSize={"0.75rem"}
      fontWeight={500}
    >
      {`PLN: ${value}`}
    </text>
  );
};

export default Chart;
