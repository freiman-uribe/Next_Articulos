export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-auto" role="contentinfo">
      <div className="mx-auto max-w-[1040px] px-8 py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Next Articulos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}