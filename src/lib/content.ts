import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

export type AreaEntry = CollectionEntry<'areas'>;
export type CaseStudyEntry = CollectionEntry<'caseStudies'>;

export async function getArea(area: string, lang: Locale): Promise<AreaEntry | undefined> {
  const all = await getCollection('areas');
  const match = all.find((entry) => entry.data.area === area && entry.data.lang === lang);
  if (!match && import.meta.env.DEV) {
    const available = all.map((e) => `${e.data.lang}/${e.data.area}`).sort();
    console.warn(
      `[content] Area not found: ${lang}/${area}. Loaded areas (${all.length}): ${available.join(', ') || '(none)'}`,
    );
  }
  return match;
}

export async function getCaseStudies(lang: Locale): Promise<CaseStudyEntry[]> {
  const all = await getCollection('caseStudies', (entry) => entry.data.lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Home WP portfolio order @ garavaglia.test (IT), 2026-07-21 */
const HOME_FEATURED_ORDER = [
  'express-your-selfie',
  'presepe-san-pietro',
  'chicchi-fritti',
  'avalon',
  'choco-planet',
  'star-hunter',
] as const;

export async function getFeaturedCaseStudies(lang: Locale): Promise<CaseStudyEntry[]> {
  const all = await getCaseStudies(lang);
  const bySlug = new Map(all.map((e) => [e.data.slug, e]));
  const ordered = HOME_FEATURED_ORDER.map((slug) => bySlug.get(slug)).filter(
    (e): e is CaseStudyEntry => Boolean(e),
  );
  if (ordered.length) return ordered;
  return all.slice(0, 6);
}

/** Case studies for an area page, filtered by product category label. */
export async function getCaseStudiesByCategory(
  category: string,
  lang: Locale,
): Promise<CaseStudyEntry[]> {
  const all = await getCaseStudies(lang);
  const needle = category.trim().toLowerCase();
  return all.filter((e) => e.data.category.trim().toLowerCase() === needle);
}

export async function getCaseStudy(
  slug: string,
  lang: Locale,
): Promise<CaseStudyEntry | undefined> {
  const all = await getCollection(
    'caseStudies',
    (entry) => entry.data.slug === slug && entry.data.lang === lang,
  );
  return all[0];
}
