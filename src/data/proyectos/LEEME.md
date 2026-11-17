# Cómo añadir un proyecto

Cada proyecto es **un JSON** + **una carpeta de imágenes**. No hay que tocar
código: la tarjeta del home, la página `/proyectos/<slug>/`, el SEO y el
sitemap se generan solos (`vite-plugin-proyectos.js`).

## 1. Imágenes → `public/imagenes/<slug>/`

`<slug>` es el nombre del proyecto en minúsculas y con guiones
(por ejemplo `trassos`). Se detectan por nombre y se leen sus medidas reales:

| Archivo (webp, png o jpg) | Dónde se usa | Obligatoria |
| ------------------------- | ------------ | ----------- |
| `captura-desktop` | Captura de la web en ordenador, tal como se ve al entrar (ideal 16:10, p. ej. 1440×900) | Sí* |
| `captura-mobile` | Captura de la web en móvil (ideal 390×844) | No |
| `captura-funcionamiento` | Opcional: otra captura para la sección "Experiencia de escritorio" (p. ej. la app por dentro) | No |
| `portada-mockup` | Mockup ya hecho para tarjeta, cabecera y redes | No* |
| `mockup-responsive` | Mockup ya hecho para la sección responsive | No |

\* Basta con `captura-desktop` o con `portada-mockup`.

**Con solo las capturas, los mockups se montan solos con CSS:** un monitor
(+ móvil si hay `captura-mobile`) en la cabecera y la tarjeta, y una tablet +
móvil en la sección responsive. Si subes mockups propios (`portada-mockup`,
`mockup-responsive`), se usan en su lugar.
Si la web tiene fondo no blanco, indica `"colorPantalla": "#f7f7f7"` en el JSON
para que los bordes de la captura no se noten.

Sin imagen de escritorio o sin móvil/responsive, esas secciones se omiten.
Si tus archivos se llaman distinto, indícalo en `imagenes` del JSON.

## 2. Datos → `src/data/proyectos/<slug>.json`

Obligatorios: `nombre`, `tipo`, `categoria`, `tarjeta`, `resumen`.
Todo lo demás es opcional (si falta, esa sección no aparece).
Mira `club-baldos.json` como ejemplo completo.

```json
{
  "orden": 4,
  "nombre": "Trassos",
  "tipo": "Web multipágina",
  "categoria": "Sector",
  "tarjeta": "Texto corto para la tarjeta del home.",
  "resumen": "Frase de la cabecera de la página del proyecto.",
  "url": "https://trassos.es/",
  "botonVisitar": "Visitar la web",
  "detalles": [{ "etiqueta": "Servicio", "valor": "Diseño y desarrollo web" }],
  "proyecto": { "titulo": "…", "parrafos": ["…", "…"] },
  "objetivo": { "titulo": "…", "parrafos": ["…", "…"] },
  "solucion": { "titulo": "…", "pasos": [{ "titulo": "…", "texto": "…" }] },
  "escritorio": { "eyebrow": "Experiencia de escritorio", "titulo": "…" },
  "responsive": { "titulo": "…", "texto": "…", "grupoDispositivos": true },
  "resultado": { "titulo": "…", "parrafos": ["…", "…"] },
  "cta": { "titulo": "…", "texto": "…" },
  "seo": { "titulo": "…", "descripcion": "…", "descripcionSocial": "…" },
  "imagenes": {
    "alt": { "portada": "…", "tarjeta": "…", "escritorio": "…", "responsive": "…" }
  }
}
```

- `orden`: posición en el home (menor = antes).
- `grupoDispositivos`: `true` si la imagen responsive muestra varios
  dispositivos juntos; `false` si es una sola tablet.

## 3. Comprobar

`npm run dev` y abre `/proyectos/<slug>/`. En `npm run build` se generan la
página y el sitemap. Los errores (JSON mal formado, falta la portada…) salen
en la terminal con el nombre del archivo.
