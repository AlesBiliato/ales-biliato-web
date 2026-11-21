// Plantilla única de las páginas de proyecto (/proyectos/<slug>/).
// Todo el contenido sale de src/data/proyectos/<slug>.json (ver LEEME.md).
import "./style.css";
import "./proyecto.css";
import proyectos from "virtual:proyectos";
import type { Proyecto } from "virtual:proyectos";
import { initReveal } from "./reveal";
import { initTheme } from "./theme";
import { initScrollUI } from "./scroll-ui";
import {
  esc,
  renderPortada,
  renderResponsive,
  tieneResponsive,
} from "./proyectos-ui";

initTheme();

function getRequiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (!element) {
    throw new Error(`No se ha encontrado el elemento: ${selector}`);
  }

  return element;
}

const app = getRequiredElement<HTMLDivElement>("#proyecto-app");
const proyecto = proyectos.find((p) => p.slug === app.dataset.slug);

if (!proyecto) {
  throw new Error(`No existe el proyecto "${app.dataset.slug}"`);
}

const dimensiones = (imagen: { width?: number; height?: number }) =>
  imagen.width && imagen.height
    ? `width="${imagen.width}" height="${imagen.height}"`
    : "";

const enlaceExterno = (clase: string, url: string, texto: string) => /* HTML */ `
  <a
    class="button ${clase}"
    href="${esc(url)}"
    target="_blank"
    rel="noopener noreferrer"
  >
    ${esc(texto)}
  </a>
`;

function cabecera(p: Proyecto): string {
  const detalles = (p.detalles ?? [])
    .map(
      (d) => /* HTML */ `
        <div>
          <dt>${esc(d.etiqueta)}</dt>
          <dd>${esc(d.valor)}</dd>
        </div>
      `,
    )
    .join("");

  return /* HTML */ `
    <section class="project-hero">
      <div class="project-hero-grid">
        <div class="project-hero-content">
          <p class="eyebrow" data-animate>${esc(p.tipo)} · ${esc(p.categoria)}</p>

          <h1 data-animate style="--delay: 100ms">${esc(p.nombre)}</h1>

          <p class="project-hero-text" data-animate style="--delay: 200ms">
            ${esc(p.resumen)}
          </p>

          ${p.url
            ? enlaceExterno(
                "button-primary",
                p.url,
                p.botonVisitar ?? "Visitar la web",
              )
            : ""}
        </div>

        ${detalles ? `<dl class="project-details">${detalles}</dl>` : ""}
      </div>

      ${renderPortada(p, { clase: "project-hero-image", animar: "200ms" })}
    </section>
  `;
}

function dosColumnas(
  clase: string,
  eyebrow: string,
  bloque: BloqueTexto | undefined,
  extra = "",
): string {
  if (!bloque) return "";

  return /* HTML */ `
    <section class="section ${clase}" data-animate>
      <p class="eyebrow">${esc(eyebrow)}</p>

      <div class="project-two-columns">
        <h2>${esc(bloque.titulo)}</h2>

        <div class="project-copy">
          ${bloque.parrafos.map((t) => `<p>${esc(t)}</p>`).join("")} ${extra}
        </div>
      </div>
    </section>
  `;
}

function solucion(p: Proyecto): string {
  if (!p.solucion) return "";

  const pasos = p.solucion.pasos
    .map(
      (paso) => /* HTML */ `
        <article class="project-feature" data-animate>
          <h3>${esc(paso.titulo)}</h3>
          <p>${esc(paso.texto)}</p>
        </article>
      `,
    )
    .join("");

  return /* HTML */ `
    <section class="section project-solution" data-animate>
      <p class="eyebrow">La solución</p>
      <h2>${esc(p.solucion.titulo)}</h2>
      <div class="project-feature-grid" data-stagger>${pasos}</div>
    </section>
  `;
}

