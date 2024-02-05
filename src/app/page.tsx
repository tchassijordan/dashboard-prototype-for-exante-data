import { Typography, Box } from "@mui/material";
import Chart from "@/components/Chart";

export default function Home() {
  return (
    <main>
      <Box mt={15} height={"100%"}>
        <Typography variant="body1" mb={3} textAlign={"center"}>
          YTD Cumulative Fund Flow of EM Equity Funds by ETF/non-ETF
        </Typography>
        <Chart />
      </Box>
    </main>
  );
}
