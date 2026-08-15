import { unstable_cache } from 'next/cache';
import bundled from '@/data/content.json';
import type { LocalizedText, Partner, SiteContent, Tournament } from './content-types';

/** Purged by the admin save handler so edits appear without a redeploy. */
export const CONTENT_TAG = 'site-content';

const CONTENT_PATH = 'src/data/content.json';

/**
 * The copy committed in the repo. Used when GitHub is unconfigured (local dev
 * without a token) or unreachable, so the site never renders empty.
 */
const fallbackContent = bundled as unknown as SiteContent;

async function fetchFromGitHub(): Promise<SiteContent> {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token || !owner || !repo) return fallbackContent;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${CONTENT_PATH}?ref=${encodeURIComponent(branch)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        cache: 'no-store',
      },
    );
    if (!res.ok) return fallbackContent;

    const json = (await res.json()) as { content: string };
    const decoded = Buffer.from(json.content, 'base64').toString('utf8');
    const parsed = JSON.parse(decoded) as SiteContent;

    // Guard against a malformed file taking the site down.
    if (!Array.isArray(parsed?.tournaments) || !Array.isArray(parsed?.partners)) {
      return fallbackContent;
    }
    return parsed;
  } catch {
    return fallbackContent;
  }
}

/**
 * Cached read. Pages stay fast and static-like; saving from the admin panel
 * calls revalidateTag(CONTENT_TAG), so changes go live within seconds without
 * waiting for a rebuild. The time-based window is only a safety net for edits
 * made outside the panel (e.g. committing the JSON by hand).
 */
const getCachedContent = unstable_cache(fetchFromGitHub, ['site-content-v1'], {
  tags: [CONTENT_TAG],
  revalidate: 300,
});

export async function getContent(): Promise<SiteContent> {
  return getCachedContent();
}

const byOrder = (a: { order: number }, b: { order: number }) => a.order - b.order;

export async function visibleTournaments(): Promise<Tournament[]> {
  const content = await getContent();
  return content.tournaments.filter((t) => t.visible).slice().sort(byOrder);
}

export async function visiblePartners(): Promise<Partner[]> {
  const content = await getContent();
  return content.partners.filter((p) => p.visible).slice().sort(byOrder);
}

/**
 * Collects every admin-entered English->Arabic pair so TranslateButton can
 * translate content that isn't in its hardcoded dictionary.
 */
export function collectDictionary(source: SiteContent): Record<string, string> {
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

export async function buildDynamicDictionary(): Promise<Record<string, string>> {
  return collectDictionary(await getContent());
}
