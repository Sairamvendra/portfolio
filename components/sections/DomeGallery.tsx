'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container } from '@/components/layout/Container';

const GALLERY_IMAGES = [
  '/carousel-1.jpg',
  '/carousel-2.jpg',
  '/carousel-3.jpg',
  '/carousel-4.jpg',
  '/carousel-5.jpg',
  '/carousel-6.jpg',
  '/carousel-7.jpg',
  '/carousel-8.jpg',
];

export function DomeGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const rotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  return (
    <section
      ref={containerRef}
      className="section relative overflow-hidden py-16"
      style={{ backgroundColor: '#B4E4E8' }}
      aria-label="Work showcase gallery"
    >
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-6 py-3 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg mb-6 -rotate-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neobrutalism-yellow">
              Work Showcase
            </h2>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-neobrutalism-black/80 max-w-2xl mx-auto">
            Scroll to explore creative productions
          </p>
        </motion.div>

        {/* 3D Dome Gallery */}
        <div className="relative w-full h-[600px] md:h-[700px] perspective-1000">
          <motion.div
            style={{
              rotateY: rotate,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full h-full max-w-5xl mx-auto"
          >
            {GALLERY_IMAGES.map((image, index) => {
              const angle = (index / GALLERY_IMAGES.length) * 360;
              const radius = 400;
              const yOffset = Math.sin((index / GALLERY_IMAGES.length) * Math.PI) * 100;

              return (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      rotateY(${angle}deg)
                      translateZ(${radius}px)
                      translateY(${yOffset}px)
                    `,
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="relative border-5 border-neobrutalism-black bg-neobrutalism-white overflow-hidden cursor-pointer shadow-neobrutalism-xl"
                    style={{
                      width: '240px',
                      height: '320px',
                      backfaceVisibility: 'hidden',
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotateZ: 5,
                      zIndex: 50,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <img
                      src={image}
                      alt={`Gallery showcase ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/sairam.png';
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
