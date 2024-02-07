import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Navbar from "./components/layout/navbar";
import "@/globals.css";
import ChartLayout from "./(chart)/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exante data",
  description: "Data visualization app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Navbar />
            <ChartLayout>{children}</ChartLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
