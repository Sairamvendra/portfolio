'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * Live rebuild of the old who-its-for.mp4 slide deck: same five slides and
 * copy, but with an animated pictogram filling the middle band of each card.
 */

const HOLD_MS = 3600;

const pop = (i: number, repeatDelay = 2.4) => ({
  initial: { opacity: 0, scale: 0.6, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { delay: 0.25 + i * 0.12, duration: 0.32, repeat: Infinity, repeatDelay, repeatType: 'loop' as const },
});

/* 01 — a week of daily shorts popping in */
function FoundersGraphic() {
  return (
    <div className="flex items-end gap-3 sm:gap-4">
      {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <motion.div
            {...pop(i)}
            className="w-12 h-20 sm:w-16 sm:h-28 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm flex items-center justify-center"
          >
            <span aria-hidden="true" className="text-neobrutalism-black text-sm sm:text-base">▶</span>
          </motion.div>
          <span className="font-black text-xs sm:text-sm">{day}</span>
        </div>
      ))}
    </div>
  );
}

/* 02 — one reel fanning out into ten language chips */
function MarketingGraphic() {
  const langs = ['EN', 'ES', 'HI', 'FR', 'DE', 'JA', 'PT', 'AR', 'KO', 'IT'];
  return (
    <div className="flex items-center gap-3 sm:gap-5">
      <div className="w-14 h-24 sm:w-20 sm:h-32 shrink-0 bg-neobrutalism-black flex items-center justify-center">
        <span aria-hidden="true" className="text-white text-base sm:text-lg">▶</span>
      </div>
      <span className="font-black text-2xl sm:text-4xl shrink-0">→</span>
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
        {langs.map((l, i) => (
          <motion.span
            key={l}
            {...pop(i, 2.2)}
            className="px-1.5 py-1 sm:px-3 sm:py-2 bg-neobrutalism-white border-2 border-neobrutalism-black font-mono text-[10px] sm:text-sm font-bold text-neobrutalism-black text-center"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* 03 — a clip window sweeping across an episode waveform */
function PodcastGraphic() {
  const bars = [10, 18, 26, 14, 30, 22, 12, 28, 18, 32, 16, 24, 12, 20, 30, 14, 26, 18, 10, 22];
  return (
    <div className="relative flex items-center gap-1 px-2">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.07 }}
          className="w-2 sm:w-2.5 bg-neobrutalism-black"
          style={{ height: h * 1.7 }}
        />
      ))}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 120, 240, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
        className="absolute -inset-y-3 left-0 w-20 sm:w-28 border-3 border-neobrutalism-black bg-neobrutalism-white/40"
      >
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-1.5 bg-neobrutalism-black text-white font-black text-[10px] uppercase whitespace-nowrap">
          clip
        </span>
      </motion.div>
    </div>
  );
}

/* 04 — a UGC phone card typing captions, reactions floating up */
function UgcGraphic() {
  return (
    <div className="relative">
      <div className="relative w-24 h-40 sm:w-40 sm:h-60 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm p-3 flex flex-col items-center">
        <span className="absolute -top-2 -right-2 px-2 bg-neobrutalism-black text-white font-black text-xs">AD</span>
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-neobrutalism-black mt-3" />
        <div className="mt-auto w-full space-y-1.5 mb-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.35, duration: 0.3, repeat: Infinity, repeatDelay: 2.2, repeatType: 'loop' }}
              className="h-2 bg-neobrutalism-black origin-left"
              style={{ width: `${90 - i * 25}%` }}
            />
          ))}
        </div>
      </div>
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          animate={{ y: [8, -28], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.8 }}
          className={`absolute w-4 h-4 rotate-45 bg-neobrutalism-cyan border-2 border-neobrutalism-black ${i === 0 ? '-right-5 bottom-10' : '-right-9 bottom-5'}`}
        />
      ))}
    </div>
  );
}

