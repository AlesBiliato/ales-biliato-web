// Texto rotativo en vanilla TS (port del RotatingText de React Bits, sin React
// ni motion). Efecto "slide" hacia abajo, por caracteres, con blur y stagger.
//
// Uso: <span data-rotating-text='["Tu negocio","Tu idea"]'></span>
// El primer texto se pinta ya en el HTML; initRotatingText() lo rota.

interface RotatingTextOptions {
  interval?: number; // ms entre cambios
  staggerMs?: number; // retardo entre caracteres
  blurPx?: number;
}

const ENTER_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";
const EXIT_EASING = "cubic-bezier(0.5, 0, 0.75, 0)";
const ENTER_MS = 420;
const EXIT_MS = 300;

function renderText(visual: HTMLElement, text: string): HTMLElement[] {
  visual.textContent = "";
  const chars: HTMLElement[] = [];
  const words = text.split(" ");

  words.forEach((word, wordIndex) => {
    // Cada palabra recorta (overflow hidden) para que el slide entre "desde dentro"
    const wordEl = document.createElement("span");
    wordEl.className = "rt-word";
    for (const char of Array.from(word)) {
      const charEl = document.createElement("span");
      charEl.className = "rt-char";
      charEl.textContent = char;
      wordEl.append(charEl);
      chars.push(charEl);
    }
    visual.append(wordEl);
    if (wordIndex < words.length - 1) visual.append(" ");
  });

  return chars;
}

function animateChars(
  chars: HTMLElement[],
  keyframes: Keyframe[],
  duration: number,
  easing: string,
  staggerMs: number,
): Promise<unknown> {
  return Promise.all(
    chars.map(
      (char, index) =>
        char.animate(keyframes, {
          duration,
          easing,
          delay: index * staggerMs,
          fill: "both",
        }).finished,
    ),
  );
}

export function initRotatingText(
  root: HTMLElement,
  options: RotatingTextOptions = {},
): void {
  const { interval = 1600, staggerMs = 30, blurPx = 10 } = options;

  let texts: string[] = [];
  try {
    texts = JSON.parse(root.dataset.rotatingText ?? "[]");
  } catch {
    return;
  }
  if (texts.length < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const visual = root.querySelector<HTMLElement>(".rt-visual");
  const srOnly = root.querySelector<HTMLElement>(".rt-sr");
  if (!visual) return;

  let index = 0;
  let chars = renderText(visual, texts[0]);
  let timer = 0;
  let busy = false;

  const hidden = (): Keyframe => ({
    transform: "translateY(-100%)",
    opacity: 0,
    filter: `blur(${blurPx}px)`,
  });
  const shown = (): Keyframe => ({
    transform: "translateY(0)",
    opacity: 1,
    filter: "blur(0px)",
  });

  const next = async () => {
    busy = true;
    // Salida: los caracteres bajan y se desenfocan (de primero a último)
    await animateChars(
      chars,
      [
        shown(),
        { transform: "translateY(120%)", opacity: 0, filter: `blur(${blurPx}px)` },
      ],
      EXIT_MS,
      EXIT_EASING,
      staggerMs,
    );

    index = (index + 1) % texts.length;
    if (srOnly) srOnly.textContent = texts[index];
    chars = renderText(visual, texts[index]);

    // Entrada: caen desde arriba, nítidos
    await animateChars(
      chars,
      [hidden(), shown()],
      ENTER_MS,
      ENTER_EASING,
      staggerMs,
    );

    busy = false;
    timer = window.setTimeout(next, interval);
  };

  const start = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(next, interval);
  };

  // Pausa la rotación con la pestaña oculta
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.clearTimeout(timer);
    else if (!busy) start();
  });

  start();
}
