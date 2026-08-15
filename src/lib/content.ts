import raw from '@/data/content.json';
import type { LocalizedText, Partner, SiteContent, Tournament } from './content-types';

export const content = raw as unknown as SiteContent;

const byOrder = (a: { order: number }, b: { order: number }) => a.order - b.order;

export function visibleTournaments(): Tournament[] {
  return content.tournaments.filter((t) => t.visible).slice().sort(byOrder);
}

export function visiblePartners(): Partner[] {
  return content.partners.filter((p) => p.visible).slice().sort(byOrder);
}

/**
 * Collects every admin-entered English->Arabic pair so TranslateButton can
 * translate content that isn't in its hardcoded dictionary.
 */
export function buildDynamicDictionary(source: SiteContent = content): Record<string, string> {
  const dict: Record<string, string> = {};

  const add = (field: LocalizedText | undefined) => {
    if (!field) return;
    const en = field.en?.trim();
    const ar = field.ar?.trim();
    if (en && ar) dict[en] = ar;
  };

  const addAll = (fields: LocalizedText[] | undefined) => fields?.forEach(add);

  for (const t of source.tournaments.filter((t) => t.visible)) {
    add(t.name);
    add(t.subtitle);
    add(t.description);
    add(t.meta);
    addAll(t.format);
    addAll(t.rules);
    addAll(t.prizes);
  }

  for (const p of source.partners.filter((p) => p.visible)) {
    add(p.name);
    add(p.tagline);
    add(p.description);
    addAll(p.features);
    addAll(p.stats);

    // Button labels are derived from the partner name, so derive their
    // translations too rather than expecting the admin to enter them.
    const en = p.name.en?.trim();
    const ar = p.name.ar?.trim();
    if (en && ar) {
      dict[`Visit ${en}`] = `زيارة ${ar}`;
      dict[`Join ${en} Discord`] = `انضم إلى ديسكورد ${ar}`;
    }
  }

  return dict;
}
