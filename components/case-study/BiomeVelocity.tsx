'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';

/**
 * Adapted from React Bits ScrollVelocity (reactbits.dev): two opposing marquee
 * rows that surge with scroll speed — an endless runner's speed lines, in type.
 * Row styling swapped for neobrutalism: solid row + outlined row on a bordered band.
 */
function useElementWidth(ref: React.RefObject<HTMLSpanElement | null>) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const update = () => setWidth(ref.current?.offsetWidth ?? 0);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [ref]);
  return width;
}

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function VelocityRow({
  text,
  baseVelocity,
  outlined,
}: {
  text: string;
  baseVelocity: number;
  outlined?: boolean;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const copyRef = useRef<HTMLSpanElement>(null);
  const copyWidth = useElementWidth(copyRef);
  const x = useTransform(baseX, v => (copyWidth === 0 ? '0px' : `${wrap(-copyWidth, 0, v)}px`));

  const direction = useRef(baseVelocity < 0 ? -1 : 1);
  useAnimationFrame((_, delta) => {
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = baseVelocity < 0 ? 1 : -1;
    else if (vf > 0) direction.current = baseVelocity < 0 ? -1 : 1;
    let moveBy = direction.current * Math.abs(baseVelocity) * (delta / 1000);
    moveBy += moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative overflow-hidden py-1">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {Array.from({ length: 4 }, (_, i) => (
          <span
            key={i}
            ref={i === 0 ? copyRef : null}
            className={`flex-shrink-0 font-heading font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight ${
              outlined ? 'text-transparent' : 'text-neobrutalism-black'
            }`}
            style={outlined ? { WebkitTextStroke: '2px #000' } : undefined}
          >
            {text}&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function BiomeVelocity({ biomes }: { biomes: string[] }) {
  const line = biomes.map(b => `${b} ✦ `).join('');
  return (
    <div
      aria-hidden="true"
      className="relative left-1/2 -translate-x-1/2 w-screen bg-neobrutalism-white border-y-5 border-neobrutalism-black py-4 sm:py-6"
    >
      <VelocityRow text={line} baseVelocity={70} />
      <VelocityRow text={line} baseVelocity={-70} outlined />
    </div>
  );
}
