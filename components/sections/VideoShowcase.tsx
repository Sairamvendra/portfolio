'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { VIDEOS } from '@/lib/constants';
import { Play, Pause, Video as VideoIcon, ExternalLink } from 'lucide-react';

export function VideoShowcase() {
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set(VIDEOS.map(v => v.id)));

  const toggleVideo = (videoId: string) => {
    setPlayingVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  return (
    <section
      id="videos"
      className="section relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E0F4FF 0%, #D4E4FF 50%, #E8D4FF 100%)'
      }}
      aria-labelledby="videos-heading"
    >
      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neobrutalism-pink border-3 border-neobrutalism-black shadow-neobrutalism-sm mb-4">
              <VideoIcon className="h-5 w-5" aria-hidden="true" />
              <span className="font-bold">Portfolio</span>
            </div>
            <h2 id="videos-heading" className="section-heading">
              Video Showcase
            </h2>
            <p className="text-lg text-neobrutalism-black/70 max-w-3xl mx-auto">
              Explore my creative work and AI-powered innovations
            </p>
            <div className="mt-6">
              <a
                href="https://drive.google.com/drive/folders/11wSLFydyzVOu7jozFvYH-rfI_cMeWmlB?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neobrutalism-black text-neobrutalism-yellow font-black border-3 border-neobrutalism-black shadow-neobrutalism-lg hover:shadow-neobrutalism-xl transition-all"
              >
                <ExternalLink className="h-5 w-5" />
                View Full Portfolio
              </a>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {VIDEOS.map((video) => {
            const isPlaying = playingVideos.has(video.id);

            return (
              <StaggerItem key={video.id}>
                <Card bgColor="bg-neobrutalism-white" className="overflow-hidden p-0 hover:scale-[1.02] transition-transform">
                  <div className="relative aspect-video bg-neobrutalism-black">
                    <iframe
                      src={isPlaying ? video.embedUrl : `${video.embedUrl}&autoplay=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 border-t-3 border-neobrutalism-black">
                    <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleVideo(video.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold border-3 border-neobrutalism-black bg-neobrutalism-yellow hover:bg-neobrutalism-cyan shadow-neobrutalism-sm hover:shadow-neobrutalism-md transition-all focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                        aria-label={isPlaying ? `Pause ${video.title}` : `Play ${video.title}`}
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="h-4 w-4" aria-hidden="true" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4" aria-hidden="true" />
                            Play
                          </>
                        )}
                      </button>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold hover:underline focus:outline-none focus:ring-3 focus:ring-neobrutalism-black"
                        aria-label={`Watch ${video.title} on YouTube (opens in new tab)`}
                      >
                        YouTube →
                      </a>
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
