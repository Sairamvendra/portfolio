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
      setTimeout(() => setIsGlitching(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <motion.h1
        className="relative z-10 font-black glitch-text"
        data-text={text}
        animate={isGlitching ? {
          x: [0, -3, 3, -2, 2, 0],
          y: [0, 2, -2, 3, -3, 0],
        } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {text}
      </motion.h1>

      {/* Glitch layers with color shifts */}
      {isGlitching && (
        <>
          {/* Cyan layer */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full font-black z-0 text-neobrutalism-cyan mix-blend-screen"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              textShadow: '2px 0 #00FFFF'
            }}
            initial={{ x: -5, opacity: 0.8 }}
            animate={{
              x: [-5, 5, -5, 3, -3, -5],
              opacity: [0.8, 0.9, 0.7, 0.85, 0.75, 0.8]
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {text}
          </motion.div>

          {/* Pink/Red layer */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full font-black z-0 text-neobrutalism-pink mix-blend-screen"
            style={{
              clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)',
              textShadow: '-2px 0 #FF0080'
            }}
            initial={{ x: 5, opacity: 0.8 }}
            animate={{
              x: [5, -5, 5, -3, 3, 5],
              opacity: [0.8, 0.9, 0.7, 0.85, 0.75, 0.8]
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {text}
          </motion.div>

          {/* Yellow accent layer */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full font-black z-0 text-neobrutalism-yellow mix-blend-overlay"
            style={{
              clipPath: 'inset(20% 0 60% 0)',
              textShadow: '0 0 10px currentColor'
            }}
            initial={{ x: 0, y: 2, opacity: 0.6 }}
            animate={{
              x: [0, -2, 2, 0],
              y: [2, -2, 2, -1, 2],
              opacity: [0.6, 0.8, 0.5, 0.7, 0.6]
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {text}
          </motion.div>
        </>
      )}

      <style jsx>{`
        .glitch-text {
          position: relative;
          animation: ${isGlitching ? 'glitch-skew 0.5s infinite' : 'none'};
        }

        @keyframes glitch-skew {
          0% { transform: skew(0deg); }
          20% { transform: skew(-2deg); }
          40% { transform: skew(2deg); }
          60% { transform: skew(-1deg); }
          80% { transform: skew(1deg); }
          100% { transform: skew(0deg); }
        }
      `}</style>
    </div>
  );
}
