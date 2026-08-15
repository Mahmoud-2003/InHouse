'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function LoginForm({ pathKey }: { pathKey: string }) {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: pathKey, username, password }),
      });

      if (res.ok) {
        router.refresh();
        return;
      }
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Invalid credentials');
    } catch {
      setError('Network error. Try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="hud-corners clip-card-lg border border-line bg-panel p-8 w-full max-w-sm"
      >
        <div className="w-12 h-12 bg-volt/10 border border-volt/30 clip-tag flex items-center justify-center mb-6">
          <Lock className="w-5 h-5 text-volt" />
        </div>
        <h1 className="font-display text-2xl font-bold text-ink uppercase mb-6">Sign In</h1>

        <label className="block mb-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            className="mt-2 w-full bg-void border border-line px-3 py-2 text-ink text-sm focus:border-volt/60 focus:outline-none"
          />
        </label>

        <label className="block mb-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="mt-2 w-full bg-void border border-line px-3 py-2 text-ink text-sm focus:border-volt/60 focus:outline-none"
          />
        </label>

        {error && (
          <p className="text-valred text-xs mb-4" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={busy}
          className="clip-btn w-full px-6 py-3 bg-volt text-void font-display font-bold text-sm uppercase tracking-wide disabled:opacity-50"
        >
          {busy ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
