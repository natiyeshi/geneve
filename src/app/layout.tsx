import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientSessionProvider from "@/providers/ClientSessionProvider";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const GA_TRACKING_ID = "G-YZN0BMDHST"; // Your Google Analytics ID

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

        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Favicon & Apple Icons */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
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
