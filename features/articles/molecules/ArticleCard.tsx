import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const href = `/articulos/${article.slug}`;

  return (
    <article className="flex flex-col gap-3.5 rounded-[var(--radius-lg)] border border-transparent border-b-border p-[18px_20px_24px_20px] transition-all duration-200 hover:border-border hover:bg-gradient-to-r hover:from-muted hover:to-transparent">
      <span className="whitespace-nowrap text-[13px] text-muted-foreground">
        ID {article.id}
      </span>

      <h2 className="max-w-[780px] text-[30px] leading-[1.25] font-semibold tracking-[-0.01em] text-foreground">
        {article.title}
      </h2>

      <p className="max-w-[820px] text-[17px] leading-[1.8] text-muted-foreground">
        {article.description}
      </p>

      <div className="flex flex-wrap items-center justify-end gap-4">
        <Link
          href={href}
          className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-foreground no-underline transition-colors hover:text-accent"
        >
          Leer articulo
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}