import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mahati Buildcon - Premium Real Estate in Nashik",
  description: "Find your property in Nashik with Mahati Buildcon. Explore premium residential, commercial, plots, and land opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
