'use client';

import { useEffect, useRef } from 'react';

/**
 * A tall webtoon strip in a fixed-height frame. The strip auto-scrolls with
 * the page (parallax) until the reader interacts, then control is theirs:
 * wheel, touch, or mouse-drag to read through the chapter.
 */
export function ComicScroller({ src, alt, sticker }: { src: string; alt: string; sticker: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const userDrove = useRef(false);
  const drag = useRef<{ y: number; top: number } | null>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      if (userDrove.current) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = box.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
        // ponytail: cap the auto-scroll to ~3 frames so panels stay readable in passing
        const autoRange = Math.min(box.scrollHeight - box.clientHeight, box.clientHeight * 3);
        box.scrollTop = p * autoRange;
      });
    };
    const stop = () => {
      userDrove.current = true;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    box.addEventListener('wheel', stop, { passive: true });
    box.addEventListener('touchstart', stop, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      box.removeEventListener('wheel', stop);
      box.removeEventListener('touchstart', stop);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative">
      <div className="h-0">
        <div className="relative z-10 w-fit -rotate-3 -translate-y-3 -translate-x-2 px-3 py-1 bg-neobrutalism-pink border-3 border-neobrutalism-black shadow-neobrutalism-sm">
          <span className="font-black uppercase tracking-widest whitespace-nowrap text-xs">{sticker}</span>
        </div>
      </div>
      <div className="relative border-3 border-neobrutalism-black shadow-neobrutalism-md bg-neobrutalism-black">
        <div
          ref={boxRef}
          className="h-[420px] sm:h-[540px] overflow-y-auto overscroll-contain cursor-grab active:cursor-grabbing select-none"
          onPointerDown={(e) => {
            if (e.pointerType !== 'mouse') return;
            userDrove.current = true;
            drag.current = { y: e.clientY, top: boxRef.current!.scrollTop };
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (drag.current) boxRef.current!.scrollTop = drag.current.top - (e.clientY - drag.current.y);
          }}
          onPointerUp={() => {
            drag.current = null;
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" decoding="async" draggable={false} className="w-full h-auto block" />
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-neobrutalism-black/80 text-white text-[10px] font-black uppercase tracking-widest pointer-events-none">
          Drag to read ↓
        </div>
      </div>
    </div>
  );
}
