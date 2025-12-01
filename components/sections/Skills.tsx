'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Palette, Code, Sparkles, Users, Briefcase, BarChart } from 'lucide-react';

const SKILLS_EXPERTISE = [
  {
    category: 'CREATIVE & DESIGN',
    icon: Palette,
    skills: [
      'Art Direction',
      'Design Strategy',
      'Brand Design',
      'Performance Marketing',
      'UI/UX Design',
      'Visual Storytelling',
    ],
    color: 'bg-neobrutalism-yellow',
  },
  {
    category: 'TECHNICAL',
    icon: Code,
    skills: [
      'vertexAI',
      'Midjourney',
      'Sora / Runway ML',
      'ComfyUI / SD',
      'Google AI Studio',
      'Eleven Labs',
    ],
    color: 'bg-neobrutalism-cyan',
  },
  {
    category: 'AI & PRODUCT',
    icon: Sparkles,
    skills: [
      'AI Product Management',
      'Generative AI',
      'LLM Training',
      'Product Lifecycle',
      'Digital Transformation',
      'Innovation',
    ],
    color: 'bg-neobrutalism-pink',
  },
  {
    category: 'LEADERSHIP',
    icon: Users,
    skills: [
      'Cross-functional Leadership',
      'Stakeholder Management',
      'Team Mentorship',
      'Program Management',
      'Change Management',
      'Strategic Planning',
    ],
    color: 'bg-neobrutalism-purple',
  },
  {
    category: 'BUSINESS',
    icon: Briefcase,
    skills: [
      'Market Research',
      'Data-Driven Decisions',
      'Brand Refresh',
      'Process Optimization',
      'Quality Governance',
      'Budget Management',
    ],
    color: 'bg-neobrutalism-yellow',
  },
  {
    category: 'ANALYTICS',
    icon: BarChart,
    skills: [
      'Performance Analytics',
      'A/B Testing',
      'Workflow Automation',
      'Asset Operations',
      'Quality Assurance',
      'SOP Development',
    ],
    color: 'bg-neobrutalism-cyan',
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
          <div className="text-center mb-8">
            <h2 id="skills-heading" className="section-heading text-neobrutalism-white mb-6">
              Skills & Expertise
            </h2>
            {/* Stats badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="yellow" className="text-lg px-6 py-3">
                <span className="font-black text-2xl mr-2">10+</span>
                YEARS EXPERIENCE
              </Badge>
              <Badge variant="cyan" className="text-lg px-6 py-3">
                <span className="font-black text-2xl mr-2">100+</span>
                PROJECTS DELIVERED
              </Badge>
              <Badge variant="pink" className="text-lg px-6 py-3">
                <span className="font-black text-2xl mr-2">20x</span>
                PRODUCTIVITY GAINS
              </Badge>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" staggerDelay={0.1}>
          {SKILLS_EXPERTISE.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <StaggerItem key={skillGroup.category}>
                <Card
                  bgColor={skillGroup.color}
                  className="h-full hover:scale-105 transition-transform"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-neobrutalism-black flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-neobrutalism-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black leading-tight">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2 text-sm sm:text-base font-bold"
                      >
                        <span className="text-lg leading-none flex-shrink-0" aria-hidden="true">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
