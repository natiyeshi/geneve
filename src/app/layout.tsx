import type { Metadata } from "next";
import "./globals.css";
import ClientSessionProvider from "@/providers/ClientSessionProvider";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gaber Wear - Garment Factory in Addis Ababa, Ethiopia",
    template: "%s - Garment Factory in Addis Ababa, Ethiopia",
  },
  description:
    "Gaber Wear is a leading garment factory in Addis Ababa, Ethiopia, specializing in high-quality t-shirts and custom clothing production.",
  keywords: [
    "tshirt",
    "garment factory in Addis",
    "Gaber Wear",
    "t-shirt garment in Ethiopia",
    "Addis Ababa wears",
    "Addis Ababa garment",
    "Gaber Garment",
  ],
  openGraph: {
    type: "website",
    url: "https://gaber-wear.com",
    title: "Gaber Wear - Leading Garment Factory in Ethiopia",
    description:
      "Discover Gaber Wear, a top garment manufacturer in Addis Ababa, Ethiopia, providing high-quality t-shirts and custom apparel.",
    images: [
      {
        url: "https://gaber-wear.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gaber Wear Garment Factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Gaber Wear - Garment Factory in Addis Ababa",
    description: "Leading t-shirt and garment manufacturer in Ethiopia.",
    images: ["https://gaber-wear.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <ClientSessionProvider>
        <body className={`antialiased bg-white ${montserrat.className}`}>
          <span id="top"></span>
          <NextTopLoader />
          {children}
        </body>
      </ClientSessionProvider>
    </html>
  );
}
