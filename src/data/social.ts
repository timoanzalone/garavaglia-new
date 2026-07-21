import type { Locale } from '../i18n';

export type SocialContent = {
  metaTitle: string;
  heading: string;
  /** Vimeo player video IDs, left → right */
  videos: string[];
  vimeoUrl: string;
  bodyHtml: string;
};

export const socialContent: Record<Locale, SocialContent> = {
  it: {
    metaTitle: 'Social - Garavaglia - Grandi scenografie e allestimenti natalizi.',
    heading: 'Video',
    // measured left→right on garavaglia.test/social/ @ 1920
    videos: ['237094197', '64719782'],
    vimeoUrl: 'https://vimeo.com/user17915139',
    bodyHtml:
      'Questo è il nostro canale Vimeo!<br />Contattaci per poter scaricare i video.<br /><a href="mailto:info@garavaglia.eu">info@garavaglia.eu</a>',
  },
  en: {
    metaTitle: 'Social - Garavaglia - Large scenographies and Christmas installations.',
    heading: 'Video',
    // measured left→right on garavaglia.test/en/social-2/
    videos: ['64719782', '237094197'],
    vimeoUrl: 'https://vimeo.com/user17915139',
    bodyHtml:
      'This is our Vimeo channel!<br />Contact us to download the videos.<br /><a href="mailto:info@garavaglia.eu">info@garavaglia.eu</a>',
  },
};
