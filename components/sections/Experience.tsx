'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { EXPERIENCES } from '@/lib/constants';
import { Building2, Calendar, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const colorVariants = [
    { bg: 'bg-gradient-to-br from-neobrutalism-yellow to-neobrutalism-yellow/80', badge: 'yellow' },
    { bg: 'bg-gradient-to-br from-neobrutalism-cyan to-neobrutalism-cyan/80', badge: 'cyan' },
    { bg: 'bg-gradient-to-br from-neobrutalism-pink to-neobrutalism-pink/80', badge: 'pink' },
    { bg: 'bg-gradient-to-br from-neobrutalism-purple to-neobrutalism-purple/80', badge: 'purple' },
  ] as const;

  return (
    <section
      id="experience"
      className="section relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFE5B4 0%, #FFD1B3 50%, #FFC8DD 100%)'
      }}
      aria-labelledby="experience-heading"
    >
      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-sm mb-4">
              <Building2 className="h-5 w-5" aria-hidden="true" />
              <span className="font-bold">Career Journey</span>
            </div>
            <h2 id="experience-heading" className="section-heading">
              Work Experience
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="max-w-5xl mx-auto space-y-6" staggerDelay={0.15}>
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const colorScheme = colorVariants[index % colorVariants.length];

            // Extract key metrics from achievements
            const metrics = exp.achievements
              .map(a => {
                const match = a.match(/(\d+\s*[→x]\s*\d+)/);
                return match ? match[1] : null;
              })
              .filter(Boolean)
              .slice(0, 3);

            return (
              <StaggerItem key={exp.id}>
                <Card bgColor="bg-neobrutalism-white" className="overflow-hidden hover:scale-[1.01] transition-transform">
                  {/* Header with gradient */}
                  <div className={`${colorScheme.bg} p-6 border-b-3 border-neobrutalism-black`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <Badge variant={colorScheme.badge as any} className="text-sm">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </Badge>
                          {exp.endDate === null && (
                            <Badge variant="green" className="text-sm">● Current</Badge>
                          )}
                          {metrics.length > 0 && (
                            <Badge variant="default" className="text-sm">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {metrics[0]}
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black mb-2">{exp.role}</h3>
                        <p className="text-xl font-bold text-neobrutalism-black/80">
                          {exp.company}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleExpanded(exp.id)}
                        className="p-3 border-3 border-neobrutalism-black bg-neobrutalism-white hover:bg-neobrutalism-yellow shadow-neobrutalism-md hover:shadow-neobrutalism-lg transition-all"
                        aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-6 w-6" aria-hidden="true" />
                        )}
                      </button>
                    </div>

                    {/* Technologies - Always visible */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.slice(0, 6).map((tech) => (
                            <Badge key={tech} variant="default" className="text-xs bg-neobrutalism-white/90">
                              {tech}
                            </Badge>
                          ))}
                          {exp.technologies.length > 6 && (
                            <Badge variant="default" className="text-xs bg-neobrutalism-white/90">
                              +{exp.technologies.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-neobrutalism-white">
                          <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                            <span className="inline-block w-1 h-6 bg-neobrutalism-black" />
                            Key Highlights
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {exp.achievements.slice(0, 6).map((achievement, idx) => (
                              <div
                                key={idx}
                                className="p-3 bg-gray-50 border-2 border-neobrutalism-black/20 hover:border-neobrutalism-black transition-colors"
                              >
                                <p className="text-sm leading-relaxed font-medium">{achievement}</p>
                              </div>
                            ))}
                          </div>
                          {exp.achievements.length > 6 && (
                            <p className="text-sm text-neobrutalism-black/60 mt-3 font-medium">
                              + {exp.achievements.length - 6} more achievements
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
