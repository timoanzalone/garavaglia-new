import type { Lang } from './site';

export type CompanyParagraph = { html: string };

export type CompanyTextBlock = {
  id: string;
  titleTag: 'h1' | 'h2';
  title: string;
  /** Title line-height override (Chi siamo h1 uses 67.2) */
  titleLineHeight?: string;
  colA: CompanyParagraph[];
  colB: CompanyParagraph[];
};

export type CompanyContent = {
  title: string;
  who: CompanyTextBlock;
  what: CompanyTextBlock;
  workshopTriple: string[];
  workshopPair: string[];
  quality: {
    id: string;
    title: string;
    logos: { src: string; width: number; height: number; alt: string }[];
    colA: CompanyParagraph[];
    colB: CompanyParagraph[];
  };
  partners: {
    id: string;
    title: string;
    body: string;
  };
  over: {
    id: string;
    title: string;
    subtitleHtml: string;
    bodyHtml: string;
    buttonLabel: string | null;
    buttonHref: string;
    logo: string;
    images: string[];
  };
  clients: {
    id: string;
    title: string;
    logos: string[];
  };
};

const clientLogos = [
  '/company/clients/diesel.png',
  '/company/clients/ikea.png',
  '/company/clients/auchan.png',
  '/company/clients/esselunga.png',
  '/company/clients/carrefour.png',
  '/company/clients/logo6.jpg',
  '/company/clients/logo7.jpg',
  '/company/clients/logo8.jpg',
  '/company/clients/logo9.jpg',
  '/company/clients/logo10.jpg',
  '/company/clients/logo11.jpg',
  '/company/clients/logo12.jpg',
  '/company/clients/download.png',
  '/company/clients/logo5.jpg',
  '/company/clients/logo4.jpg',
  '/company/clients/logo13.jpg',
  '/company/clients/logo3.jpg',
  '/company/clients/logo2.jpg',
  '/company/clients/logo1.jpg',
];

