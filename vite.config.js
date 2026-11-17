import { defineConfig } from "vite";
import { resolve } from "node:path";
import proyectos from "./vite-plugin-proyectos.js";

// Las páginas de /proyectos/<slug>/ y el sitemap los genera el plugin a partir
// de src/data/proyectos/*.json: no hace falta registrarlas aquí.
export default defineConfig({
  plugins: [proyectos()],
  build: {
    rollupOptions: {
      input: {
        principal: resolve(import.meta.dirname, "index.html"),
        cuestionario: resolve(import.meta.dirname, "cuestionario/index.html"),
        paginasWeb: resolve(import.meta.dirname, "paginas-web/index.html"),
        aplicacionesWeb: resolve(
          import.meta.dirname,
          "aplicaciones-web/index.html",
        ),
      },
    },
  },
});
