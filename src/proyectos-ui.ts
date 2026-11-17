import type { Proyecto } from "virtual:proyectos";

export function esc(texto: string | undefined | null): string {
  return String(texto ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function atributosImagen(imagen: { width?: number; height?: number }): string {
  return imagen.width && imagen.height
    ? `width="${imagen.width}" height="${imagen.height}"`
    : "";
}

type Imagen = { src: string; width?: number; height?: number; alt: string };

/** Proporción de la pantalla: la de la captura, limitada a un rango razonable. */
function proporcion(imagen: Imagen, min = 1.45, max = 1.9): number {
  if (!imagen.width || !imagen.height) return 1.6;
  return Math.min(max, Math.max(min, imagen.width / imagen.height));
}

function img(imagen: Imagen, extra = ""): string {
  return `<img src="${esc(imagen.src)}" alt="${esc(imagen.alt)}" ${atributosImagen(imagen)} ${extra}/>`;
}

const telefono = (movil: Imagen) => /* HTML */ `
  <div class="device-phone">
    <div class="device-phone__screen">${img(movil, 'loading="lazy"')}</div>
  </div>
`;

/**
 * Cabecera de la página y tarjeta del home.
 * Si hay `portada-mockup` se muestra tal cual; si solo hay capturas
 * (captura-desktop + captura-mobile) se monta un monitor y un móvil con CSS.
 */
export function renderPortada(
  p: Proyecto,
  opciones: { clase?: string; animar?: string; lazy?: boolean } = {},
): string {
  const { portada, escritorio, movil, tablet } = p.imagenes;
  const { clase = "", animar = "", lazy = false } = opciones;
  // animar = retardo de la animación de entrada (p. ej. "200ms"); vacío = sin animar
  const dataAnimate = animar ? "data-animate" : "";
  const retardo = animar ? `--delay: ${animar};` : "";

  if (portada) {
    return `<img class="${clase}" ${dataAnimate} style="${retardo}" src="${esc(portada.src)}" alt="${esc(portada.alt)}" ${atributosImagen(portada)} ${lazy ? 'loading="lazy"' : ""} />`;
  }

  return /* HTML */ `
    <div
      class="device-scene device-scene--hero ${movil || tablet ? "" : "device-scene--solo"} ${clase}"
      ${dataAnimate}
      style="--pantalla: ${esc(p.colorPantalla ?? "#fff")}; ${retardo}"
      role="img"
      aria-label="${esc(escritorio!.alt)}"
    >
      <div class="device-desktop">
        <div class="device-desktop__frame">
          <div
            class="device-desktop__screen"
            style="aspect-ratio: ${proporcion(escritorio!)}"
          >
            ${img({ ...escritorio!, alt: "" }, lazy ? 'loading="lazy"' : "")}
          </div>
        </div>
        <div class="device-desktop__neck"></div>
        <div class="device-desktop__foot"></div>
      </div>
      ${movil
        ? telefono({ ...movil, alt: "" })
        : tablet
          ? `<div class="device-tablet device-tablet--mini"><div class="device-tablet__screen device-tablet__screen--nativa">${img({ ...tablet, alt: "" }, lazy ? 'loading="lazy"' : "")}</div></div>`
          : ""}
    </div>
  `;
}

/**
 * Sección responsive. Con `mockup-responsive` usa esa imagen; si no, y hay
 * captura de escritorio y de móvil, monta una tablet y un móvil con CSS.
 */
export function renderResponsive(p: Proyecto): string {
  const { responsive, escritorio, movil, tablet } = p.imagenes;

  if (responsive) {
    return `<img class="project-responsive-mockup" src="${esc(responsive.src)}" alt="${esc(responsive.alt)}" ${atributosImagen(responsive)} loading="lazy" />`;
  }

  const pantalla = tablet ?? escritorio;
  if (!pantalla || !(movil || tablet)) return "";


  return /* HTML */ `
    <div
      class="device-scene device-scene--responsive ${movil ? "" : "device-scene--solo"}"
      style="--pantalla: ${esc(p.colorPantalla ?? "#fff")}"
      role="img"
      aria-label="${esc((movil ?? pantalla).alt)}"
    >
      <div class="device-tablet">
        <div
          class="device-tablet__screen"
          style="aspect-ratio: ${proporcion(pantalla, 1.25, 1.7)}"
        >
          ${img({ ...pantalla, alt: "" }, 'loading="lazy"')}
        </div>
      </div>
      ${movil ? telefono({ ...movil, alt: "" }) : ""}
    </div>
  `;
}

export const tieneResponsive = (p: Proyecto) =>
  Boolean(
    p.imagenes.responsive ||
      p.imagenes.tablet ||
      (p.imagenes.escritorio && p.imagenes.movil),
  );

/** Tarjeta de un proyecto en el home. */
export function renderTarjeta(p: Proyecto): string {
  const alt = p.imagenes.portada?.altTarjeta ?? p.imagenes.escritorio?.altTarjeta;
  const media = renderPortada(
    alt && p.imagenes.portada
      ? { ...p, imagenes: { ...p.imagenes, portada: { ...p.imagenes.portada, alt } } }
      : p,
    { lazy: true },
  );

  return /* HTML */ `
    <a
      class="project-card"
      data-animate
      href="/proyectos/${esc(p.slug)}/"
      aria-label="Ver el proyecto ${esc(p.nombre)}"
    >
      ${media}

      <div class="project-info">
        <p class="project-type">${esc(p.tipo)} · ${esc(p.categoria)}</p>
        <h3>${esc(p.nombre)}</h3>
        <p class="project-description">${esc(p.tarjeta)}</p>
      </div>
    </a>
  `;
}
