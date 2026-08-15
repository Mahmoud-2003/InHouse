'use client';

import { useCallback, useEffect, useState } from 'react';
import { LogOut, Plus, RefreshCw, Save, Trash2 } from 'lucide-react';
import type { Partner, SiteContent, Tournament } from '@/lib/content-types';
import { LocalizedField, ListEditor, TextField } from './Field';

type Tab = 'tournaments' | 'partners';

const empty = () => ({ en: '', ar: '' });

function newTournament(order: number): Tournament {
  return {
    id: `tournament-${Date.now()}`,
    visible: true,
    order,
    name: empty(),
    subtitle: empty(),
    description: empty(),
    meta: empty(),
    bannerUrl: '',
    battlefyUrl: '',
    format: [],
    rules: [],
    prizes: [],
  };
}

function newPartner(order: number): Partner {
  return {
    id: `partner-${Date.now()}`,
    visible: true,
    order,
    name: empty(),
    tagline: empty(),
    description: empty(),
    features: [],
    stats: [],
    logoUrl: '',
    websiteUrl: '',
    discordUrl: '',
  };
}

export default function AdminPanel() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [sha, setSha] = useState('');
  const [tab, setTab] = useState<Tab>('tournaments');
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);

  // Always read the live file from GitHub, never the bundled import: right
  // after a save the bundle is stale until the redeploy finishes.
  const fetchContent = useCallback(async () => {
    const res = await fetch('/api/admin/content', { cache: 'no-store' });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || `Failed to load (${res.status})`);
    }
    return (await res.json()) as { content: SiteContent; sha: string };
  }, []);

  const applyLoaded = useCallback((data: { content: SiteContent; sha: string }) => {
    setContent(data.content);
    setSha(data.sha);
    setDirty(false);
    setStatus('ready');
  }, []);

  const applyLoadError = useCallback((error: unknown) => {
    setMessage(error instanceof Error ? error.message : 'Failed to load content');
    setStatus('error');
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchContent()
      .then((data) => {
        if (!cancelled) applyLoaded(data);
      })
      .catch((error) => {
        if (!cancelled) applyLoadError(error);
      });
    return () => {
      cancelled = true;
    };
  }, [fetchContent, applyLoaded, applyLoadError]);

  function reload() {
    setStatus('loading');
    setMessage('');
    fetchContent().then(applyLoaded).catch(applyLoadError);
  }

  // Guard against losing edits to an accidental tab close or reload.
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  function edit(next: SiteContent) {
    setContent(next);
    setDirty(true);
  }

  async function save() {
    if (!content) return;
    setSaving(true);
    setMessage('');

    try {
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, sha }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setMessage(data.error || `Save failed (${res.status})`);
        return;
      }
      setSha(data.sha);
      setDirty(false);
      setMessage('Saved. The site rebuilds automatically — changes go live in about a minute.');
    } catch {
      setMessage('Network error while saving.');
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    window.location.reload();
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-mono text-xs text-mute uppercase tracking-widest">Loading content…</p>
      </div>
    );
  }

  if (status === 'error' || !content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-valred text-sm max-w-md">{message}</p>
        <div className="flex items-center gap-3">
          <button
            onClick={reload}
            className="clip-btn px-6 py-3 bg-volt text-void font-display font-bold text-sm uppercase"
          >
            Retry
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-3 border border-line text-mute hover:text-ink font-mono text-[10px] uppercase tracking-widest"
          >
            <LogOut className="w-3 h-3" /> Sign out
          </button>
        </div>
      </div>
    );
  }

  const tournaments = content.tournaments;
  const partners = content.partners;

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <p className="eyebrow mb-1">Control Panel</p>
          <h1 className="font-display text-3xl font-bold text-ink uppercase">Site Content</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={reload}
            className="flex items-center gap-2 px-4 py-2 border border-line text-mute hover:text-ink font-mono text-[10px] uppercase tracking-widest"
          >
            <RefreshCw className="w-3 h-3" /> Reload
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 border border-line text-mute hover:text-ink font-mono text-[10px] uppercase tracking-widest"
          >
            <LogOut className="w-3 h-3" /> Sign out
          </button>
          <button
            onClick={save}
            disabled={saving || !dirty}
            className="clip-btn flex items-center gap-2 px-6 py-2.5 bg-volt text-void font-display font-bold text-sm uppercase disabled:opacity-40"
          >
            <Save className="w-4 h-4" /> {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>

      {message && (
        <div className="mb-6 border border-line bg-panel p-4">
          <p className="text-sm text-ink">{message}</p>
        </div>
      )}
      {dirty && (
        <p className="mb-6 font-mono text-[10px] text-volt uppercase tracking-widest">
          Unsaved changes
        </p>
      )}

      <div className="flex gap-2 mb-8 border-b border-line">
        {(['tournaments', 'partners'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide border-b-2 -mb-px transition-colors ${
              tab === t ? 'border-volt text-volt' : 'border-transparent text-mute hover:text-ink'
            }`}
          >
            {t} ({t === 'tournaments' ? tournaments.length : partners.length})
          </button>
        ))}
      </div>

      {tab === 'tournaments' && (
        <div className="space-y-6">
          {tournaments.map((tournament, index) => (
            <ItemCard
              key={tournament.id}
              title={tournament.name.en || 'Untitled tournament'}
              visible={tournament.visible}
              onToggleVisible={() =>
                edit({
                  ...content,
                  tournaments: tournaments.map((t, i) =>
                    i === index ? { ...t, visible: !t.visible } : t,
                  ),
                })
              }
              onDelete={() =>
                edit({ ...content, tournaments: tournaments.filter((_, i) => i !== index) })
              }
            >
              <TournamentForm
                tournament={tournament}
                onChange={(next) =>
                  edit({
                    ...content,
                    tournaments: tournaments.map((t, i) => (i === index ? next : t)),
                  })
                }
              />
            </ItemCard>
          ))}
          <AddButton
            label="Add tournament"
            onClick={() =>
              edit({ ...content, tournaments: [...tournaments, newTournament(tournaments.length)] })
            }
          />
        </div>
      )}

      {tab === 'partners' && (
        <div className="space-y-6">
          {partners.map((partner, index) => (
            <ItemCard
              key={partner.id}
              title={partner.name.en || 'Untitled partner'}
              visible={partner.visible}
              onToggleVisible={() =>
                edit({
                  ...content,
                  partners: partners.map((p, i) => (i === index ? { ...p, visible: !p.visible } : p)),
                })
              }
              onDelete={() => edit({ ...content, partners: partners.filter((_, i) => i !== index) })}
            >
              <PartnerForm
                partner={partner}
                onChange={(next) =>
                  edit({ ...content, partners: partners.map((p, i) => (i === index ? next : p)) })
                }
              />
            </ItemCard>
          ))}
          <AddButton
            label="Add partner"
            onClick={() => edit({ ...content, partners: [...partners, newPartner(partners.length)] })}
          />
        </div>
      )}
    </div>
  );
}

function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-5 py-3 border border-volt/40 text-volt font-display text-sm font-semibold uppercase hover:bg-volt/10"
    >
      <Plus className="w-4 h-4" /> {label}
    </button>
  );
}

function ItemCard({
  title,
  visible,
  onToggleVisible,
  onDelete,
  children,
}: {
  title: string;
  visible: boolean;
  onToggleVisible: () => void;
  onDelete: () => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="border border-line bg-panel">
      <div className="flex flex-wrap items-center gap-3 p-4 border-b border-line">
        <button
          onClick={() => setOpen((o) => !o)}
          className="font-display font-semibold text-ink uppercase text-sm flex-1 text-left"
        >
          {open ? '▾' : '▸'} {title}
        </button>

        <button
          onClick={onToggleVisible}
          className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border ${
            visible ? 'border-emerald/40 text-emerald' : 'border-line text-mute'
          }`}
        >
          {visible ? 'Visible' : 'Hidden'}
        </button>

        {confirming ? (
          <span className="flex items-center gap-2">
            <button
              onClick={onDelete}
              className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-valred text-valred"
            >
              Confirm delete
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-line text-mute"
            >
              Cancel
            </button>
          </span>
        ) : (
          <button
            onClick={() => setConfirming(true)}
            aria-label="Delete"
            className="p-1.5 border border-line text-mute hover:text-valred"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {open && <div className="p-4 space-y-5">{children}</div>}
    </div>
  );
}

function ImagePreview({ url }: { url: string }) {
  if (!url) return null;
  return (
    <div className="border border-line bg-void p-2 inline-block">
      <img src={url} alt="Preview" className="max-h-28 w-auto object-contain" />
    </div>
  );
}

function TournamentForm({
  tournament,
  onChange,
}: {
  tournament: Tournament;
  onChange: (next: Tournament) => void;
}) {
  return (
    <>
      <LocalizedField
        label="Name"
        value={tournament.name}
        onChange={(name) => onChange({ ...tournament, name })}
      />
      <LocalizedField
        label="Subtitle"
        value={tournament.subtitle}
        onChange={(subtitle) => onChange({ ...tournament, subtitle })}
      />
      <LocalizedField
        label="Description"
        multiline
        value={tournament.description}
        onChange={(description) => onChange({ ...tournament, description })}
      />
      <LocalizedField
        label="Date / status line"
        value={tournament.meta}
        onChange={(meta) => onChange({ ...tournament, meta })}
      />
      <TextField
        label="Banner image URL"
        value={tournament.bannerUrl}
        placeholder="/imgs/tournament.png or https://..."
        onChange={(bannerUrl) => onChange({ ...tournament, bannerUrl })}
      />
      <ImagePreview url={tournament.bannerUrl} />
      <TextField
        label="Battlefy URL"
        value={tournament.battlefyUrl}
        placeholder="https://battlefy.com/..."
        onChange={(battlefyUrl) => onChange({ ...tournament, battlefyUrl })}
      />
      <ListEditor
        label="Tournament format"
        items={tournament.format}
        onChange={(format) => onChange({ ...tournament, format })}
      />
      <ListEditor
        label="Rules & requirements"
        items={tournament.rules}
        onChange={(rules) => onChange({ ...tournament, rules })}
      />
      <ListEditor
        label="Prizes"
        items={tournament.prizes}
        onChange={(prizes) => onChange({ ...tournament, prizes })}
      />
    </>
  );
}

function PartnerForm({
  partner,
  onChange,
}: {
  partner: Partner;
  onChange: (next: Partner) => void;
}) {
  return (
    <>
      <LocalizedField
        label="Name"
        value={partner.name}
        onChange={(name) => onChange({ ...partner, name })}
      />
      <LocalizedField
        label="Tagline"
        value={partner.tagline}
        onChange={(tagline) => onChange({ ...partner, tagline })}
      />
      <LocalizedField
        label="Description"
        multiline
        value={partner.description}
        onChange={(description) => onChange({ ...partner, description })}
      />
      <TextField
        label="Logo image URL"
        value={partner.logoUrl}
        placeholder="/imgs/logo.png or https://..."
        onChange={(logoUrl) => onChange({ ...partner, logoUrl })}
      />
      <ImagePreview url={partner.logoUrl} />
      <TextField
        label="Website URL"
        value={partner.websiteUrl}
        onChange={(websiteUrl) => onChange({ ...partner, websiteUrl })}
      />
      <TextField
        label="Discord URL"
        value={partner.discordUrl}
        onChange={(discordUrl) => onChange({ ...partner, discordUrl })}
      />
      <ListEditor
        label="Features"
        items={partner.features}
        onChange={(features) => onChange({ ...partner, features })}
      />
      <ListEditor
        label="Stats"
        items={partner.stats}
        onChange={(stats) => onChange({ ...partner, stats })}
      />
    </>
  );
}
