'use client';

import { FadeIn } from '@/components/animations/FadeIn';

export function Banner() {
  return (
    <section className="w-full" aria-label="Banner section">
      <FadeIn>
        <div className="w-full h-[400px] lg:h-[500px] border-y-5 border-neobrutalism-black shadow-neobrutalism-xl overflow-hidden">
          <img
            src="/banner-web.jpg"
            alt="Portfolio banner"
            className="w-full h-full object-cover"
          />
        </div>
      </FadeIn>
    </section>
  );
}
