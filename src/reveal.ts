// Animaciones de entrada con IntersectionObserver.
// Uso: añade data-animate a un elemento. En un contenedor, data-stagger
// escalona a sus hijos con data-animate. Retardo manual: style="--delay: 150ms".

const STAGGER_STEP_MS = 90;

export function initReveal(): void {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Sin animación posible o deseada: el CSS no oculta nada.
  if (reducedMotion || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("js-anim");

  document.querySelectorAll("[data-stagger]").forEach((container) => {
    container
      .querySelectorAll<HTMLElement>("[data-animate]")
      .forEach((item, index) => {
        item.style.setProperty("--delay", `${index * STAGGER_STEP_MS}ms`);
      });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // solo una vez
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
  );

  document.querySelectorAll("[data-animate]").forEach((el) => {
    observer.observe(el);
  });
}
