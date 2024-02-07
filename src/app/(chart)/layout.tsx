"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";

const ChartLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      maxWidth={(theme) => theme.breakpoints.values.xl}
      mx={"auto"}
      minHeight={600}
    >
      {children}
    </Box>
  );
};

export default ChartLayout;
