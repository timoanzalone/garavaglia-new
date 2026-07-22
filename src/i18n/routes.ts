import { defaultLocale, type Locale } from './config';

/**
 * Canonical route pairs for language switching.
 * Keys are logical page ids; values are locale-specific absolute paths.
 */
export const routes = {
  home: { it: '/', en: '/en' },
  company: { it: '/company', en: '/en/company' },
  amusement: { it: '/amusement', en: '/en/amusement' },
  exhibition: { it: '/exhibition', en: '/en/exhibition' },
  visualMkt: { it: '/visual-mkt', en: '/en/visual-mkt' },
  decoShow: { it: '/deco-show', en: '/en/deco-show' },
  edutainmentHub: { it: '/edutainment-hub', en: '/en/edutainment-hub' },
  caseStudies: { it: '/case-studies', en: '/en/case-studies' },
  gallery: { it: '/gallery', en: '/en/gallery' },
  galleryAmusement: { it: '/gallery/amusement', en: '/en/gallery/amusement' },
  galleryExhibition: { it: '/gallery/exhibition', en: '/en/gallery/exhibition' },
  galleryDecoShow: { it: '/gallery/deco-show', en: '/en/gallery/deco-show' },
  galleryVisualMkt: { it: '/gallery/visual-mkt', en: '/en/gallery/visual-mkt' },
  galleryLuxurySculpture: {
    it: '/gallery/luxury-sculpture',
    en: '/en/gallery/luxury-sculpture',
  },
  social: { it: '/social', en: '/en/social' },
  contact: { it: '/contatti', en: '/en/contact' },
  contactForm: { it: '/contact-form', en: '/en/contact-form' },
  greenSchool: { it: '/green-school', en: '/en/green-school' },
  cookie: { it: '/cookie', en: '/en/cookie' },
} as const;

export type RouteId = keyof typeof routes;

/** Company section anchors differ by language on the WP source. */
const hashMap: Record<string, Partial<Record<Locale, string>>> = {
  chisiamo: { en: 'whoweare' },
  cosafacciamo: { en: 'whatwedo' },
  whoweare: { it: 'chisiamo' },
  whatwedo: { it: 'cosafacciamo' },
};

/**
 * Portfolio slugs missing in one locale → fall back to case-studies index.
 * Keep empty when both IT and EN portfolio routes exist for a slug.
 */
const portfolioAliases: Record<string, Partial<Record<Locale, string>>> = {};

function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  const bare = pathname.split(/[?#]/)[0] || '/';
  if (bare.length > 1 && bare.endsWith('/')) return bare.slice(0, -1);
  return bare || '/';
}

function pathToRouteId(pathname: string): RouteId | null {
  const path = normalizePath(pathname);
  for (const [id, pair] of Object.entries(routes) as [RouteId, (typeof routes)[RouteId]][]) {
    if (pair.it === path || pair.en === path) return id;
  }
  return null;
}

export function localeFromPath(pathname: string): Locale {
  const path = normalizePath(pathname);
  return path === '/en' || path.startsWith('/en/') ? 'en' : defaultLocale;
}

export function homePath(lang: Locale): string {
  return routes.home[lang];
}

export function pathFor(routeId: RouteId, lang: Locale): string {
  return routes[routeId][lang];
}

/**
 * Resolve the equivalent page in the other locale.
 * Handles asymmetric paths (/contatti ↔ /en/contact) and portfolio gaps.
 */
export function switchLocalePath(currentLang: Locale, pathname: string): string {
  const target: Locale = currentLang === 'it' ? 'en' : 'it';
  const [pathPart, hash = ''] = pathname.split('#');
  const path = normalizePath(pathPart);

  const routeId = pathToRouteId(path);
  if (routeId) {
    let next = routes[routeId][target];
    if (hash) {
      const mapped = hashMap[hash]?.[target] ?? hash;
      next = `${next}#${mapped}`;
    }
    return next;
  }

  const portfolioMatch = path.match(/^\/(?:en\/)?portfolio\/([^/]+)$/);
  if (portfolioMatch) {
    const slug = portfolioMatch[1];
    const alias = portfolioAliases[slug]?.[target];
    if (alias) return alias;
    return target === 'en' ? `/en/portfolio/${slug}` : `/portfolio/${slug}`;
  }

  // Generic prefix swap as last resort
  if (target === 'en') {
    if (path === '/' || path === '') return '/en';
    return `/en${path}`;
  }
  if (path === '/en') return '/';
  return path.replace(/^\/en/, '') || '/';
}

export function portfolioBase(lang: Locale): string {
  return lang === 'it' ? '/portfolio' : '/en/portfolio';
}
