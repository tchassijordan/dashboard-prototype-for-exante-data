"use client";

import { Typography, Box } from "@mui/material";
import Chart from "@/app/components/Chart";
import dailyMoneyMarketFundFlow from "@/data/daily_money_market_fund_flows.json";
import capeOfGoodHopeDaily from "@/data/cape-of-good-hope-daily.json";
import { useParams } from "next/navigation";

const dataMap = {
  "cape-of-good-hope-daily": {
    data: capeOfGoodHopeDaily,
    xAxisKey: "DateTime",
  },
  "daily-money-market-fund-flows": {
    data: dailyMoneyMarketFundFlow,
    xAxisKey: "SERIES",
  },
};

const titleMap = {
  "cape-of-good-hope-daily": "Cape of good hope daily",
  "daily-money-market-fund-flows": "Daily money market fund flows",
};

export default function Home() {
  const { time_series, type } = useParams();

  return (
    <Box mt={2}>
      <Typography variant="h4" mb={3} textAlign={"center"}>
        {titleMap[type as keyof typeof titleMap]}
      </Typography>
      <Chart
        xAxisKey={dataMap[type as keyof typeof dataMap].xAxisKey}
        dataKeys={[
          (time_series as string)
            .replaceAll("%20", " ")
            .replaceAll("%7C", "|")
            .replaceAll("%3A", ":"),
        ]}
        data={dataMap[type as keyof typeof dataMap].data.filter((item) => {
          const seriesDate = ((item as any)?.SERIES as any)
            ? new Date((item as any)?.SERIES as any)
            : new Date((item as any)?.DateTime as any);
          const today = new Date();

          return seriesDate.getFullYear() == today.getFullYear();
        })}
      />
    </Box>
  );
}
