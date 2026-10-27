import "./style.css";
import "./proyecto.css";

function getRequiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (!element) {
    throw new Error(`No se ha encontrado el elemento: ${selector}`);
  }

  return element;
}

const app = getRequiredElement<HTMLDivElement>("#proyecto-app");

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
    <section class="project-hero">
      <div class="project-hero-grid">
        <div class="project-hero-content">
          <p class="eyebrow">Web multipágina · Evento deportivo</p>

          <h1>Campus Camila Hiruela</h1>

          <p class="project-hero-text">
            Diseño y desarrollo de una web para presentar un campus de vóley,
            reunir toda la información del evento y facilitar el acceso a la
            inscripción.
          </p>

          <a
            class="button button-primary"
            href="https://campuscamilahiruela.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar la web
          </a>
        </div>

        <dl class="project-details">
          <div>
            <dt>Servicio</dt>
            <dd>Diseño y desarrollo web</dd>
          </div>

          <div>
            <dt>Tipo de proyecto</dt>
            <dd>Web multipágina</dd>
          </div>

          <div>
            <dt>Sector</dt>
            <dd>Deporte y eventos</dd>
          </div>

          <div>
            <dt>Ubicación</dt>
            <dd>San Salvador de Jujuy, Argentina</dd>
          </div>
        </dl>
      </div>

      <img
        class="project-hero-image"
        src="/imagenes/campus-camila-hiruela/mockup-portada-real.png"
        alt="Página web real del Campus Camila Hiruela mostrada en un ordenador portátil"
        width="1080"
        height="654"
      />
    </section>

    <section class="section project-overview">
      <p class="eyebrow">El proyecto</p>

      <div class="project-two-columns">
        <h2>Una web para centralizar toda la información del campus.</h2>

        <div class="project-copy">
          <p>
            El Campus Camila Hiruela necesitaba un espacio digital propio donde
            presentar la propuesta, explicar quiénes forman parte del proyecto y
            resolver las principales dudas de participantes y familias.
          </p>

          <p>
            La información debía ser fácil de consultar antes de la inscripción:
            lugar, fechas, edades, beneficios, disponibilidad, forma de pago y
            vías de contacto.
          </p>
        </div>
      </div>
    </section>

    <section class="section project-challenge">
      <p class="eyebrow">El objetivo</p>

      <div class="project-two-columns">
        <h2>Convertir mucha información práctica en una experiencia clara.</h2>

        <div class="project-copy">
          <p>
            En un evento de estas características, los usuarios necesitan
            encontrar respuestas rápidamente. Una estructura confusa puede
            provocar dudas y dificultar el proceso de inscripción.
          </p>

          <p>
            El reto consistió en ordenar los contenidos, destacar la información
            importante y mantener una identidad visual deportiva sin perder
            claridad ni facilidad de uso.
          </p>
        </div>
      </div>
    </section>

    <section class="section project-solution">
      <p class="eyebrow">La solución</p>
      <h2>Una estructura sencilla para acompañar todo el recorrido.</h2>

      <div class="project-feature-grid">
        <article class="project-feature">
          <p class="project-feature-number">1</p>
          <h3>Presentación del campus</h3>
          <p>
            Una portada visual introduce el evento, su identidad y su propuesta
            desde el primer momento.
          </p>
        </article>

        <article class="project-feature">
          <p class="project-feature-number">2</p>
          <h3>Información organizada</h3>
          <p>
            Las fechas, ubicación, edades, beneficios y condiciones se presentan
            en bloques fáciles de localizar y comprender.
          </p>
        </article>

        <article class="project-feature">
          <p class="project-feature-number">3</p>
          <h3>Acceso a la inscripción</h3>
          <p>
            Las llamadas a la acción conducen al formulario correspondiente sin
            obligar al usuario a buscar cómo participar.
          </p>
        </article>

        <article class="project-feature">
          <p class="project-feature-number">4</p>
          <h3>Galería del evento</h3>
          <p>
            La galería permite conservar y mostrar la experiencia del campus
            mediante fotografías.
          </p>
        </article>
      </div>
    </section>

    <section class="section project-showcase">
      <div class="project-showcase-heading">
        <p class="eyebrow">Diseño de escritorio</p>
        <h2>Una presentación visual con toda la información accesible.</h2>
      </div>

      <div class="desktop-mockup">
        <div class="desktop-mockup__top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="desktop-mockup__screen">
          <img
            src="/imagenes/campus-camila-hiruela/captura-desktop-real.png"
            alt="Página web real del Campus Camila Hiruela en ordenador"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section
      class="section project-responsive project-responsive--device-group"
    >
      <div class="project-responsive-content">
        <p class="eyebrow">Diseño responsive</p>

        <h2>Preparada para consultarse desde cualquier dispositivo.</h2>

        <p>
          La navegación, los contenidos y las llamadas a la acción se adaptan
          para que participantes y familias puedan consultar la información
          cómodamente desde la tablet o el teléfono.
        </p>
      </div>

      <img
        class="project-responsive-mockup"
        src="/imagenes/campus-camila-hiruela/mockup-responsive-dispositivos-real.png"
        alt="Web del Campus Camila Hiruela mostrada en tablets y teléfono móvil"
        width="1448"
        height="1086"
        loading="lazy"
      />
    </section>

    <section class="section project-result">
      <p class="eyebrow">El resultado</p>

      <div class="project-two-columns">
        <h2>Un punto de información único para participantes y familias.</h2>

        <div class="project-copy">
          <p>
            La web reúne la presentación del campus, la información práctica, la
            inscripción, los canales de contacto y la galería dentro de una
            experiencia coherente.
          </p>

          <p>
            El proyecto puede seguir utilizándose para comunicar nuevas
            ediciones y actualizar sus contenidos a medida que evoluciona el
            evento.
          </p>

          <a
            class="button button-secondary"
            href="https://campuscamilahiruela.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver el proyecto publicado
          </a>
        </div>
      </div>
    </section>

    <section class="section project-cta">
      <p class="eyebrow">Tu proyecto</p>
      <h2>¿Necesitas una web para presentar tu negocio o evento?</h2>

      <p>
        Cuéntame qué necesitas y hablaremos sobre cómo organizar el contenido,
        diseñar la experiencia y convertirlo en una web profesional.
      </p>

      <a class="button button-primary" href="/#contacto">
        Cuéntame tu proyecto
      </a>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} Ales Biliato</p>
    <a href="/privacidad.html">Privacidad</a>
    <a class="back-to-top" href="#proyecto-app" aria-label="Volver arriba">↑</a>
  </footer>
`;

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
