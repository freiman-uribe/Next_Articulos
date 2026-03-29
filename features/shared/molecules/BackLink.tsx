import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href: string;
  label: string;
  ariaLabel?: string;
}

export function BackLink({ href, label, ariaLabel }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline"
      aria-label={ariaLabel}
    >
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}