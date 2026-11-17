// Fondo ASCII del hero: se desvanece con el scroll.
import { createGradientASCII } from "./gradient-ascii";
import type { PageRays } from "./theme";

export function initHeroAscii(rays: PageRays): void {
  const hero = document.querySelector<HTMLElement>(".hero");
  const layer = hero?.querySelector<HTMLElement>(".hero-ascii");
  const content = hero?.querySelector<HTMLElement>(".hero-content");
  if (!hero || !layer || !content) return;

  const isMobile = window.matchMedia("(max-width: 700px)").matches;

  createGradientASCII(layer, {
    colors: ["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"],
    shape: "horizon",
    characters: " =+xX0S8#@",
    cellSize: isMobile ? 14 : 18,
    density: 0.8,
    glyphOpacity: 0.85,
    glow: 0.2,
    flicker: 0.2,
    softness: 0.5,
    flow: 0.5,
    speed: 1,
    gradientOpacity: 0.9,
    grain: 0.08,
    scrambleRadius: 0.1,
    clickEffect: "wave",
    intro: true,
    dpr: isMobile ? 1 : undefined,
  });

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ticking = false;

  const update = () => {
    ticking = false;
    const progress = Math.min(1, Math.max(0, window.scrollY / hero.offsetHeight));
    // Fondo: se apaga de forma gradual; el texto desaparece antes para que
    // nunca quede texto blanco sobre el fondo claro de la página.
    layer.style.opacity = String(1 - progress);
    // Los rayos fijos aparecen a medida que el fondo ASCII se apaga.
    rays.element.style.opacity = String(progress);
    rays.setPaused(progress < 0.02);
    content.style.opacity = String(Math.max(0, 1 - progress * 1.8));
    if (!reduced) {
      layer.style.transform = `translateY(${progress * 60}px)`;
      content.style.transform = `translateY(${progress * -40}px)`;
    }
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}
