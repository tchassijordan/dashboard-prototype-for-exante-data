"use client";

import { Typography, Box } from "@mui/material";
import Chart from "@/app/components/Chart";
import dailyMoneyMarketFundFlow from "@/data/daily_money_market_fund_flows.json";
import capeOfGoodHopeDaily from "@/data/cape-of-good-hope-daily.json";
import turkeyBalanceOfPayment from "@/data/turkey-balance-of-payments_(Rolling_1yr_Window).json";
import southKoreaBalanceOfPayment from "@/data/South_Korea_Balance_of_Payments_(Rolling_1yr_Window).json";
import japanBalanceOfPayment from "@/data/japan-balance-of-payments-(rolling-1yr-Window).json";
import globalFlowsToEquityAndFixedIncome from "@/data/Global_Flows_to_Equity_and_Fixed_Income.json";
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
  "turkey-balance-of-payment": {
    data: turkeyBalanceOfPayment,
    xAxisKey: "SERIES",
  },
  "south-korea-balance-of-payment": {
    data: southKoreaBalanceOfPayment,
    xAxisKey: "SERIES",
  },
  "japan-balance-of-payment": {
    data: japanBalanceOfPayment,
    xAxisKey: "SERIES",
  },
  "global-flows-to-equity": {
    data: globalFlowsToEquityAndFixedIncome,
    xAxisKey: "SERIES",
  },
};

const titleMap = {
  "cape-of-good-hope-daily": "Cape of good hope daily",
  "daily-money-market-fund-flows": "Daily money market fund flows",
  "turkey-balance-of-payment": "Turkey balance of payment",
  "south-korea-balance-of-payment": "South korea balance of payment",
  "japan-balance-of-payment": "Japan balance of payment",
  "global-flows-to-equity": "Global flows to equity and fixed income",
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
        data={dataMap[type as keyof typeof dataMap].data}
      />
    </Box>
  );
}
