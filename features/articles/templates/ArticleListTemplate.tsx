import { Pagination } from "@/features/articles/molecules";
import { ArticleList, ArticleSearch } from "@/features/articles/organisms";
import { Heading, JsonLd } from "@/features/shared";
import type { Article } from "@/types/article";

interface ArticleListTemplateProps {
  articles: Article[];
  totalArticles: number;
  currentPage: number;
  totalPages: number;
  siteUrl: string;
}

export function ArticleListTemplate({
  articles,
  totalArticles,
  currentPage,
  totalPages,
  siteUrl,
}: ArticleListTemplateProps) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Next Articulos",
    url: siteUrl,
    description:
      "Articulos informativos sobre desarrollo web, rendimiento, accesibilidad y arquitectura frontend.",
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: (currentPage - 1) * articles.length + index + 1,
      url: `${siteUrl}/articulos/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={itemListJsonLd} />

      <section className="flex flex-col gap-8" aria-labelledby="articles-heading">
        <div className="flex flex-col gap-4 pt-6 pb-2">
          <span className="whitespace-nowrap text-[13px] font-semibold tracking-[0.04em] text-accent">
            Revista de desarrollo web
          </span>
          <Heading
            as="h1"
            id="articles-heading"
            className="max-w-[760px] text-[42px] leading-[1.12] font-semibold tracking-[-0.02em] text-foreground"
          >
            Articulos y guias sobre frontend, SEO tecnico y rendimiento web.
          </Heading>
          <p className="max-w-[760px] text-lg leading-[1.7] text-muted-foreground">
            Una coleccion editorial pensada para equipos y desarrolladores que
            quieren construir productos mas claros, mas rapidos y mejor estructurados.
          </p>
        </div>

        <ArticleSearch
          totalArticles={totalArticles}
          visibleArticles={articles.length}
        >
          <ArticleList articles={articles} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            basePath="/"
          />
        </ArticleSearch>
      </section>
    </>
  );
}