function escritorio(p: Proyecto): string {
  // La sección puede mostrar otra captura (p. ej. el funcionamiento interno)
  const imagen = p.imagenes.seccionEscritorio ?? p.imagenes.escritorio;
  if (!imagen) return "";

  return /* HTML */ `
    <section class="section project-showcase" data-animate>
      <div class="project-showcase-heading">
        <p class="eyebrow">
          ${esc(p.escritorio?.eyebrow ?? "Experiencia de escritorio")}
        </p>
        ${p.escritorio ? `<h2>${esc(p.escritorio.titulo)}</h2>` : ""}
      </div>

      <div class="desktop-mockup">
        <div class="desktop-mockup__top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="desktop-mockup__screen">
          <img
            src="${esc(imagen.src)}"
            alt="${esc(imagen.alt)}"
            ${dimensiones(imagen)}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  `;
}

function responsive(p: Proyecto): string {
  if (!p.responsive || !tieneResponsive(p)) return "";

  const grupo = p.responsive.grupoDispositivos
    ? " project-responsive--device-group"
    : "";

  return /* HTML */ `
    <section class="section project-responsive${grupo}" data-animate>
      <div class="project-responsive-content">
        <p class="eyebrow">
          ${esc(p.responsive.eyebrow ?? "Diseño responsive")}
        </p>
        <h2>${esc(p.responsive.titulo)}</h2>
        <p>${esc(p.responsive.texto)}</p>
      </div>

      ${renderResponsive(p)}
    </section>
  `;
}

function llamadaFinal(p: Proyecto): string {
  const cta = p.cta ?? {
    titulo: "¿Tienes un proyecto parecido en mente?",
    texto:
      "Cuéntame qué necesitas y estudiaremos juntos la mejor solución para tu proyecto.",
  };

  return /* HTML */ `
    <section class="section project-cta" data-animate>
      <p class="eyebrow">Tu proyecto</p>
      <h2>${esc(cta.titulo)}</h2>
      <p>${esc(cta.texto)}</p>
      <a class="button button-primary" href="/#contacto">
        Cuéntame tu proyecto
      </a>
    </section>
  `;
}

app.innerHTML = /* HTML */ `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Ales Biliato, inicio">
      <img src="/logos/ales-biliato-logo-horizontal.png" alt="Ales Biliato" />
    </a>

    <button
      class="menu-toggle"
      type="button"
      aria-label="Abrir menú"
      aria-controls="main-nav"
      aria-expanded="false"
    >
      ☰
    </button>

    <nav class="main-nav" id="main-nav">
      <a class="nav-button" href="/#proyectos">Proyectos</a>
      <a class="nav-button" href="/#servicios">Servicios</a>
      <a class="nav-button" href="/#sobre-mi">Sobre mí</a>
      <a class="nav-button" href="/#contacto">Contacto</a>
    </nav>
  </header>

  <main>
    ${cabecera(proyecto)} ${dosColumnas("project-overview", "El proyecto", proyecto.proyecto)}
    ${dosColumnas("project-challenge", "El objetivo", proyecto.objetivo)}
    ${solucion(proyecto)} ${escritorio(proyecto)} ${responsive(proyecto)}
    ${dosColumnas(
      "project-result",
      "El resultado",
      proyecto.resultado,
      proyecto.url
        ? enlaceExterno(
            "button-secondary",
            proyecto.url,
            proyecto.resultado?.botonVisitar ?? "Ver el proyecto publicado",
          )
        : "",
    )}
    ${llamadaFinal(proyecto)}
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} Ales Biliato</p>
    <a href="/privacidad.html">Privacidad</a>
    <a class="back-to-top" href="#proyecto-app" aria-label="Volver arriba">↑</a>
  </footer>
`;

initReveal();
initScrollUI();

const menuToggle = getRequiredElement<HTMLButtonElement>(".menu-toggle");

const mainNav = getRequiredElement<HTMLElement>(".main-nav");

function closeMenu() {
  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
