'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ACHIEVEMENTS } from '@/lib/constants';
import { Sparkles } from 'lucide-react';

export function ProfileSummary() {
  return (
    <section
      id="highlights"
      className="section bg-neobrutalism-white"
      aria-labelledby="highlights-heading"
    >
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neobrutalism-purple border-3 border-neobrutalism-black shadow-neobrutalism-sm mb-4">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              <span className="font-bold">Highlights</span>
            </div>
            <h2 id="highlights-heading" className="section-heading">
              Key Achievements
            </h2>
            <p className="text-lg text-neobrutalism-black/70 max-w-3xl mx-auto">
              Track record of driving measurable impact through innovation, automation, and strategic leadership
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {ACHIEVEMENTS.map((achievement, index) => (
            <StaggerItem key={index}>
              <Card
                bgColor="bg-neobrutalism-white"
                className="h-full hover:scale-[1.02] transition-transform"
              >
                <div className="flex flex-col h-full">
                  {achievement.metric && (
                    <Badge
                      variant={
                        index % 4 === 0
                          ? 'yellow'
                          : index % 4 === 1
                          ? 'cyan'
                          : index % 4 === 2
                          ? 'pink'
                          : 'purple'
                      }
                      className="mb-4 w-fit"
                    >
                      {achievement.metric}
                    </Badge>
                  )}
                  <p className="text-base leading-relaxed font-medium flex-1">
                    {achievement.text}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
