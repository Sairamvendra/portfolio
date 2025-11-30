'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { SKILLS } from '@/lib/constants';

export function Skills() {
  return (
    <section
      id="skills"
      className="section bg-gray-50"
      aria-labelledby="skills-heading"
    >
      <Container>
        <FadeIn>
          <h2 id="skills-heading" className="section-heading text-center">
            Core Skills
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" staggerDelay={0.1}>
          {SKILLS.map((skillGroup, index) => (
            <StaggerItem key={skillGroup.category}>
              <Card
                bgColor={`bg-${skillGroup.color}`}
                className="h-full hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-black mb-4 min-h-[3.5rem] flex items-center">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2" aria-label={`${skillGroup.category} skills`}>
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2 text-sm font-medium"
                    >
                      <span className="text-lg leading-none" aria-hidden="true">▸</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
