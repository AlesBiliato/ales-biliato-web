// Comportamiento común al hacer scroll en todas las páginas:
// - la cabecera fija se reduce con el mínimo scroll (clase "is-scrolled")
// - el botón de volver arriba aparece pasados 400px (clase "is-visible")
// Hay que llamarla cuando la cabecera y el botón ya están en el DOM.
export function initScrollUI(): void {
  const siteHeader = document.querySelector<HTMLElement>(".site-header");
  const backToTop = document.querySelector<HTMLElement>(".back-to-top");

  function onScroll(): void {
    // El ajuste automático de scroll está desactivado en CSS (overflow-anchor)
    // para que el cambio de altura de la cabecera no provoque parpadeo.
    siteHeader?.classList.toggle("is-scrolled", window.scrollY > 0);
    backToTop?.classList.toggle("is-visible", window.scrollY > 400);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
