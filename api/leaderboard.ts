const DISCORD_API = 'https://discord.com/api/v10';

interface LeaderboardEntry {
  rank: number;
  name: string;
  wins: number;
  losses: number;
  winRate: number;
}

interface DiscordEmbedField {
  name: string;
  value: string;
}

const MEDAL_RANK: Record<string, number> = { '🥇': 1, '🥈': 2, '🥉': 3 };

function parseEntries(fields: DiscordEmbedField[]): LeaderboardEntry[] {
  const entries: LeaderboardEntry[] = [];

  for (const field of fields) {
    const rawName = field.name.trim();
    const rank = MEDAL_RANK[rawName] ?? (rawName.match(/^#(\d+)$/)?.[1] ? Number(rawName.slice(1)) : null);
    if (rank === null) continue;

    const value = field.value
      .replace(/<a?:\w+:\d+>/g, '')
      .replace(/:\w+:/g, '')
      .replace(/`/g, '')
      .trim();

    const statsMatch = value.match(/^(.+?)\s+(\d+)W\s+(\d+)L\s+(\d+)%\s*WR$/i);
    if (!statsMatch) continue;

    const [, name, wins, losses, winRate] = statsMatch;
    entries.push({
      rank,
      name: name.trim(),
      wins: Number(wins),
      losses: Number(losses),
      winRate: Number(winRate),
    });
  }

  return entries.sort((a, b) => a.rank - b.rank);
}

export default async function handler(req: any, res: any) {
  const token = process.env.DISCORD_BOT_TOKEN;
  const channelId = process.env.DISCORD_LEADERBOARD_CHANNEL_ID;

  if (!token || !channelId) {
    res.status(500).json({ error: 'Leaderboard is not configured.' });
    return;
  }

  try {
    const discordRes = await fetch(`${DISCORD_API}/channels/${channelId}/messages?limit=1`, {
      headers: { Authorization: `Bot ${token}` },
    });

    if (!discordRes.ok) {
      res.status(502).json({ error: 'Could not reach Discord.' });
      return;
    }

    const messages = (await discordRes.json()) as any[];
    const latest = messages[0];
    const embed = latest?.embeds?.[0];

    if (!embed) {
      res.status(200).json({ title: 'Leaderboard', entries: [], updatedAt: null });
      return;
    }

    const entries = parseEntries(embed.fields ?? []);

    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
    res.status(200).json({
      title: embed.title ?? 'Leaderboard',
      entries,
      updatedAt: latest.edited_timestamp ?? latest.timestamp ?? null,
    });
  } catch {
    res.status(502).json({ error: 'Could not reach Discord.' });
  }
}
