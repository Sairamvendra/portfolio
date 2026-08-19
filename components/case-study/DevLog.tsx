'use client';

import { motion } from 'framer-motion';

/**
 * The 14-day build log as a full-width, center-spine timeline: entries
 * alternate sides on desktop and reveal one by one as the reader scrolls.
 */

const DEVLOG = [
  {
    date: 'Aug 6 · Ignition',
    title: 'From Blender scene to playable game in a day',
    body: 'A cinematic 3D city exploration became a flying-car arcade game: real physics, instanced city detail, SSAO, endless procedural streets.',
  },
  {
    date: 'Aug 7 · Systems',
    title: 'Scoring, hostiles, and a global leaderboard',
    body: 'Combo multipliers and near-miss bonuses, the hostile wave ladder, and a Vercel Blob leaderboard with arcade initials.',
  },
  {
    date: 'Aug 8 · Identity',
    title: 'NEO-brutal look and the first new worlds',
    body: 'Ink-outline rendering and a live sky; deep-space portals with see-through previews; touch and gyro controls.',
  },
  {
    date: 'Aug 9–10 · Expansion',
    title: 'Eleven biomes and the flight-deck redesign',
    body: 'Seven new biomes, full menu redesign from approved mockups, difficulty decks, the Devil, PWA packaging.',
  },
  {
    date: 'Aug 11 · Polish',
    title: 'Nine universes and the warp',
    body: 'Photographic NASA skies, the warp-crystal hyperburn with pursuit falloff, social link cards.',
  },
  {
    date: 'Aug 18–19 · Hardening',
    title: 'Variety, fairness, and closed exploits',
    body: 'Fluid morph-target boss animation, per-run world re-rolls, animated bird flocks, the deep-void invulnerability exploit closed.',
  },
];

export function DevLog() {
  return (
    <div className="relative">
      {/* the spine: left rail on mobile, center on desktop */}
      <div
        aria-hidden="true"
        className="absolute left-2 lg:left-1/2 top-0 bottom-0 w-1.5 bg-neobrutalism-black lg:-translate-x-1/2"
      />
      <div className="space-y-12 lg:space-y-16">
        {DEVLOG.map((e, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36, x: left ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className={`relative pl-10 lg:pl-0 lg:w-[calc(50%-2rem)] ${
                left ? 'lg:pr-0 lg:text-right' : 'lg:ml-auto'
              }`}
            >
              <div
                aria-hidden="true"
                className={`absolute top-1 w-5 h-5 bg-neobrutalism-yellow border-3 border-neobrutalism-black rotate-45 left-2 -translate-x-1/2 ${
                  left
                    ? 'lg:left-auto lg:-right-8 lg:translate-x-1/2'
                    : 'lg:-left-8 lg:-translate-x-1/2'
                }`}
              />
              <div className="inline-block px-3 py-1 bg-neobrutalism-black text-neobrutalism-yellow text-xs font-black uppercase tracking-widest -rotate-1">
                {e.date}
              </div>
              <h4 className="mt-2 text-xl sm:text-2xl font-black">{e.title}</h4>
              <p className="mt-1 text-base sm:text-lg font-medium leading-relaxed">{e.body}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
