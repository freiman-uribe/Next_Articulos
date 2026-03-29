import { ArticleCard } from "@/features/articles/molecules";
import type { Article } from "@/types/article";

interface ArticleListProps {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <section className="flex flex-col gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}