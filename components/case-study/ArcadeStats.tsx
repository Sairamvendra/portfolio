'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/**
 * Stat cards whose numbers spring up when scrolled into view.
 * Count-up logic adapted from React Bits CountUp (reactbits.dev); card styling
 * mirrors the template's `stats` block so the page reads as one system.
 */
export interface ArcadeStat {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function CountUp({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 28, stiffness: 90 });
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    const fmt = (v: number) => `${prefix}${Intl.NumberFormat('en-US').format(Math.round(v))}${suffix}`;
    if (ref.current) ref.current.textContent = fmt(0);
    const unsub = spring.on('change', v => {
      if (ref.current) ref.current.textContent = fmt(v);
    });
    return unsub;
  }, [spring, prefix, suffix]);

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, motionValue, to]);

  return <span ref={ref} />;
}

export function ArcadeStats({ items }: { items: ArcadeStat[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((s, i) => (
        <div
          key={i}
          className={`border-3 border-neobrutalism-black shadow-neobrutalism-lg p-6 ${
            i % 2 === 0 ? 'bg-neobrutalism-black -rotate-1' : 'bg-neobrutalism-white rotate-1'
          } hover:rotate-0 transition-transform duration-200`}
        >
          <div
            className={`font-heading font-black text-4xl sm:text-5xl leading-none tabular-nums ${
              i % 2 === 0 ? 'text-neobrutalism-yellow' : 'text-neobrutalism-black'
            }`}
          >
            <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
          </div>
          <div
            className={`mt-3 text-sm font-bold uppercase tracking-wide ${
              i % 2 === 0 ? 'text-white' : 'text-neobrutalism-black'
            }`}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
