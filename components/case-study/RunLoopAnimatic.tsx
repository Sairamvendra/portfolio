'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * Anatomy of a run as an auto-playing slide deck — same format as
 * WhoItsForAnimatic on /visualstudio (chip, counter, big title, animated
 * pictogram band, bullet), with the game's own object renders as pictograms.
 */

const HOLD_MS = 3600;
const OBJ = (name: string) => `/projects/ruinrunner/objects/${name}`;

const pop = (i: number, repeatDelay = 2.4) => ({
  initial: { opacity: 0, scale: 0.6, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { delay: 0.25 + i * 0.12, duration: 0.32, repeat: Infinity, repeatDelay, repeatType: 'loop' as const },
});

/* 01 — the hover-car threading obstacles */
function LoopGraphic() {
  return (
    <div className="relative flex items-center gap-6">
      {[0, 1].map(i => (
        <div key={i} className={`w-10 h-28 sm:w-12 sm:h-36 bg-neobrutalism-black ${i === 0 ? '-rotate-2' : 'rotate-2 self-start'}`} />
      ))}
      <motion.img
        src={OBJ('hover-car.png')}
        alt=""
        aria-hidden="true"
        animate={{ x: [-70, 60, -70], y: [10, -18, 10] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-6 h-14 sm:h-20 w-auto drop-shadow-[4px_6px_0_rgba(0,0,0,0.3)]"
      />
      <div className="w-10 h-24 sm:w-12 sm:h-32 bg-neobrutalism-black rotate-1 self-end" />
    </div>
  );
}

/* 02 — the threat ladder popping in tier by tier */
function LadderGraphic() {
  const ships = ['enemy-saucer.png', 'enemy-dart.png', 'enemy-gunship.png', 'enemy-drone.png'];
  return (
    <div className="flex items-end gap-3 sm:gap-5">
      {ships.map((s, i) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <motion.img {...pop(i)} src={OBJ(s)} alt="" aria-hidden="true" className="h-12 sm:h-16 w-auto" />
          <span className="px-1.5 py-0.5 bg-neobrutalism-black text-white font-black text-[10px] sm:text-xs">T{i + 1}</span>
        </div>
      ))}
    </div>
  );
}

/* 03 — the Devil and his timer */
function DevilGraphic() {
  return (
    <div className="flex items-center gap-6 sm:gap-10">
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0">
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-3 border-neobrutalism-yellow"
        />
        <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-neobrutalism-yellow text-sm sm:text-base">
          T−60s
        </div>
      </div>
      <motion.img
        src={OBJ('devil.png')}
        alt=""
        aria-hidden="true"
        animate={{ x: [16, 0, 16] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="h-32 sm:h-44 w-auto"
      />
    </div>
  );
}

/* 04 — a portal opening onto a real sky */
function VoidGraphic() {
  return (
    <div className="relative">
      <motion.div
        animate={{ scale: [0.92, 1, 0.92] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-5 border-neobrutalism-yellow shadow-neobrutalism-md"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/projects/ruinrunner/skies/u7.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover" />
      </motion.div>
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          aria-hidden="true"
          animate={{ y: [6, -22], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.5 }}
          className={`absolute w-3 h-3 rotate-45 bg-neobrutalism-yellow border-2 border-neobrutalism-black ${
            i === 0 ? '-right-4 top-8' : i === 1 ? '-left-5 bottom-10' : '-right-7 bottom-4'
          }`}
        />
      ))}
    </div>
  );
}

/* 05 — the incident report writing itself */
function WreckedGraphic() {
  return (
    <div className="w-48 sm:w-64 border-3 border-white/60 p-4 sm:p-5">
      <span className="font-heading font-black uppercase text-2xl sm:text-3xl text-[#FF4911]">Wrecked</span>
      <div className="mt-3 space-y-2">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 + i * 0.35, duration: 0.3, repeat: Infinity, repeatDelay: 2.2, repeatType: 'loop' }}
            className="h-2 bg-white/70 origin-left"
            style={{ width: `${85 - i * 25}%` }}
          />
        ))}
      </div>
      <motion.span
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="mt-4 inline-block px-2 py-1 bg-neobrutalism-yellow text-neobrutalism-black font-black text-xs uppercase"
      >
        ▸ Fly again
      </motion.span>
    </div>
  );
}

