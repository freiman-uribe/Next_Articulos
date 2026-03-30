import sanitizeHtml from "sanitize-html";
import { FileText, Hash, Link2 } from "lucide-react";
import { BackLink } from "@/features/shared/molecules";
import type { Article } from "@/types/article";

interface ArticleDetailProps {
  article: Article;
}

export function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <div className="mx-auto flex w-full max-w-[920px] flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <BackLink
          href="/"
          label="Volver a articulos"
          ariaLabel="Volver al listado de articulos"
        />
        <span className="inline-flex items-center gap-2 rounded-[var(--radius-xl)] bg-secondary px-3 py-2 text-[13px] font-medium whitespace-nowrap text-secondary-foreground">
          <FileText size={14} />
          Vista de detalle
        </span>
      </div>

      <article className="flex flex-col gap-8 rounded-[var(--radius-lg)] border border-border bg-card p-10">
        <header className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-[var(--radius-xl)] bg-secondary px-3 py-1.5 text-[13px] font-medium whitespace-nowrap text-secondary-foreground">
              <Hash size={14} />
              ART-{article.id}
            </span>
            <span className="inline-flex items-center gap-2 rounded-[var(--radius-xl)] bg-muted px-3 py-1.5 text-[13px] font-medium whitespace-nowrap text-foreground">
              <Link2 size={14} />
              /{article.slug}
            </span>
          </div>

          <h1 className="text-[42px] leading-[1.16] font-bold tracking-[-0.02em] text-foreground">
            {article.title}
          </h1>

          <p className="text-xl leading-[1.65] text-muted-foreground">
            {article.description}
          </p>
        </header>

        <div
          className="article-body flex flex-col gap-6 text-[17px] leading-[1.85] text-foreground"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(article.content, {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
              allowedAttributes: {
                ...sanitizeHtml.defaults.allowedAttributes,
                img: ["src", "alt", "width", "height", "loading"],
              },
            }),
          }}
        />
      </article>
    </div>
  );
}