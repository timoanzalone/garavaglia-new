import type { Locale } from '../i18n';
import { homePath as i18nHomePath, switchLocalePath } from '../i18n';

/** @deprecated Prefer `Locale` from `src/i18n` */
export type Lang = Locale;

export const brand = {
  primary: '#96c222',
  accentHover: '#a0ce4e',
  areas: {
    amusement: '#c51927',
    exhibition: '#2daae2',
    visual: '#fdc300',
    deco: '#951b80',
    edu: '#333333',
  },
} as const;

export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navByLang: Record<Lang, NavItem[]> = {
  it: [
    {
      label: 'COMPANY',
      href: '/company',
      children: [
        { label: 'Chi siamo', href: '/company#chisiamo' },
        { label: 'Cosa facciamo', href: '/company#cosafacciamo' },
        { label: 'Qualità e certificazioni', href: '/company#quality' },
        { label: 'Partner', href: '/company#partners' },
        { label: 'Over', href: '/company#over' },
        { label: 'Clients', href: '/company#clients' },
      ],
    },
    {
      label: 'AREE',
      href: '/amusement',
      children: [
        { label: 'AMUSEMENT: Aree gioco, scenografie, eventi di intrattenimento', href: '/amusement' },
        { label: 'EXHIBITION: Allestimenti promozionali, mockup scenografici', href: '/exhibition' },
        { label: 'VISUAL MKT: Concept store, vetrinistica, allestimenti pdv', href: '/visual-mkt' },
        { label: 'DECO SHOW: Allestimenti natalizi e decorativi, luminarie', href: '/deco-show' },
        { label: 'EDUTAINMENT HUB: format culturali e di intrattenimento', href: '/edutainment-hub' },
      ],
    },
    { label: 'CASE STUDY', href: '/case-studies' },
    {
      label: 'GALLERY',
      href: '/gallery',
      children: [
        { label: 'AMUSEMENT', href: '/gallery/amusement' },
        { label: 'EXHIBITION', href: '/gallery/exhibition' },
        { label: 'DECO SHOW', href: '/gallery/deco-show' },
        { label: 'VISUAL MKT', href: '/gallery/visual-mkt' },
        { label: 'LUXURY SCULPTURE', href: '/gallery/luxury-sculpture' },
      ],
    },
    { label: 'SOCIAL', href: '/social' },
    { label: 'CONTATTI', href: '/contatti' },
  ],
  en: [
    {
      label: 'COMPANY',
      href: '/en/company',
      children: [
        { label: 'Who we are', href: '/en/company#whoweare' },
        { label: 'What we do', href: '/en/company#whatwedo' },
        { label: 'Quality and certifications', href: '/en/company#quality' },
        { label: 'Partners', href: '/en/company#partners' },
        { label: 'Over', href: '/en/company#over' },
        { label: 'Clients', href: '/en/company#clients' },
      ],
    },
    {
      label: 'AREAS',
      href: '/en/amusement',
      children: [
        { label: 'AMUSEMENT', href: '/en/amusement' },
        { label: 'EXHIBITION', href: '/en/exhibition' },
        { label: 'DECO SHOW', href: '/en/deco-show' },
        { label: 'VISUAL MKT', href: '/en/visual-mkt' },
        { label: 'EDUTAINMENT HUB', href: '/en/edutainment-hub' },
      ],
    },
    { label: 'CASE STUDY', href: '/en/case-studies' },
    {
      label: 'GALLERY',
      href: '/en/gallery',
      children: [
        { label: 'AMUSEMENT', href: '/en/gallery/amusement' },
        { label: 'EXHIBITION', href: '/en/gallery/exhibition' },
        { label: 'DECO SHOW', href: '/en/gallery/deco-show' },
        { label: 'VISUAL MKT', href: '/en/gallery/visual-mkt' },
        { label: 'LUXURY SCULPTURE', href: '/en/gallery/luxury-sculpture' },
      ],
    },
    { label: 'SOCIAL', href: '/en/social' },
    { label: 'CONTACT', href: '/en/contact' },
  ],
};

export const homeSlides = [
  { image: '/home/slide-presepe.jpg', hasHeading: true },
  { image: '/home/slide-elephant.jpg', hasHeading: false },
  { image: '/home/slide-chicken.jpg', hasHeading: false },
  { image: '/home/slide-seasonal.jpg', hasHeading: false },
  { image: '/home/slide-workshop.jpg', hasHeading: false },
  { image: '/home/slide-1.jpg', hasHeading: false },
  { image: '/home/slide-3.jpg', hasHeading: false },
  { image: '/home/slide-4.jpg', hasHeading: false },
  { image: '/home/slide-5.jpg', hasHeading: false },
] as const;

