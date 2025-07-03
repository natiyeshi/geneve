// src/app/sitemap.ts

import { MetadataRoute } from "next";

export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = "https://genevegetaway.com";
  const now = new Date();
  return [
    {
      url: `${URL}/about`,
      lastModified: now,
    },
    {
      url: `${URL}/packages`,
      lastModified: now,
    },
    {
      url: `${URL}/attractions`,
      lastModified: now,
    },
    {
      url: `${URL}/contact`,
      lastModified: now,
    },
    {
      url: `${URL}/blog`,
      lastModified: now,
    },
  ];
}
