import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Manish Singh Portfolio",
    short_name: "Manish Singh",
    description: "Full Stack Blockchain Developer portfolio and technical case studies.",
    start_url: "/",
    display: "standalone",
    background_color: "#e2dedb",
    theme_color: "#1d1d1b",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }]
  };
}
