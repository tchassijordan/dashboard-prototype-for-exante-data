"use client";

import Image from "next/image";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";

export default function Navbar() {
  return (
    <Grid
      container
      sx={{
        py: 4,
        px: 2,
        backgroundColor: "rgb(9, 28, 48)",
        justifyContent: "space-between",
      }}
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
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Avatar sx={{ ml: "auto" }} />
      </Grid>
    </Grid>
  );
}

const filters = [
  { label: "Number of Cargo Ships", categorie: "Cape of good hope daily" },
  { label: "Number of Tanker Ships", categorie: "Cape of good hope daily" },
  { label: "7-day Moving Average", categorie: "Cape of good hope daily" },
  {
    label: "Prior Year: 7-day Moving Average",
    categorie: "Cape of good hope daily",
  },
  {
    label: "US Money Market Fund Flows",
    categorie: "Daily money market fund flows",
  },
  {
    label: "US Money Market Fund Flows (5d m/a)",
    categorie: "Daily money market fund flows",
  },
];
