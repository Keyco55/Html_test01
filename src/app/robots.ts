import type { MetadataRoute } from "next";

import { absoluteUrl } from "../lib/platform";

export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: sitemap?.href,
  };
}
