'use client';

import { motion } from 'framer-motion';
import ReactBitsDomeGallery from '@/components/reactbits/DomeGallery';

const GALLERY_IMAGES = Array.from(
  { length: 25 },
  (_, i) => `/showcase/showcase-${String(i + 1).padStart(2, '0')}.jpg`
);

export function DomeGallery() {
  return (
    <section
      className="section relative overflow-hidden py-16"
      style={{ backgroundColor: '#FF6B6B' }}
      aria-label="Work showcase gallery"
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="inline-block px-6 py-3 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg mb-6 -rotate-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neobrutalism-yellow">
              Work Showcase
            </h2>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-neobrutalism-black max-w-2xl mx-auto">
            Scroll to roll — drag to spin, click to enlarge
          </p>
        </motion.div>

        {/* React Bits dome, rolls with page scroll */}
        <div className="relative w-full h-[600px] md:h-[700px]">
          <ReactBitsDomeGallery
            images={GALLERY_IMAGES}
            grayscale={false}
            minRadius={1400}
            overlayBlurColor="#FF6B6B"
            imageBorderRadius="14px"
            openedImageBorderRadius="14px"
            openedImageWidth="340px"
            openedImageHeight="600px"
          />
        </div>
      </div>
    </section>
  );
}
