import type { Metadata } from "next";
import { Irish_Grover, Montserrat } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/lib/aos";

const irish = Irish_Grover({
  subsets: ["latin"],
  variable: "--font-irish",
  weight: "400",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sidair",
  description: "Website Sidair Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <AOSInit />
      <body className={`${irish.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
