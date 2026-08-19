'use client';

import { useEffect, useRef } from 'react';

/**
 * Canvas title with CRT scanline jitter, adapted (and trimmed) from React Bits
 * FuzzyText (reactbits.dev). Renders static text under prefers-reduced-motion.
 */
export function FuzzyTitle({
  text,
  color = '#FF4911',
  fontSize = 'clamp(3rem, 12vw, 9rem)',
  baseIntensity = 0.16,
  hoverIntensity = 0.45,
  className = '',
}: {
  text: string;
  color?: string;
  fontSize?: string;
  baseIntensity?: number;
  hoverIntensity?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let raf = 0;
    let cancelled = false;

    const init = async () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const family = window.getComputedStyle(canvas).fontFamily || 'sans-serif';

      const temp = document.createElement('span');
      temp.style.fontSize = fontSize;
      document.body.appendChild(temp);
      const px = parseFloat(window.getComputedStyle(temp).fontSize);
      document.body.removeChild(temp);

      const font = `900 ${px}px ${family}`;
      try {
        await document.fonts.load(font);
      } catch {
        /* fall back to whatever is loaded */
      }
      if (cancelled) return;

      const off = document.createElement('canvas');
      const offCtx = off.getContext('2d');
      if (!offCtx) return;
      offCtx.font = font;
      offCtx.textBaseline = 'alphabetic';
      const m = offCtx.measureText(text);
      const ascent = m.actualBoundingBoxAscent ?? px;
      const descent = m.actualBoundingBoxDescent ?? px * 0.2;
      const width = Math.ceil(m.width) + 10;
      const height = Math.ceil(ascent + descent);
      off.width = width;
      off.height = height;
      offCtx.font = font;
      offCtx.textBaseline = 'alphabetic';
      offCtx.fillStyle = color;
      offCtx.fillText(text, 5, ascent);

      const fuzz = 30;
      canvas.width = width + fuzz * 2;
      canvas.height = height;
      ctx.translate(fuzz, 0);

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        ctx.drawImage(off, 0, 0);
        return;
      }

      let hovering = false;
      const onMove = (e: MouseEvent) => {
        const r = canvas.getBoundingClientRect();
        hovering = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      };
      window.addEventListener('mousemove', onMove);

      let last = 0;
      const run = (t: number) => {
        if (cancelled) return;
        if (t - last > 1000 / 45) {
          last = t;
          const intensity = hovering ? hoverIntensity : baseIntensity;
          ctx.clearRect(-fuzz, 0, canvas.width, canvas.height);
          for (let j = 0; j < height; j++) {
            const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzz);
            ctx.drawImage(off, 0, j, width, 1, dx, j, width, 1);
          }
        }
        raf = requestAnimationFrame(run);
      };
      raf = requestAnimationFrame(run);

      canvas.dataset.cleanup = '1';
      const cleanup = () => window.removeEventListener('mousemove', onMove);
      (canvas as HTMLCanvasElement & { fuzzyCleanup?: () => void }).fuzzyCleanup = cleanup;
    };
    init();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      (canvas as HTMLCanvasElement & { fuzzyCleanup?: () => void }).fuzzyCleanup?.();
    };
  }, [text, color, fontSize, baseIntensity, hoverIntensity]);

  return <canvas ref={canvasRef} className={`max-w-full font-heading ${className}`} aria-label={text} role="img" />;
}
