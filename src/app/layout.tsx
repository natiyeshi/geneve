import type { Metadata } from "next";
import "./globals.css";
import ClientSessionProvider from "@/providers/ClientSessionProvider";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add the weights you need
  display: "swap",
});
// Import the Lexend font

export const metadata: Metadata = {
  title: "Gaber Wear",
  description: "Gaber Wear Garment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
