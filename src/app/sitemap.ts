import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about", "/resume", "/contact"].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
    priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7
  }));

  const projectRoutes = projects.map((project) => ({
    url: absoluteUrl(`/work/${project.slug}`),
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.8
  }));

  return [...staticRoutes, ...projectRoutes];
}
