'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * The worldgen story as a looping pictogram: one hashed salt deals the eleven
 * biomes, then re-rolls. House animatic style — neobrutalism chips, framer pops.
 */

const HOLD_MS = 3800;
const SALTS = ['0x7f3a91c4', '0x18de40b2', '0xc25b17e9', '0x94a6f05d'];
const BIOMES = [
  'Ruin City', 'Crash Desert', 'Deep Forest', 'Lost Temple', 'Slot Canyon', 'Volcanic Caldera',
  'Titan Boneyard', 'Sunken City', 'Sky Shards', 'Sacred Peaks', 'Elder Grove',
];

export function SaltDealAnimatic() {
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCycle(c => c + 1), HOLD_MS);
    return () => clearInterval(id);
  }, []);

  // deterministic visual shuffle per cycle — the point is "same salt, same deal"
  const shift = (cycle * 4) % BIOMES.length;
  const dealt = [...BIOMES.slice(shift), ...BIOMES.slice(0, shift)];

  return (
    <div className="border-3 border-neobrutalism-black shadow-neobrutalism-lg bg-neobrutalism-white p-6 sm:p-8">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-2 py-1 bg-neobrutalism-white border-3 border-neobrutalism-black font-black uppercase tracking-widest text-xs">
          Run salt
        </span>
        <motion.span
          key={cycle}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-3 py-1.5 bg-neobrutalism-black text-neobrutalism-yellow font-mono font-bold text-sm sm:text-base"
        >
          {SALTS[cycle % SALTS.length]}
        </motion.span>
        <span aria-hidden="true" className="font-black text-2xl">→</span>
        <span className="px-2 py-1 bg-neobrutalism-yellow border-3 border-neobrutalism-black font-black uppercase tracking-widest text-xs -rotate-1">
          Deals the world
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {dealt.map((b, i) => (
          <motion.span
            key={`${cycle}-${b}`}
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.09, duration: 0.28 }}
            className={`px-2.5 py-1.5 border-3 border-neobrutalism-black font-bold text-xs sm:text-sm ${
              i === 0 ? 'bg-neobrutalism-yellow' : 'bg-neobrutalism-white'
            }`}
          >
            {i === 0 ? `▶ ${b}` : b}
          </motion.span>
        ))}
      </div>
      <p className="mt-5 text-sm font-bold uppercase tracking-wide text-neobrutalism-black/60">
        Same salt → same world · every run re-rolls · first chip = starting biome
      </p>
    </div>
  );
}
