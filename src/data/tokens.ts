/**
 * Garavaglia design tokens — sourced from Avada/Fusion options (garavaglia.test).
 * Single source of truth for colors, type, space, and layout.
 * CSS mirror: src/styles/tokens.css
 */

export const colors = {
  brand: {
    primary: '#96c222',
    hover: '#a0ce4e',
    dark: '#54770f',
  },
  text: {
    default: '#747474',
    strong: '#333333',
    black: '#000000',
    muted: '#5a5d62',
    inverse: '#ffffff',
  },
  surface: {
    page: '#ffffff',
    header: '#ffffff',
    footer: '#96c222',
    copyright: '#ffffff',
    dropdown: '#f2efef',
    dropdownHover: '#f8f8f8',
    border: '#e5e5e5',
    dropdownSep: '#dcdadb',
  },
  area: {
    amusement: '#c51927',
    exhibition: '#2daae2',
    visual: '#fdc300',
    deco: '#951b80',
    edu: '#333333',
  },
  social: {
    facebook: '#3b5998',
    // footer icons on green bar use white
  },
} as const;

export const typography = {
  body: {
    family: '"Open Sans", Arial, Helvetica, sans-serif',
    size: '15px',
    lineHeight: '1.7',
    weight: '400',
    color: colors.text.default,
  },
  heading: {
    family: '"Raleway", Arial, Helvetica, sans-serif',
    weight: '400',
    color: colors.text.strong,
  },
  nav: {
    family: '"Montserrat", Arial, Helvetica, sans-serif',
    size: '14px',
    weight: '400',
    color: colors.text.black,
    letterSpacing: '0px',
  },
  scale: {
    h1: { size: '50px', lineHeight: '1.4' },
    h2: { size: '48px', lineHeight: '1.2' },
    h3: { size: '16px', lineHeight: '1.5' },
    h4: { size: '24px', lineHeight: '1.5' },
    h5: { size: '24px', lineHeight: '1.5' },
    h6: { size: '11px', lineHeight: '1.5' },
    hero: { size: '60px', lineHeight: '72px', family: 'Raleway' },
    navDropdown: { size: '13px' },
    footerHeading: { size: '18px' },
    copyright: { size: '12px' },
  },
} as const;

export const layout = {
  siteWidth: '1280px',
  contentPadding: '40px', // hundredp_padding
  headerHeight: '84px', // nav_height
  logo: { width: 219, height: 50, marginTop: '15px' },
  navPadding: '45px', // sticky nav padding reference
  dropdownWidth: '180px',
  dropdownTopBorder: '3px',
  portfolioGap: '20px',
  portfolioColumns: 3,
} as const;

export const effects = {
  portfolioRollover: {
    direction: 'bottom',
    gradientTop: colors.brand.primary,
    gradientBottom: colors.brand.primary,
    text: '#ffffff',
  },
  slideshow: {
    speed: 7000,
    autoplay: true,
  },
  menu: {
    highlightStyle: 'bar',
    highlightColor: colors.brand.hover,
    subBg: colors.surface.dropdown,
    subColor: colors.text.strong,
    hoverFirst: colors.text.strong,
  },
} as const;

export const fonts = {
  google: [
    'Open+Sans:wght@400;600;700',
    'Raleway:wght@400;500;600;700',
    'Montserrat:wght@400;500;600;700',
  ],
} as const;

/** Tailwind-friendly flat map for docs / Story-like page */
export const tokenGroups = [
  {
    name: 'Brand',
    items: [
      { name: 'primary', value: colors.brand.primary, note: 'Avada primary_color / footer / rollover' },
      { name: 'hover', value: colors.brand.hover, note: 'menu_highlight_background' },
      { name: 'dark', value: colors.brand.dark, note: 'darker green accent in CSS' },
    ],
  },
  {
    name: 'Text',
    items: [
      { name: 'body', value: colors.text.default, note: 'body_typography color' },
      { name: 'strong', value: colors.text.strong, note: 'headings / menu hover' },
      { name: 'black', value: colors.text.black, note: 'nav default' },
      { name: 'muted', value: colors.text.muted, note: 'footer text on green' },
    ],
  },
  {
    name: 'Areas',
    items: [
      { name: 'amusement', value: colors.area.amusement, note: 'home intro label' },
      { name: 'exhibition', value: colors.area.exhibition, note: 'home intro label' },
      { name: 'visual', value: colors.area.visual, note: 'home intro label' },
      { name: 'deco', value: colors.area.deco, note: 'home intro label' },
      { name: 'edu', value: colors.area.edu, note: 'edutainment label' },
    ],
  },
  {
    name: 'Surfaces',
    items: [
      { name: 'page', value: colors.surface.page },
      { name: 'header', value: colors.surface.header },
      { name: 'footer', value: colors.surface.footer, note: 'bright green bar — not dark' },
      { name: 'dropdown', value: colors.surface.dropdown },
      { name: 'border', value: colors.surface.border },
    ],
  },
] as const;
