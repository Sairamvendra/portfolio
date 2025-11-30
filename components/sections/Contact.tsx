'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Palette } from 'lucide-react';
import { getEmailLink, getTelLink } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  palette: Palette,
};

export function Contact() {
  return (
    <section
      id="contact"
      className="section bg-gradient-to-br from-neobrutalism-yellow/20 via-neobrutalism-cyan/20 to-neobrutalism-pink/20"
      aria-labelledby="contact-heading"
    >
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 id="contact-heading" className="section-heading">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-neobrutalism-black/70 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you!
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <FadeIn delay={0.2} direction="left">
            <Card bgColor="bg-neobrutalism-white" className="h-full">
              <h3 className="text-2xl font-black mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neobrutalism-yellow border-3 border-neobrutalism-black shadow-neobrutalism-sm">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neobrutalism-black/60 mb-1">Email</p>
                    <a
                      href={getEmailLink(PERSONAL_INFO.email)}
                      className="text-lg font-bold hover:underline focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                      aria-label={`Send email to ${PERSONAL_INFO.email}`}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-sm">
                    <Phone className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neobrutalism-black/60 mb-1">Phone</p>
                    <a
                      href={getTelLink(PERSONAL_INFO.phone)}
                      className="text-lg font-bold hover:underline focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                      aria-label={`Call ${PERSONAL_INFO.phone}`}
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neobrutalism-pink border-3 border-neobrutalism-black shadow-neobrutalism-sm">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neobrutalism-black/60 mb-1">Location</p>
                    <p className="text-lg font-bold">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t-3 border-neobrutalism-black">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => window.location.href = getEmailLink(PERSONAL_INFO.email, 'Portfolio Inquiry')}
                  aria-label="Send me an email"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Send me an email
                </Button>
              </div>
            </Card>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.3} direction="right">
            <Card bgColor="bg-neobrutalism-purple" className="h-full">
              <h3 className="text-2xl font-black mb-6">Follow Me</h3>

              <div className="space-y-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm hover:shadow-neobrutalism-md hover:-translate-x-1 hover:-translate-y-1 transition-all group focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                      aria-label={social.ariaLabel}
                    >
                      <div className="p-3 bg-neobrutalism-black group-hover:bg-neobrutalism-purple transition-colors">
                        <Icon className="h-6 w-6 text-neobrutalism-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-black text-lg">{social.platform}</p>
                        {social.handle && (
                          <p className="text-sm text-neobrutalism-black/60">{social.handle}</p>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Card bgColor="bg-neobrutalism-yellow" className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-black mb-4">Ready to work together?</h3>
              <p className="text-lg mb-6">
                Let&apos;s create something amazing. Whether it&apos;s a new project, collaboration, or just a chat about design and AI.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = getEmailLink(PERSONAL_INFO.email, 'Let\'s Work Together')}
                  aria-label="Start a project"
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://www.notion.so/sairamvendra/Sairam-Vendra-1eb4d5e77783804fa1bcdb800a6eeb01', '_blank')}
                  aria-label="View full portfolio on Notion (opens in new tab)"
                >
                  View Full Portfolio
                </Button>
              </div>
            </Card>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
