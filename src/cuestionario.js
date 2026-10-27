import "./style.css";
import "./cuestionario.css";

const app = document.querySelector("#cuestionario-app");

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

  <main class="questionnaire-main">
    <section class="questionnaire-intro">
      <p class="eyebrow">Antes de empezar</p>

      <h1>Cuestionario inicial para tu nueva página web</h1>

      <p class="questionnaire-lead">
        Estas preguntas me ayudarán a conocer mejor tu negocio, tus objetivos y
        lo que necesitas. No hace falta que tengas todo decidido ni que
        respondas de forma extensa.
      </p>

      <ul class="questionnaire-summary">
        <li>Te llevará aproximadamente 10 minutos.</li>
        <li>Podrás dejar en blanco las preguntas opcionales.</li>
        <li>Revisaremos juntos cualquier detalle que falte.</li>
      </ul>

      <button class="button button-primary" type="button" data-start>
        Empezar cuestionario
      </button>
    </section>

    <section class="questionnaire-shell" data-questionnaire hidden>
      <div class="progress-header">
        <p data-progress-label>Paso 1 de 7</p>
        <p data-progress-section>Información inicial</p>
      </div>

      <div
        class="progress-track"
        role="progressbar"
        aria-label="Progreso del cuestionario"
        aria-valuemin="1"
        aria-valuemax="7"
        aria-valuenow="1"
      >
        <span data-progress-bar></span>
      </div>

      <form
        class="questionnaire-form"
        name="cuestionario-web"
        method="POST"
        data-netlify-honeypot="bot-field"
        novalidate
      >
        <input type="hidden" name="form-name" value="cuestionario-web" />

        <p class="honeypot" aria-hidden="true">
          <label>
            No rellenes este campo

            <input
              type="text"
              name="bot-field"
              tabindex="-1"
              autocomplete="off"
            />
          </label>
        </p>

        <fieldset
          class="question-step"
          data-step
          data-title="Información inicial"
        >
          <legend>Sobre ti y tu proyecto</legend>

          <p class="step-description">
            Empecemos con algunos datos básicos para identificar el proyecto y
            entender brevemente tu actividad.
          </p>

          <div class="field-grid">
            <label>
              Nombre y apellidos
              <input type="text" name="nombre" autocomplete="name" required />
            </label>

            <label>
              Correo electrónico
              <input type="email" name="email" autocomplete="email" required />
            </label>

            <label>
              Nombre del negocio o proyecto
              <input
                type="text"
                name="negocio"
                autocomplete="organization"
                required
              />
            </label>
          </div>

          <label class="full-field">
            ¿A qué se dedica el negocio o proyecto?
            <textarea
              name="actividad"
              rows="4"
              placeholder="Explícalo brevemente con tus propias palabras."
              required
            ></textarea>
          </label>
        </fieldset>

        <fieldset
          class="question-step"
          data-step
          data-title="Punto de partida"
          hidden
        >
          <legend>¿Desde qué punto partimos?</legend>

          <p class="step-description">
            Esto me ayudará a saber si empezamos desde cero o si hay algo que
            debamos conservar, ampliar o mejorar.
          </p>

          <div class="choice-grid">
            <label class="choice-card">
              <input
                type="radio"
                name="situacion-web"
                value="No tengo página web"
                required
              />

              <span>
                <strong>No tengo página web</strong>
                <small>Será una página completamente nueva.</small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="radio"
                name="situacion-web"
                value="Tengo una página web y quiero renovarla"
              />

              <span>
                <strong>Quiero renovar mi página web</strong>
                <small>Ya existe, pero necesita cambios importantes.</small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="radio"
                name="situacion-web"
                value="Tengo una página web y necesito ampliarla"
              />

              <span>
                <strong>Quiero ampliar mi página web</strong>
                <small
                  >Necesito añadir contenido o nuevas funcionalidades.</small
                >
              </span>
            </label>
          </div>

          <label class="conditional-field" data-current-site hidden>
            Dirección de la página actual
            <span class="optional">Opcional</span>

            <input
              type="url"
              name="web-actual"
              placeholder="https://"
              inputmode="url"
            />
          </label>
        </fieldset>

        <fieldset class="question-step" data-step data-title="Objetivos" hidden>
          <legend>¿Qué quieres conseguir con la web?</legend>

          <p class="step-description">
            Puedes seleccionar todas las opciones que sean importantes para tu
            proyecto.
          </p>

          <div class="choice-grid">
            <label class="choice-card">
              <input
                type="checkbox"
                name="objetivos"
                value="Conseguir nuevos clientes"
              />

              <span>
                <strong>Conseguir nuevos clientes</strong>
                <small>
                  Facilitar que nuevas personas encuentren el negocio y
                  contacten.
                </small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="objetivos"
                value="Presentar mis servicios"
              />

              <span>
                <strong>Presentar mis servicios</strong>
                <small> Explicar claramente qué ofrece el negocio. </small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="objetivos"
                value="Transmitir una imagen más profesional"
              />

              <span>
                <strong>Transmitir una imagen más profesional</strong>
                <small>
                  Mejorar la percepción y la confianza en el negocio.
                </small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="objetivos"
                value="Mostrar trabajos o proyectos"
              />

              <span>
                <strong>Mostrar trabajos o proyectos</strong>
                <small>
                  Presentar una selección de trabajos o casos realizados.
                </small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="objetivos"
                value="Recibir solicitudes de presupuesto"
              />

              <span>
                <strong>Recibir solicitudes de presupuesto</strong>
                <small>
                  Facilitar que los clientes expliquen lo que necesitan.
                </small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="objetivos"
                value="Vender productos o servicios"
              />

              <span>
                <strong>Vender productos o servicios</strong>
                <small>
                  Permitir compras o contrataciones desde la página.
                </small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="objetivos"
                value="Gestionar reservas o inscripciones"
              />

              <span>
                <strong>Gestionar reservas o inscripciones</strong>
                <small>
                  Permitir citas, reservas o registros desde la web.
                </small>
              </span>
            </label>
          </div>

          <label class="full-field">
            ¿Qué acción principal quieres que realicen las personas que visiten
            la web?

            <textarea
              name="accion-principal"
              rows="4"
              placeholder="Por ejemplo: contactar, pedir presupuesto, reservar, inscribirse o comprar."
              required
            ></textarea>
          </label>
        </fieldset>

        <fieldset class="question-step" data-step data-title="Público" hidden>
          <legend>¿A quién debe dirigirse la web?</legend>

          <p class="step-description">
            No necesitas definir un perfil de marketing. Una descripción
            sencilla de tus clientes o usuarios habituales es suficiente.
          </p>

          <label class="full-field">
            ¿A qué tipo de clientes o usuarios te diriges?

            <textarea
              name="publico"
              rows="5"
              placeholder="Por ejemplo: familias que quieren reformar su vivienda y buscan un servicio completo."
              required
            ></textarea>
          </label>

          <label class="full-field">
            ¿Trabajas en una zona geográfica concreta?
            <span class="optional">Opcional</span>

            <input
              type="text"
              name="zona"
              placeholder="Por ejemplo: Madrid y alrededores, toda España o servicio online."
            />
          </label>
        </fieldset>

        <fieldset class="question-step" data-step data-title="Contenido" hidden>
          <legend>Contenido principal</legend>

          <p class="step-description">
            No hace falta que decidas las páginas o el menú. Con esta
            información te propondré la estructura más adecuada.
          </p>

          <label class="full-field">
            ¿Qué servicios, productos o contenidos deben tener mayor
            protagonismo?

            <textarea
              name="contenido-principal"
              rows="6"
              placeholder="Cuéntame qué debería encontrar y entender una persona al visitar la web."
              required
            ></textarea>
          </label>

          <label class="full-field">
            ¿Hay alguna información que deba aparecer necesariamente?
            <span class="optional">Opcional</span>

            <textarea
              name="contenido-obligatorio"
              rows="5"
              placeholder="Por ejemplo: precios, equipo, proceso de trabajo, certificaciones, proyectos, ubicación o preguntas frecuentes."
            ></textarea>
          </label>
        </fieldset>

        <fieldset
          class="question-step"
          data-step
          data-title="Estilo visual"
          hidden
        >
          <legend>Identidad y estilo visual</legend>

          <p class="step-description">
            No necesitas conocer términos de diseño. Estas respuestas servirán
            como punto de partida para preparar una propuesta visual adecuada.
          </p>

          <p class="field-question">
            ¿Dispones de logotipo o identidad visual?
          </p>

          <div class="choice-grid choice-grid--two">
            <label class="choice-card">
              <input
                type="radio"
                name="identidad-visual"
                value="Tengo una identidad visual definida"
                required
              />

              <span>
                <strong>Tengo una identidad visual definida</strong>
                <small>
                  Dispongo de logotipo, colores, tipografías o una guía de
                  marca.
                </small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="radio"
                name="identidad-visual"
                value="Tengo logotipo, pero no una identidad completa"
              />

              <span>
                <strong>Tengo logotipo</strong>
                <small>
                  Dispongo de un logotipo, pero no de una identidad completa.
                </small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="radio"
                name="identidad-visual"
                value="No tengo identidad visual"
              />

              <span>
                <strong>Todavía no tengo</strong>
                <small>
                  El proyecto aún no cuenta con una identidad visual.
                </small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="radio"
                name="identidad-visual"
                value="No estoy seguro"
              />

              <span>
                <strong>No estoy seguro</strong>
                <small>
                  Necesito revisar qué materiales podrían utilizarse.
                </small>
              </span>
            </label>
          </div>

          <label class="full-field">
            ¿Cómo te gustaría que se percibiera la web?

            <textarea
              name="percepcion"
              rows="4"
              placeholder="Por ejemplo: cercana, profesional, elegante, enérgica, sencilla o artesanal."
              required
            ></textarea>
          </label>

          <label class="full-field">
            ¿Hay alguna página web que te guste especialmente?
            <span class="optional">Opcional</span>

            <textarea
              name="referencias"
              rows="5"
              placeholder="Puedes añadir enlaces y explicar qué te gusta de cada página."
            ></textarea>
          </label>
        </fieldset>

        <fieldset
          class="question-step"
          data-step
          data-title="Detalles finales"
          hidden
        >
          <legend>Últimos detalles</legend>

          <p class="step-description">
            Esta información me ayudará a valorar el alcance del proyecto y
            preparar los siguientes pasos.
          </p>

          <p class="field-question">
            ¿Necesitas alguna funcionalidad concreta?
            <span class="optional">Opcional</span>
          </p>

          <div class="choice-grid choice-grid--two">
            <label class="choice-card">
              <input
                type="checkbox"
                name="funcionalidades"
                value="Formulario de contacto"
              />
              <span><strong>Formulario de contacto</strong></span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="funcionalidades"
                value="Reservas o citas"
              />
              <span><strong>Reservas o citas</strong></span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="funcionalidades"
                value="Inscripciones"
              />
              <span><strong>Inscripciones</strong></span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="funcionalidades"
                value="Pagos online"
              />
              <span><strong>Pagos online</strong></span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="funcionalidades"
                value="Tienda online"
              />
              <span><strong>Tienda online</strong></span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="funcionalidades"
                value="Área privada"
              />
              <span><strong>Área privada</strong></span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="funcionalidades"
                value="Varios idiomas"
              />
              <span><strong>Varios idiomas</strong></span>
            </label>

            <label class="choice-card">
              <input
                type="checkbox"
                name="funcionalidades"
                value="Blog o noticias"
              />
              <span><strong>Blog o noticias</strong></span>
            </label>
          </div>

          <label class="full-field">
            ¿Necesitas alguna otra funcionalidad?
            <span class="optional">Opcional</span>

            <textarea
              name="otras-funcionalidades"
              rows="4"
              placeholder="Explícala brevemente si no aparece entre las opciones anteriores."
            ></textarea>
          </label>

          <p class="field-question">
            ¿En qué estado están los textos y las imágenes?
          </p>

          <div class="choice-grid choice-grid--two">
            <label class="choice-card">
              <input
                type="radio"
                name="estado-contenidos"
                value="Ya están preparados"
                required
              />
              <span>
                <strong>Ya están preparados</strong>
                <small>Dispongo de los textos y las imágenes necesarios.</small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="radio"
                name="estado-contenidos"
                value="Tengo una parte"
              />
              <span>
                <strong>Tengo una parte</strong>
                <small>Todavía necesito completar algunos contenidos.</small>
              </span>
            </label>

            <label class="choice-card">
              <input
                type="radio"
                name="estado-contenidos"
                value="Necesito ayuda"
              />
              <span>
                <strong>Necesito ayuda</strong>
                <small
                  >Necesito apoyo para preparar los textos o las
                  imágenes.</small
                >
              </span>
            </label>

            <label class="choice-card">
              <input
                type="radio"
                name="estado-contenidos"
                value="Todavía no lo sé"
              />
              <span>
                <strong>Todavía no lo sé</strong>
                <small
                  >Necesito revisar qué materiales tengo disponibles.</small
                >
              </span>
            </label>
          </div>

          <div class="field-grid field-grid--two">
            <label>
              ¿Tienes alguna fecha o plazo en mente?
              <span class="optional">Opcional</span>

              <input
                type="text"
                name="plazo"
                placeholder="Por ejemplo: antes de marzo."
              />
            </label>
          </div>

          <label class="full-field">
            ¿Hay algo más que debería saber?
            <span class="optional">Opcional</span>

            <textarea name="comentarios" rows="5"></textarea>
          </label>

          <label class="privacy-check">
            <input
              type="checkbox"
              name="privacidad"
              value="Aceptada"
              required
            />

            <span>
              He leído la
              <a href="/privacidad.html" target="_blank">
                información sobre privacidad
              </a>
              y acepto que mis datos se utilicen para valorar y responder a mi
              solicitud.
            </span>
          </label>
        </fieldset>

        <div class="questionnaire-actions">
          <button
            class="button button-secondary"
            type="button"
            data-back
            hidden
          >
            Anterior
          </button>

          <button class="button button-primary" type="button" data-next>
            Siguiente
          </button>

          <button
            class="button button-primary"
            type="submit"
            data-submit
            hidden
          >
            Enviar cuestionario
          </button>
        </div>

        <p class="form-error" role="alert" data-error></p>
      </form>
    </section>

    <section class="questionnaire-success" data-success hidden tabindex="-1">
      <p class="eyebrow">Cuestionario enviado</p>

      <h1>Gracias por contarme tu proyecto.</h1>

      <p>
        Revisaré tus respuestas y me pondré en contacto contigo para comentar
        los siguientes pasos.
      </p>

      <a class="button button-secondary" href="/">
        Volver a la página principal
      </a>
    </section>
  </main>
