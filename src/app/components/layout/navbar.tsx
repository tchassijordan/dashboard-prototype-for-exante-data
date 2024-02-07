"use client";

import Image from "next/image";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

export default function Navbar() {
  const { push } = useRouter();

  return (
    <Box sx={{ backgroundColor: "rgb(9, 28, 48)", inlineSize: "100%" }}>
      <Grid
        container
        sx={(theme) => ({
          p: theme.spacing(4, 2),
          justifyContent: "space-between",
          maxInlineSize: theme.breakpoints.values.xl,
          mx: "auto",
        })}
      >
        <Grid item xs={3} md={3}>
          <Image
            src="/assets/exante-blue-white-logo.png"
            alt="trounceflow logo"
            width={180}
            height={50}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Autocomplete
            autoComplete
            freeSolo
            id="search-bar"
            options={filters}
            groupBy={(option) => option.categorie}
            sx={{
              width: "100%",
              backgroundColor: "background.paper",
              borderRadius: 1,
            }}
            renderInput={(params) => (
              <TextField {...params} fullWidth placeholder="Search..." />
            )}
            onChange={(_, option) => {
              if (typeof option !== "string") {
                if (option) push(option?.href);
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Avatar sx={{ ml: "auto" }} />
        </Grid>
      </Grid>
    </Box>
  );
}

const filters = [
  // Cape of good hope dialy
  {
    label: "Number of Cargo Ships",
    categorie: "Cape of good hope daily",
    href: "/cape-of-good-hope-daily/Number of Cargo Ships",
  },
  {
    label: "Number of Tanker Ships",
    categorie: "Cape of good hope daily",
    href: "/cape-of-good-hope-daily/Number of Tanker Ships",
  },
  {
    label: "7-day Moving Average",
    categorie: "Cape of good hope daily",
    href: "/cape-of-good-hope-daily/7-day Moving Average",
  },
  {
    label: "Prior Year: 7-day Moving Average",
    categorie: "Cape of good hope daily",
    href: "/cape-of-good-hope-daily/Prior Year: 7-day Moving Average",
  },

  // US Money Market
  {
    label: "US Money Market Fund Flows",
    categorie: "Daily money market fund flows",
    href: "/daily-money-market-fund-flows/US Money Market Fund Flows",
  },
  {
    label: "US Money Market Fund Flows (5d m/a)",
    categorie: "Daily money market fund flows",
    href: "/daily-money-market-fund-flows/US Money Market Fund Flows (5d m|a)",
  },

  // South Korea BoP
  {
    label: "Capital Account",
    categorie: "South Korea balance of payments",
    href: "/south-korea-balance-of-payment/Capital Account",
  },
  {
    label: "Current Account",
    categorie: "South Korea balance of payments",
    href: "/south-korea-balance-of-payment/Current Account",
  },
  {
    label: "Errors and Omissions",
    categorie: "South Korea balance of payments",
    href: "/south-korea-balance-of-payment/Errors and Omissions",
  },
  {
    label: "Direct Investment",
    categorie: "South Korea balance of payments",
    href: "/south-korea-balance-of-payment/Direct Investment",
  },
  {
    label: "Financial Derivatives",
    categorie: "South Korea balance of payments",
    href: "/south-korea-balance-of-payment/Financial Derivatives",
  },
  {
    label: "Other Investment",
    categorie: "South Korea balance of payments",
    href: "/south-korea-balance-of-payment/Other Investment",
  },
  {
    label: "Debt Securities",
    categorie: "South Korea balance of payments",
    href: "/south-korea-balance-of-payment/Debt Securities",
  },
  {
    label: "Equity",
    categorie: "South Korea balance of payments",
    href: "/south-korea-balance-of-payment/Equity",
  },
  {
    label: "Reserves",
    categorie: "South Korea balance of payments",
    href: "/south-korea-balance-of-payment/Reserves",
  },

  // Turkey BoP
  {
    label: "Capital Account",
    categorie: "Turkey balance of payments",
    href: "/turkey-balance-of-payment/Capital Account",
  },
  {
    label: "Current Account",
    categorie: "Turkey balance of payments",
    href: "/turkey-balance-of-payment/Current Account",
  },
  {
    label: "Errors and Omissions",
    categorie: "Turkey balance of payments",
    href: "/turkey-balance-of-payment/Errors and Omissions",
  },
  {
    label: "Direct Investment",
    categorie: "Turkey balance of payments",
    href: "/turkey-balance-of-payment/Direct Investment",
  },
  {
    label: "Other Investment",
    categorie: "Turkey balance of payments",
    href: "/turkey-balance-of-payment/Other Investment",
  },
  {
    label: "Reserves",
    categorie: "Turkey balance of payments",
    href: "/turkey-balance-of-payment/Reserves",
  },

  // Japan BoP
  {
    label: "Capital Account",
    categorie: "Japan balance of payments",
    href: "/japan-balance-of-payment/Capital Account",
  },
  {
    label: "Current Account",
    categorie: "Japan balance of payments",
    href: "/japan-balance-of-payment/Current Account",
  },
  {
    label: "Errors and Omissions",
    categorie: "Japan balance of payments",
    href: "/japan-balance-of-payment/Errors and Omissions",
  },
  {
    label: "Direct Investment",
    categorie: "Japan balance of payments",
    href: "/japan-balance-of-payment/Direct Investment",
  },
  {
    label: "Other Investment",
    categorie: "Japan balance of payments",
    href: "/japan-balance-of-payment/Other Investment",
  },
  {
    label: "Reserves",
    categorie: "Japan balance of payments",
    href: "/japan-balance-of-payment/Reserves",
  },

  // Global Flows to equity
  {
    label: "Equity",
    categorie: "Global flows to equity and fixed income",
    href: "/global-flows-to-equity/Equity",
  },
  {
    label: "Debt",
    categorie: "Global flows to equity and fixed income",
    href: "/global-flows-to-equity/Debt",
  },
];
