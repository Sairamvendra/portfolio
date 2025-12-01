'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <motion.h1
        className="relative z-10 font-black"
        animate={isGlitching ? {
          x: [0, -2, 2, -2, 0],
          y: [0, 2, -2, 2, 0],
        } : {}}
        transition={{ duration: 0.4 }}
      >
        {text}
      </motion.h1>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-full h-full font-black z-0 text-neobrutalism-cyan"
            style={{ clipPath: 'inset(0 0 80% 0)' }}
            initial={{ x: -3, opacity: 0.8 }}
            animate={{ x: [-3, 3, -3], opacity: [0.8, 0.6, 0.8] }}
            transition={{ duration: 0.4 }}
          >
            {text}
          </motion.div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full font-black z-0 text-neobrutalism-pink"
            style={{ clipPath: 'inset(80% 0 0 0)' }}
            initial={{ x: 3, opacity: 0.8 }}
            animate={{ x: [3, -3, 3], opacity: [0.8, 0.6, 0.8] }}
            transition={{ duration: 0.4 }}
          >
            {text}
          </motion.div>
        </>
      )}
    </div>
  );
}
