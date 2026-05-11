import type { MetadataRoute } from "next";
import { getContentFiles } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://syedazerak.com";

  const workSlugs = getContentFiles("work").map((f) => f.replace(".mdx", ""));
  const postSlugs = getContentFiles("posts").map((f) => f.replace(".mdx", ""));

  const staticRoutes = ["/", "/about", "/work", "/blog", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const workRoutes = workSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = postSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...postRoutes];
}
