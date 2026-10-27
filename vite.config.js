import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
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
        campusCamilaHiruela: resolve(
          import.meta.dirname,
          "proyectos/campus-camila-hiruela/index.html",
        ),
        clubBaldos: resolve(
          import.meta.dirname,
          "proyectos/club-baldos/index.html",
        ),
        volleyStats: resolve(
          import.meta.dirname,
          "proyectos/volleystats/index.html",
        ),
      },
    },
  },
});
