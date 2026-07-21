import type { Locale } from '../i18n';

export const heroHeading: Record<Locale, string> = {
  it: "L'arte di creare emozioni.",
  en: 'The art of creating emotions.',
};

export type IntroArea = { label: string; color: string; description: string };

export type IntroContent = {
  titleHtml: string;
  paragraphs: { html: string }[];
  areasTitle: string;
  areas: IntroArea[];
};

export const introContent: Record<Locale, IntroContent> = {
  it: {
    titleHtml: 'Garavaglia.<br />L’arte di creare emozioni.',
    paragraphs: [
      {
        html: 'Da oltre quarant’anni Garavaglia opera nel settore degli allestimenti scenografici per la Grande Distribuzione, fiere e punti vendita, parchi divertimento e aree d’intrattenimento, <b>creando colorati e fantasiosi mondi per emozionare e stupire.</b>',
      },
      {
        html: 'La nostra mission consiste proprio nel costruire intorno ai consumatori delle esperienze sensoriali totali che possano attrarre, coinvolgere e divertire.',
      },
      {
        html: 'Partendo dalle esigenze dei nostri clienti, progettiamo, realizziamo e allestiamo la scenografia perfetta per ricreare atmosfere, far rivivere ricordi e trasmettere sensazioni, riuscendo a conciliare le esigenze di mercato con la realizzazione di piccoli grandi sogni.',
      },
    ],
    areasTitle: 'Le aree principali in cui operiamo sono:',
    areas: [
      {
        label: 'AMUSEMENT:',
        color: '#c51927',
        description: 'aree gioco, scenografie, parchi di divertimento, eventi ludici o educational',
      },
      {
        label: 'EXHIBITION:',
        color: '#2daae2',
        description: 'allestimenti promozionali, fieristici, stand, mockup scenografici',
      },
      {
        label: 'VISUAL MKT:',
        color: '#fdc300',
        description: 'concept store, vetrinistica e allestimenti punto vendita',
      },
      {
        label: 'DECO SHOW:',
        color: '#951b80',
        description:
          'luminarie, allestimenti natalizi e decorativi, personalizzazioni di centri commerciali, spazi espositivi, aree urbane',
      },
      {
        label: 'EDUTAINMENT HUB:',
        color: '#000',
        description: 'format culturali e di intrattenimento innovativi',
      },
    ],
  },
  en: {
    titleHtml: 'Garavaglia.<br />The art of creating emotions.',
    paragraphs: [
      {
        html: 'For over forty years Garavaglia has been working in the sector of scenographic set-ups for large-scale retail trade, exhibitions and sales points, amusement parks and entertainment areas, <b>creating colourful and imaginative worlds to touch our emotions and amaze us</b>.',
      },
      {
        html: 'Our mission directly consists of building around the consumers entire sensory experiences by attracting, engaging and entertaining.',
      },
      {
        html: 'Beginning with the needs of our customers, we design, create and set up the perfect scenography to recreate atmospheres, revive memories and transmit sensations, managing to reconcile market needs with the realisation of small, ‘big dreams’.',
      },
    ],
    areasTitle: 'The main areas in which we operate are:',
    areas: [
      {
        label: 'AMUSEMENT:',
        color: '#c51927',
        description: 'amusement parks, entertainment areas, recreational or educational events',
      },
      {
        label: 'EXHIBITION:',
        color: '#2daae2',
        description: 'exhibition stands, pavilions, scenography',
      },
      {
        label: 'VISUAL MKT:',
        color: '#fdc300',
        description: 'window dressing and set-up for sales points',
      },
      {
        label: 'DECO SHOW:',
        color: '#951b80',
        description: 'outfitting and customisation of shopping centres',
      },
      {
        label: 'EDUTAINMENT HUB:',
        color: '#000',
        description: 'innovative cultural and entertainment formats',
      },
    ],
  },
};

export const portfolioSection: Record<Locale, { title: string; subtitle: string }> = {
  it: {
    title: 'Case Study selezionate',
    subtitle:
      'Una selezione di alcuni progetti che per la loro natura o per la loro complessità sono diventati una piccola grande sfida da compiere in nome dell’emozione e del divertimento.',
  },
  en: {
    title: 'Selected Case Studies',
    subtitle:
      'A selection of some projects that, due to their nature or complexity, have become a small challenge to be performed in the name of emotion and fun.',
  },
};
