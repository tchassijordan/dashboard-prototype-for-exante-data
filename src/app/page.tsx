import { Typography, Box } from "@mui/material";
import Chart from "@/app/components/Chart";
import dailyMoneyMarketFundFlow from "@/data/daily_money_market_fund_flows.json";

export default function Home() {
  return (
    <main>
      <Box mt={2}>
        <Typography variant="h4" mb={3} textAlign={"center"}>
          Daily money market fund flows
        </Typography>
        <Chart
          xAxisKey="SERIES"
          dataKeys={["US Money Market Fund Flows"]}
          data={dailyMoneyMarketFundFlow.filter(({ SERIES }) => {
            const seriesDate = new Date(SERIES);
            const today = new Date();

            return seriesDate.getFullYear() == today.getFullYear();
          })}
        />
      </Box>
    </main>
  );
}
