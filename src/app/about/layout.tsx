import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Geneve Getaway, a travel service inspired by Geneva, the Peace Capital. Learn how we deliver peaceful, efficient, and luxurious travel experiences for business travelers and vacationers alike.",
  keywords: [
    "About Geneve Getaway",
    "Geneva inspiration travel agency",
    "Peace Capital travel services",
    "Luxury travel from Ethiopia",
    "Business travel Ethiopia",
    "Vacation packages Dubai",
    "Travel agency values",
    "About Ethiopian travel agency",
    "Geneve founders",
    "Dubai bureau travel company",
    "Tailored travel packages",
    "Travel services Ethiopia to Dubai",
    "Geneve Getaway story",
  ],
  openGraph: {
    title: "About Geneve Getaway – Inspired by the Peace Capital",
    description:
      "Explore Geneve Getaway’s roots in Geneva’s spirit of peace and international excellence. From Dubai to the world, we offer premium travel services and global support.",
    url: "https://genevegetaway.com/about",
    type: "website",
    siteName: "Geneve Getaway",
    images: [
      {
        url: "/favicon.ico", // You can replace this with a real OG image like /og-about.jpg
        alt: "Geneve Getaway logo",
      },
    ],
  },
};

const Layout = ({ children }: any) => {
  return <>{children}</>;
};

export default Layout;
