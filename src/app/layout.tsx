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

const GA_TRACKING_ID = ""; // Your Google Analytics ID

export const metadata: Metadata = {
  title: "Geneve - Luxury Travel",
  // description: "Hallmark of Luxury Travel",
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
      

        {/* Favicon & Apple Icons */}
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
