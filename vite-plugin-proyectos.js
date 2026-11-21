// Plugin de Vite: sistema de proyectos basado en datos.
//
// Para añadir un proyecto basta con:
//   1. Crear  src/data/proyectos/<slug>.json   (ver LEEME.md de esa carpeta)
//   2. Soltar sus imágenes en  public/imagenes/<slug>/
//
// Este plugin se encarga del resto:
//   - detecta las imágenes por convención de nombres y lee su tamaño real
//   - genera la página  /proyectos/<slug>/  (con su <title>, meta y Open Graph)
//   - expone los datos a la web con el módulo virtual  "virtual:proyectos"
//     (las tarjetas del home y la plantilla de la página salen de ahí)
//   - añade las páginas al sitemap.xml en el build

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";

const SITE_URL = "https://alesbiliato.com";
const VIRTUAL_ID = "virtual:proyectos";
const RESOLVED_VIRTUAL_ID = "\0" + VIRTUAL_ID;
const EXTENSIONES = [".webp", ".png", ".jpg", ".jpeg"];

// Si el JSON no indica una imagen, se busca por estos nombres (en orden).
const CANDIDATAS = {
  portada: ["portada-mockup", "mockup-portada", "portada"],
  escritorio: ["captura-desktop", "portada-desktop", "captura-desktop-real"],
  movil: ["captura-mobile", "captura-movil"],
  tablet: ["captura-tablet"],
  seccionEscritorio: ["captura-funcionamiento"],
  responsive: [
    "mockup-responsive",
    "mockup-responsive-dispositivos",
    "mockup-responsive-dispositivos-real",
    "mockup-tablet-horizontal-real",
  ],
};

/* ---------- tamaño de imagen sin dependencias ---------- */

function leerTamano(ruta) {
  const buf = readFileSync(ruta);
  const ext = ruta.slice(ruta.lastIndexOf(".")).toLowerCase();

  if (ext === ".png" && buf.length > 24) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = buf[i + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }

  if (ext === ".webp" && buf.toString("ascii", 12, 16) === "VP8X") {
    return {
      width: 1 + buf.readUIntLE(24, 3),
      height: 1 + buf.readUIntLE(27, 3),
    };
  }

  return {};
}

/* ---------- lectura de proyectos ---------- */

function buscarImagen(carpeta, nombres) {
  for (const nombre of nombres) {
    // El nombre puede venir con extensión (explícito) o sin ella (candidatas)
    const conExt = EXTENSIONES.some((e) => nombre.toLowerCase().endsWith(e));
    const opciones = conExt ? [nombre] : EXTENSIONES.map((e) => nombre + e);
    for (const opcion of opciones) {
      if (existsSync(join(carpeta, opcion))) return opcion;
    }
  }
  return null;
}

function resolverImagen(slug, clave, datos, publicDir) {
  const carpeta = join(publicDir, "imagenes", slug);
  const indicada = datos.imagenes?.[clave];
  if (indicada === false) return null; // "portada": false → no usar mockup, montar con CSS
  const archivo = buscarImagen(carpeta, indicada ? [indicada] : CANDIDATAS[clave]);
  if (!archivo) return null;

  const alt = datos.imagenes?.alt?.[clave] ?? `${datos.nombre}: ${clave}`;
  return {
    src: `/imagenes/${slug}/${archivo}`,
    ...leerTamano(join(carpeta, archivo)),
    alt,
    altTarjeta: datos.imagenes?.alt?.tarjeta,
  };
}

function leerProyectos(root) {
  const dataDir = join(root, "src", "data", "proyectos");
  const publicDir = join(root, "public");
  if (!existsSync(dataDir)) return [];

  const proyectos = [];

  for (const archivo of readdirSync(dataDir)) {
    if (!archivo.endsWith(".json")) continue;
    const slug = basename(archivo, ".json");
    let datos;

    try {
      datos = JSON.parse(readFileSync(join(dataDir, archivo), "utf-8"));
    } catch (error) {
      throw new Error(`[proyectos] ${archivo} no es un JSON válido: ${error.message}`);
    }

    const faltan = ["nombre", "tipo", "categoria", "resumen", "tarjeta"].filter(
      (campo) => !datos[campo],
    );
    if (faltan.length) {
      throw new Error(`[proyectos] ${archivo}: faltan campos obligatorios: ${faltan.join(", ")}`);
    }

    const portada = resolverImagen(slug, "portada", datos, publicDir);
    const escritorio = resolverImagen(slug, "escritorio", datos, publicDir);
    const movil = resolverImagen(slug, "movil", datos, publicDir);
    const tablet = resolverImagen(slug, "tablet", datos, publicDir);
    const seccionEscritorio = resolverImagen(slug, "seccionEscritorio", datos, publicDir);
    if (!portada && !escritorio) {
      throw new Error(
        `[proyectos] ${archivo}: faltan imágenes. Añade en public/imagenes/${slug}/ al menos captura-desktop.png (o portada-mockup.png)`,
      );
    }

    proyectos.push({
      ...datos,
      slug,
      orden: datos.orden ?? 999,
      imagenes: {
        portada,
        escritorio,
        movil,
        tablet,
        seccionEscritorio,
        responsive: resolverImagen(slug, "responsive", datos, publicDir),
      },
    });
  }

  return proyectos.sort((a, b) => a.orden - b.orden || a.slug.localeCompare(b.slug));
}

