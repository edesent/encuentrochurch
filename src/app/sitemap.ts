import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE.url, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE.url}/home/espanol`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/connect`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE.url}/contact-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
