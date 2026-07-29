'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * The six-stage storyboard pipeline as an animatic deck. A numbered progress
 * rail runs the show: each stage is one big animated scene plus a handful of
 * hard-data chips, auto-advancing through the pipeline once. Any interaction
 * hands control to the reader.
 */

const POP = { type: 'spring' as const, stiffness: 280, damping: 18 };
const STAGE_MS = 6200;

function Chip({ delay, dark, children }: { delay: number; dark?: boolean; children: ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 14, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ...POP, delay }}
      className={`inline-block px-3 py-1.5 border-3 border-neobrutalism-black text-xs font-black uppercase tracking-widest shadow-neobrutalism-sm ${
        dark ? 'bg-neobrutalism-black text-white' : 'bg-neobrutalism-white text-neobrutalism-black'
      }`}
    >
      {children}
    </motion.span>
  );
}

/* ---------- 01 · Ingest: the scanner reads position, not just words ---------- */

const SCRIPT_LINES = [
  { w: 'w-2/5', ml: 'ml-0', dark: true, label: 'SCENE' },
  { w: 'w-full', ml: 'ml-0', label: 'ACTION' },
  { w: 'w-11/12', ml: 'ml-0' },
  { w: 'w-1/4', ml: 'ml-[36%]', dark: true, label: 'CHARACTER' },
  { w: 'w-1/2', ml: 'ml-[22%]', label: 'DIALOGUE' },
  { w: 'w-2/5', ml: 'ml-[22%]' },
];

function SceneIngest() {
  return (
    <div className="h-full flex flex-col justify-center gap-3">
      <div className="flex flex-wrap gap-2">
        {['PDF', 'DOCX', 'TXT', 'FOUNTAIN'].map((f, i) => (
          <motion.span
            key={f}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...POP, delay: 0.15 + i * 0.12 }}
            className="px-2.5 py-1 border-2 border-neobrutalism-black text-[10px] font-black tracking-widest"
          >
            {f}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="py-1 text-[10px] font-black tracking-widest text-neobrutalism-black/50"
        >
          → PARSED BY X-POSITION
        </motion.span>
      </div>
      <div className="relative border-2 border-neobrutalism-black p-4 overflow-hidden">
        <div className="space-y-2.5">
          {SCRIPT_LINES.map((l, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`h-2.5 ${l.w} ${l.ml} ${l.dark ? 'bg-neobrutalism-black' : 'bg-neobrutalism-black/25'}`} />
              {l.label && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + i * 0.24 }}
                  className="shrink-0 text-[9px] font-black tracking-widest text-neobrutalism-black/60"
                >
                  ← {l.label}
                </motion.span>
              )}
            </div>
          ))}
        </div>
        <motion.div
          className="absolute inset-x-0 h-1.5 bg-neobrutalism-black"
          initial={{ top: '2%' }}
          animate={{ top: '94%' }}
          transition={{ delay: 0.9, duration: 1.6, ease: 'linear' }}
          aria-hidden="true"
        />
      </div>
      <Chip delay={2.7} dark>
        Scanned scripts → local OCR · 0 API calls
      </Chip>
    </div>
  );
}

/* ---------- 02 · Break down: deal the coverage ---------- */

const SHOTS = [
  { label: 'WIDE · 24mm', figure: 'sm' },
  { label: 'MED · 50mm', figure: 'md' },
  { label: 'CU · 85mm', figure: 'lg' },
  { label: 'OTS · 35mm', figure: 'ots' },
];

function Figure({ kind }: { kind: string }) {
  if (kind === 'sm')
    return (
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-neobrutalism-black" />
        <div className="w-2 h-3 bg-neobrutalism-black" />
      </div>
    );
  if (kind === 'md')
    return (
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-neobrutalism-black" />
        <div className="w-5 h-6 bg-neobrutalism-black" />
      </div>
    );
  if (kind === 'lg')
    return (
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-9 h-11 rounded-t-full bg-neobrutalism-black" />
    );
  return (
    <>
      <div className="absolute -bottom-1 -left-1 w-7 h-9 rounded-t-full bg-neobrutalism-black" />
      <div className="absolute bottom-1 right-2 flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-neobrutalism-black/70" />
        <div className="w-3 h-4 bg-neobrutalism-black/70" />
      </div>
    </>
  );
}