/* ---------- HTML de cada página de proyecto ---------- */

const esc = (texto = "") =>
  String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function paginaHtml(p) {
  const titulo = p.seo?.titulo ?? `${p.nombre} | Proyecto de Ales Biliato`;
  const descripcion = p.seo?.descripcion ?? p.resumen;
  const social = p.seo?.descripcionSocial ?? descripcion;
  const url = `${SITE_URL}/proyectos/${p.slug}/`;
  const principal = p.imagenes.portada ?? p.imagenes.escritorio;
  const imagen = SITE_URL + principal.src;

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logos/ales-biliato-monograma.png?v=2" />
    <link rel="shortcut icon" type="image/png" href="/logos/ales-biliato-monograma.png?v=2" />
    <link rel="apple-touch-icon" href="/logos/ales-biliato-monograma.png?v=2" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>${esc(titulo)}</title>
    <meta name="description" content="${esc(descripcion)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:site_name" content="Ales Biliato" />
    <meta property="og:title" content="${esc(titulo)}" />
    <meta property="og:description" content="${esc(social)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${imagen}" />
    <meta property="og:image:alt" content="${esc(principal.alt)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(titulo)}" />
    <meta name="twitter:description" content="${esc(social)}" />
    <meta name="twitter:image" content="${imagen}" />

    <script type="module" src="/src/proyecto.ts"></script>
  </head>

  <body>
    <div id="proyecto-app" data-slug="${esc(p.slug)}"></div>
  </body>
</html>
`;
}

/* ---------- el plugin ---------- */

export default function proyectosPlugin() {
  let root = process.cwd();

  const rutaHtml = (slug) => resolve(root, "proyectos", slug, "index.html");
  const normalizar = (ruta) => ruta.replace(/\\/g, "/");

  return {
    name: "ales-proyectos",
    enforce: "pre",

    config(config) {
      root = resolve(config.root ?? process.cwd());
      const input = {};
      for (const p of leerProyectos(root)) {
        input[`proyecto-${p.slug}`] = rutaHtml(p.slug);
      }
      return { build: { rollupOptions: { input } } };
    },

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_VIRTUAL_ID;
      const limpio = normalizar(id.split("?")[0]);
      const base = normalizar(resolve(root, "proyectos")) + "/";
      if (limpio.startsWith(base) && limpio.endsWith("/index.html")) return limpio;
      return null;
    },

    load(id) {
      if (id === RESOLVED_VIRTUAL_ID) {
        return `export default ${JSON.stringify(leerProyectos(root))};`;
      }
      const limpio = normalizar(id.split("?")[0]);
      const base = normalizar(resolve(root, "proyectos")) + "/";
      if (limpio.startsWith(base) && limpio.endsWith("/index.html")) {
        const slug = limpio.slice(base.length).split("/")[0];
        const proyecto = leerProyectos(root).find((p) => p.slug === slug);
        if (proyecto) return paginaHtml(proyecto);
      }
      return null;
    },

    configureServer(server) {
      // Sirve /proyectos/<slug>/ generando el HTML al vuelo
      server.middlewares.use(async (req, res, next) => {
        const coincide = req.url?.match(/^\/proyectos\/([^/?#]+)\/?(?:index\.html)?(?:[?#].*)?$/);
        if (!coincide) return next();

        const proyecto = leerProyectos(root).find((p) => p.slug === coincide[1]);
        if (!proyecto) return next();

        try {
          const html = await server.transformIndexHtml(req.url, paginaHtml(proyecto));
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(html);
        } catch (error) {
          next(error);
        }
      });

      // Recarga al cambiar un JSON o al añadir/quitar imágenes
      const vigilar = [join(root, "src", "data", "proyectos"), join(root, "public", "imagenes")];
      server.watcher.add(vigilar);
      const recargar = (archivo) => {
        const ruta = normalizar(archivo);
        if (!vigilar.some((carpeta) => ruta.startsWith(normalizar(carpeta)))) return;
        const modulo = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_ID);
        if (modulo) server.moduleGraph.invalidateModule(modulo);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", recargar);
      server.watcher.on("change", recargar);
      server.watcher.on("unlink", recargar);
    },

    generateBundle() {
      const hoy = new Date().toISOString().slice(0, 10);
      const urls = [
        `${SITE_URL}/`,
        `${SITE_URL}/paginas-web/`,
        `${SITE_URL}/aplicaciones-web/`,
        ...leerProyectos(root).map((p) => `${SITE_URL}/proyectos/${p.slug}/`),
      ];
      const entradas = urls
        .map((loc) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${hoy}</lastmod>\n  </url>`)
        .join("\n");

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entradas}\n</urlset>\n`,
      });
    },
  };
}
