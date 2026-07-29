'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * CineVision's four measured frictions (C1–C4) as an animated evidence board:
 * each exhibit gets a micro-visual and one compressed quote instead of a
 * paragraph. Plays once on scroll into view.
 */

const POP = { type: 'spring' as const, stiffness: 280, damping: 18 };
const VIEW = { once: true, margin: '-80px 0px' } as const;

function Pop({
  delay,
  className,
  children,
  from = { opacity: 0, y: 14, scale: 0.9 },
}: {
  delay: number;
  className?: string;
  children: ReactNode;
  from?: Record<string, number>;
}) {
  return (
    <motion.div
      initial={from}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={VIEW}
      transition={{ ...POP, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- C1: text loses the shot ---------- */

function LossyVisual({ base }: { base: number }) {
  return (
    <div className="flex items-center gap-2 h-full">
      <div className="space-y-1.5 w-14 shrink-0">
        <div className="h-1.5 w-full bg-neobrutalism-black" />
        <div className="h-1.5 w-4/5 bg-neobrutalism-black/40" />
        <div className="h-1.5 w-full bg-neobrutalism-black/40" />
      </div>
      <div className="flex-1 flex items-center gap-1" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={i < 2 ? { opacity: 1 } : { opacity: [0, 1, 0], y: [0, 0, 22] }}
            viewport={VIEW}
            transition={{ delay: base + 0.3 + i * 0.15, duration: i < 2 ? 0.2 : 0.7 }}
            className="h-1 flex-1 bg-neobrutalism-black"
          />
        ))}
        <div className="border-y-4 border-y-transparent border-l-[6px] border-l-neobrutalism-black" />
      </div>
      <Pop
        delay={base + 1.1}
        from={{ opacity: 0, scale: 1.6 }}
        className="w-16 h-12 shrink-0 border-3 border-neobrutalism-black flex items-center justify-center font-heading font-black text-xl"
      >
        ?
      </Pop>
    </div>
  );
}

/* ---------- C2: the character drifts ---------- */

function DriftVisual({ base }: { base: number }) {
  return (
    <div className="relative flex items-end justify-center gap-6 h-full pb-1">
      <Pop delay={base + 0.2} className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-neobrutalism-black" />
        <div className="w-6 h-9 bg-neobrutalism-black" />
        <p className="mt-1 text-[8px] font-black tracking-widest">SHOT 1</p>
      </Pop>
      <Pop delay={base + 0.55} className="flex flex-col items-center">
        <div className="w-5 h-4 rounded-sm bg-neobrutalism-black/35" />
        <div className="w-5 h-10 bg-neobrutalism-black/35 skew-x-6" />
        <p className="mt-1 text-[8px] font-black tracking-widest text-neobrutalism-black/50">SHOT 5 · ??</p>
      </Pop>
      <Pop
        delay={base + 0.95}
        from={{ opacity: 0, scale: 2 }}
        className="absolute -top-1 right-0 px-1.5 py-0.5 bg-neobrutalism-pink border-2 border-neobrutalism-black text-[9px] font-black tracking-widest rotate-3"
      >
        DRIFT ✗
      </Pop>
    </div>
  );
}

/* ---------- C3: confirmation ping-pong ---------- */

function PingPongVisual({ base }: { base: number }) {
  return (
    <div className="h-full flex flex-col justify-center gap-1.5">
      <div className="flex justify-between text-[9px] font-black tracking-widest">
        <span>DIRECTOR</span>
        <span>ARTIST</span>
      </div>
      {['→', '←', '→'].map((d, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: d === '→' ? -18 : 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ ...POP, delay: base + 0.25 + i * 0.3 }}
          className={`font-black text-sm leading-none ${d === '→' ? 'text-left' : 'text-right'}`}
          aria-hidden="true"
        >
          {d.repeat(6)}
        </motion.div>
      ))}
      <Pop
        delay={base + 1.25}
        from={{ opacity: 0, scale: 1.8 }}
        className="w-fit px-2 py-0.5 bg-neobrutalism-black text-white text-[9px] font-black tracking-widest -rotate-1"
      >
        DAYS PER ROUND
      </Pop>
    </div>
  );
}

/* ---------- C4: tools throttle iteration ---------- */

function ThrottleVisual({ base }: { base: number }) {
  return (
    <div className="h-full flex items-center gap-2">
      <Pop delay={base + 0.2} className="flex-1 h-14 border-3 border-neobrutalism-black bg-neobrutalism-black text-white flex items-center justify-center text-[10px] font-black tracking-widest">
        TAKE 1
      </Pop>
      {['TAKE 2', 'TAKE 3'].map((t, i) => (
        <Pop
          key={t}
          delay={base + 0.5 + i * 0.25}
          className="relative flex-1 h-14 border-3 border-dashed border-neobrutalism-black/40 flex items-center justify-center text-[10px] font-black tracking-widest text-neobrutalism-black/40"
        >
          {t}
          <motion.span
            initial={{ opacity: 0, scale: 2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEW}
            transition={{ ...POP, delay: base + 0.85 + i * 0.25 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-neobrutalism-pink border-2 border-neobrutalism-black flex items-center justify-center text-neobrutalism-black text-xs font-black"
          >
            ✗
          </motion.span>
        </Pop>
      ))}
    </div>
  );
}

/* ---------- the board ---------- */

const EXHIBITS = [
  {
    code: 'C1',
    title: 'Text loses the shot',
    quote: '“increased communication costs and frequent misunderstandings”',
    Visual: LossyVisual,
  },
  {
    code: 'C2',
    title: 'The character drifts',
    quote: '“inconsistencies in character styles and environment style”',
    Visual: DriftVisual,
  },
  {
    code: 'C3',
    title: 'Confirmation ping-pong',
    quote: '“prolonged confirmation processes and misunderstandings”',
    Visual: PingPongVisual,
  },
  {
    code: 'C4',
    title: 'Tools throttle iteration',
    quote: '“limited flexibility, hindering rapid creative iteration”',
    Visual: ThrottleVisual,
  },
];

export function FrictionBoard() {
  return (
    <div className="relative">
      <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-black shadow-neobrutalism-sm -rotate-1">
        <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-mint whitespace-nowrap">
          Field evidence · four measured frictions
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {EXHIBITS.map((e, i) => {
          const base = i * 0.2;
          return (
            <Pop
              key={e.code}
              delay={base}
              className={`p-5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-md ${
                i % 2 === 0 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 bg-neobrutalism-black text-neobrutalism-mint font-black text-sm">{e.code}</span>
                <h3 className="text-base sm:text-lg font-black leading-tight">{e.title}</h3>
              </div>
              <div className="mt-4 h-24">
                <e.Visual base={base} />
              </div>
              <p className="mt-3 text-xs font-bold text-neobrutalism-black/60 leading-snug">{e.quote}</p>
            </Pop>
          );
        })}
      </div>
    </div>
  );
}
