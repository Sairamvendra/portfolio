'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { EXPERIENCES } from '@/lib/constants';
import { ChevronDown, ChevronUp, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="section bg-gray-50"
      aria-labelledby="experience-heading"
    >
      <Container>
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

        <StaggerContainer className="max-w-4xl mx-auto space-y-6" staggerDelay={0.15}>
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const colorVariants = ['yellow', 'cyan', 'pink', 'purple'] as const;
            const badgeColor = colorVariants[index % colorVariants.length];

            return (
              <StaggerItem key={exp.id}>
                <Card bgColor="bg-neobrutalism-white" className="overflow-hidden">
                  <div>
                    {/* Header - Always Visible */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <Badge variant={badgeColor}>
                            {exp.period}
                          </Badge>
                          {exp.endDate === null && (
                            <Badge variant="green">Current</Badge>
                          )}
                        </div>
                        <h3 className="text-2xl font-black mb-1">{exp.role}</h3>
                        <p className="text-lg font-bold text-neobrutalism-black/70">
                          {exp.company}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleExpanded(exp.id)}
                        className="p-2 border-3 border-neobrutalism-black bg-neobrutalism-white hover:bg-neobrutalism-yellow shadow-neobrutalism-sm hover:shadow-neobrutalism-md transition-all focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                        aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                        aria-expanded={isExpanded}
                        aria-controls={`experience-details-${exp.id}`}
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        )}
                      </button>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          id={`experience-details-${exp.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t-3 border-neobrutalism-black">
                            {/* Achievements */}
                            <h4 className="text-lg font-black mb-4">Key Achievements:</h4>
                            <ul className="space-y-3 mb-6" aria-label={`Achievements at ${exp.company}`}>
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span
                                    className="inline-block w-2 h-2 bg-neobrutalism-black mt-2 flex-shrink-0"
                                    aria-hidden="true"
                                  />
                                  <span className="text-base leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Technologies */}
                            {exp.technologies && exp.technologies.length > 0 && (
                              <div>
                                <h4 className="text-lg font-black mb-3">Technologies & Tools:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.map((tech) => (
                                    <Badge key={tech} variant="default">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
