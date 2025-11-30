'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { ABOUT_ME, EDUCATION } from '@/lib/constants';
import { GraduationCap, Briefcase, Target } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="section bg-neobrutalism-white"
      aria-labelledby="about-heading"
    >
      <Container>
        <FadeIn>
          <h2 id="about-heading" className="section-heading text-center">
            About Me
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Professional Summary */}
          <FadeIn delay={0.2} direction="left">
            <Card bgColor="bg-neobrutalism-yellow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neobrutalism-black">
                  <Briefcase className="h-6 w-6 text-neobrutalism-yellow" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4">Professional Summary</h3>
                  <p className="text-base leading-relaxed">{ABOUT_ME}</p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.3} direction="right">
            <Card bgColor="bg-neobrutalism-cyan">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neobrutalism-black">
                  <GraduationCap className="h-6 w-6 text-neobrutalism-cyan" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4">Education</h3>
                  <p className="font-bold text-lg">{EDUCATION.degree}</p>
                  <p className="text-base mt-2">{EDUCATION.institution}</p>
                  <p className="text-sm mt-1 font-medium">{EDUCATION.period}</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>

        {/* Core Values / Focus Areas */}
        <FadeIn delay={0.4}>
          <div className="mt-8">
            <Card bgColor="bg-neobrutalism-pink">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neobrutalism-black">
                  <Target className="h-6 w-6 text-neobrutalism-pink" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-4">Core Focus Areas</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      'AI Product Management',
                      'Creative Direction',
                      'Design Strategy',
                      'Process Automation',
                      'Team Leadership',
                      'Data-Driven Decisions',
                      'Campaign Execution',
                      'Stakeholder Management',
                    ].map((area) => (
                      <div
                        key={area}
                        className="px-4 py-2 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm text-sm font-bold text-center"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
