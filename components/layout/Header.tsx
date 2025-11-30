'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Experience', href: 'experience' },
  { name: 'Work', href: 'videos' },
  { name: 'Contact', href: 'contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-neobrutalism-white border-b-3 border-neobrutalism-black shadow-neobrutalism-sm' : 'bg-transparent'
      }`}
      role="banner"
    >
      <Container>
        <nav className="flex items-center justify-between py-4" role="navigation" aria-label="Main navigation">
          {/* Logo/Name */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl sm:text-2xl font-black hover:scale-105 transition-transform focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
              aria-label="Go to top of page"
            >
              SV
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 font-bold text-sm hover:bg-neobrutalism-yellow hover:border-3 hover:border-neobrutalism-black hover:shadow-neobrutalism-sm transition-all focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-3 border-neobrutalism-black bg-neobrutalism-white shadow-neobrutalism-sm hover:shadow-neobrutalism-md transition-all"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-3 border-neobrutalism-black bg-neobrutalism-white overflow-hidden"
          >
            <Container>
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-3 font-bold border-3 border-neobrutalism-black bg-neobrutalism-white hover:bg-neobrutalism-yellow shadow-neobrutalism-sm hover:shadow-neobrutalism-md transition-all"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
