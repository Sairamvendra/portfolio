'use client';

import { useState } from 'react';

type Side = { src: string; alt: string; sticker: string; caption: string };

/**
 * Before/after scrub slider for same-camera image pairs. The left layer
 * (before) is clipped at the handle, so its sticker and caption reveal and
 * hide with the image; the right side's text lives on the base layer and
 * gets covered the same way. An invisible full-size range input drives the
 * position, which gives drag, touch, click-to-jump, and arrow keys for free.
 */
export function CompareSlider({
  before,
  after,
  variants,
}: {
  before: Side;
  after?: Side;
  /* multiple right-hand sides, switchable via chips above the frame */
  variants?: { label: string; side: Side }[];
}) {
  const [pos, setPos] = useState(50);
  const [sel, setSel] = useState(0);
  const right = variants ? variants[sel].side : (after as Side);
  return (
    <div>
      {variants && (
        <div className="mb-4 flex flex-wrap gap-2 sm:gap-3">
          {variants.map((v, i) => (
            <button
              key={v.label}
              onClick={() => setSel(i)}
              className={`px-3 py-1.5 border-3 border-neobrutalism-black font-black uppercase tracking-wide text-xs transition-all duration-150 cursor-pointer ${
                i === sel
                  ? 'bg-neobrutalism-cyan text-neobrutalism-black shadow-neobrutalism-sm -translate-y-0.5'
                  : 'bg-neobrutalism-white text-neobrutalism-black hover:-translate-y-0.5'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}
    <div className="relative w-full border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-black select-none">
      {/* after: base layer, visible right of the handle */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={right.src} alt={right.alt} loading="lazy" decoding="async" draggable={false} className="w-full block" />
      <span className="absolute top-3 right-3 px-3 py-1.5 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-sm font-black uppercase tracking-widest text-[10px] sm:text-xs text-neobrutalism-black rotate-1">
        {right.sticker}
      </span>
      <p className="absolute bottom-3 right-3 max-w-[45%] px-3 py-1.5 bg-neobrutalism-white border-2 border-neobrutalism-black text-xs sm:text-sm font-bold text-neobrutalism-black text-right">
        {right.caption}
      </p>

      {/* before: clipped layer, visible left of the handle */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before.src} alt={before.alt} loading="lazy" decoding="async" draggable={false} className="w-full h-full object-cover block" />
        <span className="absolute top-3 left-3 px-3 py-1.5 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-sm font-black uppercase tracking-widest text-[10px] sm:text-xs text-neobrutalism-black -rotate-1">
          {before.sticker}
        </span>
        <p className="absolute bottom-3 left-3 max-w-[45%] px-3 py-1.5 bg-neobrutalism-white border-2 border-neobrutalism-black text-xs sm:text-sm font-bold text-neobrutalism-black">
          {before.caption}
        </p>
      </div>

      {/* handle */}
      <div aria-hidden="true" className="absolute inset-y-0 pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-[3px] bg-neobrutalism-white shadow-[0_0_0_1px_rgba(0,0,0,0.8)]" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-sm flex items-center justify-center font-black text-neobrutalism-black tracking-tighter">
        ◂▸
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={0.1}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Scrub to compare: ${before.sticker} versus ${right.sticker}`}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize m-0"
      />
    </div>
    </div>
  );
}
