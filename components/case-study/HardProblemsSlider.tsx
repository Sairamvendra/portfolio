'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * The three engineering war stories as a slidable panel. Each slide is a
 * three-beat comic strip — Symptom → Root cause → The fix — that pops in
 * ONCE when the slide becomes active. Auto-advances through the deck once,
 * then hands control to the reader; any interaction cancels the autoplay.
 */

const POP = { type: 'spring' as const, stiffness: 280, damping: 18 };

function Beat({
  label,
  delay,
  tilt,
  children,
}: {
  label: string;
  delay: number;
  tilt: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...POP, delay }}
      className={`relative h-full p-5 bg-neobrutalism-white text-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-md ${tilt}`}
    >
      <div className="absolute -top-4 left-4 px-3 py-1 bg-neobrutalism-black text-white text-xs font-black uppercase tracking-widest">
        {label}
      </div>
      <div className="mt-3 h-full flex flex-col justify-center pb-3">{children}</div>
    </motion.div>
  );
}

function Arrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...POP, delay }}
      className="hidden lg:flex items-center font-heading font-black text-4xl"
      aria-hidden="true"
    >
      →
    </motion.div>
  );
}

function Line({ children }: { children: ReactNode }) {
  return <p className="text-lg sm:text-xl font-black leading-snug">{children}</p>;
}

/* ---------- slide 1: the ffmpeg that lied ---------- */

function MiniStrip({ drop, delay }: { drop?: boolean; delay: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((c) => (
        <div key={c} className="contents">
          {c > 0 && (
            <motion.div
              className="shrink-0 z-10"
              initial={false}
              animate={drop ? { y: 44, opacity: 0, rotate: 90 } : {}}
              transition={{ delay: delay + c * 0.25, duration: 0.55, ease: 'easeIn' }}
            >
              <div className="w-4 h-4 rotate-45 bg-neobrutalism-cyan border-2 border-neobrutalism-black" />
            </motion.div>
          )}
          <div className="w-9 h-12 bg-neobrutalism-black shrink-0" />
        </div>
      ))}
    </div>
  );
}

function FfmpegSymptom() {
  return (
    <div className="space-y-3">
      <Line>Local: perfect. Production: every crossfade gone.</Line>
      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-widest text-neobrutalism-black/60">macOS</p>
        <MiniStrip delay={0.6} />
        <p className="text-[10px] font-black uppercase tracking-widest text-neobrutalism-black/60">Linux</p>
        <MiniStrip drop delay={0.8} />
      </div>
    </div>
  );
}

function FfmpegCause() {
  return (
    <div className="space-y-3">
      <Line>Same package, different binary.</Line>
      <div className="space-y-2 font-mono text-sm font-bold">
        <div className="px-3 py-1.5 border-2 border-neobrutalism-black w-fit">
          macOS → 6.0 · xfade ✓
        </div>
        <div className="px-3 py-1.5 border-2 border-neobrutalism-black w-fit bg-neobrutalism-black text-white">
          Linux → 7.0 · <s>xfade</s>
        </div>
      </div>
    </div>
  );
}

function FfmpegFix() {
  return (
    <div className="space-y-3">
      <Line>Export diagnostics found it.</Line>
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: -2 }}
        transition={{ ...POP, delay: 1.7 }}
        className="w-fit px-4 py-2 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-sm font-black uppercase tracking-wide"
      >
        Pin 5.2.0 ✓
      </motion.div>
      <p className="text-sm font-bold">Crossfades back.</p>
    </div>
  );
}

/* ---------- slide 2: the browser that fights back ---------- */

function BrowserSymptom() {
  return (
    <div className="space-y-3">
      <Line>The render hangs. Forever.</Line>
      <motion.div
        className="w-fit px-3 py-1.5 border-2 border-neobrutalism-black font-mono text-sm font-bold"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.3, 1, 0.3, 1] }}
        transition={{ delay: 0.6, duration: 1.6 }}
      >
        await render… ∞
      </motion.div>
    </div>
  );
}

function BrowserCause() {
  return (
    <div className="space-y-3">
      <Line>Chrome throttles offscreen iframes.</Line>
      <div className="relative h-16">
        <div className="absolute left-0 top-0 bottom-0 w-2/3 border-2 border-neobrutalism-black">
          <span className="absolute top-1 left-2 text-[10px] font-black uppercase tracking-widest text-neobrutalism-black/50">
            viewport
          </span>
        </div>
        <div className="absolute right-0 top-3 px-2 py-1 bg-neobrutalism-black text-white text-[10px] font-black uppercase tracking-widest">
          iframe · zzz
        </div>
      </div>
    </div>
  );
}

function BrowserFix() {
  return (
    <div className="space-y-3">
      <Line>Touch the viewport on purpose.</Line>
      <div className="relative h-16">
        <div className="absolute left-0 top-0 bottom-0 w-2/3 border-2 border-neobrutalism-black" />
        <motion.div
          className="absolute top-3"
          initial={{ left: '68%' }}
          animate={{ left: '40%' }}
          transition={{ delay: 1.7, duration: 0.7 }}
        >
          <div className="px-2 py-1 bg-neobrutalism-cyan border-2 border-neobrutalism-black text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
            iframe · rendering ✓
          </div>
        </motion.div>
      </div>
      <p className="text-sm font-bold">Plus a render queue and an LLM repair pass.</p>
    </div>
  );
}

/* ---------- slide 3: the 57.8 MB save button ---------- */

