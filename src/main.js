import "./style.css";

document.querySelector("#app").innerHTML = /* HTML */ `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Ales Biliato, inicio">
      <img src="/logos/ales-biliato-logo-horizontal.png" alt="" />
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
      <a class="nav-button" href="#proyectos">Proyectos</a>
      <a class="nav-button" href="#servicios">Servicios</a>
      <a class="nav-button" href="#sobre-mi">Sobre mí</a>
      <a class="nav-button" href="#contacto">Contacto</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <h1>Páginas web claras, modernas y profesionales.</h1>
        <p class="hero-text">
          Diseño y desarrollo de páginas web para pequeñas empresas y
          profesionales que quieren mejorar su presencia digital.
        </p>

        <div class="hero-actions">
          <a class="button button-primary" href="#proyectos">Ver proyectos</a>
          <a class="button button-secondary" href="#contacto">Hablemos</a>
        </div>
      </div>

      <div class="hero-visual">
        <video
          class="hero-video"
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
          preload="auto"
          controlslist="nodownload noplaybackrate"
          aria-label="Animación abstracta de presentación"
        >
          <source src="/videos/hero-abstracto.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    <section id="proyectos" class="section projects-section">
      <p class="eyebrow">Trabajos realizados</p>
      <h2>Proyectos web</h2>

      <div class="projects-grid">
        <a
          class="project-card"
          href="/proyectos/campus-camila-hiruela/"
          aria-label="Ver el proyecto Campus Camila Hiruela"
        >
          <img
            src="/imagenes/campus-camila-hiruela/mockup-portada-real.png"
            alt="Web del Campus Camila Hiruela mostrada en ordenador y teléfono móvil"
            width="1586"
            height="992"
            loading="lazy"
          />

          <div class="project-info">
            <p class="project-type">Web multipágina · Evento deportivo</p>
            <h3>Campus Camila Hiruela</h3>
            <p class="project-description">
              Web multipágina para presentar el campus, facilitar a los
              participantes la inscripción y toda la información del evento.
            </p>
          </div>
        </a>

        <a
          class="project-card"
          href="/proyectos/club-baldos/"
          aria-label="Ver el proyecto Club Baldo’s"
        >
          <img
            src="/imagenes/club-baldos/portada-mockup.png"
            alt="Aplicación web de Club Baldo’s"
          />

          <div class="project-info">
            <p class="project-type">Aplicación web · Reservas deportivas</p>
            <h3>Club Baldo’s</h3>
            <p class="project-description">
              Plataforma de reservas deportivas con una interfaz responsive y un
              panel para gestionar disponibilidad, reservas y pagos.
            </p>
          </div>
        </a>

        <a
          class="project-card"
          href="/proyectos/volleystats/"
          aria-label="Ver el proyecto VolleyStats"
        >
          <img
            src="/imagenes/volleystats/portada-mockup.png"
            alt="Aplicación web VolleyStats"
          />

          <div class="project-info">
            <p class="project-type">Aplicación web · Estadísticas deportivas</p>
            <h3>VolleyStats</h3>
            <p class="project-description">
              Aplicación para registrar partidos de vóley y consultar
              estadísticas por jugador, set y rotación, pensada para ordenador y
              tablet.
            </p>
          </div>
        </a>
      </div>
    </section>

    <section id="servicios" class="section">
      <p class="eyebrow">Diseño y desarrollo</p>
      <h2>Servicios de diseño y desarrollo web</h2>

      <div class="services-grid">
        <a
          class="service-card"
          href="/paginas-web/"
          aria-label="Ver el servicio de páginas web"
        >
          <!-- Tarjeta Páginas web -->
          <img
            src="/imagenes/servicios/servicio-paginas-web.png"
            alt="Vista de una página web en ordenador y móvil"
            loading="lazy"
          />
          <h3>Páginas web</h3>
          <p>
            Diseño y desarrollo de páginas web para negocios, profesionales y
            proyectos que necesitan presentar lo que hacen con claridad.
            Organizo el contenido, cuido la experiencia en móvil y ordenador y
            preparo la web para su publicación.
          </p>
        </a>

        <a
          class="service-card"
          href="/aplicaciones-web/"
          aria-label="Ver el servicio de aplicaciones web"
        >
          <!-- Tarjeta Aplicaciones web -->
          <img
            src="/imagenes/servicios/servicio-aplicaciones-web.png"
            alt="Panel de una aplicación web con gráficos y controles"
            loading="lazy"
          />
          <h3>Aplicaciones web</h3>
          <p>
            Desarrollo herramientas web para necesidades concretas, como
            gestionar reservas o registrar estadísticas. Trabajo tanto la
            interfaz como las funcionalidades para que la aplicación resulte
            útil y fácil de manejar.
          </p>
        </a>
      </div>
    </section>

    <section id="sobre-mi" class="section about-section">
      <p class="eyebrow">Mi enfoque</p>
      <div class="about-grid">
        <div>
          <h2>Diseño y desarrollo con atención al detalle.</h2>
        </div>

        <div class="about-content">
          <p>
            Soy Alessandro Biliato. Diseño y desarrollo páginas web y
            aplicaciones pensadas para ser claras, útiles y fáciles de usar.
          </p>

          <p>
            Me gusta entender cada proyecto, organizar sus contenidos y
            convertir una idea en una experiencia web útil y fácil de utilizar.
          </p>
        </div>
      </div>
    </section>

    <section id="contacto" class="section contact-section">
      <p class="eyebrow">Contacto</p>

      <div class="contact-layout">
        <div class="contact-intro">
          <div class="contact-option">
            <h2>¿Tienes un proyecto en mente?</h2>

            <p>
              Cuéntame qué necesitas y hablamos sobre cómo convertirlo en una
              experiencia web clara, útil y profesional.
            </p>
          </div>
        </div>

        <form class="contact-form" name="contacto" method="POST">
          <input type="hidden" name="form-name" value="contacto" />

          <label for="contacto-nombre">
            Nombre
            <input
              id="contacto-nombre"
              type="text"
              name="nombre"
              autocomplete="name"
              required
            />
          </label>

          <label for="contacto-email">
            Correo electrónico
            <input
              id="contacto-email"
              type="email"
              name="email"
              autocomplete="email"
              required
            />
          </label>

          <label class="contact-form-message" for="contacto-mensaje">
            Cuéntame sobre tu proyecto
            <textarea
              id="contacto-mensaje"
              name="mensaje"
              rows="6"
              required
            ></textarea>
          </label>

          <p class="contact-privacy">
            Alessandro Biliato utilizará tu nombre, correo electrónico y mensaje
            únicamente para responder a tu consulta sobre un proyecto. La base
            jurídica es atender tu solicitud previa a una posible contratación.
            El formulario se gestiona mediante Netlify y las respuestas por
            Gmail. Si no iniciamos un proyecto, eliminaré la consulta tras 12
            meses. Puedes ejercer tus derechos escribiendo a
            <a href="mailto:alesbiliatostudio@gmail.com"
              >alesbiliatostudio@gmail.com</a
            >. <a href="/privacidad.html">Más información sobre privacidad</a>.
          </p>

          <button class="button button-primary" type="submit">
            Enviar mensaje
          </button>
          <p class="contact-feedback" role="status" aria-live="polite"></p>
        </form>
        <div class="contact-option contact-questionnaire">
          <h3>¿Ya sabes qué tipo de proyecto necesitas?</h3>

          <p>
            Completa este breve cuestionario para contarme los detalles y poder
            preparar una estimación más ajustada.
          </p>

          <a class="button button-secondary" href="/cuestionario/">
            Completar cuestionario
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} Ales Biliato</p>
    <a href="/privacidad.html">Privacidad</a>
    <a class="back-to-top" href="#app" aria-label="Volver arriba">↑</a>
  </footer>
`;

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const heroVideo = document.querySelector(".hero-video");

