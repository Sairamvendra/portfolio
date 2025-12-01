'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Code, Palette, Cog, Database } from 'lucide-react';

// TODO: Replace this with actual content from the SKILLS & EXPERTISE image
const SKILLS_EXPERTISE = [
  {
    category: 'Technical Skills',
    icon: Code,
    skills: ['AI/ML', 'Automation', 'Data Analysis', 'Product Development'],
    color: 'bg-neobrutalism-cyan',
  },
  {
    category: 'Creative Skills',
    icon: Palette,
    skills: ['Creative Direction', 'Visual Design', 'Brand Strategy', 'Film Direction'],
    color: 'bg-neobrutalism-yellow',
  },
  {
    category: 'Management Skills',
    icon: Cog,
    skills: ['Product Management', 'Team Leadership', 'Stakeholder Management', 'Operations'],
    color: 'bg-neobrutalism-pink',
  },
  {
    category: 'Tools & Platforms',
    icon: Database,
    skills: ['GPT', 'Midjourney', 'Runway ML', 'Sora', 'Dall-E', 'Eleven Labs'],
    color: 'bg-neobrutalism-purple',
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="section bg-neobrutalism-black"
      aria-labelledby="skills-heading"
    >
      <Container>
        <FadeIn>
          <h2 id="skills-heading" className="section-heading text-center text-neobrutalism-white">
            Skills & Expertise
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12" staggerDelay={0.1}>
          {SKILLS_EXPERTISE.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <StaggerItem key={skillGroup.category}>
                <Card
                  bgColor={skillGroup.color}
                  className="h-full hover:scale-105 transition-transform"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-neobrutalism-black">
                      <IconComponent className="h-6 w-6 text-neobrutalism-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-black flex-1">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge key={skill} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
