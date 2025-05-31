import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ClientSessionProvider } from "@/components/client-session-provider";
import I18nProvider from '@/providers/I18nProvider';

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const GA_TRACKING_ID = ""; // Your Google Analytics ID

export const metadata: Metadata = {
  title: "Geneve Getaway",
  description: "Your luxury travel partner",
};

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
      

        {/* Favicon & Apple Icons */}
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
            {children}
          </body>
        </ClientSessionProvider>
      </I18nProvider>

    </html>
  );
}
