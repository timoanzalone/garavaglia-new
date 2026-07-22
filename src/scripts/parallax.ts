const SELECTOR = '[data-gara-parallax]';
/** Max travel as a fraction of element height (soft). */
const STRENGTH = 0.1;

type ParallaxTarget = {
  el: HTMLElement;
  parent: HTMLElement;
};

let targets: ParallaxTarget[] = [];
let ticking = false;
let listening = false;
let reduceMotionMq: MediaQueryList | null = null;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function collect() {
  targets = [];
  for (const el of document.querySelectorAll<HTMLElement>(SELECTOR)) {
    const parent = el.parentElement;
    if (!parent) continue;
    targets.push({ el, parent });
  }
}

function applyFrame() {
  ticking = false;
  if (prefersReducedMotion() || targets.length === 0) return;

  const vh = window.innerHeight;

  for (const { el, parent } of targets) {
    const rect = parent.getBoundingClientRect();
    // Skip when fully off-screen
    if (rect.bottom < 0 || rect.top > vh) continue;

    const mid = rect.top + rect.height / 2;
    const progress = (mid - vh / 2) / vh; // ~-1 … 1
    const travel = rect.height * STRENGTH;
    const y = Math.max(-travel, Math.min(travel, -progress * travel));

    // Preserve any hover scale by composing only translate on a CSS variable
    el.style.setProperty('--gara-parallax-y', `${y.toFixed(2)}px`);
  }
}

function onScrollOrResize() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(applyFrame);
}

function enableListeners() {
  if (listening) return;
  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize, { passive: true });
  listening = true;
}

function disableListeners() {
  if (!listening) return;
  window.removeEventListener('scroll', onScrollOrResize);
  window.removeEventListener('resize', onScrollOrResize);
  listening = false;
}

function clearTransforms() {
  for (const { el } of targets) {
    el.style.removeProperty('--gara-parallax-y');
  }
}

function onReduceMotionChange() {
  if (prefersReducedMotion()) {
    clearTransforms();
    disableListeners();
  } else {
    enableListeners();
    onScrollOrResize();
  }
}

/** Soft scroll parallax for [data-gara-parallax] backgrounds. */
export function initParallax() {
  collect();

  if (!reduceMotionMq) {
    reduceMotionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reduceMotionMq.addEventListener('change', onReduceMotionChange);
  }

  if (prefersReducedMotion() || targets.length === 0) {
    clearTransforms();
    disableListeners();
    return;
  }

  enableListeners();
  onScrollOrResize();
}