`;

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

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

const intro = document.querySelector(".questionnaire-intro");
const questionnaire = document.querySelector("[data-questionnaire]");
const success = document.querySelector("[data-success]");
const startButton = document.querySelector("[data-start]");

const form = document.querySelector(".questionnaire-form");
const steps = [...document.querySelectorAll("[data-step]")];

const backButton = document.querySelector("[data-back]");
const nextButton = document.querySelector("[data-next]");
const submitButton = document.querySelector("[data-submit]");

const progressLabel = document.querySelector("[data-progress-label]");
const progressSection = document.querySelector("[data-progress-section]");
const progressTrack = document.querySelector("[role='progressbar']");
const progressBar = document.querySelector("[data-progress-bar]");

const errorMessage = document.querySelector("[data-error]");
const currentSiteField = document.querySelector("[data-current-site]");

const totalSteps = 7;
let currentStep = 0;

function updateStep() {
  steps.forEach((step, index) => {
    step.hidden = index !== currentStep;
  });

  const stepNumber = currentStep + 1;

  progressLabel.textContent = `Paso ${stepNumber} de ${totalSteps}`;
  progressSection.textContent = steps[currentStep].dataset.title;

  progressTrack.setAttribute("aria-valuenow", String(stepNumber));
  progressBar.style.width = `${(stepNumber / totalSteps) * 100}%`;

  backButton.hidden = currentStep === 0;
  nextButton.hidden = currentStep === steps.length - 1;
  submitButton.hidden = currentStep !== steps.length - 1;

  errorMessage.textContent = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function validateCurrentStep() {
  const requiredFields = [...steps[currentStep].querySelectorAll("[required]")];

  const invalidField = requiredFields.find((field) => !field.checkValidity());

  if (!invalidField) {
    return true;
  }

  errorMessage.textContent =
    "Revisa las preguntas obligatorias antes de continuar.";

  invalidField.reportValidity();
  invalidField.focus();

  return false;
}

startButton.addEventListener("click", () => {
  intro.hidden = true;
  questionnaire.hidden = false;
  updateStep();
});

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) {
    return;
  }

  currentStep += 1;
  updateStep();
});

backButton.addEventListener("click", () => {
  currentStep -= 1;
  updateStep();
});

form.addEventListener("change", (event) => {
  if (event.target.name !== "situacion-web") {
    return;
  }

  const hasCurrentSite = event.target.value !== "No tengo página web";

  currentSiteField.hidden = !hasCurrentSite;

  if (!hasCurrentSite) {
    currentSiteField.querySelector("input").value = "";
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!validateCurrentStep()) {
    return;
  }

  if (import.meta.env.DEV) {
    errorMessage.textContent =
      "El cuestionario está completo. El envío funcionará cuando la web esté publicada en Netlify.";

    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";
  errorMessage.textContent = "";

  try {
    const formData = new FormData(form);

    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (!response.ok) {
      throw new Error("No se pudo enviar el cuestionario");
    }

    form.reset();

    questionnaire.hidden = true;
    success.hidden = false;
    success.focus();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch {
    errorMessage.textContent =
      "No se pudo enviar el cuestionario. Inténtalo de nuevo o escríbeme directamente.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Enviar cuestionario";
  }
});
