import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArticleCoverPath } from "@/data/articles";
import type { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const href = `/articulos/${article.slug}`;
  const coverImage = getArticleCoverPath(article.id);

  return (
    <article className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-transparent border-b-border p-[18px_20px_24px_20px] transition-all duration-200 hover:border-border hover:bg-gradient-to-r hover:from-muted hover:to-transparent md:flex-row md:items-center md:gap-6">
      <Link
        href={href}
        className="group relative block h-[148px] w-full overflow-hidden rounded-[var(--radius-lg)] border border-border bg-muted sm:h-[168px] md:h-[132px] md:w-[188px] md:flex-none"
      >
        <Image
          src={coverImage}
          alt={`Portada del articulo ${article.title}`}
          width={960}
          height={540}
          sizes="(min-width: 768px) 188px, 100vw"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-3.5">
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
      </div>
    </article>
  );
}