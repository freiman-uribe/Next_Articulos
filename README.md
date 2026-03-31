# Next Articulos

Next Articulos es una aplicacion editorial construida con Next.js 16, React 19 y TypeScript. El proyecto esta enfocado en publicar articulos tecnicos con una experiencia de lectura clara, una arquitectura modular por features y una base SEO preparada para crecer de forma incremental.

## Resumen

Actualmente el software ya cubre el flujo principal de un sitio editorial:

- portada con listado paginado
- busqueda interna de articulos
- detalle individual por slug
- metadata dinamica
- datos estructurados JSON-LD
- sanitizacion de contenido HTML

El proyecto fue estructurado para seguir agregando bloques pequenos de funcionalidad sin romper la base existente.

## Funcionalidades implementadas

### Portada editorial

- listado paginado de articulos
- metadata dinamica para paginas de listado
- JSON-LD tipo WebSite e ItemList
- integracion con layout global del sitio

### Busqueda interna

- buscador en portada con debounce
- endpoint interno en app/api/search/route.ts
- filtrado por titulo y descripcion
- paginacion de resultados dentro del mismo flujo del home

### Detalle de articulo

- ruta dinamica en /articulos/[slug]
- generateMetadata por articulo
- JSON-LD tipo Article cuando existe URL publica configurada
- pagina especifica de not found para slugs invalidos
- sanitizacion del contenido HTML con sanitize-html

### Layout y experiencia base

- header compartido
- footer compartido
- tipografia PT Serif
- estilos globales para look editorial
- sistema de colores y tokens CSS con Tailwind v4

## Datos del proyecto

- 18 articulos cargados localmente en data/articles.ts
- 5 articulos por pagina
- modelo Article tipado con id, title, slug, description y content

## Stack tecnico

### Framework principal

- Next.js 16.2.1
- React 19.2.4
- React DOM 19.2.4

### Lenguaje y estilos

- TypeScript
- Tailwind CSS v4
- CSS variables para tema visual

### Dependencias relevantes

- lucide-react
- sanitize-html

### Tooling

- ESLint

## Arquitectura

El proyecto esta organizado por features para separar responsabilidades y permitir evolucionar el dominio editorial sin mezclar rutas, datos y presentacion.

```text
next_articulos/
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.ts
│   ├── articulos/
│   │   └── [slug]/
│   │       ├── not-found.tsx
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── data/
│   └── articles.ts
├── features/
│   ├── articles/
│   │   ├── molecules/
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── Pagination.tsx
│   │   │   └── index.ts
│   │   ├── organisms/
│   │   │   ├── ArticleDetail.tsx
│   │   │   ├── ArticleList.tsx
│   │   │   ├── ArticleSearch.tsx
│   │   │   └── index.ts
│   │   ├── templates/
│   │   │   ├── ArticleDetailTemplate.tsx
│   │   │   ├── ArticleListTemplate.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── layout/
│   │   ├── organisms/
│   │   │   ├── SiteFooter.tsx
│   │   │   └── SiteHeader.tsx
│   │   └── index.ts
│   └── shared/
│       ├── atoms/
│       │   ├── Heading.tsx
│       │   ├── JsonLd.tsx
│       │   └── index.ts
│       ├── hooks/
│       │   └── useDebounce.ts
│       ├── molecules/
│       │   ├── BackLink.tsx
│       │   └── index.ts
│       └── index.ts
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── types/
│   └── article.ts
├── .env.example
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Capas principales

- app: rutas, metadata y entry points del framework
- data: dataset y utilidades de acceso a articulos
- types: contratos del dominio editorial
- features/layout: estructura global del sitio
- features/shared: piezas reutilizables entre features
- features/articles: UI y composicion del dominio de articulos

## Renderizado

### Home

- Server Component
- paginacion basada en searchParams
- metadata dinamica para paginas mayores a 1

### Detalle de articulo

- Server Component
- renderizado en servidor por request
- metadata dinamica por slug

### Busqueda

- comportamiento cliente acotado a un organismo especifico
- base de pagina mantenida en servidor

## SEO actual

El proyecto ya incluye una base SEO funcional:

- title y description dinamicos en listado y detalle
- Open Graph basico en detalle
- canonical relativa para paginacion
- JSON-LD en portada y detalle
- soporte para URLs absolutas opcionales cuando exista dominio real

## Clonado del repositorio

```bash
git clone https://github.com/freiman-uribe/Next_Articulos.git
cd Next_Articulos
```

Si el proyecto se encuentra dentro de un workspace mayor, entra directamente a la carpeta del proyecto antes de instalar dependencias o ejecutar scripts.

## Instalacion

```bash
npm install
```

## Configuracion

La configuracion local del proyecto se realiza principalmente mediante variables de entorno.

### Variable opcional

`NEXT_PUBLIC_SITE_URL` define la URL publica base del sitio.

Se usa para:

- generar metadata SEO absoluta (canonical)
- generar URLs absolutas en el JSON-LD de la portada
- generar URLs absolutas en el JSON-LD del detalle

Si aun no existe dominio real, puede dejarse sin definir y la aplicacion seguira funcionando con normalidad.

### Archivo local de entorno

Si deseas definir una URL publica base para metadata SEO absoluta y JSON-LD, crea tu archivo local de entorno a partir del ejemplo:

```bash
cp .env.example .env.local
```

Luego ajusta el valor segun tu entorno:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

Si aun no tienes dominio real, puedes dejar esta variable sin definir.

Consulta tambien `.env.example` para la plantilla base.

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Desarrollo local

Para correr el proyecto en modo desarrollo:

```bash
npm run dev
```

La aplicacion queda disponible en http://localhost:3000.

## Build de produccion

Para generar una build optimizada:

```bash
npm run build
```

Para levantar la aplicacion en modo produccion despues de compilar:

```bash
npm run start
```

## Calidad y validacion

Durante el desarrollo se viene validando de forma recurrente:

- lint
- build de produccion
- navegacion entre home y detalle
- slugs invalidos

## Decisiones tecnicas

### App Router

Se eligio App Router por su integracion nativa con metadata dinamica, rutas modernas y Server Components.

### TypeScript estricto

El proyecto usa tipado estricto para reducir errores y hacer mas seguros los cambios entre datos, componentes y rutas.

### Sanitizacion de contenido

El contenido HTML de los articulos se sanea antes de renderizarse para evitar salidas inseguras y mantener control sobre las etiquetas permitidas.

### Arquitectura por features

La organizacion por features facilita el crecimiento del proyecto y mantiene separadas las responsabilidades del dominio editorial.

## Estrategia de cambios

El desarrollo se esta organizando en commits pequenos, enfocados y faciles de revisar, siguiendo un flujo basado en develop y ramas feature.
