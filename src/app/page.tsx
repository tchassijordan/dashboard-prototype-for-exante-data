import { Typography, Box } from "@mui/material";
import Chart from "@/app/components/Chart";

export default function Home() {
  return (
    <main>
      <Box mt={2}>
        <Typography variant="h4" mb={3} textAlign={"center"}>
          Daily money market fund flows
        </Typography>
        <Chart />
      </Box>
    </main>
  );
}
