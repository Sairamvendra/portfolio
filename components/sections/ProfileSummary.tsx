'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Video, Image as ImageIcon, TrendingUp, Globe } from 'lucide-react';

const KEY_ACHIEVEMENTS = [
  {
    icon: Video,
    title: 'AI VIDEO PRODUCTION PIPELINE',
    subtitle: 'From 5 Days to 4 Hours',
    metrics: [
      { label: 'TIME SAVED', value: '4.8 days' },
      { label: 'COST REDUCTION', value: '85%' },
      { label: 'QUALITY SCORE', value: '9.2/10' },
    ],
    color: 'bg-neobrutalism-cyan',
  },
  {
    icon: ImageIcon,
    title: 'AI THUMBNAIL SYSTEM',
    subtitle: '10x Daily Output Increase',
    metrics: [
      { label: 'DAILY OUTPUT', value: '20' },
      { label: 'VARIANTS/TITLE', value: '10+' },
      { label: 'CTR IMPROVEMENT', value: '+35%' },
    ],
    color: 'bg-neobrutalism-yellow',
  },
  {
    icon: TrendingUp,
    title: 'AD PRODUCTION SCALING',
    subtitle: '5 to 100 Videos Per Week',
    metrics: [
      { label: 'WEEKLY OUTPUT', value: '100 vids' },
      { label: 'SCALING FACTOR', value: '20x' },
      { label: 'TEAM GROWTH', value: '0 new' },
    ],
    color: 'bg-neobrutalism-pink',
  },
  {
    icon: Globe,
    title: 'MULTI-REGIONAL DESIGN OPS',
    subtitle: 'Prime Video Global Campaigns',
    metrics: [
      { label: 'REGIONS', value: '3' },
      { label: 'PLATFORMS', value: '3' },
      { label: 'QUALITY SCORE', value: '9.5/10' },
    ],
    color: 'bg-neobrutalism-purple',
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
              Measurable impact through AI innovation and strategic execution
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
          {KEY_ACHIEVEMENTS.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <StaggerItem key={index}>
                <Card
                  bgColor={achievement.color}
                  className="h-full hover:scale-[1.02] transition-transform"
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-4 bg-neobrutalism-black">
                        <IconComponent className="h-8 w-8 text-neobrutalism-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-black leading-tight mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm sm:text-base font-bold text-neobrutalism-black/70">
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 mt-auto">
                      {achievement.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-neobrutalism-white/80 border-3 border-neobrutalism-black text-center"
                        >
                          <div className="text-xl sm:text-2xl font-black mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs font-bold text-neobrutalism-black/60 uppercase leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
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
