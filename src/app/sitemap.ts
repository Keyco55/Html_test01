import type { MetadataRoute } from "next";

import { absoluteUrl } from "../lib/platform";

export const dynamic = "force-static";

const ROUTES = ["/", "/projects", "/experience", "/skills", "/about"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const home = absoluteUrl("/");
  if (!home) return [];

  return ROUTES.map((route, index) => {
    const url = absoluteUrl(route);
    if (!url) return { url: home.href, changeFrequency: "monthly" as const, priority: 0.5 };
    return {
      url: url.href,
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : 0.8,
    };
  });
}
