# Next Articulos

Proyecto editorial construido con Next.js y App Router, enfocado en ofrecer una base moderna para publicar contenido con una experiencia clara y cuidada.

## Estado actual

El proyecto ya cuenta con una base editorial funcional para seguir creciendo por etapas.

Incluye:

- layout y metadata base del proyecto
- listado de articulos en portada
- busqueda de articulos con API interna
- estilos globales minimos alineados a la identidad visual
- conservacion de la configuracion manual en next.config.ts

No incluye todavia:

- detalle completo de articulo
- rutas dinamicas para articulos
- sitemap y robots

## Variables de entorno

El proyecto puede usar la variable `NEXT_PUBLIC_SITE_URL` para definir la URL base publica del sitio.

Se usa para:

- generar metadata SEO absoluta como enlaces `prev` y `next`
- generar URLs absolutas en el JSON-LD de la portada

Si no tienes dominio todavia, puedes dejarla sin definir. En ese caso la app sigue funcionando, pero no publicara esas URLs absolutas.

Archivo de ejemplo:

```bash
cp .env.example .env.local
```

## Desarrollo

```bash
npm run dev
```

## Estrategia de commits

El desarrollo se organizara en commits pequenos para mantener una historia clara y cambios faciles de revisar.