function playHeroVideo() {
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.playsInline = true;

  const playAttempt = heroVideo.play();

  if (playAttempt) {
    playAttempt
      .then(() => {
        heroVideo.controls = false;
        heroVideo.classList.remove("is-playback-blocked");
      })
      .catch(() => {
        heroVideo.controls = true;
        heroVideo.classList.add("is-playback-blocked");
      });
  }
}

if (heroVideo.readyState >= 2) {
  playHeroVideo();
} else {
  heroVideo.addEventListener("loadeddata", playHeroVideo, { once: true });
}

document.addEventListener("touchstart", playHeroVideo, {
  once: true,
  passive: true,
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && heroVideo.paused) {
    playHeroVideo();
  }
});

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

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const contactForm = document.querySelector(".contact-form");
const contactFeedback = document.querySelector(".contact-feedback");
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (import.meta.env.DEV) {
    contactFeedback.textContent =
      "Podrás enviar el formulario cuando la web esté publicada.";
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";
  contactFeedback.textContent = "";

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(contactForm)).toString(),
    });

    if (!response.ok) {
      throw new Error("No se pudo enviar el formulario");
    }

    contactForm.reset();
    contactFeedback.textContent =
      "Mensaje enviado. Gracias por escribir, te responderé pronto.";
  } catch {
    contactFeedback.textContent =
      "No se pudo enviar el mensaje. Inténtalo de nuevo.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Enviar mensaje";
  }
});
