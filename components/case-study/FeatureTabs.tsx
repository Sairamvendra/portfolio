'use client';

import { useState, type ReactNode } from 'react';

/**
 * Neobrutalism tab explorer for case-study feature deep-dives.
 * Server pages pass fully-rendered tab content as ReactNodes; this only
 * owns the active-tab state. `dark` restyles the rail for black section bands.
 */
export interface FeatureTab {
  id: string;
  label: string;
  content: ReactNode;
}

export function FeatureTabs({ tabs, accentBg = 'bg-neobrutalism-cyan', dark = false }: { tabs: FeatureTab[]; accentBg?: string; dark?: boolean }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div role="tablist" aria-label="Features" className="flex flex-wrap gap-2 sm:gap-3">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            onClick={() => setActive(i)}
            className={`px-3 sm:px-4 py-2 border-3 border-neobrutalism-black font-black uppercase tracking-wide text-xs sm:text-sm transition-all duration-150 cursor-pointer ${
              i === active
                ? `${accentBg} text-neobrutalism-black shadow-neobrutalism-md -translate-y-0.5`
                : dark
                  ? 'bg-neobrutalism-black text-white border-white/40 hover:border-white'
                  : 'bg-neobrutalism-white text-neobrutalism-black hover:-translate-y-0.5 hover:shadow-neobrutalism-sm'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={i !== active}
          className={`mt-6 border-3 border-neobrutalism-black shadow-neobrutalism-lg p-6 sm:p-8 ${dark ? 'bg-neobrutalism-black text-white border-white/40' : 'bg-neobrutalism-white text-neobrutalism-black'}`}
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
