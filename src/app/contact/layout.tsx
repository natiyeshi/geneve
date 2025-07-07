
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Geneve Getaway via WhatsApp, Telegram, email, or phone. Visit our offices in Addis Ababa or Dubai and access 24/7 online travel support.",
  keywords: [
    "Contact Geneve Getaway",
    "Geneve travel support",
    "Geneve Getaway phone number",
    "WhatsApp travel agency Ethiopia",
    "Dubai travel agency contact",
    "Addis Ababa travel agency",
    "24/7 travel support Ethiopia",
    "Travel agency near Olympia Dembele",
    "Dubai travel bureau",
    "Geneve Getaway office",
    "info@genevegetaway.com",
    "Best travel agency Ethiopia contact",
    "Scan QR code travel contacts",
  ],
  openGraph: {
    title: "Contact Geneve Getaway – Offices in Ethiopia & Dubai",
    description:
      "Need help with your travel plans? Contact Geneve Getaway through WhatsApp, Telegram, or email. Visit us in Addis Ababa or Dubai, or connect 24/7 online.",
    url: "https://genevegetaway.com/contact",
    type: "website",
    siteName: "Geneve Getaway",
    images: [
      {
        url: "/favicon.ico", // Replace with real OG image if available
        alt: "Geneve Getaway QR code or logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Geneve Getaway – Get Support Anytime, Anywhere",
    description:
      "Geneve Getaway offers 24/7 online support and offices in Ethiopia and Dubai. Reach us by phone, WhatsApp, Telegram, or email.",
    images: ["/favicon.ico"], // Replace with better image if you have one
  },
  metadataBase: new URL("https://genevegetaway.com"),
  authors: [{ name: "Geneve Getaway" }],
};


const Layout = ({ children }: any) => {
  return <>{children}</>;
};

export default Layout;
