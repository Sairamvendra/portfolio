'use client';

import { motion } from 'framer-motion';

/**
 * The Write module's feature prose as a glanceable spec wall: three labelled
 * clusters of chips that pop in staggered on scroll. Same facts, no
 * paragraphs.
 */

const POP = { type: 'spring' as const, stiffness: 280, damping: 18 };
const VIEW = { once: true, margin: '-80px' } as const;

const GROUPS = [
  {
    label: 'The editor',
    chips: [
      'Fountain screenplay schema',
      'Ctrl 1–7 element cycling',
      'Character autocomplete',
      'Live page count + runtime',
      'WGA 9-colour revisions',
      'Side-by-side diff',
      '11 breakdown categories',
      'AI auto-tagger · one transaction',
    ],
  },
  {
    label: 'Analytics',
    chips: ['Dialogue distribution', 'Scene pacing', 'Runtime estimate', 'Bechdel test built in'],
  },
  {
    label: 'AI assist',
    chips: [
      'Scene from a logline',
      'Dialogue polish',
      'Script-aware chat',
      'Four-pass reformat pipeline',
      'Translation',
      'Continuity checks + jump links',
    ],
  },
];

export function WriteFeatureWall() {
  let running = 0;
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEW}
        transition={POP}
        className="text-xl sm:text-2xl font-black leading-snug"
      >
        A TipTap/ProseMirror editor with a custom screenplay schema — everything a working screenwriter
        expects, with an AI crew in the margins.
      </motion.p>
      <div className="mt-7 space-y-6">
        {GROUPS.map((g) => {
          const groupStart = 0.25 + running * 0.06;
          running += g.chips.length;
          return (
            <div key={g.label}>
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEW}
                transition={{ ...POP, delay: groupStart }}
                className="w-fit px-2.5 py-1 bg-neobrutalism-black text-white text-[10px] font-black uppercase tracking-widest -rotate-1"
              >
                {g.label}
              </motion.p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {g.chips.map((c, i) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, y: 12, scale: 0.85 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={VIEW}
                    transition={{ ...POP, delay: groupStart + 0.08 + i * 0.06 }}
                    className="px-2.5 py-1 bg-neobrutalism-white border-2 border-neobrutalism-black text-[11px] font-black uppercase tracking-wider shadow-neobrutalism-sm"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
