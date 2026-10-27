import "./style.css";
import "./paginas-web.css";

function getRequiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (!element) {
    throw new Error(`No se ha encontrado el elemento: ${selector}`);
  }

  return element;
}

const app = getRequiredElement<HTMLDivElement>("#servicio-app");

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
    <section class="service-hero">
      <div class="service-hero-content">
        <p class="eyebrow">Desarrollo de aplicaciones web</p>

        <h1>
          Una aplicación a medida para simplificar la gestión de tu negocio.
        </h1>

        <p class="service-hero-text">
          Diseño y desarrollo herramientas web para gestionar reservas,
          organizar datos y facilitar procesos que actualmente requieren
          demasiado tiempo o trabajo manual.
        </p>

        <div class="hero-actions">
          <a class="button button-primary" href="/#contacto">
            Cuéntame tu proyecto
          </a>

          <a class="button button-secondary" href="#que-incluye">
            Ver qué incluye
          </a>
        </div>
      </div>

      <div class="service-hero-visual">
        <img
          src="/imagenes/servicios/servicio-aplicaciones-web.png"
          alt="Panel de una aplicación web con datos, gráficos y controles"
        />
      </div>
    </section>

    <section class="section service-introduction">
      <p class="eyebrow">Una herramienta para tu negocio</p>

      <div class="service-introduction-grid">
        <h2>
          La tecnología debe adaptarse a tu forma de trabajar, no al contrario.
        </h2>

        <div>
          <p>
            Una aplicación web permite transformar tareas repetitivas o procesos
            difíciles de organizar en una herramienta accesible desde el
            navegador.
          </p>

          <p>
            Estudio cómo funciona tu negocio y diseño una solución centrada en
            las acciones que realmente necesitas, con una interfaz clara y
            preparada para utilizarse desde los dispositivos adecuados.
          </p>
        </div>
      </div>
    </section>

    <section id="que-incluye" class="section service-includes">
      <p class="eyebrow">Qué incluye</p>

      <h2>
        Todo lo necesario para convertir una necesidad en una herramienta útil.
      </h2>

      <div class="service-feature-grid">
        <article class="service-feature">
          <p class="service-feature-number">1</p>
          <h3>Análisis del proceso</h3>
          <p>
            Estudiamos cómo trabajas, qué información necesitas gestionar y qué
            problema debe resolver la aplicación.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">2</p>
          <h3>Estructura y experiencia</h3>
          <p>
            Organizo las pantallas y los recorridos para que cada tarea resulte
            clara y requiera el menor número posible de pasos.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">3</p>
          <h3>Diseño de la interfaz</h3>
          <p>
            Creo una interfaz coherente con el proyecto, fácil de entender y
            preparada para utilizarse durante el trabajo diario.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">4</p>
          <h3>Funcionalidades a medida</h3>
          <p>
            Desarrollo las funciones necesarias para gestionar reservas,
            registrar información, consultar datos o automatizar procesos.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">5</p>
          <h3>Adaptación por dispositivo</h3>
          <p>
            La aplicación se adapta a ordenador, tablet o teléfono según el
            contexto en el que vaya a utilizarse.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">6</p>
          <h3>Pruebas y publicación</h3>
          <p>
            Reviso los recorridos principales, corrijo incidencias y preparo la
            aplicación para que pueda utilizarse en producción.
          </p>
        </article>
      </div>
    </section>

    <section class="section service-audience">
      <p class="eyebrow">Para quién es</p>

      <h2>
        Una solución para proyectos que necesitan algo más que una página web.
      </h2>

      <div class="service-audience-grid">
        <article>
          <h3>Negocios con procesos manuales</h3>
          <p>
            Para empresas que todavía organizan información mediante mensajes,
            documentos separados o tareas repetitivas que podrían simplificarse.
          </p>
        </article>

        <article>
          <h3>Servicios con reservas</h3>
          <p>
            Para negocios que necesitan mostrar disponibilidad, recibir
            solicitudes y organizar las reservas desde una misma herramienta.
          </p>
        </article>

        <article>
          <h3>Proyectos que trabajan con datos</h3>
          <p>
            Para equipos que necesitan registrar información, consultarla con
            facilidad y convertirla en datos útiles para tomar decisiones.
          </p>
        </article>
      </div>
    </section>

    <section class="section service-examples">
      <p class="eyebrow">Ejemplos en funcionamiento</p>

      <h2>Aplicaciones creadas para resolver necesidades concretas.</h2>

      <div class="service-example-list">
        <article class="service-example">
          <div class="service-example-content">
            <p class="eyebrow">Reservas y disponibilidad</p>

            <h3>Un proceso de reserva accesible desde el navegador.</h3>

            <p>
              Club Baldo’s permite elegir un servicio, consultar los horarios
              disponibles y completar una reserva desde una misma herramienta.
            </p>

            <a class="button button-secondary" href="/proyectos/club-baldos/">
              Ver caso de estudio
            </a>
          </div>

          <div class="service-example-visual">
            <img
              src="/imagenes/club-baldos/captura-reservas-desktop-real.png"
              alt="Proceso real de reserva en la aplicación web de Club Baldo’s"
              width="2880"
              height="1800"
              loading="lazy"
            />
          </div>
        </article>

        <article class="service-example service-example--reverse">
          <div class="service-example-content">
            <p class="eyebrow">Registro y análisis de datos</p>

            <h3>
              La información del partido convertida en estadísticas útiles.
            </h3>

            <p>
              VolleyStats permite registrar las acciones de un partido de vóley
              y consultar posteriormente los datos por jugador, set y rotación.
            </p>

            <a class="button button-secondary" href="/proyectos/volleystats/">
              Ver caso de estudio
            </a>
          </div>

          <div class="service-example-visual">
            <img
              src="/imagenes/volleystats/captura-desktop-real.png"
              alt="Registro real de un partido dentro de VolleyStats"
              width="2880"
              height="1800"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>

    <section class="section service-cta">
      <p class="eyebrow">Hablemos</p>

      <h2>¿Necesitas una aplicación para simplificar tu trabajo?</h2>

      <p>
        Cuéntame qué proceso quieres mejorar, qué información necesitas
        gestionar y quién utilizará la herramienta. Estudiaremos una solución
        adaptada a tu proyecto.
      </p>

      <div class="hero-actions">
        <a class="button button-primary" href="/cuestionario/">
          Completar cuestionario
        </a>

        <a class="button button-secondary" href="/#contacto"> Contactar </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} Ales Biliato</p>
    <a href="/privacidad.html">Privacidad</a>
    <a class="back-to-top" href="#servicio-app" aria-label="Volver arriba">↑</a>
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
