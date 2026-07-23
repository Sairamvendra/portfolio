'use client';

import { motion } from 'framer-motion';
import ReactBitsDomeGallery from '@/components/reactbits/DomeGallery';
import InfiniteMenu from '@/components/reactbits/InfiniteMenu';

const GALLERY_IMAGES = Array.from(
  { length: 25 },
  (_, i) => `/showcase/showcase-${String(i + 1).padStart(2, '0')}.jpg`
);

// Project chips on the InfiniteMenu sphere (arrow button opens link in new tab)
const PROJECT_ITEMS = [
  {
    image: '/projects/kukufm.jpg',
    link: 'https://drive.google.com/drive/folders/11wSLFydyzVOu7jozFvYH-rfI_cMeWmlB',
    title: 'KukuFM',
    description: 'AI workflows, Product manager, Art direction, Creative direction',
  },
  {
    image: '/projects/primevideo.jpg',
    link: 'https://www.behance.net/gallery/115005921/Prime-Video',
    title: 'Prime Video',
    description: 'Design Lead, Creative direction, Art direction',
  },
  {
    image: '/projects/amazon.jpg',
    link: 'https://www.behance.net/gallery/99484467/Imaging-Associate',
    title: 'Amazon',
    description: 'Design Lead, Creative direction',
  },
  {
    image: '/projects/visualstudio.jpg',
    link: 'https://visualstudioprox.vercel.app/',
    title: 'Visual design studio',
    description: 'Agentic design, Product design, AI Product management',
  },
  {
    image: '/projects/nukestorybook.jpg',
    link: 'https://aistorybookz.vercel.app/',
    title: 'Nukestorybook',
    description: 'Agentic design, AI movie production, AI Product management',
  },
  {
    image: '/projects/trippo.jpg',
    link: 'https://www.behance.net/gallery/106819621/Trippo-Travel-planner-app-Design-UIUX',
    title: 'Trippo app design',
    description: 'Product design, Mobile app design',
  },
  {
    image: '/projects/cimpress.png',
    link: 'https://www.behance.net/gallery/99231029/Print-and-digital-design-products-(Previous-works)',
    title: 'Cimpress Vistaprint',
    description: 'Art direction, Custom designs, Print and digital media',
  },
  {
    image: '/projects/cashfree.jpg',
    link: 'https://www.behance.net/gallery/253120527/Agentic-AD-Creative-engine-forCashfree',
    title: 'Cashfree Agentic design',
    description: 'Agentic design, Art direction, Creative direction',
  },
];

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
            Drag to spin, click to enlarge
          </p>
        </motion.div>

        {/* React Bits InfiniteMenu — drag the sphere, arrow opens the active project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container-custom mb-12"
        >
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] bg-neobrutalism-white border-5 border-neobrutalism-black shadow-neobrutalism-xl overflow-hidden">
            <InfiniteMenu items={PROJECT_ITEMS} />
          </div>
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
