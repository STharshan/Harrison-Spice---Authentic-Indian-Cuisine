const GLORIAFOOD_SCRIPT_ID = 'glf-script';
const GLORIAFOOD_BUTTON_SELECTOR = '.glf-button';
const GLORIAFOOD_SCRIPT_SRC = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
const GLORIAFOOD_CUID = 'ebfe3305-0575-47d5-b2d3-62123d08a1ba';
const GLORIAFOOD_RUID = '4bb2e59e-0c58-4296-b385-c76c00d2249e';

const clickOrderButton = (): void => {
  const button = document.querySelector<HTMLSpanElement>(GLORIAFOOD_BUTTON_SELECTOR);
  button?.click();
};

const ensureOrderButton = (): HTMLSpanElement => {
  const existingButton = document.querySelector<HTMLSpanElement>(GLORIAFOOD_BUTTON_SELECTOR);

  if (existingButton) {
    return existingButton;
  }

  const button = document.createElement('span');
  button.className = 'glf-button';
  button.dataset.glfCuid = GLORIAFOOD_CUID;
  button.dataset.glfRuid = GLORIAFOOD_RUID;
  button.setAttribute('aria-hidden', 'true');
  button.style.position = 'fixed';
  button.style.left = '-9999px';
  button.style.top = '0';
  button.style.width = '1px';
  button.style.height = '1px';
  button.style.opacity = '0';
  button.style.pointerEvents = 'none';

  document.body.appendChild(button);
  return button;
};

export const openOrderMenu = (): void => {
  if (typeof document === 'undefined') return;

  ensureOrderButton();

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
