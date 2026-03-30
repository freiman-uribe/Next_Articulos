import Link from "next/link";

export default function ArticleNotFound() {
  return (
    <section className="py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-foreground">
        Articulo no encontrado
      </h1>
      <p className="mb-6 text-muted-foreground">
        El articulo que buscas no existe o ha sido eliminado.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
        style={{
          backgroundColor: "var(--primary)",
          color: "var(--primary-foreground)",
        }}
      >
        Volver al inicio
      </Link>
    </section>
  );
}