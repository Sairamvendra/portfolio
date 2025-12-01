'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';
import { Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/utils';
import { GlitchText } from '@/components/animations/GlitchText';
import { Marquee } from '@/components/animations/Marquee';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Banner Background - creative placement */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Grid pattern overlay for neobrutalism effect */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }} />
          {/* Placeholder for banner image - will be replaced with actual image */}
          <div className="absolute inset-0 bg-gradient-to-br from-neobrutalism-yellow/20 via-neobrutalism-cyan/20 to-neobrutalism-pink/20" />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-neobrutalism-yellow border-3 border-neobrutalism-black shadow-neobrutalism-sm">
              <p className="text-sm font-bold">👋 Hello, I&apos;m</p>
            </div>

            <GlitchText
              speed={1}
              enableShadows={true}
              enableOnHover={false}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight"
            >
              SAIRAM VENDRA
            </GlitchText>

            {/* Role descriptions card */}
            <div className="p-6 bg-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-xl">
              <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                AI solutions architect, <span className="text-neobrutalism-yellow">Creative Technologist</span>, AI film director, Strategic generalist.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contact')}
                aria-label="Contact Sairam Vendra"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/sairam_v.pdf';
                  link.download = 'Sairam_Vendra_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                aria-label="Download resume"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Profile Image / Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md aspect-square">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-neobrutalism-yellow border-3 border-neobrutalism-black shadow-neobrutalism-lg" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-lg" />

              {/* Profile image container */}
              <div className="relative z-10 w-full h-full border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-white overflow-hidden">
                {/* Profile image */}
                <img
                  src="/sairam.png"
                  alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Accent border for neobrutalism effect */}
              <div className="absolute top-2 left-2 w-full h-full border-3 border-neobrutalism-pink -z-10" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="p-3 border-3 border-neobrutalism-black bg-neobrutalism-white shadow-neobrutalism-sm hover:shadow-neobrutalism-md transition-all focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
          aria-label="Scroll to about section"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </motion.div>

      {/* Rolling Marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-neobrutalism-white border-t-5 border-neobrutalism-black">
        <Marquee
          items={[
            'AI solutions',
            'Creative direction',
            'AI Films',
            'GenAI Automations',
            'Operations',
            'Product strategy'
          ]}
          speed={30}
        />
      </div>
    </section>
  );
}
