import { NextRequest, NextResponse } from "next/server";
import { ARTICLES_PER_PAGE, getAllArticles } from "@/data/articles";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get("q")?.trim().toLowerCase() ?? "";
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  if (query.length < 3) {
    return NextResponse.json({ results: [], total: 0, totalPages: 0 });
  }

  const filtered = getAllArticles().filter(
    (article) =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query)
  );

  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const currentPage = Math.min(page, Math.max(1, totalPages));
  const start = (currentPage - 1) * ARTICLES_PER_PAGE;

  const results = filtered
    .slice(start, start + ARTICLES_PER_PAGE)
    .map(({ id, title, slug, description }) => ({
      id,
      title,
      slug,
      description,
    }));

  return NextResponse.json({
    results,
    total: filtered.length,
    totalPages,
  });
}