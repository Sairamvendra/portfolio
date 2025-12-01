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

  // Decorative icons
  const decorativeIcons = ['★', '◆', '▲', '●'];

  return (
    <div className={`overflow-hidden relative ${className} -rotate-2`}>
      <motion.div
        className="flex gap-6 whitespace-nowrap relative z-10 py-4"
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
          const icon = decorativeIcons[index % decorativeIcons.length];

          return (
            <div key={index} className="flex items-center gap-6 flex-shrink-0">
              <div className="px-8 py-4 bg-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-md">
                <span className="text-xl font-black text-neobrutalism-yellow">{item}</span>
              </div>
              <span className="text-3xl font-black text-neobrutalism-yellow opacity-50">
                {icon}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
