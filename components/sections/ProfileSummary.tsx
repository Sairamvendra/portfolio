'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { TrendingUp, Users, Zap, Target, Award, Lightbulb } from 'lucide-react';

// TODO: Replace this with actual content from the Arc image
const KEY_ACHIEVEMENTS = [
  {
    icon: TrendingUp,
    metric: '5 → 100',
    title: 'Production Scale',
    description: 'Scaled internal ad production capacity from 5 per week to 100 per week',
    color: 'bg-neobrutalism-yellow',
  },
  {
    icon: Zap,
    metric: '2 → 20',
    title: 'AI Automation',
    description: 'Operationalized AI for automated systems increasing throughput',
    color: 'bg-neobrutalism-cyan',
  },
  {
    icon: Lightbulb,
    metric: '8+',
    title: 'AI Innovations',
    description: 'Shipped AI innovation slate including video analysis, comics, chatbots, and more',
    color: 'bg-neobrutalism-pink',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description: 'Led multi-disciplinary design org and external partners with automation-first practices',
    color: 'bg-neobrutalism-purple',
  },
  {
    icon: Target,
    title: 'Campaign Excellence',
    description: 'Directed full campaign lifecycles delivering on-brief, on-time creative tied to business outcomes',
    color: 'bg-neobrutalism-yellow',
  },
  {
    icon: Award,
    title: 'Strategic Alignment',
    description: 'Drove cross-functional alignment with Product, Marketing, and Content teams',
    color: 'bg-neobrutalism-cyan',
  },
];

export function ProfileSummary() {
  return (
    <section
      id="highlights"
      className="section"
      style={{ backgroundColor: '#F5E6D3' }}
      aria-labelledby="highlights-heading"
    >
      <Container>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 id="highlights-heading" className="section-heading">
              Key Achievements
            </h2>
            <p className="text-lg text-neobrutalism-black/70 max-w-3xl mx-auto mt-4">
              Track record of driving measurable impact through innovation, automation, and strategic leadership
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {KEY_ACHIEVEMENTS.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <StaggerItem key={index}>
                <Card
                  bgColor={achievement.color}
                  className="h-full hover:scale-[1.02] transition-transform"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-neobrutalism-black">
                        <IconComponent className="h-6 w-6 text-neobrutalism-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        {achievement.metric && (
                          <Badge variant="default" className="mb-2">
                            {achievement.metric}
                          </Badge>
                        )}
                        <h3 className="text-xl font-black">{achievement.title}</h3>
                      </div>
                    </div>
                    <p className="text-base leading-relaxed font-medium flex-1">
                      {achievement.description}
                    </p>
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
