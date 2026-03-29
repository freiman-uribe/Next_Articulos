import { Article } from "@/types/article";

const articles: Article[] = [
  {
    id: 1,
    title: "Guía completa de SEO en Next.js: Posiciona tu sitio en Google",
    slug: "guia-completa-seo-en-nextjs",
    description:
      "Aprende cómo optimizar tu aplicación Next.js para motores de búsqueda. Desde metadata dinámica hasta Server-Side Rendering, descubre las mejores prácticas de SEO.",
    content: `
<h2>¿Por qué Next.js es ideal para SEO?</h2>
<p>Next.js es uno de los frameworks más potentes para construir aplicaciones web optimizadas para motores de búsqueda. Su capacidad de renderizado en el servidor (SSR) permite que los crawlers de Google indexen el contenido de forma inmediata, sin depender de JavaScript del lado del cliente.</p>
<p>A diferencia de las aplicaciones SPA tradicionales construidas con React, donde el contenido se genera en el navegador, Next.js entrega HTML completamente renderizado desde el servidor. Esto significa que Googlebot puede leer y entender tu contenido desde el primer momento.</p>

<h2>Server-Side Rendering vs Static Generation</h2>
<p>Next.js ofrece dos estrategias principales de renderizado: SSR (Server-Side Rendering) y SSG (Static Site Generation). Para contenido que cambia frecuentemente, SSR es la opción ideal ya que genera el HTML en cada petición. Para contenido estático como artículos de blog, SSG pre-genera las páginas en tiempo de build, ofreciendo tiempos de carga ultrarrápidos.</p>
<p>La combinación de ambas estrategias, conocida como ISR (Incremental Static Regeneration), permite regenerar páginas estáticas bajo demanda sin necesidad de un build completo.</p>

<h2>Metadata dinámica con generateMetadata</h2>
<p>El App Router de Next.js introduce la función <code>generateMetadata</code>, que permite definir títulos, descripciones y etiquetas Open Graph de forma dinámica para cada página. Esto es crucial para SEO, ya que cada página debe tener metadata única y relevante para su contenido.</p>
<p>Una buena práctica es incluir la palabra clave principal en el título, mantener la meta description entre 150-160 caracteres, y configurar las etiquetas Open Graph para mejorar la apariencia del enlace cuando se comparte en redes sociales.</p>

<h2>Core Web Vitals y rendimiento</h2>
<p>Google utiliza los Core Web Vitals como factor de ranking. Next.js ayuda a optimizar estas métricas con herramientas como el componente Image para carga optimizada de imágenes, la carga automática de fuentes con next/font, y el code splitting automático que reduce el tamaño del bundle inicial.</p>
    `,
  },
  {
    id: 2,
    title: "Cómo implementar datos estructurados JSON-LD en tu sitio web",
    slug: "datos-estructurados-json-ld",
    description:
      "Los datos estructurados JSON-LD ayudan a Google a entender tu contenido y mostrar rich snippets. Aprende a implementarlos correctamente en tu sitio web.",
    content: `
<h2>¿Qué son los datos estructurados?</h2>
<p>Los datos estructurados son un formato estandarizado para proporcionar información sobre una página y clasificar su contenido. Google utiliza esta información para generar resultados enriquecidos (rich snippets) que destacan en las páginas de resultados de búsqueda (SERPs).</p>
<p>El formato más recomendado por Google es JSON-LD (JavaScript Object Notation for Linked Data), ya que se implementa como un bloque de script independiente del HTML visible, lo que facilita su mantenimiento.</p>

<h2>Tipos de datos estructurados más comunes</h2>
<p>Existen numerosos tipos de esquemas disponibles en Schema.org. Los más utilizados incluyen Article para artículos y blogs, Product para páginas de productos, FAQ para preguntas frecuentes, BreadcrumbList para migas de pan, y Organization para información de la empresa.</p>
<p>Cada tipo de esquema tiene propiedades obligatorias y opcionales. Cuantas más propiedades relevantes incluyas, mejor podrá Google interpretar y mostrar tu contenido.</p>

<h2>Implementación en Next.js</h2>
<p>En Next.js, la forma más limpia de implementar JSON-LD es inyectando un tag script con type "application/ld+json" dentro del componente de la página. Al ser un Server Component, el JSON-LD se incluye directamente en el HTML renderizado, lo que garantiza que Google pueda leerlo sin ejecutar JavaScript.</p>
<p>Es importante validar tus datos estructurados con la herramienta de prueba de resultados enriquecidos de Google antes de publicar. Errores en el esquema pueden impedir que Google genere los rich snippets esperados.</p>

<h2>Beneficios medibles</h2>
<p>Sitios con datos estructurados correctamente implementados pueden ver un aumento significativo en el CTR (Click-Through Rate) desde las SERPs. Los rich snippets ocupan más espacio visual y proporcionan información adicional que atrae la atención del usuario.</p>
    `,
  },
  {
    id: 3,
    title: "Optimización de imágenes web: Guía para mejorar el rendimiento",
    slug: "optimizacion-imagenes-web",
    description:
      "Las imágenes son el recurso más pesado en la mayoría de sitios web. Aprende técnicas de optimización para mejorar la velocidad de carga y los Core Web Vitals.",
    content: `
<h2>El impacto de las imágenes en el rendimiento</h2>
<p>Las imágenes representan en promedio el 50% del peso total de una página web. Una mala gestión de imágenes puede degradar significativamente los Core Web Vitals, especialmente el LCP (Largest Contentful Paint), que mide cuánto tarda en renderizarse el elemento visual más grande de la página.</p>
<p>Optimizar las imágenes no solo mejora la velocidad de carga, sino que también reduce el consumo de datos móviles y mejora la experiencia del usuario en conexiones lentas.</p>

<h2>Formatos modernos: WebP y AVIF</h2>
<p>Los formatos de imagen modernos como WebP y AVIF ofrecen una compresión muy superior a JPEG y PNG. WebP puede reducir el tamaño de archivo entre un 25-35% comparado con JPEG con calidad equivalente, mientras que AVIF ofrece reducciones aún mayores, del 50% o más.</p>
<p>Next.js convierte automáticamente las imágenes a formatos modernos cuando se utiliza el componente Image, sirviendo WebP o AVIF según el soporte del navegador del usuario.</p>

<h2>Lazy loading y responsive images</h2>
<p>El lazy loading (carga diferida) asegura que las imágenes fuera del viewport inicial no se descarguen hasta que el usuario se desplace hacia ellas. Esto reduce drásticamente el tiempo de carga inicial. El componente Image de Next.js implementa lazy loading por defecto.</p>
<p>Las imágenes responsive mediante el atributo srcset permiten servir diferentes tamaños de imagen según el dispositivo. Esto evita enviar imágenes de escritorio a dispositivos móviles, ahorrando ancho de banda y mejorando la experiencia.</p>

<h2>El componente next/image</h2>
<p>El componente Image de Next.js automatiza la mayoría de estas optimizaciones. Genera automáticamente múltiples tamaños, convierte a formatos modernos, implementa lazy loading, y reserva el espacio de la imagen para evitar layout shifts (CLS). Es la herramienta más completa para gestionar imágenes en un proyecto Next.js.</p>
    `,
  },
  {
    id: 4,
    title: "HTML semántico: La base del SEO técnico moderno",
    slug: "html-semantico-seo-tecnico",
    description:
      "El HTML semántico mejora la accesibilidad y el SEO de tu sitio. Descubre cómo usar correctamente las etiquetas semánticas para estructurar tu contenido.",
    content: `
<h2>¿Qué es el HTML semántico?</h2>
<p>El HTML semántico consiste en utilizar las etiquetas HTML según su significado, no solo su apariencia visual. En lugar de usar divs genéricos para todo, se emplean etiquetas como article, section, nav, header, footer, main, aside y figure que comunican la estructura y el propósito del contenido.</p>
<p>Los motores de búsqueda y las tecnologías de asistencia (lectores de pantalla) dependen de esta semántica para entender y navegar correctamente por el contenido de una página.</p>

<h2>Jerarquía de encabezados</h2>
<p>La jerarquía de encabezados (h1 a h6) es uno de los aspectos más importantes del SEO on-page. Cada página debe tener exactamente un h1 que describa el tema principal. Los h2 dividen el contenido en secciones principales, y los h3 en subsecciones dentro de cada h2.</p>
<p>Google utiliza los encabezados para comprender la estructura temática de una página. Una jerarquía clara y bien organizada ayuda al crawler a identificar los topics principales y secundarios del contenido.</p>

<h2>Etiquetas semánticas esenciales</h2>
<p>La etiqueta main envuelve el contenido principal de la página (uno por documento). La etiqueta article define un contenido independiente y autónomo (como un post de blog). La etiqueta nav contiene enlaces de navegación. Las etiquetas header y footer definen el encabezado y pie de la página o sección.</p>
<p>La etiqueta section agrupa contenido temáticamente relacionado, mientras que aside marca contenido complementario. La etiqueta figure junto con figcaption proporciona contexto semántico a imágenes, diagramas y otros medios.</p>

<h2>Accesibilidad y SEO: dos caras de la misma moneda</h2>
<p>Un sitio bien estructurado semánticamente es inherentemente más accesible. Los lectores de pantalla pueden navegar por encabezados, landmarks y regiones semánticas. Al mismo tiempo, esta estructura clara permite a los motores de búsqueda indexar y clasificar el contenido de manera más precisa.</p>
    `,
  },
  {
    id: 5,
    title: "Core Web Vitals: Métricas clave para el posicionamiento en Google",
    slug: "core-web-vitals-metricas-google",
    description:
      "Google usa los Core Web Vitals como factor de ranking. Conoce qué son LCP, INP y CLS, y cómo optimizarlos para mejorar tu posicionamiento.",
    content: `
<h2>¿Qué son los Core Web Vitals?</h2>
<p>Los Core Web Vitals son un conjunto de métricas de rendimiento que Google considera esenciales para la experiencia del usuario. Desde 2021, estas métricas forman parte del algoritmo de ranking de Google, lo que significa que un sitio con buenos scores tiene una ventaja sobre competidores con métricas pobres.</p>
<p>Las tres métricas principales son LCP (Largest Contentful Paint), INP (Interaction to Next Paint) y CLS (Cumulative Layout Shift). Cada una mide un aspecto diferente de la experiencia del usuario.</p>

<h2>LCP: Largest Contentful Paint</h2>
<p>El LCP mide el tiempo que tarda en renderizarse el elemento visual más grande visible en el viewport. El objetivo es que sea menor a 2.5 segundos. Los principales factores que afectan el LCP son: tiempos de respuesta del servidor lentos, CSS y JavaScript que bloquean el renderizado, tiempos de carga de recursos lentos, y renderizado del lado del cliente.</p>
<p>Para optimizar el LCP en Next.js, se recomienda usar SSR o SSG para que el HTML llegue pre-renderizado, optimizar imágenes con el componente Image, utilizar next/font para cargar fuentes sin bloqueo, y minimizar el JavaScript del cliente.</p>

<h2>INP: Interaction to Next Paint</h2>
<p>El INP reemplazó al FID (First Input Delay) como métrica de interactividad. Mide la latencia de todas las interacciones del usuario durante la vida de la página, reportando la peor interacción. El objetivo es mantener el INP por debajo de 200 milisegundos.</p>
<p>Para mejorar el INP, es fundamental reducir el JavaScript ejecutado en el hilo principal, dividir tareas largas en fragmentos más pequeños, y utilizar Server Components en Next.js para minimizar el JavaScript enviado al navegador.</p>

<h2>CLS: Cumulative Layout Shift</h2>
<p>El CLS mide los cambios inesperados de layout durante la carga de la página. Ocurre cuando elementos visibles cambian de posición sin que el usuario lo espere, como cuando una imagen se carga y empuja el texto hacia abajo. El objetivo es un CLS menor a 0.1.</p>
<p>Next.js ayuda a prevenir CLS al reservar automáticamente espacio para las imágenes cuando se usa el componente Image con dimensiones explícitas, y al precargar fuentes con next/font para evitar flash of unstyled text (FOUT).</p>
    `,
  },
  {
    id: 6,
    title: "Estrategias de rendering en Next.js: SSR, SSG, ISR y CSR",
    slug: "estrategias-rendering-nextjs",
    description:
      "Next.js ofrece múltiples estrategias de rendering. Comprende cuándo usar SSR, SSG, ISR o CSR según las necesidades de tu proyecto y su impacto en SEO.",
    content: `
<h2>Las cuatro estrategias de rendering</h2>
<p>Next.js se destaca por ofrecer flexibilidad en la forma de renderizar contenido. Cada estrategia tiene ventajas e inconvenientes dependiendo del caso de uso. Elegir la correcta puede marcar la diferencia entre un sitio rápido y bien posicionado, y uno lento que lucha por indexarse.</p>
<p>Las cuatro estrategias principales son: Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR) y Client-Side Rendering (CSR).</p>

<h2>SSR: Server-Side Rendering</h2>
<p>Con SSR, el HTML se genera en el servidor en cada petición. Es ideal para contenido que cambia frecuentemente o que depende de datos del usuario. La ventaja para SEO es que el contenido siempre está actualizado y completamente renderizado cuando llega al crawler.</p>
<p>En Next.js App Router, todas las páginas son Server Components por defecto, lo que significa que el renderizado ocurre en el servidor. Para forzar el renderizado dinámico en cada petición, se pueden usar funciones como headers() o cookies(), o configurar el segmento como dinámico.</p>

<h2>SSG: Static Site Generation</h2>
<p>SSG genera el HTML en tiempo de build. Las páginas resultantes se sirven como archivos estáticos, ofreciendo los mejores tiempos de respuesta posibles. Es ideal para contenido que no cambia frecuentemente, como artículos de blog, páginas de documentación o landing pages.</p>
<p>En Next.js, se usa generateStaticParams junto con rutas dinámicas para pre-generar todas las variantes de una página. El resultado es un sitio estático ultra-rápido que cualquier CDN puede servir de manera eficiente.</p>

<h2>ISR: Incremental Static Regeneration</h2>
<p>ISR combina lo mejor de SSG y SSR. Las páginas se generan estáticamente en el build, pero pueden regenerarse bajo demanda o después de un intervalo de tiempo. Esto permite tener la velocidad del SSG con la frescura del SSR.</p>
<p>En el App Router, ISR se implementa mediante la directiva revalidate. Por ejemplo, establecer un tiempo de revalidación de 3600 segundos hará que la página se regenere como máximo una vez por hora.</p>

<h2>CSR: Client-Side Rendering</h2>
<p>CSR renderiza el contenido en el navegador del usuario mediante JavaScript. Aunque es útil para interfaces interactivas y dashboards, es la peor opción para SEO ya que los crawlers deben ejecutar JavaScript para ver el contenido. Google puede renderizar JavaScript, pero el proceso es más lento y menos confiable.</p>
<p>En Next.js, se debe reservar el CSR solo para componentes interactivos específicos usando la directiva "use client", manteniendo la base de la página como Server Component para garantizar la indexabilidad.</p>
    `,
  },
  {
    id: 7,
    title: "Guía de accesibilidad web: WCAG 2.1 para desarrolladores",
    slug: "guia-accesibilidad-web-wcag",
    description:
      "La accesibilidad web no es opcional. Aprende los principios WCAG 2.1 y cómo implementarlos en tus proyectos para crear experiencias inclusivas.",
    content: `
<h2>¿Por qué importa la accesibilidad web?</h2>
<p>La accesibilidad web (a11y) garantiza que todas las personas, independientemente de sus capacidades, puedan acceder y utilizar un sitio web. Según la OMS, más de mil millones de personas en el mundo viven con alguna forma de discapacidad, lo que representa aproximadamente el 15% de la población mundial.</p>
<p>Más allá del imperativo ético, la accesibilidad tiene beneficios directos para el SEO. Google valora positivamente los sitios accesibles porque comparten muchas prácticas con un buen SEO técnico: HTML semántico, texto alternativo en imágenes, estructura clara de encabezados y navegación coherente.</p>

<h2>Los cuatro principios WCAG</h2>
<p>Las pautas WCAG 2.1 se organizan en cuatro principios fundamentales: Perceptible (el contenido debe poder ser percibido por todos los usuarios), Operable (la interfaz debe poder ser operada por cualquier persona), Comprensible (la información y la interfaz deben ser comprensibles) y Robusto (el contenido debe poder ser interpretado por una amplia variedad de agentes de usuario).</p>
<p>Cada principio contiene directrices específicas con criterios de conformidad en tres niveles: A (mínimo), AA (recomendado) y AAA (óptimo). La mayoría de regulaciones exigen el nivel AA como estándar mínimo.</p>

<h2>Prácticas esenciales para desarrolladores</h2>
<p>Las prácticas más impactantes incluyen: usar HTML semántico en lugar de divs genéricos, proporcionar texto alternativo descriptivo en todas las imágenes, asegurar suficiente contraste de color (ratio mínimo 4.5:1 para texto normal), implementar navegación por teclado completa, y usar atributos ARIA solo cuando el HTML semántico no es suficiente.</p>
<p>También es crucial asegurar que los formularios tengan labels asociados correctamente, que los mensajes de error sean descriptivos, y que el foco sea visible y siga un orden lógico en la página.</p>

<h2>Herramientas de testing</h2>
<p>Existen múltiples herramientas para testear la accesibilidad: Lighthouse en Chrome DevTools ofrece auditorías automáticas, axe DevTools detecta violaciones WCAG, y NVDA o VoiceOver permiten probar la experiencia con lectores de pantalla. La combinación de testing automático y manual es la estrategia más efectiva.</p>
    `,
  },
  {
    id: 8,
    title: "TypeScript en proyectos React: Beneficios y mejores prácticas",
    slug: "typescript-react-mejores-practicas",
    description:
      "TypeScript mejora la calidad y mantenibilidad del código React. Conoce sus beneficios, patrones comunes y mejores prácticas para proyectos profesionales.",
    content: `
<h2>¿Por qué usar TypeScript con React?</h2>
<p>TypeScript añade tipado estático a JavaScript, lo que permite detectar errores en tiempo de compilación en lugar de en tiempo de ejecución. En proyectos React, esto se traduce en componentes más predecibles, props correctamente validadas, y un autocompletado mucho más potente en el editor.</p>
<p>Los equipos que adoptan TypeScript reportan una reducción significativa de bugs en producción, mejor documentación implícita del código, y refactorizaciones más seguras. Para proyectos que escalan, TypeScript es prácticamente indispensable.</p>

<h2>Tipado de componentes y props</h2>
<p>La forma más común de tipar componentes en React es mediante interfaces para las props. Definir explícitamente qué props acepta un componente, qué tipos tienen y cuáles son opcionales mejora drásticamente la legibilidad y reduce errores de integración entre componentes.</p>
<p>Para componentes con children, React provee tipos como ReactNode y PropsWithChildren. Para eventos, existen tipos específicos como MouseEvent, ChangeEvent y FormEvent que proporcionan acceso tipado a las propiedades del evento.</p>

<h2>Patrones avanzados</h2>
<p>Los genéricos permiten crear componentes reutilizables con tipos flexibles. Los discriminated unions son ideales para modelar estados complejos (cargando, éxito, error). Los tipos de utilidad como Partial, Pick, Omit y Record simplifican la manipulación de tipos existentes.</p>
<p>Para hooks personalizados, definir los tipos de retorno explícitamente mejora la experiencia del consumidor. El patrón as const es útil para arrays de configuración que deben mantener sus tipos literales.</p>

<h2>Integración con Next.js</h2>
<p>Next.js tiene soporte nativo para TypeScript. Los tipos de las funciones del framework como generateMetadata, generateStaticParams y los layouts están completamente tipados. Esto facilita descubrir las opciones disponibles y prevenir errores de configuración sin consultar la documentación.</p>
    `,
  },
  {
    id: 9,
    title: "Tailwind CSS: Diseño eficiente con utility-first CSS",
    slug: "tailwind-css-utility-first",
    description:
      "Tailwind CSS revoluciona la forma de escribir estilos. Descubre cómo su enfoque utility-first acelera el desarrollo y produce CSS optimizado.",
    content: `
<h2>El paradigma utility-first</h2>
<p>Tailwind CSS propone un enfoque radicalmente diferente al CSS tradicional. En lugar de escribir clases semánticas como .card o .button y definir sus estilos en archivos separados, Tailwind provee clases utilitarias atómicas que se componen directamente en el HTML: flex, p-4, text-lg, bg-blue-500.</p>
<p>Este enfoque elimina la necesidad de inventar nombres de clases, reduce el CSS muerto, y facilita el prototipado rápido. Aunque inicialmente puede parecer verboso, en la práctica acelera significativamente el desarrollo.</p>

<h2>Optimización de producción</h2>
<p>Tailwind CSS v4 analiza automáticamente los archivos del proyecto y genera solo las clases CSS que se utilizan. El resultado es un archivo CSS final extremadamente pequeño, típicamente menor a 10KB comprimido, independientemente de cuántas utilidades estén disponibles.</p>
<p>Esta optimización automática es crucial para el rendimiento web. Un CSS más pequeño significa menos bytes descargados, menos tiempo de parsing, y un Time to First Paint más rápido, todos factores que impactan los Core Web Vitals.</p>

<h2>Diseño responsive y dark mode</h2>
<p>Tailwind hace trivial el diseño responsive con prefijos como sm:, md:, lg: que aplican estilos condicionalmente según el ancho del viewport. El dark mode se implementa con el prefijo dark:. Ambos sistemas se componen naturalmente: dark:sm:text-gray-300 aplica un color solo en pantallas pequeñas y modo oscuro.</p>
<p>Esta composición de variantes elimina la necesidad de media queries manuales y simplifica enormemente el mantenimiento de estilos responsive.</p>

<h2>Componentes y reutilización</h2>
<p>La reutilización en Tailwind se logra principalmente mediante componentes de React, no mediante clases CSS compartidas. Cada componente encapsula su markup con sus clases utilitarias. Para casos donde se necesitan estilos compartidos que no ameritan un componente, las directivas @apply permiten extraer patrones comunes a clases CSS tradicionales.</p>
    `,
  },
  {
    id: 10,
    title: "Rendimiento web: Técnicas avanzadas de optimización frontend",
    slug: "rendimiento-web-optimizacion-frontend",
    description:
      "El rendimiento web impacta directamente en la conversión y el SEO. Aprende técnicas avanzadas para optimizar tu sitio y ofrecer la mejor experiencia.",
    content: `
<h2>El costo de un sitio lento</h2>
<p>Cada segundo adicional de carga puede reducir las conversiones hasta un 7%. Google ha confirmado que la velocidad es un factor de ranking, y los usuarios modernos esperan que una página cargue en menos de 3 segundos. Un sitio lento no solo pierde visitantes, sino también posiciones en los resultados de búsqueda.</p>
<p>La optimización del rendimiento no es un lujo, es una necesidad competitiva. Los sitios más rápidos tienen mejor engagement, menor bounce rate, y mayor tiempo de permanencia, todas señales que Google interpreta positivamente.</p>

<h2>Estrategias de carga</h2>
<p>El code splitting divide el JavaScript en chunks más pequeños que se cargan bajo demanda. En Next.js, esto ocurre automáticamente por ruta. El lazy loading de componentes con dynamic imports permite diferir la carga de módulos pesados hasta que sean necesarios.</p>
<p>El prefetching anticipa las necesidades del usuario precargando recursos de las páginas a las que probablemente navegará. Next.js implementa prefetching automático para los enlaces visibles en el viewport, lo que hace que la navegación se sienta instantánea.</p>

<h2>Optimización de recursos</h2>
<p>Las fuentes web pueden bloquear el renderizado si no se gestionan correctamente. next/font descarga y sirve las fuentes localmente con una estrategia display swap que evita el bloqueo. Las imágenes deben servirse en formatos modernos, con dimensiones correctas y lazy loading para las que están fuera del viewport inicial.</p>
<p>El CSS crítico (above-the-fold) debe estar inline en el HTML para evitar un round trip adicional. Los scripts de terceros deben cargarse con estrategia lazy o afterInteractive para no bloquear el contenido principal.</p>

<h2>Monitorización continua</h2>
<p>La optimización no es un evento único, es un proceso continuo. Herramientas como Lighthouse CI, Web Vitals y Google Search Console permiten monitorizar las métricas de rendimiento y detectar regresiones antes de que impacten a los usuarios. Establecer presupuestos de rendimiento ayuda a mantener la disciplina del equipo.</p>
    `,
  },
  {
    id: 11,
    title: "Server Components en React: El futuro del rendering",
    slug: "server-components-react",
    description:
      "Los Server Components de React cambian fundamentalmente cómo construimos aplicaciones. Entiende su modelo mental, ventajas y patrones de uso.",
    content: `
<h2>Un nuevo modelo de componentes</h2>
<p>Los React Server Components (RSC) introducen un nuevo paradigma donde los componentes pueden ejecutarse exclusivamente en el servidor. Esto significa que pueden acceder directamente a bases de datos, sistemas de archivos y servicios internos sin exponer lógica o credenciales al cliente.</p>
<p>A diferencia del SSR tradicional, que renderiza en el servidor pero envía todo el JavaScript al cliente para la hidratación, los Server Components eliminan completamente su JavaScript del bundle del cliente. Solo el HTML resultante y los datos serializados se envían al navegador.</p>

<h2>Server vs Client Components</h2>
<p>En el App Router de Next.js, todos los componentes son Server Components por defecto. Solo se convierten en Client Components cuando se añade la directiva "use client" al inicio del archivo. La regla general es: usa Server Components para todo lo que no requiera interactividad o APIs del navegador.</p>
<p>Los Server Components pueden importar Client Components, pero no al revés. Este flujo unidireccional crea una frontera clara entre la lógica del servidor y la del cliente, mejorando la seguridad y reduciendo el JavaScript enviado al navegador.</p>

<h2>Patrones de composición</h2>
<p>El patrón más potente es el "children as props": un Server Component envuelve un Client Component pasándole otros Server Components como children. Esto permite tener interactividad (el Client Component) sin sacrificar los beneficios de los Server Components para el contenido estático.</p>
<p>Otro patrón importante es mover el estado lo más abajo posible en el árbol de componentes. Esto minimiza la cantidad de código que necesita ser un Client Component, manteniendo la mayor parte del árbol como Server Components.</p>

<h2>Impacto en el rendimiento</h2>
<p>Los Server Components pueden reducir dramáticamente el tamaño del bundle JavaScript del cliente. Dependencias pesadas como formateadores de fechas, parsers de markdown o librerías de validación se ejecutan solo en el servidor y nunca se envían al navegador. Esto mejora directamente el TTI (Time to Interactive) y el INP.</p>
    `,
  },
  {
    id: 12,
    title: "URLs amigables y estructura de rutas para SEO",
    slug: "urls-amigables-estructura-rutas-seo",
    description:
      "Las URLs son un factor SEO importante. Descubre cómo diseñar estructuras de rutas limpias, semánticas y optimizadas para buscadores.",
    content: `
<h2>La importancia de las URLs en SEO</h2>
<p>Las URLs son uno de los primeros elementos que tanto usuarios como motores de búsqueda evalúan. Una URL descriptiva como /articulos/guia-seo-nextjs comunica inmediatamente el tema de la página, mientras que /page?id=123&cat=5 no aporta ninguna información útil.</p>
<p>Google ha confirmado que las palabras en la URL son un factor de ranking menor pero relevante. Más importante aún, las URLs descriptivas mejoran el CTR en los resultados de búsqueda porque los usuarios pueden evaluar la relevancia de la página antes de hacer clic.</p>

<h2>Principios de URLs amigables</h2>
<p>Una buena URL debe ser legible por humanos, descriptiva del contenido, corta pero informativa, y usar guiones para separar palabras. Debe evitar caracteres especiales, IDs numéricos, parámetros innecesarios y mayúsculas. El idioma de la URL debe coincidir con el del contenido.</p>
<p>La estructura de carpetas en la URL debe reflejar la jerarquía del sitio. Por ejemplo, /blog/categoria/titulo-articulo comunica claramente la relación entre las secciones del sitio.</p>

<h2>Implementación en Next.js</h2>
<p>Next.js con el App Router facilita la creación de URLs amigables mediante su sistema de rutas basado en carpetas. Cada carpeta en app/ se convierte en un segmento de URL. Las rutas dinámicas con [slug] permiten URLs semánticas basadas en el contenido en lugar de IDs.</p>
<p>La función generateStaticParams permite definir todos los slugs válidos en tiempo de build, asegurando que solo existan URLs para contenido real. Las URLs no definidas pueden retornar un 404 apropiado mediante dynamicParams: false.</p>

<h2>Redirecciones y canonicals</h2>
<p>Cuando se cambian URLs existentes, es crucial implementar redirecciones 301 para preservar el equity SEO acumulado. Next.js permite definir redirecciones en next.config.ts o mediante middleware. La etiqueta canonical en el head indica a Google cuál es la URL preferida cuando existen múltiples URLs para el mismo contenido.</p>
    `,
  },
  {
    id: 13,
    title: "Meta tags esenciales: Open Graph, Twitter Cards y más",
    slug: "meta-tags-open-graph-twitter-cards",
    description:
      "Los meta tags controlan cómo se muestra tu sitio en buscadores y redes sociales. Aprende a configurar Open Graph, Twitter Cards y otros meta tags clave.",
    content: `
<h2>Meta tags y su impacto</h2>
<p>Los meta tags son elementos HTML invisibles para el usuario pero cruciales para los motores de búsqueda y las redes sociales. El título y la meta description determinan cómo aparece tu página en los resultados de Google. Los tags Open Graph controlan la vista previa cuando alguien comparte tu URL en Facebook, LinkedIn o WhatsApp.</p>
<p>Una configuración correcta de meta tags puede aumentar significativamente el CTR desde las SERPs y generar más engagement cuando el contenido se comparte en redes sociales. Es una optimización con alto retorno de inversión.</p>

<h2>Open Graph Protocol</h2>
<p>Open Graph es un protocolo creado por Facebook que permite controlar el título, descripción, imagen y tipo de contenido que se muestra al compartir una URL. Las propiedades fundamentales son og:title, og:description, og:image y og:type. La imagen debe tener al menos 1200x630 píxeles para mostrarse correctamente en todas las plataformas.</p>
<p>Para artículos, el tipo og:type debe ser "article" e incluir propiedades adicionales como article:published_time, article:author y article:section que proporcionan contexto adicional a las plataformas sociales.</p>

<h2>Twitter Cards</h2>
<p>Twitter (ahora X) tiene su propio sistema de meta tags. El tag twitter:card define el tipo de tarjeta: summary para una vista compacta o summary_large_image para una tarjeta con imagen prominente. Si no se definen tags de Twitter, la plataforma utiliza los tags Open Graph como fallback.</p>
<p>Next.js con generateMetadata genera ambos sets de tags automáticamente cuando se configura la metadata de openGraph y twitter en el objeto de retorno.</p>

<h2>Otros meta tags importantes</h2>
<p>El tag robots controla si una página debe indexarse y si los enlaces deben seguirse. El tag viewport es esencial para el diseño responsive. El tag canonical previene problemas de contenido duplicado. El tag hreflang indica variantes lingüísticas de la página para sitios multiidioma.</p>
    `,
  },
  {
    id: 14,
    title: "Testing en aplicaciones Next.js: Estrategias y herramientas",
    slug: "testing-aplicaciones-nextjs",
    description:
      "El testing es fundamental para mantener la calidad del código. Conoce las mejores estrategias y herramientas para testear aplicaciones Next.js.",
    content: `
<h2>¿Por qué testear?</h2>
<p>El testing automatizado es la red de seguridad que permite a los equipos iterar rápidamente con confianza. Sin tests, cada cambio es un riesgo potencial de introducir regresiones. Con una buena suite de tests, las refactorizaciones y nuevas features se pueden implementar con la certeza de que el comportamiento existente se mantiene.</p>
<p>En aplicaciones Next.js, el testing abarca desde unit tests de funciones y componentes individuales hasta tests de integración que verifican el comportamiento de páginas completas, incluyendo SSR y metadata.</p>

<h2>Unit testing con Vitest</h2>
<p>Vitest es la herramienta de testing recomendada para proyectos modernos con Vite o frameworks similares. Su API es compatible con Jest pero ofrece mejor rendimiento y soporte nativo para ESM. Para componentes React, se combina con React Testing Library que promueve tests basados en comportamiento del usuario en lugar de detalles de implementación.</p>
<p>Los tests de componentes deben verificar qué ve el usuario (texto renderizado, elementos visibles) y cómo responde a interacciones (clics, input), no la estructura interna del componente.</p>

<h2>Testing de Server Components</h2>
<p>Los Server Components presentan desafíos únicos para el testing. Al ser componentes async que se ejecutan solo en el servidor, requieren un enfoque diferente. Una estrategia efectiva es testear la lógica de datos separada de la presentación, y usar tests de integración para verificar el output HTML completo.</p>
<p>Las funciones como generateMetadata y generateStaticParams se pueden testear como funciones puras, verificando que retornan la metadata correcta para cada input.</p>

<h2>E2E testing con Playwright</h2>
<p>Los tests end-to-end con Playwright verifican el comportamiento del sitio completo en un navegador real. Son ideales para testear flujos críticos como la navegación entre páginas, la carga de imágenes, y la presencia de meta tags en el HTML renderizado. Playwright soporta múltiples navegadores y ofrece herramientas de debugging visual.</p>
    `,
  },
  {
    id: 15,
    title: "Internacionalización (i18n) en Next.js para SEO multiidioma",
    slug: "internacionalizacion-i18n-nextjs-seo",
    description:
      "Llega a audiencias globales con una estrategia i18n correcta. Aprende cómo implementar internacionalización en Next.js sin sacrificar el SEO.",
    content: `
<h2>SEO multiidioma: el desafío</h2>
<p>Expandir un sitio a múltiples idiomas multiplica su potencial de tráfico orgánico, pero también introduce complejidades técnicas significativas. Google necesita entender qué idioma tiene cada página, cuáles son las versiones alternativas en otros idiomas, y cuál es la URL canónica para cada variante.</p>
<p>Una implementación incorrecta de i18n puede resultar en contenido duplicado, confusión de idiomas en los resultados de búsqueda, o pérdida de equity SEO por fragmentación de señales.</p>

<h2>Estrategias de routing</h2>
<p>Existen tres estrategias principales para URLs multiidioma: subdirectorios (/es/articulos, /en/articles), subdominios (es.example.com, en.example.com) y dominios separados (example.es, example.com). Los subdirectorios son la opción más recomendada porque consolidan la autoridad del dominio y son más fáciles de gestionar.</p>
<p>En Next.js App Router, los subdirectorios se implementan mediante un segmento dinámico [locale] en la raíz: app/[locale]/page.tsx. Un middleware detecta el idioma preferido del usuario y redirige apropiadamente.</p>

<h2>Tags hreflang</h2>
<p>Los tags hreflang informan a Google sobre las versiones alternativas de una página en diferentes idiomas. Cada página debe incluir tags hreflang que apunten a todas sus variantes, incluyendo a sí misma. Un error común es olvidar el tag x-default para el idioma predeterminado.</p>
<p>En Next.js, los tags hreflang se pueden generar dinámicamente dentro de generateMetadata usando la propiedad alternates.languages.</p>

<h2>Contenido y traducción</h2>
<p>El contenido traducido debe ser una adaptación cultural, no una traducción literal. Las palabras clave relevantes varían entre idiomas y mercados. Es fundamental realizar keyword research específico para cada idioma objetivo y adaptar los meta tags y el contenido en consecuencia.</p>
    `,
  },
  {
    id: 16,
    title: "Arquitectura de componentes: Atomic Design en React",
    slug: "arquitectura-componentes-atomic-design-react",
    description:
      "Atomic Design organiza los componentes en niveles claros de complejidad. Aprende a implementar esta metodología en proyectos React para código escalable.",
    content: `
<h2>¿Qué es Atomic Design?</h2>
<p>Atomic Design es una metodología creada por Brad Frost que propone organizar los componentes de interfaz en cinco niveles de complejidad creciente: átomos, moléculas, organismos, templates y páginas. Esta jerarquía refleja cómo los elementos simples se combinan para formar interfaces completas.</p>
<p>En proyectos React, Atomic Design proporciona una estructura clara y predecible para organizar componentes. Facilita la reutilización, reduce la duplicación y hace que el codebase sea más fácil de navegar para equipos grandes.</p>

<h2>Los cinco niveles</h2>
<p>Los átomos son los componentes más básicos e indivisibles: botones, inputs, etiquetas, iconos. Las moléculas combinan átomos para formar unidades funcionales: un campo de búsqueda (input + botón), una tarjeta de autor (avatar + nombre). Los organismos son secciones complejas de UI: un header con navegación, una lista de tarjetas de producto.</p>
<p>Los templates definen la estructura de una página combinando organismos sin datos reales. Las páginas son instancias concretas de templates con datos específicos. En React con Next.js, las páginas corresponden directamente a los archivos en app/.</p>

<h2>Organización por features</h2>
<p>Una variante popular es combinar Atomic Design con organización por features. En lugar de una carpeta global components/atoms/, cada feature del negocio tiene su propia jerarquía atómica: features/articles/atoms/, features/auth/molecules/. Los componentes compartidos se ubican en features/shared/.</p>
<p>Este enfoque escala mejor en proyectos grandes porque cada feature es autocontenida y los cambios en una feature no afectan directamente a otras.</p>

<h2>Beneficios para el mantenimiento</h2>
<p>Un proyecto organizado con Atomic Design facilita las revisiones de código (PRs más pequeños y enfocados), acelera el onboarding de nuevos desarrolladores (estructura predecible), y simplifica el testing (cada nivel se testea de forma aislada). La inversión inicial en organización se recupera rápidamente en velocidad de desarrollo.</p>
    `,
  },
  {
    id: 17,
    title: "Seguridad frontend: Protege tu aplicación Next.js",
    slug: "seguridad-frontend-nextjs",
    description:
      "La seguridad no es solo responsabilidad del backend. Conoce las vulnerabilidades frontend más comunes y cómo proteger tu aplicación Next.js.",
    content: `
<h2>Amenazas comunes en el frontend</h2>
<p>Las aplicaciones frontend están expuestas a múltiples vectores de ataque. Los más comunes incluyen Cross-Site Scripting (XSS), donde un atacante inyecta scripts maliciosos en el contenido de la página, y Cross-Site Request Forgery (CSRF), donde se engaña al usuario para realizar acciones no deseadas en sitios donde está autenticado.</p>
<p>Otros riesgos incluyen la exposición de datos sensibles en el código del cliente, inyección de dependencias maliciosas a través de paquetes npm comprometidos, y ataques de clickjacking que superponen interfaces invisibles sobre elementos legítimos.</p>

<h2>Protección contra XSS</h2>
<p>React protege contra XSS por defecto al escapar automáticamente todo el contenido renderizado mediante JSX. Sin embargo, el uso de dangerouslySetInnerHTML, que permite insertar HTML sin escapar, reintroduce el riesgo. Si es necesario renderizar HTML externo, debe sanitizarse con librerías como DOMPurify.</p>
<p>Los Content Security Policy (CSP) headers proporcionan una capa adicional de protección al restringir qué scripts, estilos y recursos pueden cargarse en la página. Next.js permite configurar CSP headers en el middleware o en next.config.ts.</p>

<h2>Headers de seguridad</h2>
<p>Los headers HTTP de seguridad son la primera línea de defensa. X-Content-Type-Options previene el MIME sniffing, X-Frame-Options protege contra clickjacking, Strict-Transport-Security fuerza HTTPS, y Referrer-Policy controla qué información se envía en el header Referer.</p>
<p>Next.js permite configurar estos headers globalmente en next.config.ts mediante la propiedad headers. Google Lighthouse incluye auditorías de seguridad que verifican la presencia de estos headers.</p>

<h2>Gestión segura de secretos</h2>
<p>Las variables de entorno en Next.js se dividen en dos categorías: las que empiezan con NEXT_PUBLIC_ se exponen al cliente, y las demás solo están disponibles en el servidor. Es crucial nunca exponer API keys, tokens de acceso o credenciales de base de datos con el prefijo NEXT_PUBLIC_. Los Server Components facilitan esta separación al ejecutarse exclusivamente en el servidor.</p>
    `,
  },
  {
    id: 18,
    title: "Monorepos con Turborepo: Gestión de proyectos a escala",
    slug: "monorepos-turborepo-gestion-escala",
    description:
      "Los monorepos simplifican la gestión de múltiples proyectos relacionados. Descubre cómo Turborepo optimiza builds y mejora la productividad del equipo.",
    content: `
<h2>¿Qué es un monorepo?</h2>
<p>Un monorepo es un repositorio único que contiene múltiples proyectos o paquetes relacionados. En lugar de tener repositorios separados para el frontend, componentes compartidos, utilidades y configuraciones, todo vive en un mismo repositorio con una estructura organizada de workspaces.</p>
<p>Empresas como Google, Meta y Vercel utilizan monorepos para gestionar codebases masivas. Las ventajas incluyen: cambios atómicos que afectan múltiples paquetes, reutilización simplificada de código, configuración centralizada, y visibilidad completa del impacto de cada cambio.</p>

<h2>Turborepo: builds inteligentes</h2>
<p>Turborepo, creado por Vercel, es un sistema de build optimizado para monorepos JavaScript/TypeScript. Su característica principal es el caching inteligente: almacena los resultados de tareas (build, test, lint) y los reutiliza cuando los inputs no han cambiado. Esto puede reducir los tiempos de CI/CD en un 40-85%.</p>
<p>La paralelización automática de tareas es otra ventaja clave. Turborepo analiza las dependencias entre paquetes y ejecuta las tareas en el orden óptimo, maximizando el uso de los cores disponibles.</p>

<h2>Estructura de un monorepo Next.js</h2>
<p>Una estructura típica incluye: apps/ para las aplicaciones (web, docs, admin), packages/ para código compartido (UI components, utils, config), y archivos de configuración en la raíz (turbo.json, package.json). Los workspaces de npm o pnpm gestionan las dependencias entre paquetes.</p>
<p>Los paquetes compartidos se versionan internamente y se referencian directamente, eliminando la necesidad de publicar y consumir desde un registry. Los cambios en un componente compartido se reflejan instantáneamente en todas las aplicaciones que lo consumen.</p>

<h2>Cuándo adoptar un monorepo</h2>
<p>Un monorepo tiene sentido cuando hay múltiples proyectos que comparten código, el equipo necesita hacer cambios que afectan a varios proyectos simultáneamente, o se quiere estandarizar configuraciones (ESLint, TypeScript, testing) across projects. Para proyectos únicos y pequeños, la complejidad adicional no se justifica.</p>
    `,
  },
];

export const ARTICLES_PER_PAGE = 5;

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getPaginatedArticles(page: number): {
  articles: Article[];
  totalPages: number;
  currentPage: number;
  totalArticles: number;
} {
  const totalArticles = articles.length;
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const start = (currentPage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = articles.slice(start, start + ARTICLES_PER_PAGE);

  return {
    articles: paginatedArticles,
    totalPages,
    currentPage,
    totalArticles,
  };
}
