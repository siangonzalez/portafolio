import type { MetadataRoute } from "next";
import { brandCases } from "@/data/brand-projects";
import { webProjects } from "@/data/web-projects";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/audiovisual/`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/marca/`, changeFrequency: "monthly", priority: 0.9 },
    ...brandCases.map((c) => ({
      url: `${SITE_URL}/marca/${c.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...webProjects.map((p) => ({
      url: `${SITE_URL}/web/${p.slug}/`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
