import type { MetadataRoute } from "next";

import { absoluteUrl } from "../lib/platform";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = absoluteUrl("/");
  if (!home) return [];

  return [
    {
      url: home.href,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
