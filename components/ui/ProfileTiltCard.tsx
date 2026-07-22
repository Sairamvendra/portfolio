'use client';

import { useRef } from 'react';

// React Bits ProfileCard, translated to neobrutalism: 3D cursor tilt, glare
// and holo rainbow shine, with hard borders and offset shadows instead of glass.
export function ProfileTiltCard({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const setVars = (rx: number, ry: number, px: number, py: number) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--px', `${px}%`);
    el.style.setProperty('--py', `${py}%`);
    // background drift for the holo shine (35%..65% like the original)
    el.style.setProperty('--bx', `${35 + px * 0.3}%`);
    el.style.setProperty('--by', `${35 + py * 0.3}%`);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setVars((py - 0.5) * -10, (px - 0.5) * 10, px * 100, py * 100);
  };

  return (
    <div style={{ perspective: '700px' }} className="w-full h-full">
      <div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={() => setVars(0, 0, 50, 50)}
        className="group relative z-10 w-full h-full border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-white overflow-hidden transition-transform duration-150 ease-out"
        style={{
          transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
          transformStyle: 'preserve-3d',
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />

        {/* Holo rainbow shine (sunpillars + diagonal streaks, from the ProfileCard) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-10 group-hover:opacity-25 transition-opacity duration-300"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,
                hsl(2,100%,73%) 5%, hsl(53,100%,69%) 10%, hsl(93,100%,69%) 15%,
                hsl(176,100%,76%) 20%, hsl(228,100%,74%) 25%, hsl(283,100%,73%) 30%,
                hsl(2,100%,73%) 35%),
              repeating-linear-gradient(-45deg,
                #0e152e 0%, hsl(180,10%,60%) 3.8%, hsl(180,29%,66%) 4.5%,
                hsl(180,10%,60%) 5.2%, #0e152e 10%, #0e152e 12%)`,
            backgroundSize: '500% 500%, 300% 300%',
            backgroundPosition: '0 var(--by, 50%), var(--bx, 50%) var(--by, 50%)',
            backgroundBlendMode: 'color, hard-light',
          }}
        />

        {/* Cursor-following glare */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
          style={{
            background:
              'radial-gradient(circle at var(--px, 50%) var(--py, 50%), rgba(255,255,255,0.65) 0%, transparent 55%)',
          }}
        />

      </div>
    </div>
  );
}
