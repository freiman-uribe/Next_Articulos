import type { Metadata } from "next";
import { getPaginatedArticles } from "@/data/articles";
import { ArticleListTemplate } from "@/features/articles";

// Optional base URL used for absolute SEO metadata once the project has a real domain.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ pagina?: string }>;
}): Promise<Metadata> {
  const { pagina } = await searchParams;
  const page = Number(pagina) || 1;

  const title =
    page > 1
      ? `Articulos sobre desarrollo web, SEO tecnico y rendimiento - Pagina ${page}`
      : "Articulos sobre desarrollo web, SEO tecnico y rendimiento";
  const description =
    page > 1
      ? `Explora la pagina ${page} del listado editorial con articulos sobre frontend, SEO tecnico, accesibilidad y performance web.`
      : "Explora articulos informativos sobre desarrollo web, SEO tecnico, accesibilidad y performance con Next.js y React.";

  const { totalPages } = getPaginatedArticles(page);

  const alternates: Metadata["alternates"] = {
    canonical: page === 1 ? "/" : `/?pagina=${page}`,
  };

  const other: Record<string, string> = {};
  if (SITE_URL && page > 1) {
    other.prev = page === 2 ? SITE_URL : `${SITE_URL}/?pagina=${page - 1}`;
  }
  if (SITE_URL && page < totalPages) {
    other.next = `${SITE_URL}/?pagina=${page + 1}`;
  }

  return {
    title,
    description,
    alternates,
    ...(Object.keys(other).length > 0 ? { other } : {}),
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ pagina?: string }>;
}) {
  const { pagina } = await searchParams;
  const page = Number(pagina) || 1;
  const { articles, totalPages, currentPage, totalArticles } =
    getPaginatedArticles(page);

  return (
    <ArticleListTemplate
      articles={articles}
      totalArticles={totalArticles}
      currentPage={currentPage}
      totalPages={totalPages}
      siteUrl={SITE_URL}
    />
  );
}
