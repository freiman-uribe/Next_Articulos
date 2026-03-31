import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const FALLBACK_URL = "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL ?? FALLBACK_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}