type Slide = {
  bg: string;
  text: string;
  chipBg: string;
  chipText: string;
  counter: string;
  title: string[];
  titleClass?: string;
  bullet: string;
  graphic: ReactNode;
};

const SLIDES: Slide[] = [
  {
    bg: 'bg-neobrutalism-white', text: 'text-neobrutalism-black', chipBg: 'bg-neobrutalism-black', chipText: 'text-white',
    counter: 'text-neobrutalism-black/50', title: ['One core', 'loop'], bullet: 'Steer · climb · dive · dash, at ever-increasing speed',
    graphic: <LoopGraphic />,
  },
  {
    bg: 'bg-neobrutalism-yellow', text: 'text-neobrutalism-black', chipBg: 'bg-neobrutalism-black', chipText: 'text-white',
    counter: 'text-neobrutalism-black/50', title: ['The ladder', 'wakes'], bullet: 'Four ship classes escalate as your score climbs',
    graphic: <LadderGraphic />,
  },
  {
    bg: 'bg-neobrutalism-black', text: 'text-white', chipBg: 'bg-neobrutalism-yellow', chipText: 'text-neobrutalism-black',
    counter: 'text-white/50', title: ['The Devil'], titleClass: 'text-neobrutalism-yellow',
    bullet: 'Wakes on a timer. Stalks every biome.',
    graphic: <DevilGraphic />,
  },
  {
    bg: 'bg-neobrutalism-purple', text: 'text-neobrutalism-black', chipBg: 'bg-neobrutalism-black', chipText: 'text-white',
    counter: 'text-neobrutalism-black/50', title: ['Portals to', 'the void'], bullet: 'Nine real universes behind see-through portals',
    graphic: <VoidGraphic />,
  },
  {
    bg: 'bg-neobrutalism-black', text: 'text-white', chipBg: 'bg-neobrutalism-yellow', chipText: 'text-neobrutalism-black',
    counter: 'text-white/50', title: ['Wrecked.', 'Fly again.'], titleClass: 'text-neobrutalism-yellow',
    bullet: 'Death comes fast and always feels like your fault',
    graphic: <WreckedGraphic />,
  },
];

export function RunLoopAnimatic() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), HOLD_MS);
    return () => clearInterval(id);
  }, []);
  const s = SLIDES[idx];

  return (
    <div className="w-full aspect-square relative overflow-hidden border-3 border-neobrutalism-black shadow-neobrutalism-lg">
      {/* no AnimatePresence: looping child animations block its exit handshake (see WhoItsForAnimatic) */}
      <motion.div
        key={idx}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 ${s.bg} ${s.text} p-6 sm:p-9 flex flex-col`}
      >
        <div className="flex items-start justify-between">
          <span className={`px-3 py-1.5 ${s.chipBg} ${s.chipText} font-black uppercase tracking-widest text-xs -rotate-1`}>
            Anatomy of a run
          </span>
          <span className={`font-mono font-bold ${s.counter}`}>0{idx + 1} / 05</span>
        </div>
        <h3 className={`mt-4 font-heading font-black uppercase leading-none text-4xl sm:text-6xl ${s.titleClass ?? ''}`}>
          {s.title.map(line => (
            <span key={line} className="block">{line}</span>
          ))}
        </h3>
        <div className="flex-1 flex items-center justify-center">{s.graphic}</div>
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1.5 w-3 h-3 shrink-0 rotate-45 bg-neobrutalism-yellow border-2 border-neobrutalism-black"
          />
          <p className="font-bold text-base sm:text-lg leading-snug">{s.bullet}</p>
        </div>
      </motion.div>
    </div>
  );
}
