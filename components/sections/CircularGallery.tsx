'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/layout/Container';

// TODO: User needs to download these images from Google Drive and add them to public folder
// as carousel-1.jpg, carousel-2.jpg, etc.
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

export function CircularGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={containerRef}
      className="section overflow-hidden"
      style={{ backgroundColor: '#B4E4E8' }} // pastel cyan
      aria-label="Work showcase gallery"
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="section-heading">Work Showcase</h2>
          <p className="text-lg text-neobrutalism-black/70 mt-4">
            A glimpse into creative projects and productions
          </p>
        </div>

        {/* Circular Gallery */}
        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center">
          <motion.div
            style={{ rotate }}
            className="relative w-full h-full max-w-3xl mx-auto"
          >
            {GALLERY_IMAGES.map((image, index) => {
              const angle = (index / GALLERY_IMAGES.length) * 360;
              const radius = 45; // percentage

              return (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    rotate: `${angle}deg`,
                    transformOrigin: 'center',
                  }}
                >
                  <motion.div
                    className="border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-white overflow-hidden hover:scale-110 transition-transform cursor-pointer"
                    style={{
                      width: '180px',
                      height: '180px',
                      transform: `translateY(-${radius}vh) rotate(-${angle}deg)`,
                    }}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        (e.target as HTMLImageElement).src = '/sairam.png';
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-5 border-neobrutalism-black bg-neobrutalism-yellow shadow-neobrutalism-xl z-10 flex items-center justify-center">
            <span className="text-4xl font-black">SV</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm font-bold text-neobrutalism-black/60">
            Scroll to rotate • Click images to view
          </p>
        </div>
      </Container>
    </section>
  );
}
