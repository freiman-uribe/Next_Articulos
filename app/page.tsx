export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-72px-73px)] w-full max-w-5xl items-center px-6 py-20 sm:px-10 lg:px-16">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Revista digital
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight font-bold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Historias, ideas y gui­as practicas para una web mejor pensada.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Next Articulos nace como una publicacion digital enfocada en contenido
            claro, util y bien presentado. Esta portada abre una experiencia editorial
            limpia, rapida y lista para crecer con nuevas secciones y articulos.
          </p>
        </div>

        <aside className="rounded-3xl border border-border bg-card p-6 shadow-[0_24px_60px_rgba(31,26,23,0.08)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            En esta edicion
          </p>
          <ul className="mt-5 space-y-3 text-base leading-7 text-foreground">
            <li>Articulos sobre producto, desarrollo web y experiencia digital.</li>
            <li>Una portada sobria con identidad editorial propia.</li>
            <li>Base visual pensada para escalar hacia nuevas colecciones.</li>
            <li>Rendimiento moderno con Next.js y App Router.</li>
          </ul>
        </aside>
      </section>
    </section>
  );
}
