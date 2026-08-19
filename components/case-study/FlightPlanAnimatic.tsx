'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * The four growth phases as an auto-playing slide deck — same format as
 * RunLoopAnimatic (chip, counter, big title, animated pictogram band, bullet).
 */

const HOLD_MS = 3600;

/* 01 — instruments: a balance dashboard drawing itself */
function InstrumentsGraphic() {
  const bars = [64, 96, 48, 112, 80];
  return (
    <div className="flex items-end gap-3 sm:gap-4 border-b-3 border-neobrutalism-black pb-1">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.35, repeat: Infinity, repeatDelay: 2.2, repeatType: 'loop' }}
          className={`w-7 sm:w-9 origin-bottom border-3 border-neobrutalism-black ${i % 2 ? 'bg-neobrutalism-black' : 'bg-neobrutalism-yellow'}`}
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

/* 02 — return flights: a week of daily worlds lighting up into a streak */
function StreakGraphic() {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="px-2 py-1 bg-neobrutalism-black text-neobrutalism-yellow font-mono font-bold text-xs">
        daily salt · 0x7f3a91c4
      </span>
      <div className="flex gap-2 sm:gap-3">
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <motion.div
            key={i}
            initial={{ opacity: 0.25, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + i * 0.22, duration: 0.25, repeat: Infinity, repeatDelay: 2.4, repeatType: 'loop' }}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-neobrutalism-black border-3 border-neobrutalism-black flex items-center justify-center"
          >
            <span className="w-3 h-3 rotate-45 bg-neobrutalism-yellow" />
          </motion.div>
        ))}
      </div>
      <span className="font-black uppercase tracking-widest text-xs">7-day streak · wings earned</span>
    </div>
  );
}

/* 03 — wingmen: a "fly my world" link passed pilot to pilot */
function WingmenGraphic() {
  return (
    <div className="relative flex items-center gap-16 sm:gap-24">
      {['SAI', 'YOG'].map(n => (
        <span
          key={n}
          className="px-3 py-2 bg-neobrutalism-yellow text-neobrutalism-black border-3 border-neobrutalism-black font-black tracking-[0.25em]"
        >
          {n}
        </span>
      ))}
      <motion.span
        animate={{ x: [-40, 40], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
        className="absolute left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-neobrutalism-black border-2 border-neobrutalism-black font-mono font-bold text-[10px] sm:text-xs whitespace-nowrap"
      >
        ▸ fly my world
      </motion.span>
    </div>
  );
}

/* 04 — new airspace: the same hull touching down on new portals */
function AirspaceGraphic() {
  const portals = ['Google Play', 'Poki', 'CrazyGames'];
  return (
    <div className="relative flex flex-col items-center gap-5">
      <motion.img
        src="/projects/ruinrunner/objects/hover-car.png"
        alt=""
        aria-hidden="true"
        animate={{ x: [-70, 70, -70] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        className="h-12 sm:h-16 w-auto drop-shadow-[4px_6px_0_rgba(0,0,0,0.3)]"
      />
      <div className="flex gap-3 sm:gap-4">
        {portals.map((p, i) => (
          <motion.span
            key={p}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.25, duration: 0.3, repeat: Infinity, repeatDelay: 2.4, repeatType: 'loop' }}
            className="px-2.5 py-1.5 bg-neobrutalism-black text-white border-3 border-neobrutalism-black font-black uppercase text-[10px] sm:text-xs tracking-wide"
          >
            {p}
          </motion.span>
        ))}
      </div>
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
    counter: 'text-neobrutalism-black/50', title: ['Instruments'], bullet: 'Anonymous telemetry, real run reports, a balance dashboard',
    graphic: <InstrumentsGraphic />,
  },
  {
    bg: 'bg-neobrutalism-yellow', text: 'text-neobrutalism-black', chipBg: 'bg-neobrutalism-black', chipText: 'text-white',
    counter: 'text-neobrutalism-black/50', title: ['Return', 'flights'], bullet: 'The daily world on one shared salt: missions, streaks, liveries',
    graphic: <StreakGraphic />,
  },
  {
    bg: 'bg-neobrutalism-black', text: 'text-white', chipBg: 'bg-neobrutalism-yellow', chipText: 'text-neobrutalism-black',
    counter: 'text-white/50', title: ['Wingmen'], titleClass: 'text-neobrutalism-yellow',
    bullet: '“Fly my world” challenge links, death cards, ghost runs',
    graphic: <WingmenGraphic />,
  },
  {
    bg: 'bg-neobrutalism-purple', text: 'text-neobrutalism-black', chipBg: 'bg-neobrutalism-black', chipText: 'text-white',
    counter: 'text-neobrutalism-black/50', title: ['New', 'airspace'], bullet: 'Google Play via TWA, plus web portals like Poki and CrazyGames',
    graphic: <AirspaceGraphic />,
  },
];

export function FlightPlanAnimatic() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), HOLD_MS);
    return () => clearInterval(id);
  }, []);
  const s = SLIDES[idx];

  return (
    <div className="w-full h-full min-h-[420px] relative overflow-hidden border-3 border-neobrutalism-black shadow-neobrutalism-lg">
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
            Flight plan
          </span>
          <span className={`font-mono font-bold ${s.counter}`}>0{idx + 1} / 04</span>
        </div>
        <h3 className={`mt-4 font-heading font-black uppercase leading-none text-3xl sm:text-5xl ${s.titleClass ?? ''}`}>
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
