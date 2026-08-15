import type { SiteContent } from './content-types';

const API = 'https://api.github.com';
const CONTENT_PATH = 'src/data/content.json';

interface RepoConfig {
  token: string;
  owner: string;
  repo: string;
  branch: string;
}

function config(): RepoConfig {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token || !owner || !repo) {
    throw new Error('GitHub storage is not configured');
  }
  return { token, owner, repo, branch };
}

function headers(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

function contentUrl({ owner, repo }: RepoConfig): string {
  return `${API}/repos/${owner}/${repo}/contents/${CONTENT_PATH}`;
}

/** Reads the live file straight from GitHub, bypassing the bundled import. */
export async function getContentFile(): Promise<{ content: SiteContent; sha: string }> {
  const cfg = config();
  const res = await fetch(`${contentUrl(cfg)}?ref=${encodeURIComponent(cfg.branch)}`, {
    headers: headers(cfg.token),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`GitHub read failed (${res.status})`);
  }

  const json = (await res.json()) as { content: string; sha: string };
  const decoded = Buffer.from(json.content, 'base64').toString('utf8');
  return { content: JSON.parse(decoded) as SiteContent, sha: json.sha };
}

export type PutResult =
  | { ok: true; sha: string }
  | { ok: false; conflict: true }
  | { ok: false; conflict: false; error: string };

export async function putContentFile(
  next: SiteContent,
  sha: string,
  message: string,
): Promise<PutResult> {
  const cfg = config();

  // Buffer, not btoa: btoa throws on the Arabic characters in the content.
  const encoded = Buffer.from(`${JSON.stringify(next, null, 2)}\n`, 'utf8').toString('base64');

  const res = await fetch(contentUrl(cfg), {
    method: 'PUT',
    headers: { ...headers(cfg.token), 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, content: encoded, sha, branch: cfg.branch }),
  });

  // A stale sha means someone else wrote since this panel loaded. Never
  // auto-merge - surface it so the admin reloads and re-applies the edit.
  if (res.status === 409 || res.status === 422) {
    return { ok: false, conflict: true };
  }
  if (!res.ok) {
    return { ok: false, conflict: false, error: `GitHub write failed (${res.status})` };
  }

  const json = (await res.json()) as { content: { sha: string } };
  return { ok: true, sha: json.content.sha };
}
