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
          <p class="eyebrow">Aplicación web · Estadísticas deportivas</p>

          <h1>VolleyStats</h1>

          <p class="project-hero-text">
            Diseño y desarrollo de una aplicación web para registrar partidos de
            vóley y consultar estadísticas por jugador, set y rotación.
          </p>

          <a
            class="button button-primary"
            href="https://volleystats-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar la aplicación
          </a>
        </div>

        <dl class="project-details">
          <div>
            <dt>Servicio</dt>
            <dd>Diseño y desarrollo web</dd>
          </div>

          <div>
            <dt>Tipo de proyecto</dt>
            <dd>Aplicación web</dd>
          </div>

          <div>
            <dt>Sector</dt>
            <dd>Deporte y análisis</dd>
          </div>

          <div>
            <dt>Dispositivos</dt>
            <dd>Ordenador y tablet</dd>
          </div>
        </dl>
      </div>

      <img
        class="project-hero-image"
        src="/imagenes/volleystats/portada-mockup.png"
        alt="Aplicación web VolleyStats mostrada en ordenador y tablet"
        width="1586"
        height="992"
      />
    </section>

    <section class="section project-overview">
      <p class="eyebrow">El proyecto</p>

      <div class="project-two-columns">
        <h2>Una herramienta para registrar y analizar partidos de vóley.</h2>

        <div class="project-copy">
          <p>
            VolleyStats nace para reunir en una sola aplicación el registro de
            los partidos y la consulta posterior de las estadísticas del equipo.
          </p>

          <p>
            La herramienta permite organizar la información deportiva y
            consultar el rendimiento desde diferentes niveles de detalle, como
            jugadores, sets y rotaciones.
          </p>
        </div>
      </div>
    </section>

    <section class="section project-challenge">
      <p class="eyebrow">El objetivo</p>

      <div class="project-two-columns">
        <h2>Registrar información durante el partido sin perder agilidad.</h2>

        <div class="project-copy">
          <p>
            Durante un encuentro, cada acción debe anotarse con rapidez. Una
            interfaz lenta o demasiado compleja dificultaría el registro y
            podría provocar errores en los datos.
          </p>

          <p>
            El reto consistió en organizar muchas opciones y estadísticas dentro
            de una experiencia clara, preparada para utilizarse principalmente
            desde ordenador y tablet.
          </p>
        </div>
      </div>
    </section>

    <section class="section project-solution">
      <p class="eyebrow">La solución</p>

      <h2>Una estructura diseñada para registrar y consultar cada partido.</h2>

      <div class="project-feature-grid">
        <article class="project-feature">
          <p class="project-feature-number">1</p>
          <h3>Gestión del equipo</h3>
          <p>
            La aplicación permite organizar los jugadores y disponer de la
            información necesaria antes de comenzar el partido.
          </p>
        </article>

        <article class="project-feature">
          <p class="project-feature-number">2</p>
          <h3>Registro del partido</h3>
          <p>
            Las acciones se introducen mediante una interfaz preparada para
            trabajar con rapidez durante el encuentro.
          </p>
        </article>

        <article class="project-feature">
          <p class="project-feature-number">3</p>
          <h3>Estadísticas detalladas</h3>
          <p>
            Los datos pueden consultarse por jugador y por set para analizar el
            rendimiento con mayor precisión.
          </p>
        </article>

        <article class="project-feature">
          <p class="project-feature-number">4</p>
          <h3>Análisis de rotaciones</h3>
          <p>
            La información por rotación ayuda a identificar patrones y
            comprender mejor el desarrollo del partido.
          </p>
        </article>
      </div>
    </section>

    <section class="section project-showcase">
      <div class="project-showcase-heading">
        <p class="eyebrow">Experiencia de escritorio</p>

        <h2>Una vista completa del partido y sus principales controles.</h2>
      </div>

      <div class="desktop-mockup">
        <div class="desktop-mockup__top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="desktop-mockup__screen">
          <img
            src="/imagenes/volleystats/captura-desktop-real.png"
            alt="Interfaz real de VolleyStats mostrada en ordenador"
            width="2880"
            height="1800"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section class="section project-responsive">
      <div class="project-responsive-content">
        <p class="eyebrow">Experiencia en tablet</p>

        <h2>Diseñada para registrar el partido desde la pista.</h2>

        <p>
          La interfaz aprovecha el espacio horizontal de la tablet para mostrar
          la rotación, el marcador y los controles principales sin perder
          claridad durante el encuentro.
        </p>
      </div>

      <img
        class="project-responsive-mockup"
        src="/imagenes/volleystats/mockup-tablet-horizontal-real.png"
        alt="Aplicación VolleyStats mostrada en una tablet horizontal"
        width="1448"
        height="1086"
        loading="lazy"
      />
    </section>

    <section class="section project-result">
      <p class="eyebrow">El resultado</p>

      <div class="project-two-columns">
        <h2>Los datos del partido convertidos en información útil.</h2>

        <div class="project-copy">
          <p>
            VolleyStats reúne el registro del encuentro, la organización del
            equipo y la consulta de estadísticas dentro de una misma
            herramienta.
          </p>

          <p>
            La información registrada durante el partido puede revisarse después
            para analizar el rendimiento de jugadores, sets y rotaciones.
          </p>

          <a
            class="button button-secondary"
            href="https://volleystats-app.netlify.app/"
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

      <h2>¿Necesitas una aplicación para gestionar datos o procesos?</h2>

      <p>
        Cuéntame cómo trabajas y estudiaremos una solución digital adaptada a
        las necesidades reales de tu proyecto.
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
