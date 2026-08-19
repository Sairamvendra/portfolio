'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, type Variants } from 'framer-motion';

/**
 * The 14-day build log as a full-width, center-spine timeline: entries
 * alternate sides on desktop and reveal one by one as the reader scrolls,
 * each with a looping animatic on the opposite side of the spine.
 */

const OBJ = (name: string) => `/projects/ruinrunner/objects/${name}`;

/* Aug 6 — the hover-car takes off, speed lines trailing */
function IgnitionGraphic() {
  return (
    <div className="relative flex items-center">
      <div className="flex flex-col gap-2 mr-4">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            animate={{ x: [0, -26], opacity: [0, 1, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.3, ease: 'linear' }}
            className="block h-1 w-10 bg-neobrutalism-black"
          />
        ))}
      </div>
      <motion.img
        src={OBJ('hover-car.png')}
        alt=""
        animate={{ y: [6, -8, 6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        className="h-16 sm:h-20 w-auto drop-shadow-[4px_6px_0_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}

/* Aug 7 — the leaderboard filling in, arcade initials and all */
function SystemsGraphic() {
  const rows: [string, string][] = [['ACE', '9,420'], ['REX', '7,180'], ['ZED', '5,335']];
  return (
    <div className="w-44 border-3 border-neobrutalism-black bg-neobrutalism-yellow p-3 -rotate-1 shadow-neobrutalism-md">
      {rows.map(([name, score], i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.25, duration: 0.3, repeat: Infinity, repeatDelay: 2.6, repeatType: 'loop' }}
          className="flex items-center gap-2 font-mono font-bold text-sm py-0.5"
        >
          <span className="px-1 bg-neobrutalism-black text-neobrutalism-yellow text-xs">{i + 1}</span>
          <span>{name}</span>
          <span className="ml-auto">{score}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* Aug 8 — a portal breathing open onto a real sky */
function IdentityGraphic() {
  return (
    <div className="relative">
      <motion.div
        animate={{ scale: [0.94, 1, 0.94] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-neobrutalism-black shadow-neobrutalism-md"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/projects/ruinrunner/skies/u3.jpg" alt="" className="w-full h-full object-cover" />
      </motion.div>
      <motion.span
        animate={{ y: [6, -18], opacity: [0, 1, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute -right-4 top-6 w-3 h-3 rotate-45 bg-neobrutalism-yellow border-2 border-neobrutalism-black"
      />
    </div>
  );
}

/* Aug 9–10 — worlds popping in one by one */
function ExpansionGraphic() {
  return (
    <div className="grid grid-cols-3 gap-1.5 rotate-1">
      {Array.from({ length: 9 }, (_, i) => (
        <motion.img
          key={i}
          src={`/projects/ruinrunner/skies/u${i}.jpg`}
          alt=""
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.25, repeat: Infinity, repeatDelay: 2.8, repeatType: 'loop' }}
          className="w-9 h-9 sm:w-11 sm:h-11 object-cover border-2 border-neobrutalism-black"
        />
      ))}
    </div>
  );
}

/* Aug 11 — the warp crystal firing */
function PolishGraphic() {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
      {[0, 1].map(i => (
        <motion.span
          key={i}
          animate={{ scale: [0.4, 1.5], opacity: [1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.8, ease: 'easeOut' }}
          className="absolute inset-2 border-3 border-neobrutalism-black rotate-45"
        />
      ))}
      <motion.span
        animate={{ rotate: [45, 225] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-10 h-10 bg-neobrutalism-yellow border-3 border-neobrutalism-black"
      />
    </div>
  );
}

/* Aug 18–19 — the exploit stamped shut */
function HardeningGraphic() {
  return (
    <div className="relative">
      <motion.img
        src={OBJ('skull.png')}
        alt=""
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        className="h-20 sm:h-24 w-auto"
      />
      <motion.span
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2.4, repeatType: 'loop' }}
        className="absolute -bottom-1 -right-8 px-2 py-0.5 bg-neobrutalism-yellow border-2 border-neobrutalism-black font-black text-[10px] uppercase -rotate-6"
      >
        Patched
      </motion.span>
    </div>
  );
}

const DEVLOG = [
  {
    date: 'Aug 6 · Ignition',
    title: 'From Blender scene to playable game in a day',
    body: 'A cinematic 3D city exploration became a flying-car arcade game: real physics, instanced city detail, SSAO, endless procedural streets.',
    graphic: <IgnitionGraphic />,
  },
  {
    date: 'Aug 7 · Systems',
    title: 'Scoring, hostiles, and a global leaderboard',
    body: 'Combo multipliers and near-miss bonuses, the hostile wave ladder, and a Vercel Blob leaderboard with arcade initials.',
    graphic: <SystemsGraphic />,
  },
  {
    date: 'Aug 8 · Identity',
    title: 'NEO-brutal look and the first new worlds',
    body: 'Ink-outline rendering and a live sky; deep-space portals with see-through previews; touch and gyro controls.',
    graphic: <IdentityGraphic />,
  },
  {
    date: 'Aug 9–10 · Expansion',
    title: 'Eleven biomes and the flight-deck redesign',
    body: 'Seven new biomes, full menu redesign from approved mockups, difficulty decks, the Devil, PWA packaging.',
    graphic: <ExpansionGraphic />,
  },
  {
    date: 'Aug 11 · Polish',
    title: 'Nine universes and the warp',
    body: 'Photographic NASA skies, the warp-crystal hyperburn with pursuit falloff, social link cards.',
    graphic: <PolishGraphic />,
  },
  {
    date: 'Aug 18–19 · Hardening',
    title: 'Variety, fairness, and closed exploits',
    body: 'Fluid morph-target boss animation, per-run world re-rolls, animated bird flocks, the deep-void invulnerability exploit closed.',
    graphic: <HardeningGraphic />,
  },
];

/* the pin pops first, then content sweeps outward from it */
const pinPop: Variants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: 'spring', stiffness: 500, damping: 22 } },
};

/* wipe out of the element's own spine-side edge, so it unveils in place */
const fromEdge = (origin: 'left' | 'right'): Variants => ({
  hidden: { clipPath: origin === 'right' ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' },
  show: { clipPath: 'inset(0 0 0 0)', transition: { delay: 0.18, duration: 0.5, ease: 'easeOut' } },
});

export function DevLog() {
  const ref = useRef<HTMLDivElement>(null);
  // the line tip tracks the 75% viewport mark — same threshold that pops each pin
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.75'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div ref={ref} className="relative overflow-x-clip">
      {/* the spine draws downward with scroll: left rail on mobile, center on desktop */}
      <motion.div
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute left-2 lg:left-[calc(50%-3px)] top-0 bottom-0 w-1.5 bg-neobrutalism-black origin-top"
      />
      <div className="space-y-12 lg:space-y-16">
        {DEVLOG.map((e, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '0px 0px -25% 0px' }}
              className="relative pl-10 lg:pl-0"
            >
              <div
                aria-hidden="true"
                className="absolute top-1 w-5 h-5 left-2 -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2"
              >
                <motion.div
                  variants={pinPop}
                  style={{ rotate: 45 }}
                  className="w-full h-full bg-neobrutalism-yellow border-3 border-neobrutalism-black"
                />
              </div>
              <motion.div
                variants={fromEdge(left ? 'right' : 'left')}
                className={`lg:w-[calc(50%-2rem)] ${left ? 'lg:text-right' : 'lg:ml-auto'}`}
              >
                <div className="inline-block px-3 py-1 bg-neobrutalism-black text-neobrutalism-yellow text-xs font-black uppercase tracking-widest -rotate-1">
                  {e.date}
                </div>
                <h4 className="mt-2 text-xl sm:text-2xl font-black">{e.title}</h4>
                <p className="mt-1 text-base sm:text-lg font-medium leading-relaxed">{e.body}</p>
              </motion.div>
              {/* the animatic fills the empty half opposite the entry (desktop only) */}
              <motion.div
                aria-hidden="true"
                variants={fromEdge(left ? 'left' : 'right')}
                className={`hidden lg:flex absolute inset-y-0 w-[calc(50%-3.5rem)] items-center ${
                  left ? 'right-0 justify-start' : 'left-0 justify-end'
                }`}
              >
                {e.graphic}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
