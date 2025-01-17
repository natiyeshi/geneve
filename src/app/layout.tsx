import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import ClientSessionProvider from "@/providers/ClientSessionProvider";

// Import the Lexend font
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend", // Define a custom CSS variable for Lexend
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all weights
});

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
        <body className={`${lexend.variable} antialiased`}>
          {children}
        </body>
      </ClientSessionProvider>
    </html>
  );
}
