import type { MetadataRoute } from "next";
import { ARTICLES_PER_PAGE, getAllArticles } from "@/data/articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const FALLBACK_URL = "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL ?? FALLBACK_URL;
  const articles = getAllArticles();
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const paginationUrls: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(totalPages - 1, 0) },
    (_, index) => ({
      url: `${baseUrl}/?pagina=${index + 2}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articulos/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...paginationUrls,
    ...articleUrls,
  ];
}