const GLORIAFOOD_SCRIPT_ID = 'glf-script';
const GLORIAFOOD_BUTTON_SELECTOR = '.glf-button';
const GLORIAFOOD_SCRIPT_SRC = 'https://www.fbgcdn.com/embedder/js/ewm2.js';

const clickOrderButton = (): void => {
  const button = document.querySelector<HTMLSpanElement>(GLORIAFOOD_BUTTON_SELECTOR);
  button?.click();
};

export const openOrderMenu = (): void => {
  if (typeof document === 'undefined') return;

  const existingScript = document.getElementById(GLORIAFOOD_SCRIPT_ID);

  if (!existingScript) {
    const script = document.createElement('script');
    script.id = GLORIAFOOD_SCRIPT_ID;
    script.src = GLORIAFOOD_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', clickOrderButton, { once: true });
    document.body.appendChild(script);
    return;
  }

  clickOrderButton();
};
