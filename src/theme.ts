// Botones liquid glass + rayos de luz fijos de fondo (sol arriba a la derecha).
import { createSideRays } from "./side-rays";

export interface PageRays {
  element: HTMLElement;
  setPaused: (paused: boolean) => void;
}

export function initTheme(): PageRays {
  // Liquid glass: la luz del botón sigue al cursor.
  document.addEventListener(
    "pointermove",
    (event) => {
      const button = (event.target as Element | null)?.closest<HTMLElement>(
        ".button",
      );
      if (!button) return;
      const rect = button.getBoundingClientRect();
      button.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      button.style.setProperty("--my", `${event.clientY - rect.top}px`);
    },
    { passive: true },
  );

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
    lightMode: true,
    opacity: 1,
    maxDevicePixelRatio: window.matchMedia("(max-width: 700px)").matches ? 1 : 2,
  });

  return { element, setPaused: (paused) => rays?.setPaused(paused) };
}
