import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SMDC Gold Towers RESO",
  description: "Dual-purpose Residential-Offices across NAIA Terminal 1.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans bg-[#FDFBF7] text-[#081A32] antialiased">
        {children}
      </body>
    </html>
  );
}