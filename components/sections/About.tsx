'use client';

import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Sparkles, Zap, Film } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="section bg-neobrutalism-black"
      aria-labelledby="about-heading"
    >
      <Container>
        <FadeIn>
          <h2 id="about-heading" className="section-heading text-center text-neobrutalism-white">
            About Me
          </h2>
        </FadeIn>

        {/* Three cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" staggerDelay={0.1}>
          {/* Card 1: AI Solutions Architect */}
          <StaggerItem>
            <Card bgColor="bg-neobrutalism-cyan" className="h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neobrutalism-black">
                  <Sparkles className="h-6 w-6 text-neobrutalism-cyan" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3">AI Solutions Architect</h3>
                  <p className="text-base leading-relaxed">
                    Worked in multiple zero-to-one environments, connecting dots across product, operations, and technology to build scalable systems.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>

          {/* Card 2: Creative Technologist */}
          <StaggerItem>
            <Card bgColor="bg-neobrutalism-yellow" className="h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neobrutalism-black">
                  <Zap className="h-6 w-6 text-neobrutalism-yellow" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3">Creative Technologist</h3>
                  <p className="text-base leading-relaxed">
                    Trained and managed cross functional teams, built AI workflows to drive production up while making sure of consistent creative standards driving scalability for ads.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>

          {/* Card 3: AI Film Director */}
          <StaggerItem>
            <Card bgColor="bg-neobrutalism-pink" className="h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neobrutalism-black">
                  <Film className="h-6 w-6 text-neobrutalism-pink" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3">AI Film Director</h3>
                  <p className="text-base leading-relaxed">
                    Built proprietary tools from scratch to ease out the AI film making process saving significant amounts of time and cost.
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>
        </StaggerContainer>

        {/* Long card */}
        <FadeIn delay={0.4}>
          <div className="mt-6">
            <Card bgColor="bg-neobrutalism-purple">
              <div className="text-center">
                <p className="text-lg sm:text-xl leading-relaxed font-medium">
                  Leader in creative direction, vibe coding AI product management, design strategy. Track record of building automation-first pipelines, focused on strategic scalability to drive measurable business outcomes. Cross-functional leadership; stakeholder alignment, and end-to-end campaign delivery.
                </p>
              </div>
            </Card>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
