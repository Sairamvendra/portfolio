'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

/**
 * Hostile roster on 3D-tilting cards. Tilt mechanics adapted from React Bits
 * TiltedCard (reactbits.dev); frames restyled to neobrutalism plates, the ship
 * render floats above the card on the Z axis.
 */
export interface Enemy {
  img: string;
  name: string;
  tier: string;
  blurb: string;
}

const SPRING = { damping: 30, stiffness: 120, mass: 1.5 };

function TiltCard({ enemy, dark, tall }: { enemy: Enemy; dark?: boolean; tall?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), SPRING);
  const rotateY = useSpring(useMotionValue(0), SPRING);
  const scale = useSpring(1, SPRING);

  function onMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const ox = e.clientX - rect.left - rect.width / 2;
    const oy = e.clientY - rect.top - rect.height / 2;
    rotateX.set((oy / (rect.height / 2)) * -10);
    rotateY.set((ox / (rect.width / 2)) * 10);
  }
  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <div ref={ref} className="[perspective:800px] h-full" onMouseMove={onMove} onMouseEnter={() => scale.set(1.04)} onMouseLeave={onLeave}>
      <motion.div
        style={{ rotateX, rotateY, scale }}
        className={`[transform-style:preserve-3d] h-full flex flex-col border-3 border-neobrutalism-black shadow-neobrutalism-lg p-6 ${
          dark ? 'bg-neobrutalism-black text-white' : 'bg-neobrutalism-white'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <h4 className={`text-xl font-black uppercase leading-tight ${dark ? 'text-neobrutalism-yellow' : ''}`}>{enemy.name}</h4>
          <span
            className={`shrink-0 px-2 py-1 text-[10px] font-black uppercase tracking-widest border-3 border-neobrutalism-black ${
              dark ? 'bg-neobrutalism-yellow text-neobrutalism-black' : 'bg-neobrutalism-black text-white'
            }`}
          >
            {enemy.tier}
          </span>
        </div>
        <div className="flex-1 flex items-center justify-center py-4 [transform:translateZ(40px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={enemy.img}
            alt={enemy.name}
            loading="lazy"
            decoding="async"
            className={`w-auto ${tall ? 'max-h-80' : 'max-h-36'} drop-shadow-[6px_8px_0_rgba(0,0,0,0.25)]`}
          />
        </div>
        <p className={`text-sm font-bold leading-relaxed ${dark ? 'text-white/85' : ''}`}>{enemy.blurb}</p>
      </motion.div>
    </div>
  );
}

export function EnemyRoster({ ships, boss }: { ships: Enemy[]; boss: Enemy }) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
        {ships.map(e => (
          <TiltCard key={e.name} enemy={e} />
        ))}
      </div>
      <TiltCard enemy={boss} dark tall />
    </div>
  );
}
