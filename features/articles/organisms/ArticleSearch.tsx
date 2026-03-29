"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { ArticleList } from "@/features/articles/organisms";
import { useDebounce } from "@/features/shared/hooks/useDebounce";
import type { Article } from "@/types/article";

interface SearchResult {
  id: number;
  title: string;
  slug: string;
  description: string;
}

interface SearchResponse {
  results: SearchResult[];
  total: number;
  totalPages: number;
}

interface ArticleSearchProps {
  totalArticles: number;
  visibleArticles: number;
  children: React.ReactNode;
}

export function ArticleSearch({
  totalArticles,
  visibleArticles,
  children,
}: ArticleSearchProps) {
  const [query, setQuery] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalSearchPages, setTotalSearchPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 300);
  const isSearching = debouncedQuery.trim().length >= 3;

  const fetchResults = useCallback(async (term: string, page: number) => {
    const normalizedTerm = term.trim();

    if (normalizedTerm.length < 3) {
      setResults([]);
      setTotalResults(0);
      setTotalSearchPages(0);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const params = new URLSearchParams({ q: normalizedTerm, page: String(page) });
      const response = await fetch(`/api/search?${params}`);

      if (!response.ok) {
        throw new Error("Search request failed");
      }

      const data: SearchResponse = await response.json();
      setResults(data.results);
      setTotalResults(data.total);
      setTotalSearchPages(data.totalPages);
    } catch {
      setResults([]);
      setTotalResults(0);
      setTotalSearchPages(0);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchResults(debouncedQuery, searchPage);
  }, [debouncedQuery, searchPage, fetchResults]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setSearchPage(1);
  }

  return (
    <>
      <section className="flex flex-wrap items-center justify-between gap-4 border-t border-b border-border py-5">
        <p className="whitespace-nowrap text-sm text-muted-foreground">
          {isSearching
            ? `${totalResults} ${totalResults === 1 ? "articulo encontrado" : "articulos encontrados"}`
            : `Mostrando ${visibleArticles} de ${totalArticles} articulos`}
        </p>
        <div className="flex flex-wrap items-center justify-end gap-3">
          <div className="flex h-10 min-w-[280px] items-center gap-2.5 rounded-[var(--radius-xl)] border border-border bg-card px-3.5">
            <Search size={16} className="shrink-0 text-muted-foreground" />
            <label htmlFor="article-search" className="sr-only">
              Buscar articulos por titulo
            </label>
            <input
              id="article-search"
              type="search"
              placeholder="Buscar por titulo o tema"
              value={query}
              onChange={(event) => handleQueryChange(event.target.value)}
              className="min-w-0 flex-1 border-none bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              aria-describedby="search-hint"
            />
          </div>
          <span id="search-hint" className="sr-only">
            Escribe al menos 3 caracteres para buscar.
          </span>
        </div>
      </section>

      {isSearching ? (
        isLoading ? (
          <p className="py-12 text-center text-muted-foreground">
            Buscando articulos...
          </p>
        ) : results.length > 0 ? (
          <>
            <ArticleList articles={results as Article[]} />
            {totalSearchPages > 1 ? (
              <SearchPagination
                currentPage={searchPage}
                totalPages={totalSearchPages}
                onPageChange={setSearchPage}
              />
            ) : null}
          </>
        ) : (
          <p className="py-12 text-center text-muted-foreground">
            No se encontraron articulos para &quot;{debouncedQuery}&quot;.
          </p>
        )
      ) : (
        children
      )}
    </>
  );
}

function SearchPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <nav
      aria-label="Paginacion de resultados de busqueda"
      className="flex flex-wrap items-center justify-between gap-4 pt-2"
    >
      <p className="whitespace-nowrap text-sm text-muted-foreground">
        Pagina {currentPage} de {totalPages}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {currentPage > 1 ? (
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-border bg-card px-3.5 text-sm font-medium whitespace-nowrap text-foreground transition-colors hover:bg-muted"
            aria-label="Ir a la pagina anterior"
          >
            <ChevronLeft size={16} />
            Anterior
          </button>
        ) : (
          <span className="flex h-10 items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-border bg-muted px-3.5 text-sm font-medium whitespace-nowrap text-muted-foreground cursor-default">
            <ChevronLeft size={16} />
            Anterior
          </span>
        )}

        {pages.map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="flex h-10 min-w-10 items-center justify-center rounded-[var(--radius-xl)] border border-border bg-muted px-3.5 text-sm font-medium text-muted-foreground cursor-default"
            >
              ...
            </span>
          ) : page === currentPage ? (
            <span
              key={page}
              className="flex h-10 min-w-10 items-center justify-center rounded-[var(--radius-xl)] border border-primary bg-primary px-3.5 text-sm font-medium text-primary-foreground"
              aria-current="page"
            >
              {page}
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className="flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-[var(--radius-xl)] border border-border bg-card px-3.5 text-sm font-medium whitespace-nowrap text-foreground transition-colors hover:bg-muted"
              aria-label={`Ir a la pagina ${page}`}
            >
              {page}
            </button>
          )
        )}

        {currentPage < totalPages ? (
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-border bg-card px-3.5 text-sm font-medium whitespace-nowrap text-foreground transition-colors hover:bg-muted"
            aria-label="Ir a la pagina siguiente"
          >
            Siguiente
            <ChevronRight size={16} />
          </button>
        ) : (
          <span className="flex h-10 items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-border bg-muted px-3.5 text-sm font-medium whitespace-nowrap text-muted-foreground cursor-default">
            Siguiente
            <ChevronRight size={16} />
          </span>
        )}
      </div>
    </nav>
  );
}

function getVisiblePages(current: number, total: number): Array<number | "..."> {
  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  if (current <= 3) {
    return [1, 2, 3, "...", total];
  }

  if (current >= total - 2) {
    return [1, "...", total - 2, total - 1, total];
  }

  return [1, "...", current, "...", total];
}