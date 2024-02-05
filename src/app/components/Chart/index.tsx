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
import dailyMoneyMarketFundFlow from "@/data/daily_money_market_fund_flows.json";

export const Chart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"} minHeight={500}>
      <LineChart
        data={dailyMoneyMarketFundFlow.filter(({ SERIES }) => {
          const seriesDate = new Date(SERIES);
          const today = new Date();

          return seriesDate.getFullYear() == today.getFullYear();
        })}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Legend verticalAlign="bottom" />
        <CartesianGrid vertical={false} />
        <XAxis dataKey="SERIES" />
        <YAxis tickLine={false} axisLine={false} />
        <Line
          type="monotone"
          dataKey={"US Money Market Fund Flows"}
          stroke="#2563eb"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={"US Money Market Fund Flows (5d m/a)"}
          stroke="#030712"
          dot={false}
        />
        <Tooltip cursor={{ fillOpacity: 0.25 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