function SceneBreakdown() {
  return (
    <div className="h-full flex flex-col justify-center gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={POP}
        className="w-fit px-3 py-1.5 bg-neobrutalism-black text-white text-[11px] font-black tracking-widest"
      >
        SCENE 12 · RIVERBANK, DUSK
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {SHOTS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: -34, rotate: -7 }}
            animate={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
            transition={{ ...POP, delay: 0.55 + i * 0.28 }}
            className="border-2 border-neobrutalism-black bg-neobrutalism-white p-2"
          >
            <div className="relative h-14 border-2 border-neobrutalism-black overflow-hidden">
              <Figure kind={s.figure} />
            </div>
            <p className="mt-1.5 text-[10px] font-black tracking-wider">{s.label}</p>
            <p className="text-[9px] font-bold text-neobrutalism-black/55">light · duration · action</p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Chip delay={1.9} dark>
          4-shot minimum / scene ✓
        </Chip>
        <Chip delay={2.15}>+ no cap on density</Chip>
      </div>
    </div>
  );
}

/* ---------- 03 · Cast and scout: reference plates, then the lock ---------- */

function SceneCast() {
  const plates = [
    {
      tag: 'CHARACTER',
      sub: 'front + ¾',
      art: (
        <div className="flex items-end justify-center gap-3 h-full pb-1">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-neobrutalism-black" />
            <div className="w-6 h-9 bg-neobrutalism-black" />
          </div>
          <div className="flex flex-col items-center -skew-x-6">
            <div className="w-4 h-4 rounded-full bg-neobrutalism-black/60" />
            <div className="w-5 h-9 bg-neobrutalism-black/60" />
          </div>
        </div>
      ),
    },
    {
      tag: 'COSTUME',
      sub: 'flat-lay on white',
      art: (
        <div className="flex items-center justify-center h-full">
          <div className="relative w-12 h-10 bg-neobrutalism-black">
            <div className="absolute -left-3 top-0 w-3 h-5 bg-neobrutalism-black" />
            <div className="absolute -right-3 top-0 w-3 h-5 bg-neobrutalism-black" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-1.5 bg-neobrutalism-white" />
          </div>
        </div>
      ),
    },
    {
      tag: 'ENVIRONMENT',
      sub: 'establishing plate',
      art: (
        <div className="relative h-full overflow-hidden">
          <div className="absolute top-2 right-3 w-4 h-4 rounded-full border-2 border-neobrutalism-black" />
          <div
            className="absolute bottom-0 left-0 w-3/5 h-8 bg-neobrutalism-black"
            style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
          />
          <div
            className="absolute bottom-0 right-0 w-1/2 h-6 bg-neobrutalism-black/60"
            style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="relative">
        <div className="grid grid-cols-3 gap-3">
          {plates.map((p, i) => (
            <motion.div
              key={p.tag}
              initial={{ opacity: 0, scale: 1.5, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: i === 1 ? 1 : -1 }}
              transition={{ ...POP, delay: 0.3 + i * 0.35 }}
              className="border-2 border-neobrutalism-black bg-neobrutalism-white p-2"
            >
              <div className="h-20">{p.art}</div>
              <p className="mt-1 text-[10px] font-black tracking-wider">{p.tag}</p>
              <p className="text-[9px] font-bold text-neobrutalism-black/55">{p.sub}</p>
            </motion.div>
          ))}
        </div>
        {/* the stamp rides the top edge so every plate stays readable */}
        <motion.div
          initial={{ opacity: 0, scale: 2.6, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -6 }}
          transition={{ ...POP, delay: 1.8 }}
          className="absolute -top-6 left-1/2 -ml-32 px-5 py-2 bg-neobrutalism-black text-white font-heading font-black text-2xl tracking-widest shadow-neobrutalism-md"
        >
          LOCKED ✓
        </motion.div>
      </div>
      <p className="mt-4 text-center text-[10px] font-black uppercase tracking-widest text-neobrutalism-black/60">
        generated once · re-injected into every frame
      </p>
    </div>
  );
}

/* ---------- 04 · Compose: one directive, nothing falls out ---------- */

const TOKENS = ['WIDE · 24mm', 'LOC · RIVERBANK', 'CHAR · SHIVA', 'KODAK 2383', 'DIRECTOR STYLE', '35mm GRAIN', 'ALEXA SENSOR'];
const DROP_INDEX = 2;

function SceneCompose() {
  return (
    <div className="h-full flex flex-col justify-center gap-3">
      <p className="text-[10px] font-black uppercase tracking-widest text-neobrutalism-black/60">
        The frame prompt, assembling
      </p>
      <div className="border-3 border-neobrutalism-black p-3 min-h-[108px] flex flex-wrap gap-2 content-start">
        {TOKENS.map((t, i) =>
          i === DROP_INDEX ? (
            <span key={t} className="inline-grid">
              {/* the tag that gets dropped mid-compose… */}
              <motion.span
                className="[grid-area:1/1] inline-block px-2.5 py-1 border-2 border-neobrutalism-black text-[10px] font-black tracking-wider whitespace-nowrap"
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: [0, 1, 1, 0], y: [-18, 0, 0, 52], rotate: [0, 0, 0, 24] }}
                transition={{ delay: 0.3 + i * 0.18, duration: 2.3, times: [0, 0.1, 0.72, 1], ease: 'easeIn' }}
              >
                {t}
              </motion.span>
              {/* …and the composer slamming it back in */}
              <motion.span
                className="[grid-area:1/1] inline-flex items-center justify-center px-2.5 py-1 bg-neobrutalism-black text-white border-2 border-neobrutalism-black text-[10px] font-black tracking-wider whitespace-nowrap"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...POP, delay: 3.2 }}
              >
                {t} ↩
              </motion.span>
            </span>
          ) : (
            <motion.span
              key={t}
              className="inline-block px-2.5 py-1 border-2 border-neobrutalism-black text-[10px] font-black tracking-wider whitespace-nowrap h-fit"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...POP, delay: 0.3 + i * 0.18 }}
            >
              {t}
            </motion.span>
          )
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Chip delay={3.6} dark>
          dropped tag re-injected ✓
        </Chip>
        <Chip delay={3.85}>novelty language deduped</Chip>
        <Chip delay={4.1}>→ one directive</Chip>
      </div>
    </div>
  );
}

