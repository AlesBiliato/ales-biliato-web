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
        <p class="eyebrow">Diseño y desarrollo web</p>

        <h1>
          Una página web profesional para presentar tu negocio con claridad.
        </h1>

        <p class="service-hero-text">
          Diseño y desarrollo de páginas web para pequeñas empresas y
          profesionales que necesitan explicar lo que hacen, transmitir
          confianza y facilitar que nuevos clientes contacten con ellos.
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
          src="/imagenes/servicios/servicio-paginas-web.png"
          alt="Página web adaptada a ordenador y teléfono móvil"
        />
      </div>
    </section>

    <section class="section service-introduction">
      <p class="eyebrow">Una herramienta para tu negocio</p>

      <div class="service-introduction-grid">
        <h2>
          Tu web debe ayudar a entender quién eres, qué ofreces y cómo
          contactar.
        </h2>

        <div>
          <p>
            Una página web no debería ser únicamente una presentación bonita.
            Debe organizar la información de forma clara, responder a las dudas
            de tus posibles clientes y conducirlos hacia una acción concreta.
          </p>

          <p>
            Trabajo cada proyecto desde el contenido, el diseño y el desarrollo
            para crear una web coherente con el negocio, fácil de utilizar y
            preparada para funcionar correctamente en móvil y ordenador.
          </p>
        </div>
      </div>
    </section>

    <section id="que-incluye" class="section service-includes">
      <p class="eyebrow">Qué incluye</p>
      <h2>Todo lo necesario para publicar una web profesional.</h2>

      <div class="service-feature-grid">
        <article class="service-feature">
          <p class="service-feature-number">1</p>
          <h3>Estructura y contenidos</h3>
          <p>
            Organizamos las secciones y la información para que tus servicios se
            entiendan con facilidad y cada página tenga un objetivo claro.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">2</p>
          <h3>Diseño adaptado al negocio</h3>
          <p>
            Creo una interfaz visual coherente con tu identidad, evitando
            plantillas genéricas que podrían pertenecer a cualquier empresa.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">3</p>
          <h3>Adaptación a móviles</h3>
          <p>
            La web se diseña para que el contenido, la navegación y los
            formularios funcionen correctamente en todos los tamaños de
            pantalla.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">4</p>
          <h3>Desarrollo y rendimiento</h3>
          <p>
            Desarrollo una web ligera y cuidada técnicamente para ofrecer una
            experiencia rápida, estable y sencilla de mantener.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">5</p>
          <h3>Formulario de contacto</h3>
          <p>
            Preparo un canal claro para que las personas interesadas puedan
            explicar qué necesitan y ponerse en contacto contigo.
          </p>
        </article>

        <article class="service-feature">
          <p class="service-feature-number">6</p>
          <h3>Base técnica para Google</h3>
          <p>
            Configuro títulos, descripciones, estructura semántica e indexación
            para que los buscadores puedan comprender correctamente la web.
          </p>
        </article>
      </div>
    </section>

    <section class="section service-audience">
      <p class="eyebrow">Para quién es</p>
      <h2>Una solución pensada para negocios que necesitan avanzar.</h2>

      <div class="service-audience-grid">
        <article>
          <h3>Empresas sin página web</h3>
          <p>
            Para negocios que necesitan empezar a tener una presencia digital
            profesional y explicar claramente sus servicios.
          </p>
        </article>

        <article>
          <h3>Profesionales independientes</h3>
          <p>
            Para quienes necesitan presentar su experiencia, mostrar su trabajo
            y facilitar que nuevos clientes contacten.
          </p>
        </article>

        <article>
          <h3>Webs que se han quedado atrás</h3>
          <p>
            Para proyectos con una web antigua, poco clara o difícil de utilizar
            desde un teléfono móvil.
          </p>
        </article>
      </div>
    </section>

    <section class="section service-project">
      <div class="service-project-content">
        <p class="eyebrow">Proyecto relacionado</p>
        <h2>Campus Camila Hiruela</h2>

        <p>
          Una web multipágina creada para presentar un campus deportivo,
          organizar toda la información del evento y facilitar el proceso de
          inscripción de los participantes.
        </p>

        <a
          class="button button-secondary"
          href="https://campuscamilahiruela.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar el proyecto
        </a>
      </div>

      <img
        src="/imagenes/campus-camila-hiruela/mockup-responsive-dispositivos-real.png"
        alt="Web del Campus Camila Hiruela mostrada en tablets y teléfono móvil"
        width="1448"
        height="1086"
        loading="lazy"
      />
    </section>

    <section class="section service-cta">
      <p class="eyebrow">Hablemos</p>
      <h2>¿Necesitas una página web para tu negocio?</h2>

      <p>
        Cuéntame qué haces, qué necesitas y en qué punto se encuentra tu
        proyecto. Revisaremos juntos cuál puede ser la mejor solución.
      </p>

      <a class="button button-primary" href="/#contacto">
        Cuéntame tu proyecto
      </a>
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