export type HomeProject = {
  title: string;
  slug: string;
  image: string;
  color: string;
};

export const homeProjects: Record<Lang, HomeProject[]> = {
  it: [
    { title: 'Express your selfie', slug: 'express-your-selfie', image: '/portfolio/express-your-selfie.jpg', color: brand.areas.amusement },
    { title: 'Presepe San Pietro', slug: 'presepe-san-pietro', image: '/portfolio/presepe-san-pietro.jpg', color: brand.areas.deco },
    { title: 'Chicchi & Fritti', slug: 'chicchi-fritti', image: '/portfolio/chicchi-fritti.jpg', color: brand.areas.visual },
    { title: 'Avalon', slug: 'avalon', image: '/portfolio/avalon.jpg', color: brand.areas.amusement },
    { title: 'Choco Planet', slug: 'choco-planet', image: '/portfolio/choco-planet.jpg', color: brand.areas.amusement },
    { title: 'Star Hunter', slug: 'star-hunter', image: '/portfolio/star-hunter.jpg', color: brand.areas.amusement },
  ],
  en: [
    { title: 'Chicchi & Fritti', slug: 'chicchi-fritti', image: '/portfolio/chicchi-fritti.jpg', color: brand.areas.visual },
    { title: 'Choco Planet', slug: 'choco-planet', image: '/portfolio/choco-planet.jpg', color: brand.areas.amusement },
    { title: 'Comix Movie', slug: 'comix-movie', image: '/portfolio/comix-movie.jpg', color: brand.areas.amusement },
    { title: 'Ikea Tiare And The Ancient Civilisations', slug: 'ikea-tiare', image: '/portfolio/ikea-tiare.jpg', color: brand.areas.amusement },
    { title: 'Kiddyland, What Do I Want To Do When I Grow Up?', slug: 'kiddyland', image: '/portfolio/kiddyland.jpg', color: brand.areas.amusement },
    { title: 'The Great Tree in Piazza Gae Aulenti', slug: 'gae-aulenti', image: '/portfolio/gae-aulenti.jpg', color: brand.areas.deco },
  ],
};

/** Home area banners — padding / bg-position measured on garavaglia.test @ 1920 */
export const areaBanners = [
  {
    backgroundImage: '/areas/amusement-banner.jpg',
    backgroundPosition: 'center top',
    /* WP: pad 175×2 + logo 176 + column margin-bottom 20 = 546 */
    padding: '175px 30px 195px',
    logo: '/areas/amusement-logo.png',
    logoAlt: 'Amusement',
    logoWidth: 412,
    logoHeight: 176,
    href: { it: '/amusement', en: '/en/amusement' },
  },
  {
    backgroundImage: '/areas/exhibition-banner.jpg',
    backgroundPosition: 'center center',
    padding: '150px 30px 200px',
    logo: '/areas/exhibition-logo.png',
    logoAlt: 'Exhibition',
    logoWidth: 374,
    logoHeight: 229,
    href: { it: '/exhibition', en: '/en/exhibition' },
  },
  {
    backgroundImage: '/areas/visual-banner.jpg',
    backgroundPosition: 'center center',
    padding: '150px 30px 200px',
    logo: '/areas/visual-logo.png',
    logoAlt: 'Visual MKT',
    logoWidth: 371,
    logoHeight: 230,
    href: { it: '/visual-mkt', en: '/en/visual-mkt' },
  },
  {
    backgroundImage: '/areas/deco-banner.jpg',
    backgroundPosition: 'center bottom',
    padding: '200px 30px 150px',
    logo: '/areas/deco-logo.png',
    logoAlt: 'Deco Show',
    logoWidth: 374,
    logoHeight: 229,
    href: { it: '/deco-show', en: '/en/deco-show' },
  },
  {
    backgroundImage: '/areas/edu-banner.jpg',
    backgroundPosition: 'center center',
    padding: '200px 30px 150px',
    logo: '/areas/edu-logo.png',
    logoAlt: 'Edutainment Hub',
    logoWidth: 379,
    logoHeight: 181,
    href: { it: '/edutainment-hub', en: '/en/edutainment-hub' },
  },
] as const;

export function homePath(lang: Lang) {
  return i18nHomePath(lang);
}

/** @deprecated Prefer `switchLocalePath` from `src/i18n` */
export function switchLangPath(lang: Lang, pathname: string) {
  return switchLocalePath(lang, pathname);
}