/* ---------- 05 · Generate: four models race the board ---------- */

const MODELS = [
  { name: 'FLASH', meta: '~3 s · 1K', dark: true },
  { name: 'PRO2F', meta: '~2 s · 4K' },
  { name: 'PRO', meta: 'up to 4K' },
  { name: 'SEEDDREAM', meta: 'up to 4K' },
];

const FRAME_ART = [
  { sky: 'bg-neobrutalism-orange/70', a: 'bg-neobrutalism-black/80', b: 'left-2 top-2 w-5 h-5 rounded-full bg-neobrutalism-yellow' },
  { sky: 'bg-neobrutalism-sky/70', a: 'bg-neobrutalism-black/70', b: 'right-2 top-3 w-6 h-3 bg-neobrutalism-white' },
  { sky: 'bg-neobrutalism-purple/60', a: 'bg-neobrutalism-black/80', b: 'left-3 top-2 w-3 h-8 bg-neobrutalism-white/80' },
  { sky: 'bg-neobrutalism-yellow/70', a: 'bg-neobrutalism-black/70', b: 'right-3 top-2 w-5 h-5 rotate-45 bg-neobrutalism-white' },
  { sky: 'bg-neobrutalism-pink/60', a: 'bg-neobrutalism-black/80', b: 'left-2 top-4 w-7 h-2.5 bg-neobrutalism-white/90' },
  { sky: 'bg-neobrutalism-cyan/60', a: 'bg-neobrutalism-black/70', b: 'right-2 top-2 w-4 h-4 rounded-full bg-neobrutalism-white/80' },
];

