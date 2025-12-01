import { Container } from './Container';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { Linkedin, Twitter, Instagram, Palette } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  palette: Palette,
};

const brandColors: Record<string, string> = {
  linkedin: 'bg-[#0A66C2] hover:bg-[#004182]',
  twitter: 'bg-[#1DA1F2] hover:bg-[#0c85d0]',
  instagram: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90',
  palette: 'bg-[#FF6B6B] hover:bg-[#ee5a5a]',
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-5 border-neobrutalism-black bg-neobrutalism-white" role="contentinfo">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-black mb-4">{PERSONAL_INFO.name}</h3>
            <p className="text-sm font-medium mb-4">{PERSONAL_INFO.title}</p>
            <p className="text-sm italic">&quot;{PERSONAL_INFO.quote}&quot;</p>
            <p className="text-xs mt-1">— {PERSONAL_INFO.quoteAuthor}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:underline focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:underline focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  className="hover:underline focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-black mb-4">Connect</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon];
                const brandColor = brandColors[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 border-3 border-neobrutalism-black ${brandColor} text-white shadow-neobrutalism-sm hover:shadow-neobrutalism-md hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-3 focus:ring-neobrutalism-black`}
                    aria-label={social.ariaLabel}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-3 border-neobrutalism-black py-6 text-center text-sm bg-neobrutalism-yellow">
          <p className="font-bold">© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
