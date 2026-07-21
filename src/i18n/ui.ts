import type { Locale } from './config';

type UiStrings = {
  mainMenu: string;
  menu: string;
  previous: string;
  next: string;
  stubNote: string;
  relatedCaseStudies: string;
  place: string;
  client: string;
  privacyPolicy: string;
  cookiePolicy: string;
  footerNotice: string;
  metaDescription: string;
};

/** Shared chrome / UI strings (header, footer, stubs, case-study labels). */
export const ui: Record<Locale, UiStrings> = {
  it: {
    mainMenu: 'Menu principale',
    menu: 'Menu',
    previous: 'Precedente',
    next: 'Successivo',
    stubNote: 'Pagina in costruzione — contenuto in arrivo dalla migrazione WordPress.',
    relatedCaseStudies: 'Case study correlate',
    place: 'Luogo:',
    client: 'Cliente:',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    footerNotice: 'Garavaglia | P.IVA IT03085820961 | 2022 |',
    metaDescription:
      'Progettazione e realizzazione di grandi scenografie, parchi tematici, baby parking, allestimenti natalizi per centri commerciali, visual marketing e stand fieristici',
  },
  en: {
    mainMenu: 'Main Menu',
    menu: 'Menu',
    previous: 'Previous',
    next: 'Next',
    stubNote: 'Page under construction — content coming from the WordPress migration.',
    relatedCaseStudies: 'Related Case Studies',
    place: 'Place:',
    client: 'Client:',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    footerNotice: 'Garavaglia | VAT IT03085820961 | 2022 |',
    metaDescription:
      'Design and creation of large scenographies, theme parks, Christmas installations for shopping centers, visual marketing and trade show stands.',
  },
};

export function t(lang: Locale) {
  return ui[lang];
}
