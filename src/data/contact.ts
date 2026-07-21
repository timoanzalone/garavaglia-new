import type { Lang } from './site';

/**
 * Contatti / Contact — measured from garavaglia.test/contatti/ @ 1920, 2026-07-21
 * EN copy from garavaglia.test/en/contact/ (EN slider empty in local WP; hero mirrored from IT).
 */
export type ContactContent = {
  title: string;
  heroHeading: string;
  heroImage: string;
  parkTitleHtml: string;
  addressHtml: string;
  bodyHtml: string;
  aerialImage: string;
  map: {
    lat: number;
    lng: number;
    zoom: number;
    height: number;
  };
};

export const contactContent: Record<Lang, ContactContent> = {
  it: {
    title: 'Contatti - Garavaglia - Grandi scenografie e allestimenti natalizi.',
    heroHeading: 'Dove siamo',
    heroImage: '/contact/hero.jpg',
    parkTitleHtml: 'North Milan<br />Business Park',
    addressHtml:
      'Via Matteotti 64<br />Cinisello Balsamo (MI), 20092<br />Tel: +39 02 61298883<br /><a href="mailto:info@garavaglia.eu">info@garavaglia.eu</a><br />Fax (si usa ancora?) 🤔: +39 02 66594306',
    bodyHtml:
      'Siamo ubicati nel&nbsp;<i>North Milan Business Park.<br /></i>Il complesso immobiliare gode di un’ottima posizione da un punto di vista logistico: sorge infatti sul fronte dell’autostrada A4 Torino/Trieste al confine tra i Comuni di Milano e Cinisello Balsamo. La vicinanza sia delle maggiori arterie di traffico (uscita della tangenziale a circa 700 mt), sia del centro urbano di Milano, rendono la location particolarmente strategica. L’aeroporto di Linate dista circa 15 km mentre quello di Malpensa circa 45 km. E’ inoltre in corso di realizzazione il prolungamento della linea metropolitana M1 che avrà una propria stazione in prossimità del sito.',
    aerialImage: '/contact/nmbp-topview.jpg',
    map: {
      lat: 45.552206,
      lng: 9.2329366,
      zoom: 12,
      height: 500,
    },
  },
  en: {
    title: 'Contact - Garavaglia - Grandi scenografie e allestimenti natalizi.',
    heroHeading: 'Where we are',
    heroImage: '/contact/hero.jpg',
    parkTitleHtml: 'North Milan<br />Business Park',
    addressHtml:
      'Via Matteotti 64<br />Cinisello Balsamo (MI), 20092<br />Tel: +39 02 61298883<br /><a href="mailto:info@garavaglia.eu">info@garavaglia.eu</a><br />Fax (are faxes still in use?) 🤔: +39 02 66594306',
    bodyHtml:
      'We are located in the <em>North Milan Business Park.</em><br />The real estate complex enjoys an excellent position from a logistic point of view: it lies in front of the A4 Turin / Trieste motorway on the border between the Municipalities of Milan and Cinisello Balsamo. The proximity of the major traffic intersections (exit of the ring road at about 700 meters) and the urban center of Milan, making the location particularly strategic. The Linate airport is about 15 km away while that of Malpensa is about 45 km. The extension of the M1 underground line, which will have its own station near the site, is also underway.',
    aerialImage: '/contact/nmbp-topview.jpg',
    map: {
      lat: 45.552206,
      lng: 9.2329366,
      zoom: 12,
      height: 500,
    },
  },
};