export const companyContent: Record<Lang, CompanyContent> = {
  it: {
    title: 'Company - Garavaglia - Grandi scenografie e allestimenti natalizi.',
    who: {
      id: 'chisiamo',
      titleTag: 'h1',
      title: 'Chi siamo',
      titleLineHeight: '67.2px',
      colA: [
        {
          html: 'L’azienda nasce dalla necessità di creare anche in Italia un punto di riferimento per la realizzazione di scenografie dedicate al mondo del business.',
        },
        {
          html: 'Con gli anni ci siamo perfezionati e siamo cresciuti fino a diventare <b>l’interlocutore ideale per chiunque voglia coinvolgere, attraverso esperienze ed emozioni sempre nuove, i propri clienti.</b>',
        },
        {
          html: 'Grazie a dinamismo, ricerca costante, controllo attento della qualità, capacità progettuale, conoscenza del mercato e soprattutto grazie alle idee, riusciamo a creare soluzioni sempre nuove ed efficaci e ad offrire in ogni occasione un servizio completo del più alto livello.',
        },
      ],
      colB: [
        {
          html: '<b>Siamo l’unione perfetta di un gruppo progettuale solido e di un team di artisti poliedrici che concretizza ogni richiesta attraverso creatività e perizia.</b>',
        },
        {
          html: 'Non ci limitiamo alla sola realizzazione delle strutture ma riusciamo a creare ogni genere di scenario avvalendoci di una fitta rete di partner che si occupa di ogni aspetto: dagli effetti speciali all’illuminotecnica, dalla stampa fino all’animazione, per dare vita a quel fantastico mondo che esiste solo nei sogni.',
        },
      ],
    },
    what: {
      id: 'cosafacciamo',
      titleTag: 'h2',
      title: 'Cosa facciamo',
      colA: [
        {
          html: 'La gamma delle nostre offerte è tanto vasta quanto articolata. Siamo in grado di progettare, realizzare e assemblare <b>moderni parchi gioco e play ground, villaggi animati, light show, allestimenti natalizi e allestimenti per punti vendita, scenografie, insegne, installazioni promozionali, fino ad arrivare all’organizzazione completa di eventi spettacolari, ludici o educativi, con la completa gestione on site.</b>',
        },
        {
          html: 'Il nostro staff è composto da veri maestri della scultura e formidabili progettisti che riescono a tradurre ogni guizzo creativo in progetti articolati e studiati ad hoc per ogni singolo cliente.',
        },
        {
          html: 'In una superficie di 4.200 mq si svolge l’intera catena produttiva, con ambienti ampi e attrezzati a regola d’arte, ideali per il lavoro di squadra.',
        },
      ],
      colB: [
        {
          html: 'Uno show-room di 500 mq, con un’esposizione permanente e in continuo aggiornamento di scenografie, decorazioni, pupazzi animati e light show, accoglie i clienti nella nostra sede per renderli subito partecipi del nostro lavoro e per mostrare loro anche quello che possiamo realizzare.',
        },
        {
          html: '<b>Ci piace coinvolgere i nostri clienti in ogni aspetto della fase progettuale e realizzativa, perché ascoltando le loro richieste e interpretando i loro sogni possiamo aiutali a creare quelle emozioni che vorrebbero trasmettere e soddisfare ogni loro esigenza.</b>',
        },
      ],
    },
    workshopTriple: [
      '/company/workshop/2.jpg',
      '/company/workshop/foto-fascia-lavorazione.jpg',
      '/company/workshop/3.jpg',
    ],
    workshopPair: ['/company/workshop/07.jpg', '/company/workshop/02.jpg'],
    quality: {
      id: 'quality',
      title: 'Qualità e certificazioni',
      logos: [
        { src: '/company/quality/csicert.jpg', width: 120, height: 57, alt: 'CSI Cert' },
        { src: '/company/quality/accredia.png', width: 65, height: 84, alt: 'Accredia' },
        { src: '/company/quality/iso.png', width: 80, height: 80, alt: 'ISO 9001:2000' },
      ],
      colA: [
        {
          html: 'La qualità è il nostro obiettivo in ogni fase del lavoro. Siamo oggi la sola azienda italiana del settore ad adottare un Sistema di Gestione per la Qualità certificato UNI EN ISO 9001:2000.',
        },
        {
          html: 'Questo garantisce affidabilità, efficienza, processi costantemente controllati, orientamento alla soddisfazione del cliente e al miglioramento continuo.',
        },
        {
          html: 'In ogni sua fase il nostro lavoro si svolge nel rispetto dei più elevati standard di sicurezza e in un’atmosfera studiata per favorire creatività e qualità del lavoro.',
        },
      ],
      colB: [
        {
          html: 'Le nostre creazioni garantiscono la massima sicurezza di utilizzo. Sono inoltre atossiche, ignifughe o certificate autoestinguenti.',
        },
        {
          html: 'In aggiunta, disponiamo in proprio delle tecnologie e degli strumenti più moderni necessari a un’azienda all’avanguardia: automezzi, piattaforme aeree, attrezzature meccaniche, elettroniche e informatiche, a norma di legge in materia di sicurezza e rispetto dell’ambiente.',
        },
      ],
    },
    partners: {
      id: 'partners',
      title: 'Partners',
      body: 'Collaboriamo costantemente con altri partner e professionisti dall’alto profilo qualitativo che ci supportano con la loro esperienza per poter garantire la completa realizzazione ed esecuzione di ogni singolo progetto per dare al cliente un prodotto finito in ogni sua più piccola parte.',
    },
    over: {
      id: 'over',
      title: 'Over.',
      subtitleHtml: 'Una nuova realtà dedicata<br />alla customer experience.',
      bodyHtml:
        'Over è la nuova realtà del gruppo Garavaglia che nasce con l’obiettivo di allargare i servizi fino ad ora offerti con uno sguardo che va oltre la decorazione l’allestimento.<br />Con un approccio strategico, Over analizza le esigenze del cliente, il suo posizionamento, il suo target e sviluppa progetti di comunicazione visiva e allestimenti personalizzati con una forte impronta artistica e una particolare cura del design. Alla base delle realizzazioni c’è sempre un concept creativo e come comune denominatore una nuova visione della Customer Experience.<br />Grazie alla continua ricerca e al lavoro sinergico con partner selezionati, la visione di Over si muove verso il futuro, proponendo materiali, tecniche e soluzioni sostenibili.',
      buttonLabel: 'Scopri Over',
      buttonHref: 'https://www.overproject.it/',
      logo: '/company/over/logo.png',
      images: [
        '/company/over/1.jpg',
        '/company/over/2.jpg',
        '/company/over/3.jpg',
        '/company/over/4.jpg',
      ],
    },
    clients: {
      id: 'clients',
      title: 'Clients',
      logos: clientLogos,
    },
  },
  en: {
    title: 'Company - Garavaglia - Large scenographies and Christmas installations.',
    who: {
      id: 'whoweare',
      titleTag: 'h1',
      title: 'Who we are',
      titleLineHeight: '67.2px',
      colA: [
        {
          html: 'The company began with the desire to create a point of reference in Italy for the realisation of scenography, yet dedicated to the world of business.',
        },
        {
          html: 'Over the years we have perfected this desire and we have grown to become the ideal point of reference for anyone who wants to involve their customers, through their experiences and create emotions.',
        },
        {
          html: 'Thanks to dynamism, constant research, careful control of quality, design skills, knowledge of the market and above all thanks to ideas, we are able to create new and effective solutions and offer a complete service of the highest level of quality in every occasion.',
        },
      ],
      colB: [
        {
          html: '<b>We are the perfect union of a solid project group and a team of multifaceted artists who concretise every request through creativity and expertise.</b>',
        },
        {
          html: 'We do not limit ourselves to the realisation of the structures but we manage to create every kind of scenery using a large network of partners that deal with every aspect: from special effects to lighting, from printing to animation, in oredr to give life to that fantastic world that exists only in dreams.',
        },
      ],
    },
    what: {
      id: 'whatwedo',
      titleTag: 'h2',
      title: 'What we do',
      colA: [
        {
          html: 'The range of our offers is as vast as it is articulated. We are able to design, build and assemble diverse <b>modern playgrounds, animated villages, light shows, Christmas decorations and outfitting for sales points, background sets, signs, promotional installations, up to the complete organisation of spectacular events, or educational games with complete on-site management.</b>',
        },
        {
          html: 'Our staff is made up of true masters of sculpture and formidable designers who are able to transform every creative twist into projects that are articulated and studied ad hoc for each individual client.',
        },
        {
          html: 'The entire production chain is situated in an area of 4,200 square meters, with large, well-equipped rooms ideal for teamwork.',
        },
      ],
      colB: [
        {
          html: 'A 500 square meter showroom, with a permanent exhibition and continuously updated sets, decorations, animated puppets and light shows. All of this welcomes customers to our office to allow them to participate in our work and show them what we are capable of doing.',
        },
        {
          html: '<b>We like to engage our customers in every aspect of the design and the implementation phase. Listening to their requests and interpreting their dreams, so as to help them create the emotions that they would like to transmit and satisfy each of their requirements.</b>',
        },
      ],
    },
    workshopTriple: [
      '/company/workshop/2.jpg',
      '/company/workshop/foto-fascia-lavorazione.jpg',
      '/company/workshop/3.jpg',
    ],
    workshopPair: ['/company/workshop/07.jpg', '/company/workshop/02.jpg'],
    quality: {
      id: 'quality',
      title: 'Quality and certifications',
      logos: [
        { src: '/company/quality/csicert.jpg', width: 120, height: 57, alt: 'CSI Cert' },
        { src: '/company/quality/accredia.png', width: 65, height: 84, alt: 'Accredia' },
        { src: '/company/quality/iso.png', width: 80, height: 80, alt: 'ISO 9001:2000' },
      ],
      colA: [
        {
          html: 'Quality is our goal in every step of our work. Today we are the only Italian company in the sector to adopt a Quality Management System certification UNI EN ISO 9001: 2000.',
        },
        {
          html: 'This guarantees reliability, efficiency, constantly controlled processes, orientation to customer satisfaction and continuous improvement.',
        },
        {
          html: 'At every stage, our work is carried out in compliance with the highest safety standards and in an atmosphere designed to promote creativity and quality of our work.',
        },
      ],
      colB: [
        {
          html: 'Our creations guarantee maximum safety.They are non-toxic, fire-retardant or self-extinguishing certified.',
        },
        {
          html: 'In addition, we have the most modern technologies and tools necessary for a cutting-edge company: vehicles, aerial platforms, machinery, electronic and IT equipment, all legally safe and respectful to the environment.',
        },
      ],
    },
    partners: {
      id: 'partners',
      title: 'Partners',
      body: 'We constantly collaborate with other partners and professionals with a high quality profile who support us with their experience to ensure a complete realisation and execution of each project to give the customer a refined detailed product in every particular way.',
    },
    over: {
      id: 'over',
      title: 'Over.',
      subtitleHtml: 'A new reality dedicated<br />to the customer experience.',
      bodyHtml:
        'Over is the new reality of the Garavaglia group that was born with the aim of widening the services offered until now with a look that goes beyond decoration and staging.<br />With a strategic approach, Over analyses the client’s needs, its positioning, its target and develops visual communication projects and customised installations with a strong artistic imprint and a particular care for design. At the base of the realisations there is always a creative concept and as common denominator a new vision of the Customer Experience.<br />Thanks to continuous research and synergic work with selected partners, Over’s vision moves towards the future, proposing sustainable materials, techniques and solutions.',
      buttonLabel: null,
      buttonHref: 'https://www.overproject.it/',
      logo: '/company/over/logo.png',
      images: [
        '/company/over/1.jpg',
        '/company/over/2.jpg',
        '/company/over/3.jpg',
        '/company/over/4.jpg',
      ],
    },
    clients: {
      id: 'clients',
      title: 'Clients',
      logos: clientLogos,
    },
  },
};
