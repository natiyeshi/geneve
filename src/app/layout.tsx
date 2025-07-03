import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ClientSessionProvider } from "@/components/client-session-provider";
import I18nProvider from '@/providers/I18nProvider';
import { ReferralTracker } from "@/components/referral-tracker";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const GA_TRACKING_ID = "G-LFH85GFENP"; // Your Google Analytics ID

export const metadata: Metadata = {
  title: {
    default:
      "Geneve Getaway - Best Tour & Travel Agency in Ethiopia | Dubai Visa & Hotel Booking",
    template: "%s - Geneve Getaway",
  },
  description:
    "Geneve Getaway is a trusted travel agency based in Ethiopia, offering the best airfare deals, Dubai visa processing, hotel bookings, and custom tour packages. Discover affordable flights, luxury stays, and stress-free travel planning with us.",
  keywords: [
    "Best tour and travel in Ethiopia",
    "Dubai visa processing",
    "Hotel booking in Dubai",
    "Airfare booking Ethiopia",
    "Cheap air tickets in Ethiopia",
    "Air ticket office in Addis Ababa",
    "Ethiopian travel agency",
    "Tour and travel Ethiopia",
    "Dubai travel packages",
    "Affordable Dubai tours",
    "Dubai hotel deals",
    "Visa assistance Ethiopia",
    "Geneve Getaway",
    "Best travel agency Ethiopia",
    "Travel to Dubai from Ethiopia",
    "Ethiopia to Dubai flights",
    "Vacation planning Ethiopia",
    "Luxury hotel booking Dubai",
    "Flight deals Addis Ababa",
  ],
  twitter: {
    card: "summary_large_image",
  },
  authors: [{ name: "Geneve Getaway" }],
  openGraph: {
    title:
      "Geneve Getaway - Best Tour & Travel Agency in Ethiopia | Dubai Visa & Hotel Booking",
    description:
      "Plan your next trip with Geneve Getaway. From visa processing to hotel reservations and flight bookings, we make your travel to Dubai and beyond smooth, affordable, and unforgettable.",
    type: "website",
    url: "https://genevegetaway.com",
    siteName: "Geneve Getaway",
    images: [
      {
        url: "/favicon.ico", // Update if you have a better preview image
        alt: "Geneve Getaway logo",
      },
    ],
  },
};


// ... existing code ...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

        {/* Tawk.to Chat Script */}
        <Script
          id="tawkto-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/682849ea3cb2bd190f12ce3e/1irem1fh3';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <I18nProvider>
        <ClientSessionProvider>
          <body className={`antialiased bg-white ${montserrat.className}`}>
            <NextTopLoader
              color="#EE1D46"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #EE1D46,0 0 5px #EE1D46"
            />
            <ReferralTracker />
            {children}
          </body>
        </ClientSessionProvider>
      </I18nProvider>
    </html>
  );
}