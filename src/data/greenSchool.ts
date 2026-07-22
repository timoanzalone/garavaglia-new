import type { Lang } from './site';

/**
 * Green & School landing — measured from garavaglia.test/green-school/ @ 1920, 2026-07-22
 * EN source (garavaglia.test/en/2772-2/) ships the same IT body copy.
 */
export type GreenSchoolContent = {
  title: string;
  metaDescription: string;
  heroHeading: string;
  heroImage: string;
  bodyHtml: string;
  /** Display order L→R as on WP: imm-vert1, imm-vert3, imm-vert2 */
  gallery: { src: string; alt: string }[];
};

const bodyHtml = `
<p>Un evento per riscoprire la campagna e le tradizioni contadine, per toccare con mano la terra e i suoi frutti. Per sensibilizzare bambini, scuole e famiglie sull’importanza della natura.</p>
<p>Un progetto didattico suddiviso in quattro appuntamenti, uno per ogni stagione, dove i bambini potranno familiarizzare con la natura che li circonda, imparare a rispettare i cicli, le fioriture e le fasi delle varie colture. Un occasione per imparare divertendosi.</p>
<p>Nelle gallerie del centro è stata realizzata una spettacolare postazione naturale con tante piante ed essenze orticole, delimitata da un perimetro scenografico.</p>
<p>I bambini potranno svolgere attività legate al mondo della natura: la raccolta, la semina ed il trapianto delle piante ed una divertente prova olfattiva con le piante aromatiche.</p>
`.trim();

const gallery = [
  { src: '/green-school/vert-1.jpg', alt: 'Green & School' },
  { src: '/green-school/vert-3.jpg', alt: 'Green & School' },
  { src: '/green-school/vert-2.jpg', alt: 'Green & School' },
] as const;

export const greenSchoolContent: Record<Lang, GreenSchoolContent> = {
  it: {
    title: 'Green & School - Garavaglia - Grandi scenografie e allestimenti natalizi.',
    metaDescription:
      'Un evento per riscoprire la campagna e le tradizioni contadine, per sensibilizzare bambini, scuole e famiglie sull’importanza della natura.',
    heroHeading: 'Green & School',
    heroImage: '/green-school/hero.jpg',
    bodyHtml,
    gallery: [...gallery],
  },
  en: {
    title: 'Green & School - Garavaglia - Grandi scenografie e allestimenti natalizi.',
    metaDescription:
      'An event to rediscover the countryside and farming traditions, raising awareness among children, schools and families about the importance of nature.',
    heroHeading: 'Green & School',
    heroImage: '/green-school/hero.jpg',
    bodyHtml,
    gallery: [...gallery],
  },
};