/* 05 — ten hook variants, one winner */
function HookGraphic() {
  return (
    <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
      {Array.from({ length: 10 }, (_, i) => {
        const winner = i === 6;
        return (
          <motion.div
            key={i}
            {...pop(i, 1.8)}
            className={`w-12 h-10 sm:w-16 sm:h-12 border-2 flex items-center justify-center font-black text-xs sm:text-sm ${
              winner ? 'bg-neobrutalism-cyan border-neobrutalism-cyan text-neobrutalism-black' : 'bg-transparent border-white/50 text-white/70'
            }`}
          >
            {winner ? '★' : `H${i + 1}`}
          </motion.div>
        );
      })}
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
  extra?: string;
  graphic: ReactNode;
};

const SLIDES: Slide[] = [
  {
    bg: 'bg-neobrutalism-white', text: 'text-neobrutalism-black', chipBg: 'bg-neobrutalism-black', chipText: 'text-white',
    counter: 'text-neobrutalism-black/50', title: ['Founders &', 'solo creators'], bullet: 'Shipping daily shorts',
    graphic: <FoundersGraphic />,
  },
  {
    bg: 'bg-neobrutalism-cyan', text: 'text-neobrutalism-black', chipBg: 'bg-neobrutalism-black', chipText: 'text-white',
    counter: 'text-neobrutalism-black/50', title: ['Marketing', 'teams'], bullet: 'One reel → ten languages, matched voices',
    graphic: <MarketingGraphic />,
  },
  {
    bg: 'bg-neobrutalism-yellow', text: 'text-neobrutalism-black', chipBg: 'bg-neobrutalism-black', chipText: 'text-white',
    counter: 'text-neobrutalism-black/50', title: ['Podcasters'], bullet: 'Episodes → clip reels',
    graphic: <PodcastGraphic />,
  },
  {
    bg: 'bg-neobrutalism-purple', text: 'text-neobrutalism-black', chipBg: 'bg-neobrutalism-black', chipText: 'text-white',
    counter: 'text-neobrutalism-black/50', title: ['UGC-style', 'ads'], bullet: 'Without a UGC agency',
    graphic: <UgcGraphic />,
  },
  {
    bg: 'bg-neobrutalism-black', text: 'text-white', chipBg: 'bg-neobrutalism-cyan', chipText: 'text-neobrutalism-black',
    counter: 'text-white/50', title: ['A 10-variant', 'hook test'], titleClass: 'text-neobrutalism-cyan',
    bullet: 'Costs less than one traditional revision note', extra: 'Ten cheap runs. Zero briefs. ★',
    graphic: <HookGraphic />,
  },
];

export function WhoItsForAnimatic() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), HOLD_MS);
    return () => clearInterval(id);
  }, []);
  const s = SLIDES[idx];

  return (
    <div className="w-full aspect-square relative overflow-hidden">
      {/* no AnimatePresence: the looping child animations block its exit handshake and slides get stuck invisible */}
        <motion.div
          key={idx}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 ${s.bg} ${s.text} p-6 sm:p-9 flex flex-col`}
        >
          <div className="flex items-start justify-between">
            <span className={`px-3 py-1.5 ${s.chipBg} ${s.chipText} font-black uppercase tracking-widest text-xs -rotate-1`}>
              Who it&rsquo;s for
            </span>
            <span className={`font-mono font-bold ${s.counter}`}>0{idx + 1} / 05</span>
          </div>
          <h3 className={`mt-4 font-heading font-black uppercase leading-none text-4xl sm:text-6xl ${s.titleClass ?? ''}`}>
            {s.title.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </h3>
          <div className="flex-1 flex items-center justify-center">{s.graphic}</div>
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1.5 w-3 h-3 shrink-0 rotate-45 bg-neobrutalism-cyan border-2 border-neobrutalism-black"
            />
            <p className="font-bold text-base sm:text-lg leading-snug">{s.bullet}</p>
          </div>
          {s.extra && (
            <span className="mt-3 self-start px-3 py-1.5 bg-neobrutalism-cyan text-neobrutalism-black border-2 border-neobrutalism-black font-black text-sm -rotate-1">
              {s.extra}
            </span>
          )}
        </motion.div>
    </div>
  );
}