function SceneGenerate() {
  return (
    <div className="h-full flex flex-col justify-center gap-4">
      <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
        <div className="grid grid-cols-3 gap-2">
          {FRAME_ART.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.32, duration: 0.25 }}
              className={`relative h-16 border-2 border-neobrutalism-black overflow-hidden ${f.sky}`}
            >
              <div className={`absolute inset-x-0 bottom-0 h-1/2 ${f.a}`} />
              <div className={`absolute ${f.b}`} />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {MODELS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...POP, delay: 0.5 + i * 0.22 }}
              className={`px-2.5 py-1 border-2 border-neobrutalism-black text-[10px] font-black tracking-wider whitespace-nowrap ${
                m.dark ? 'bg-neobrutalism-black text-white' : 'bg-neobrutalism-white'
              }`}
            >
              {m.name} <span className={m.dark ? 'text-white/60' : 'text-neobrutalism-black/50'}>{m.meta}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <div className="border-2 border-neobrutalism-black h-5 overflow-hidden">
          <motion.div
            className="h-full bg-neobrutalism-black"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 2.4, ease: 'easeInOut' }}
          />
        </div>
        <p className="mt-1.5 text-[10px] font-black uppercase tracking-widest text-neobrutalism-black/60">
          full 23-image board · 1–5 minutes
        </p>
      </div>
    </div>
  );
}

/* ---------- 06 · Deliver: stamps, then the lights go down ---------- */

const EXPORTS = ['PDF BOARD', 'CSV SHOT LIST', 'FDX', 'FOUNTAIN', 'SHARE LINK'];

function SceneDeliver() {
  return (
    <div className="h-full flex flex-col justify-center gap-5">
      <div className="flex flex-wrap gap-3">
        {EXPORTS.map((e, i) => (
          <motion.div
            key={e}
            initial={{ opacity: 0, scale: 2.1 }}
            animate={{ opacity: 1, scale: 1, rotate: i % 2 === 0 ? -2 : 2 }}
            transition={{ ...POP, delay: 0.3 + i * 0.28 }}
            className={`px-3 py-1.5 border-3 border-neobrutalism-black font-black text-sm tracking-wider ${
              i === 0 ? 'bg-neobrutalism-black text-white' : 'bg-neobrutalism-white'
            }`}
          >
            {e} ✓
          </motion.div>
        ))}
      </div>
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: '-105%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 130, damping: 20, delay: 1.9 }}
          className="px-4 py-3 bg-neobrutalism-black text-white font-heading font-black tracking-[0.3em] text-lg"
        >
          ▶ PRESENTATION MODE
        </motion.div>
      </div>
      <Chip delay={2.6}>public links · no login needed</Chip>
    </div>
  );
}

/* ---------- the deck ---------- */

const STAGES = [
  {
    n: '01',
    title: 'Ingest',
    tab: 'Ingest',
    bg: 'bg-neobrutalism-yellow',
    accent: 'text-neobrutalism-yellow',
    line: 'The parser reads position, not just words.',
    scene: SceneIngest,
  },
  {
    n: '02',
    title: 'Break down',
    tab: 'Break down',
    bg: 'bg-neobrutalism-cyan',
    accent: 'text-neobrutalism-cyan',
    line: 'It plans the coverage a director would shoot, not what the page says.',
    scene: SceneBreakdown,
  },
  {
    n: '03',
    title: 'Cast and scout',
    tab: 'Cast + scout',
    bg: 'bg-neobrutalism-purple',
    accent: 'text-neobrutalism-purple',
    line: 'Every face, costume, and place gets a reference plate before any frame exists.',
    scene: SceneCast,
  },
  {
    n: '04',
    title: 'Compose the prompt',
    tab: 'Compose',
    bg: 'bg-neobrutalism-lime',
    accent: 'text-neobrutalism-lime',
    line: 'Each shot fuses into one directive, and nothing referential is allowed to fall out.',
    scene: SceneCompose,
  },
  {
    n: '05',
    title: 'Generate',
    tab: 'Generate',
    bg: 'bg-neobrutalism-orange',
    accent: 'text-neobrutalism-orange',
    line: 'Four image models, live speed estimates, picked per board.',
    scene: SceneGenerate,
  },
  {
    n: '06',
    title: 'Deliver',
    tab: 'Deliver',
    bg: 'bg-neobrutalism-mint',
    accent: 'text-neobrutalism-mint',
    line: 'Production-ready out of the box.',
    scene: SceneDeliver,
  },
];

