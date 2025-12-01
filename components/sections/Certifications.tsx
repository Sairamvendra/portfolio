'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { CERTIFICATIONS } from '@/lib/constants';
import { Award } from 'lucide-react';

export function Certifications() {
  return (
    <section
      id="certifications"
      className="section relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE6F0 50%, #E6F5FF 100%)'
      }}
      aria-labelledby="certifications-heading"
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-48 h-48 bg-neobrutalism-purple/15 border-5 border-neobrutalism-black rotate-12" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-neobrutalism-yellow/15 border-5 border-neobrutalism-black -rotate-12" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neobrutalism-cyan/15 border-5 border-neobrutalism-black rotate-45" />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neobrutalism-purple border-3 border-neobrutalism-black shadow-neobrutalism-sm mb-4">
              <Award className="h-5 w-5" aria-hidden="true" />
              <span className="font-bold">Credentials</span>
            </div>
            <h2 id="certifications-heading" className="section-heading">
              Certifications
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
          {CERTIFICATIONS.map((cert, index) => {
            const colorVariants = ['yellow', 'cyan', 'pink', 'purple'] as const;
            const bgColor = colorVariants[index % colorVariants.length];

            return (
              <StaggerItem key={`${cert.issuer}-${cert.name}`}>
                <Card
                  bgColor={`bg-neobrutalism-${bgColor}`}
                  className="h-full hover:scale-105 hover:rotate-2 transition-all"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-neobrutalism-black">
                      <Award className="h-5 w-5 text-neobrutalism-white" aria-hidden="true" />
                    </div>
                    <Badge variant="default" className="text-xs">
                      Certified
                    </Badge>
                  </div>
                  <h3 className="text-lg font-black mb-2">{cert.name}</h3>
                  <p className="text-sm font-bold text-neobrutalism-black/70 mb-1">
                    {cert.issuer}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs font-medium text-neobrutalism-black/60 mt-2">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
