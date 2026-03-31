import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticleCoverPath } from "@/data/articles";
import { ArticleDetailTemplate } from "@/features/articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Articulo no encontrado",
      description: "El articulo solicitado no existe o ya no esta disponible.",
    };
  }

  const url = SITE_URL ? `${SITE_URL}/articulos/${article.slug}` : undefined;
  const image = SITE_URL
    ? `${SITE_URL}${getArticleCoverPath(article.id)}`
    : undefined;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/articulos/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      ...(url ? { url } : {}),
      ...(image
        ? {
            images: [
              {
                url: image,
                width: 1200,
                height: 675,
                alt: `Portada del articulo ${article.title}`,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetailTemplate article={article} siteUrl={SITE_URL} />;
}