export function PipelineAnimatic() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-80px', once: true });

  useEffect(() => {
    if (!inView || !auto || active >= STAGES.length - 1) return;
    const t = setTimeout(() => setActive((a) => a + 1), STAGE_MS);
    return () => clearTimeout(t);
  }, [inView, auto, active]);

  const go = (i: number) => {
    setAuto(false);
    setActive(Math.max(0, Math.min(STAGES.length - 1, i)));
  };

  const stage = STAGES[active];

  return (
    <div
      ref={ref}
      role="region"
      aria-roledescription="carousel"
      aria-label="The six-stage pipeline, animated"
      className="border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-black"
    >
      {/* progress rail */}
      <div className="flex items-stretch border-b-5 border-neobrutalism-black" role="tablist" aria-label="Pipeline stages">
        {STAGES.map((s, i) => (
          <button
            key={s.n}
            role="tab"
            aria-selected={i === active}
            aria-label={`${s.n} ${s.title}`}
            onClick={() => go(i)}
            className={`relative flex-1 min-w-0 px-2 py-2.5 sm:py-3 text-left border-r-3 border-white/15 last:border-r-0 transition-colors ${
              i === active ? `${s.bg} text-neobrutalism-black` : 'bg-neobrutalism-black text-white hover:bg-white/15'
            }`}
          >
            <span className="block font-heading font-black text-sm sm:text-base leading-none">
              {i < active ? '✓' : s.n}
            </span>
            <span className="hidden lg:block mt-1 text-[10px] font-black uppercase tracking-widest truncate">
              {s.tab}
            </span>
            {i === active && auto && active < STAGES.length - 1 && (
              <motion.div
                key={`fill-${active}`}
                className="absolute bottom-0 left-0 h-1 bg-neobrutalism-black/50"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: STAGE_MS / 1000, ease: 'linear' }}
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>

      {/* stage */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${active * 100}%` }}
          transition={{ type: 'spring', stiffness: 220, damping: 30 }}
        >
          {STAGES.map((s, i) => {
            const Scene = s.scene;
            return (
              <div
                key={s.n}
                className={`w-full shrink-0 min-h-[430px] p-7 lg:p-9 ${s.bg}`}
                aria-hidden={i !== active}
              >
                {/* remount on activation so the scene plays once per visit */}
                {inView && i === active && (
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-7 lg:gap-9 items-stretch">
                    <div>
                      <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={POP}
                        className="w-fit px-5 py-2.5 bg-neobrutalism-black shadow-neobrutalism-md -rotate-1"
                      >
                        <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
                          <span className={s.accent}>{s.n}</span> {s.title}
                        </h3>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...POP, delay: 0.2 }}
                        className="mt-6 text-xl sm:text-2xl font-black leading-snug"
                      >
                        {s.line}
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 26, rotate: 1.5 }}
                      animate={{ opacity: 1, y: 0, rotate: 0.4 }}
                      transition={{ ...POP, delay: 0.15 }}
                      className="bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-lg p-5 lg:min-h-[330px]"
                    >
                      <Scene />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* controls */}
      <div className="flex items-center justify-between gap-4 border-t-5 border-neobrutalism-black bg-neobrutalism-white px-6 py-4">
        <p className="hidden sm:block text-xs font-black uppercase tracking-widest text-neobrutalism-black/60">
          Six stages · all real code paths
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => go(active - 1)}
            disabled={active === 0}
            aria-label="Previous stage"
            className="w-11 h-11 border-3 border-neobrutalism-black bg-neobrutalism-white shadow-neobrutalism-sm font-black text-lg hover:-translate-y-0.5 transition-transform disabled:opacity-30 disabled:hover:translate-y-0"
          >
            ←
          </button>
          <button
            onClick={() => go(active + 1)}
            disabled={active === STAGES.length - 1}
            aria-label="Next stage"
            className={`w-11 h-11 border-3 border-neobrutalism-black shadow-neobrutalism-sm font-black text-lg hover:-translate-y-0.5 transition-transform disabled:opacity-30 disabled:hover:translate-y-0 ${stage.bg}`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
