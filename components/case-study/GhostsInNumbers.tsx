'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Animated ledger of the war-story numbers: each row loops a tiny motion
 * story so the point lands without reading the bullets beside it.
 */

const LOOP = { duration: 4.2, repeat: Infinity, ease: 'easeInOut' as const };

function BarPair({
  title,
  tag,
  bigLabel,
  smallLabel,
  smallPct,
}: {
  title: string;
  tag: string;
  bigLabel: string;
  smallLabel: string;
  smallPct: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline text-xs font-black uppercase tracking-wide text-white mb-2">
        <span>{title}</span>
        <span className="text-neobrutalism-cyan">{tag}</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-5 border-2 border-white/40">
            <motion.div
              className="h-full bg-white"
              animate={{ width: ['0%', '100%', '100%', '100%'] }}
              transition={{ ...LOOP, times: [0, 0.25, 0.9, 1] }}
            />
          </div>
          <span className="font-mono text-xs font-bold text-white w-16 text-right">{bigLabel}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-5 border-2 border-white/40">
            <motion.div
              className="h-full bg-neobrutalism-cyan"
              animate={{ width: ['0%', '0%', smallPct, smallPct] }}
              transition={{ ...LOOP, times: [0, 0.35, 0.55, 1] }}
            />
          </div>
          <span className="font-mono text-xs font-bold text-neobrutalism-cyan w-16 text-right">{smallLabel}</span>
        </div>
      </div>
    </div>
  );
}

function JumpingSix() {
  return (
    <div>
      <div className="flex justify-between items-baseline text-xs font-black uppercase tracking-wide text-white mb-2">
        <span>SSA Alignment = 6</span>
        <span className="text-neobrutalism-cyan">one integer</span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className={`h-8 border-2 flex items-center justify-center font-mono text-sm font-bold ${
              i === 1 || i === 5 ? 'border-white/50' : 'border-white/15'
            }`}
          >
            {i === 5 && (
              // where every numpad reference says 6 lives — it keeps vanishing
              <motion.span
                className="text-white"
                animate={{ opacity: [1, 1, 0.15, 0.15, 1] }}
                transition={{ ...LOOP, times: [0, 0.3, 0.45, 0.85, 1] }}
              >
                6
              </motion.span>
            )}
            {i === 1 && (
              // ...and pops up top-centre, where ffmpeg 5.2 actually puts it
              <motion.span
                className="px-2 bg-neobrutalism-cyan text-neobrutalism-black"
                animate={{ scale: [0, 0, 1, 1, 0] }}
                transition={{ ...LOOP, times: [0, 0.4, 0.5, 0.9, 1] }}
              >
                6
              </motion.span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-1.5 text-[10px] font-black uppercase tracking-widest text-white/60">
        Captions kept teleporting top-centre. One integer.
      </p>
    </div>
  );
}

function DroppedXfade() {
  return (
    <div>
      <div className="flex justify-between items-baseline text-xs font-black uppercase tracking-wide text-white mb-2">
        <span>ffmpeg-static ^5.3.0</span>
        <span className="text-neobrutalism-cyan">same package</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="border-2 border-white/40 px-3 py-2 text-center">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/60">macOS resolves</div>
          <div className="font-mono font-bold text-white">
            6.0 · <span className="text-neobrutalism-cyan">xfade ✓</span>
          </div>
        </div>
        <div className="border-2 border-neobrutalism-cyan px-3 py-2 text-center overflow-hidden">
          <div className="text-[10px] font-black uppercase tracking-widest text-white/60">Linux resolves</div>
          <div className="font-mono font-bold text-neobrutalism-cyan">
            7.0 ·{' '}
            <motion.span
              className="inline-block"
              animate={{ y: [0, 0, 26, 26, 0], opacity: [1, 1, 0, 0, 1], rotate: [0, 0, 14, 14, 0] }}
              transition={{ ...LOOP, times: [0, 0.45, 0.6, 0.9, 1] }}
            >
              xfade
            </motion.span>
          </div>
        </div>
      </div>
      <p className="mt-1.5 text-[10px] font-black uppercase tracking-widest text-white/60">
        Same version range, different binary. Linux silently dropped every crossfade.
      </p>
    </div>
  );
}

export function GhostsInNumbers() {
  const ref = useRef(null);
  // mount animations only when the panel is on screen, so loops don't run all page long
  const inView = useInView(ref, { margin: '-60px' });
  return (
    <div
      ref={ref}
      className="p-6 bg-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-lg rotate-[0.5deg] space-y-6"
    >
      <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-cyan">The ghosts, in numbers</p>
      {inView && (
        <>
          <BarPair title="One save button" tag="1,300× smaller" bigLabel="57.8 MB" smallLabel="43 KB" smallPct="2%" />
          <BarPair title="One export" tag="one bitrate cap" bigLabel="232 MB" smallLabel="69 MB" smallPct="30%" />
          <JumpingSix />
          <DroppedXfade />
        </>
      )}
    </div>
  );
}
