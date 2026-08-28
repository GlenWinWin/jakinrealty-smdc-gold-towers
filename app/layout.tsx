import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jakinrealty.com"),
  title: {
    default: "SMDC Gold Towers RESO | Jakin Realty",
    template: "%s | Jakin Realty",
  },
  description:
    "Official executive brief, unit pricing, and project overview for SMDC Gold Towers RESO across NAIA Terminal 1. Dual-purpose Residential-Offices presented by Jakin Realty.",
  keywords: [
    "Jakin Realty",
    "SMDC Gold Towers RESO",
    "SMDC Gold City Parañaque",
    "Residential Offices NAIA Terminal 1",
    "Condo across NAIA 1",
    "Joy Relloso SMDC",
    "SMDC RESO investment Norway OFW",
    "Summerspring Development Corporation",
  ],
  authors: [
    { name: "Jakin Realty", url: "https://jakinrealty.com" },
    { name: "Joy Relloso" },
  ],
  creator: "Jakin Realty",
  publisher: "Jakin Realty",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SMDC Gold Towers RESO | Residential-Offices Across NAIA 1 - Jakin Realty",
    description:
      "Dual-purpose live & work suites across NAIA Terminal 1 with 100% emergency backup power, turnkey corporate leasing, and 24/7 executive amenities.",
    url: "https://jakinrealty.com",
    siteName: "Jakin Realty",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMDC Gold Towers RESO Executive Preview - Jakin Realty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMDC Gold Towers RESO | Jakin Realty",
    description:
      "Claim your executive brief and pricing for SMDC Gold Towers RESO across NAIA Terminal 1.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://jakinrealty.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <meta name="geo.region" content="PH-00" />
        <meta name="geo.placename" content="Parañaque City" />
        <meta name="geo.position" content="14.5085;121.0003" />
        <meta name="ICBM" content="14.5085, 121.0003" />
      </head>
      <body className="font-sans bg-[#071324] text-white antialiased">
        {children}
      </body>
    </html>
  );
}