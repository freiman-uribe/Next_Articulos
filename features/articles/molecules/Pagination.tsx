import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  function getPageHref(page: number): string {
    if (page === 1) return basePath;
    return `${basePath}?pagina=${page}`;
  }

  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <nav
      aria-label="Paginacion de articulos"
      className="flex flex-wrap items-center justify-between gap-4 pt-2"
    >
      <p className="whitespace-nowrap text-sm text-muted-foreground">
        Pagina {currentPage} de {totalPages}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {currentPage > 1 ? (
          <Link
            href={getPageHref(currentPage - 1)}
            className="flex h-10 items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-border bg-card px-3.5 text-sm font-medium whitespace-nowrap text-foreground no-underline transition-colors hover:bg-muted"
            aria-label="Pagina anterior"
          >
            <ChevronLeft size={16} />
            Anterior
          </Link>
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
            <Link
              key={page}
              href={getPageHref(page)}
              className="flex h-10 min-w-10 items-center justify-center rounded-[var(--radius-xl)] border border-border bg-card px-3.5 text-sm font-medium whitespace-nowrap text-foreground no-underline transition-colors hover:bg-muted"
              aria-label={`Ir a la pagina ${page}`}
            >
              {page}
            </Link>
          )
        )}

        {currentPage < totalPages ? (
          <Link
            href={getPageHref(currentPage + 1)}
            className="flex h-10 items-center justify-center gap-2 rounded-[var(--radius-xl)] border border-border bg-card px-3.5 text-sm font-medium whitespace-nowrap text-foreground no-underline transition-colors hover:bg-muted"
            aria-label="Pagina siguiente"
          >
            Siguiente
            <ChevronRight size={16} />
          </Link>
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