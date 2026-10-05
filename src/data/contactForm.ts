import type { Lang } from './site';

/**
 * Contact form page — measured from garavaglia.test/contact-form/ @ 1920, 2026-07-22
 * EN (garavaglia.test/en/contact-form/): contact column only, centered in 3×1/3 row.
 * Newsletter posts to MagNews / EmailSP (same endpoint as WP).
 * Contattaci posts via FormSubmit.co ajax to contactTo.
 */
export type ContactFormField = {
  name: string;
  type: 'text' | 'email' | 'textarea';
  label: string;
  required?: boolean;
  rows?: number;
};

export type ContactFormContent = {
  title: string;
  metaDescription: string;
  contactHeading: string;
  contactFields: ContactFormField[];
  contactSubmit: string;
  /** Destination inbox (FormSubmit.co ajax endpoint). */
  contactTo: string;
  status: {
    sending: string;
    success: string;
    error: string;
  };
  newsletter?: {
    heading: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    action: string;
    apgroup: string;
    list: string;
  };
  /** IT: 1/6 + 1/3 + 1/3 + 1/6; EN: 1/3 empty + 1/3 form + 1/3 empty */
  layout: 'it-split' | 'en-center';
};

export const contactFormContent: Record<Lang, ContactFormContent> = {
  it: {
    title: 'Contact form - Garavaglia - Grandi scenografie e allestimenti natalizi.',
    metaDescription: 'Contattaci o iscriviti alla newsletter Garavaglia.',
    contactHeading: 'Contattaci',
    contactFields: [
      { name: 'your-name', type: 'text', label: 'Il tuo nome', required: true },
      { name: 'your-email', type: 'email', label: 'La tua email', required: true },
      { name: 'company', type: 'text', label: 'Azienda', required: true },
      {
        name: 'your-message',
        type: 'textarea',
        label: 'Come possiamo aiutarti?',
        rows: 10,
      },
    ],
    contactSubmit: 'Invia',
    contactTo: 'info@garavaglia.eu',
    status: {
      sending: 'Invio in corso…',
      success: 'Messaggio inviato. Ti risponderemo al più presto.',
      error: 'Invio non riuscito. Riprova o scrivi a info@garavaglia.eu.',
    },
    newsletter: {
      heading: 'Newsletter',
      emailLabel: 'Email*',
      emailPlaceholder: 'Inserisci la tua email',
      submit: 'Iscriviti',
      action: 'https://c2i7f.emailsp.net/frontend/subscribe.aspx',
      apgroup: '106',
      list: '1',
    },
    layout: 'it-split',
  },
  en: {
    title: 'Contact form - Garavaglia - Grandi scenografie e allestimenti natalizi.',
    metaDescription: 'Contact Garavaglia.',
    contactHeading: 'Contact us',
    contactFields: [
      { name: 'your-name', type: 'text', label: 'Name', required: true },
      { name: 'your-email', type: 'email', label: 'Email', required: true },
      { name: 'company', type: 'text', label: 'Company', required: true },
      {
        name: 'your-message',
        type: 'textarea',
        label: 'How can we help?',
        rows: 10,
      },
    ],
    contactSubmit: 'Submit',
    contactTo: 'info@garavaglia.eu',
    status: {
      sending: 'Sending…',
      success: 'Message sent. We’ll get back to you soon.',
      error: 'Could not send. Please try again or email info@garavaglia.eu.',
    },
    layout: 'en-center',
  },
};
