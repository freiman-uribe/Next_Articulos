import { ArticleDetail } from "@/features/articles/organisms";
import { JsonLd } from "@/features/shared/atoms";
import type { Article } from "@/types/article";

interface ArticleDetailTemplateProps {
  article: Article;
  siteUrl?: string;
}

export function ArticleDetailTemplate({
  article,
  siteUrl,
}: ArticleDetailTemplateProps) {
  const articleJsonLd = siteUrl
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        publisher: {
          "@type": "Organization",
          name: "Next Articulos",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/articulos/${article.slug}`,
        },
      }
    : null;

  return (
    <>
      {articleJsonLd ? <JsonLd data={articleJsonLd} /> : null}
      <ArticleDetail article={article} />
    </>
  );
}