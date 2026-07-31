import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/safe-space", changeFrequency: "monthly", priority: 0.9 },
  { path: "/safe-space-gala", changeFrequency: "weekly", priority: 0.85 },
  { path: "/the-light", changeFrequency: "monthly", priority: 0.8 },
  { path: "/music-and-evangelism", changeFrequency: "monthly", priority: 0.75 },
  { path: "/donate", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