function SaveSymptom() {
  return (
    <div className="space-y-3">
      <Line>Every save uploaded 57.8 MB.</Line>
      <motion.div
        initial={{ scale: 0.4 }}
        animate={{ scale: 1 }}
        transition={{ ...POP, delay: 0.6 }}
        className="w-fit px-5 py-3 bg-neobrutalism-black text-white font-heading font-black text-2xl"
      >
        57.8 MB
      </motion.div>
    </div>
  );
}

function SaveCause() {
  return (
    <div className="space-y-3">
      <Line>The full RGBA layer stack, every click.</Line>
      <div className="relative h-16">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...POP, delay: 1.0 + i * 0.12 }}
            className={`absolute w-24 h-9 border-2 border-neobrutalism-black ${
              i === 3 ? 'bg-neobrutalism-cyan' : 'bg-neobrutalism-white'
            }`}
            style={{ left: i * 14, top: i * 7 }}
          />
        ))}
      </div>
    </div>
  );
}

function SaveFix() {
  return (
    <div className="space-y-3">
      <Line>Shrunk composite + sanitizer.</Line>
      <div className="flex items-center gap-3 flex-wrap">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ...POP, delay: 1.7 }}
          className="px-4 py-2 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-sm font-heading font-black text-xl"
        >
          43 KB
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 8 }}
          animate={{ scale: 1, rotate: -2 }}
          transition={{ ...POP, delay: 2.0 }}
          className="px-3 py-1.5 bg-neobrutalism-yellow border-2 border-neobrutalism-black text-xs font-black uppercase tracking-widest"
        >
          1,300× smaller
        </motion.div>
      </div>
      <p className="text-sm font-bold">Bonus: &ldquo;reuse exact settings&rdquo; came back free.</p>
    </div>
  );
}

/* ---------- deck ---------- */

const SLIDES = [
  {
    id: 'ffmpeg',
    bg: 'bg-neobrutalism-yellow',
    title: 'The ffmpeg that lied',
    beats: [FfmpegSymptom, FfmpegCause, FfmpegFix],
  },
  {
    id: 'browser',
    bg: 'bg-neobrutalism-cyan',
    title: 'The browser that fights back',
    beats: [BrowserSymptom, BrowserCause, BrowserFix],
  },
  {
    id: 'save',
    bg: 'bg-neobrutalism-purple',
    title: 'The 57.8 MB save button',
    beats: [SaveSymptom, SaveCause, SaveFix],
  },
];

const BEAT_LABELS = ['Symptom', 'Root cause', 'The fix'];
const BEAT_DELAYS = [0.1, 0.7, 1.3];
const TILTS = ['-rotate-1', 'rotate-[0.75deg]', '-rotate-[0.75deg]'];

export function HardProblemsSlider() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-80px', once: true });

  // auto-advance through the deck exactly once, then stop
  useEffect(() => {
    if (!inView || !auto || active >= SLIDES.length - 1) return;
    const t = setTimeout(() => setActive((a) => a + 1), 5200);
    return () => clearTimeout(t);
  }, [inView, auto, active]);

  const go = (i: number) => {
    setAuto(false);
    setActive(Math.max(0, Math.min(SLIDES.length - 1, i)));
  };

  return (
    <div
      ref={ref}
      role="region"
      aria-roledescription="carousel"
      aria-label="The hard problems, animated"
      className="border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-black"
    >
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${active * 100}%` }}
          transition={{ type: 'spring', stiffness: 220, damping: 30 }}
        >
          {SLIDES.map((s, i) => (
            <div key={s.id} className={`w-full shrink-0 p-8 pt-10 lg:p-10 lg:pt-12 ${s.bg}`} aria-hidden={i !== active}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="block w-fit px-5 py-2.5 bg-neobrutalism-black shadow-neobrutalism-md -rotate-1">
                  <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
                    <span className="text-neobrutalism-cyan">{'//'}</span> {s.title}
                  </h3>
                </div>
                <div className="px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black font-heading font-black rotate-1">
                  {String(i + 1).padStart(2, '0')} / 0{SLIDES.length}
                </div>
              </div>
              {/* remount on activation so every beat pops once per visit */}
              {inView && i === active && (
                <div key={s.id} className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
                  {s.beats.map((BeatBody, b) => (
                    <div key={BEAT_LABELS[b]} className="contents">
                      {b > 0 && <Arrow delay={BEAT_DELAYS[b] - 0.15} />}
                      <Beat label={BEAT_LABELS[b]} delay={BEAT_DELAYS[b]} tilt={TILTS[b]}>
                        <BeatBody />
                      </Beat>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex items-center justify-between border-t-5 border-neobrutalism-black bg-neobrutalism-white px-6 py-4">
        <div className="flex gap-2" role="tablist" aria-label="Slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              aria-label={s.title}
              onClick={() => go(i)}
              className={`w-4 h-4 border-3 border-neobrutalism-black transition-colors ${
                i === active ? 'bg-neobrutalism-cyan' : 'bg-neobrutalism-white hover:bg-neobrutalism-cyan/40'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => go(active - 1)}
            disabled={active === 0}
            aria-label="Previous story"
            className="w-11 h-11 border-3 border-neobrutalism-black bg-neobrutalism-white shadow-neobrutalism-sm font-black text-lg hover:-translate-y-0.5 transition-transform disabled:opacity-30 disabled:hover:translate-y-0"
          >
            ←
          </button>
          <button
            onClick={() => go(active + 1)}
            disabled={active === SLIDES.length - 1}
            aria-label="Next story"
            className="w-11 h-11 border-3 border-neobrutalism-black bg-neobrutalism-cyan shadow-neobrutalism-sm font-black text-lg hover:-translate-y-0.5 transition-transform disabled:opacity-30 disabled:hover:translate-y-0"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
