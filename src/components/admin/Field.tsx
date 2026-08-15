'use client';

import type { LocalizedText } from '@/lib/content-types';

const inputClass =
  'w-full bg-void border border-line px-3 py-2 text-ink text-sm focus:border-volt/60 focus:outline-none';

const ARABIC_PLACEHOLDER = 'Arabic (optional)';

export function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">{label}</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 ${inputClass}`}
      />
    </label>
  );
}

/** English input paired with an optional Arabic one. */
export function LocalizedField({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: LocalizedText;
  onChange: (value: LocalizedText) => void;
  multiline?: boolean;
}) {
  return (
    <div>
      <span className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">{label}</span>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          {multiline ? (
            <textarea
              rows={4}
              value={value.en}
              onChange={(e) => onChange({ ...value, en: e.target.value })}
              className={inputClass}
              placeholder="English"
            />
          ) : (
            <input
              value={value.en}
              onChange={(e) => onChange({ ...value, en: e.target.value })}
              className={inputClass}
              placeholder="English"
            />
          )}
          <span className="font-mono text-[9px] text-mute/50 uppercase">English</span>
        </div>
        <div>
          {multiline ? (
            <textarea
              rows={4}
              dir="rtl"
              value={value.ar ?? ''}
              onChange={(e) => onChange({ ...value, ar: e.target.value })}
              className={inputClass}
              placeholder={ARABIC_PLACEHOLDER}
            />
          ) : (
            <input
              dir="rtl"
              value={value.ar ?? ''}
              onChange={(e) => onChange({ ...value, ar: e.target.value })}
              className={inputClass}
              placeholder={ARABIC_PLACEHOLDER}
            />
          )}
          <span className="font-mono text-[9px] text-mute/50 uppercase">Arabic — optional</span>
        </div>
      </div>
    </div>
  );
}

/** Editable list of localized bullet points. */
export function ListEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: LocalizedText[];
  onChange: (items: LocalizedText[]) => void;
}) {
  const update = (index: number, next: LocalizedText) =>
    onChange(items.map((item, i) => (i === index ? next : item)));

  const remove = (index: number) => onChange(items.filter((_, i) => i !== index));

  const move = (index: number, delta: number) => {
    const target = index + delta;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div>
      <span className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">{label}</span>
      <div className="mt-2 space-y-3">
        {items.map((item, index) => (
          <div key={index} className="border border-line bg-void/50 p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                value={item.en}
                onChange={(e) => update(index, { ...item, en: e.target.value })}
                className={inputClass}
                placeholder="English"
              />
              <input
                dir="rtl"
                value={item.ar ?? ''}
                onChange={(e) => update(index, { ...item, ar: e.target.value })}
                className={inputClass}
                placeholder={ARABIC_PLACEHOLDER}
              />
            </div>
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => move(index, -1)}
                aria-label="Move up"
                className="font-mono text-[10px] text-mute hover:text-ink px-2 py-1 border border-line"
              >
                &uarr;
              </button>
              <button
                type="button"
                onClick={() => move(index, 1)}
                aria-label="Move down"
                className="font-mono text-[10px] text-mute hover:text-ink px-2 py-1 border border-line"
              >
                &darr;
              </button>
              <button
                type="button"
                onClick={() => remove(index)}
                className="font-mono text-[10px] text-valred hover:text-ink uppercase px-2 py-1 border border-line ml-auto"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...items, { en: '', ar: '' }])}
          className="font-mono text-[10px] text-volt uppercase tracking-widest px-3 py-2 border border-volt/40 hover:bg-volt/10"
        >
          + Add item
        </button>
      </div>
    </div>
  );
}
