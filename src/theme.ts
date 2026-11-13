// Tema oscuro común a todas las páginas + rayos de luz fijos de fondo.
import { createSideRays } from "./side-rays";

export interface PageRays {
  element: HTMLElement;
  setPaused: (paused: boolean) => void;
}

export function initTheme(): PageRays {
  document.body.classList.add("theme-dark");

  const element = document.createElement("div");
  element.className = "page-rays";
  element.setAttribute("aria-hidden", "true");
  document.body.prepend(element);

  const rays = createSideRays(element, {
    rayColor1: "#FFC46B",
    rayColor2: "#96c8ff",
    origin: "top-right",
    speed: 2.5,
    intensity: 2,
    spread: 2,
    density: 5,
    followMouse: true,
    blend: 0.6,
    sharpness: 0.5,
    tilt: 0,
    falloff: 1.6,
    glow: 1,
    saturation: 1,
    dust: 0,
    mouseInfluence: 0.5,
    intro: true,
    lightMode: false,
    opacity: 1,
    maxDevicePixelRatio: window.matchMedia("(max-width: 700px)").matches ? 1 : 2,
  });

  return { element, setPaused: (paused) => rays?.setPaused(paused) };
}
