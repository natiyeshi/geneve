import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Travel Packages",
  description:
    "Explore exclusive international travel packages with Geneve Getaway. Discover curated journeys to Italy, Japan, Greece, Africa, and more – all with luxury accommodations and flights included.",
  keywords: [
    "Luxury travel packages",
    "Italy travel package",
    "Japan tour package",
    "Greek Islands vacation",
    "African safari adventure",
    "Thailand wellness retreat",
    "Peru travel tour",
    "Best tour packages Ethiopia",
    "Flights and hotels included",
    "International travel deals",
    "Geneve Getaway packages",
    "All-inclusive travel packages",
    "Luxury vacations from Ethiopia",
  ],
  openGraph: {
    title: "Explore Curated Luxury Travel Packages | Geneve Getaway",
    description:
      "Plan your next adventure with Geneve Getaway. From the Amalfi Coast to Machu Picchu and the Greek Islands, our luxury packages offer comfort, culture, and unforgettable experiences.",
    url: "https://genevegetaway.com/packages",
    type: "website",
    siteName: "Geneve Getaway",
    images: [
      {
        url: "/favicon.ico", // Replace with a real OG preview image if you have one
        alt: "Luxury Travel by Geneve Getaway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Tour Packages – Flights, Hotels & More | Geneve Getaway",
    description:
      "Browse luxury travel packages including flights and top-tier hotels to destinations like Italy, Japan, Greece, Peru, and Africa.",
    images: ["/favicon.ico"],
  },
  metadataBase: new URL("https://genevegetaway.com"),
  authors: [{ name: "Geneve Getaway" }],
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
