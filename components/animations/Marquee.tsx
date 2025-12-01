'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export function Marquee({ items, speed = 50, className = '' }: MarqueeProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden relative ${className}`}>
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-8 h-8 bg-neobrutalism-cyan border-2 border-neobrutalism-black rotate-12 opacity-30" />
        <div className="absolute bottom-2 left-1/4 w-6 h-6 bg-neobrutalism-pink border-2 border-neobrutalism-black -rotate-12 opacity-30" />
        <div className="absolute top-3 right-1/3 w-10 h-10 bg-neobrutalism-purple border-2 border-neobrutalism-black rotate-45 opacity-30" />
        <div className="absolute bottom-3 right-10 w-7 h-7 bg-neobrutalism-yellow border-2 border-neobrutalism-black -rotate-45 opacity-30" />
      </div>

      <motion.div
        className="flex gap-8 whitespace-nowrap relative z-10"
        animate={{
          x: [0, -100 * items.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => {
          // Alternate colors and rotations for visual interest
          const colors = [
            'bg-neobrutalism-yellow',
            'bg-neobrutalism-cyan',
            'bg-neobrutalism-pink',
            'bg-neobrutalism-purple',
          ];
          const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
          const color = colors[index % colors.length];
          const rotation = rotations[index % rotations.length];

          return (
            <div
              key={index}
              className={`flex-shrink-0 px-6 py-4 ${color} border-3 border-neobrutalism-black shadow-neobrutalism-md ${rotation} hover:scale-105 transition-transform`}
            >
              <span className="text-xl font-black">{item}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
