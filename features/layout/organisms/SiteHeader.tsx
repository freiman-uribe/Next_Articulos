import Link from "next/link";
import { Layers } from "lucide-react";

export function SiteHeader() {
  return (
    <header
      className="h-[72px] flex items-center justify-between px-6 sm:px-8 lg:px-10 border-b border-border bg-background"
      role="banner"
    >
      <Link href="/" className="flex items-center gap-3 min-w-0">
        <span className="w-8 h-8 rounded-[var(--radius-md)] bg-primary text-primary-foreground flex items-center justify-center shrink-0">
          <Layers size={18} />
        </span>
        <span className="text-lg font-semibold whitespace-nowrap text-foreground">
          Next Articulos
        </span>
      </Link>

      <nav aria-label="Navegacion principal">
        <ul className="flex items-center gap-5 list-none" role="list">
          <li>
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Inicio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}