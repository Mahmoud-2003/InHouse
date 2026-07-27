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

export async function GET() {
  const token = process.env.DISCORD_BOT_TOKEN;
  const channelId = process.env.DISCORD_LEADERBOARD_CHANNEL_ID;

  if (!token || !channelId) {
    return Response.json({ error: 'Leaderboard is not configured.' }, { status: 500 });
  }

  try {
    const discordRes = await fetch(`${DISCORD_API}/channels/${channelId}/messages?limit=1`, {
      headers: { Authorization: `Bot ${token}` },
    });

    if (!discordRes.ok) {
      return Response.json({ error: 'Could not reach Discord.' }, { status: 502 });
    }

    const messages = (await discordRes.json()) as Array<{
      embeds?: Array<{ title?: string; fields?: DiscordEmbedField[] }>;
      edited_timestamp?: string | null;
      timestamp?: string | null;
    }>;
    const latest = messages[0];
    const embed = latest?.embeds?.[0];

    if (!embed) {
      return Response.json({ title: 'Leaderboard', entries: [], updatedAt: null });
    }

    const entries = parseEntries(embed.fields ?? []);

    return Response.json(
      {
        title: embed.title ?? 'Leaderboard',
        entries,
        updatedAt: latest.edited_timestamp ?? latest.timestamp ?? null,
      },
      { headers: { 'Cache-Control': 's-maxage=120, stale-while-revalidate=300' } }
    );
  } catch {
    return Response.json({ error: 'Could not reach Discord.' }, { status: 502 });
  }
}
