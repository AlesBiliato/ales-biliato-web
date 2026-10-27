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
          <p class="eyebrow">Aplicación web · Reservas deportivas</p>

          <h1>Club Baldo’s</h1>

          <p class="project-hero-text">
            Diseño y desarrollo de una aplicación web responsive para consultar
            horarios disponibles y gestionar reservas deportivas online.
          </p>

          <a
            class="button button-primary"
            href="https://clubbaldos.com/"
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
            <dd>Instalaciones deportivas</dd>
          </div>

          <div>
            <dt>Función principal</dt>
            <dd>Reservas online</dd>
          </div>
        </dl>
      </div>

      <img
        class="project-hero-image"
        src="/imagenes/club-baldos/portada-mockup.png"
        alt="Aplicación web de Club Baldo’s mostrada en ordenador y teléfono móvil"
        width="1586"
        height="992"
      />
    </section>

    <section class="section project-overview">
      <p class="eyebrow">El proyecto</p>

      <div class="project-two-columns">
        <h2>Una plataforma para consultar disponibilidad y reservar online.</h2>

        <div class="project-copy">
          <p>
            Club Baldo’s necesitaba reunir en un mismo espacio digital la
            presentación de sus instalaciones, los servicios disponibles y el
            proceso de reserva.
          </p>

          <p>
            La aplicación permite elegir una actividad, consultar los horarios
            disponibles y completar la reserva sin depender de llamadas o
            mensajes para conocer la disponibilidad.
          </p>
        </div>
      </div>
    </section>

    <section class="section project-challenge">
      <p class="eyebrow">El objetivo</p>

      <div class="project-two-columns">
        <h2>
          Convertir la gestión de diferentes servicios en un proceso sencillo.
        </h2>

        <div class="project-copy">
          <p>
            Cada actividad puede tener horarios, duraciones y condiciones
            diferentes. Toda esa información debía presentarse sin complicar la
            experiencia del usuario.
          </p>

          <p>
            El reto consistió en diseñar un recorrido claro desde la elección
            del servicio hasta la confirmación de la reserva, adaptado tanto a
            ordenador como a teléfono móvil.
          </p>
        </div>
      </div>
    </section>

    <section class="section project-solution">
      <p class="eyebrow">La solución</p>

      <h2>Un recorrido guiado para reservar en pocos pasos.</h2>

      <div class="project-feature-grid">
        <article class="project-feature">
          <p class="project-feature-number">1</p>
          <h3>Elección del servicio</h3>
          <p>
            El usuario comienza seleccionando la actividad o instalación que
            desea reservar.
          </p>
        </article>

        <article class="project-feature">
          <p class="project-feature-number">2</p>
          <h3>Horarios disponibles</h3>
          <p>
            La aplicación muestra la disponibilidad para que el usuario pueda
            elegir una fecha y una hora.
          </p>
        </article>

        <article class="project-feature">
          <p class="project-feature-number">3</p>
          <h3>Reserva personalizada</h3>
          <p>
            El formulario permite indicar los datos de contacto, la duración y
            las opciones adicionales de la reserva.
          </p>
        </article>

        <article class="project-feature">
          <p class="project-feature-number">4</p>
          <h3>Gestión de reservas</h3>
          <p>
            Cada usuario puede consultar sus reservas y mantener organizada su
            actividad desde la propia aplicación.
          </p>
        </article>
      </div>
    </section>

    <section class="section project-showcase">
      <div class="project-showcase-heading">
        <p class="eyebrow">Experiencia de escritorio</p>
        <h2>Servicios, disponibilidad y reservas en una misma aplicación.</h2>
      </div>

      <div class="desktop-mockup">
        <div class="desktop-mockup__top">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="desktop-mockup__screen">
          <img
            src="/imagenes/club-baldos/portada-desktop.png"
            alt="Aplicación web de reservas de Club Baldo’s en ordenador"
            width="2555"
            height="1230"
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

        <h2>Preparada para reservar desde cualquier dispositivo.</h2>

        <p>
          La interfaz se adapta para que los usuarios puedan consultar los
          servicios, comprobar la disponibilidad y completar una reserva
          cómodamente desde la tablet o el teléfono.
        </p>
      </div>

      <img
        class="project-responsive-mockup"
        src="/imagenes/club-baldos/mockup-responsive-dispositivos-real.png"
        alt="Aplicación web de Club Baldo’s mostrada en tablets y teléfono móvil"
        width="1448"
        height="1086"
        loading="lazy"
      />
    </section>

    <section class="section project-result">
      <p class="eyebrow">El resultado</p>

      <div class="project-two-columns">
        <h2>Una experiencia de reserva más directa para clientes y negocio.</h2>

        <div class="project-copy">
          <p>
            La aplicación reúne los servicios del club, la disponibilidad y el
            proceso de reserva dentro de una experiencia única y coherente.
          </p>

          <p>
            Los usuarios pueden organizar su actividad con mayor autonomía,
            mientras que el negocio dispone de un canal digital preparado para
            centralizar las solicitudes de reserva.
          </p>

          <a
            class="button button-secondary"
            href="https://clubbaldos.com/"
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

      <h2>¿Necesitas digitalizar las reservas de tu negocio?</h2>

      <p>
        Cuéntame cómo funciona tu servicio y estudiaremos una solución que
        facilite las reservas y mejore la experiencia de tus clientes.
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
