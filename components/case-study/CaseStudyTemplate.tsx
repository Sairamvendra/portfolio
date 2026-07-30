import Link from 'next/link';
import type { ReactNode } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Container } from '@/components/layout/Container';

/**
 * Block-based template for case-study pages (see app/cashfree/page.tsx for
 * the reference usage — copy it and swap the data for a new page).
 * Each page = <CaseStudyTemplate {...meta} blocks={[...]} />.
 * New one-off elements that don't fit any block type go in a
 * { type: 'custom', node: <AnyJsx /> } block — no template changes needed.
 * Group blocks into a { type: 'section', bg, blocks } to put them on a
 * full-bleed colored band.
 */

export type Accent =
  | 'yellow' | 'pink' | 'cyan' | 'purple' | 'lime' | 'sky' | 'orange' | 'mint' | 'magenta';

// Tailwind needs literal class names, so accents are a static map
const ACCENT_BG: Record<Accent, string> = {
  yellow: 'bg-neobrutalism-yellow',
  pink: 'bg-neobrutalism-pink',
  cyan: 'bg-neobrutalism-cyan',
  purple: 'bg-neobrutalism-purple',
  lime: 'bg-neobrutalism-lime',
  sky: 'bg-neobrutalism-sky',
  orange: 'bg-neobrutalism-orange',
  mint: 'bg-neobrutalism-mint',
  magenta: 'bg-neobrutalism-magenta',
};
const ACCENT_TEXT: Record<Accent, string> = {
  yellow: 'text-neobrutalism-yellow',
  pink: 'text-neobrutalism-pink',
  cyan: 'text-neobrutalism-cyan',
  purple: 'text-neobrutalism-purple',
  lime: 'text-neobrutalism-lime',
  sky: 'text-neobrutalism-sky',
  orange: 'text-neobrutalism-orange',
  mint: 'text-neobrutalism-mint',
  magenta: 'text-neobrutalism-magenta',
};

const GRID_TEXTURE = {
  backgroundImage:
    'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)',
  backgroundSize: '48px 48px',
};

interface ImageData {
  src: string;
  alt: string;
  caption?: string;
  /** Design-system label chip slapped on the frame's top-left corner */
  sticker?: string;
}

function Sticker({ text, accent, small }: { text: string; accent: Accent; small?: boolean }) {
  // In-flow h-0 + translate, NOT absolute: abspos inside the CSS-columns masonry
  // galleries gets mislaid by Chromium's fragmentation (paints into the wrong column)
  return (
    <div className="h-0">
      <div
        className={`relative z-10 w-fit -rotate-3 ${small ? '-translate-y-3 -translate-x-2 px-3 py-1' : '-translate-y-4 -translate-x-4 px-4 py-1.5'} ${ACCENT_BG[accent]} border-3 border-neobrutalism-black shadow-neobrutalism-sm`}
      >
        <span className={`font-black uppercase tracking-widest whitespace-nowrap text-neobrutalism-black ${small ? 'text-xs' : 'text-sm'}`}>
          {text}
        </span>
      </div>
    </div>
  );
}

export type Block =
  | { type: 'heading'; text: string; kicker?: string }
  | { type: 'text'; title?: string; body: string | string[] }
  | { type: 'twoCol'; title?: string; body: string | string[]; image: ImageData; flip?: boolean }
  | ({ type: 'image' } & ImageData)
  | { type: 'gallery'; images: ImageData[]; cols?: 2 | 3 | 4; aspect?: 'wide' | 'square' | 'story' | 'natural' }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'list'; title?: string; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'ticker'; words: string[] }
  | {
      type: 'cta';
      links: { label: string; href: string; variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' }[];
    }
  | { type: 'section'; bg: Accent | 'black'; blocks: Block[] }
  | { type: 'custom'; node: ReactNode };

export interface CaseStudyTemplateProps {
  accent?: Accent;
  eyebrow?: string;
  title: string;
  summary?: string;
  facts?: { label: string; value: string }[];
  /** Marquee pinned to the bottom of the first viewport, like the home hero */
  heroTicker?: string[];
  blocks: Block[];
}

function Paragraphs({ body }: { body: string | string[] }) {
  const paras = Array.isArray(body) ? body : [body];
  return (
    <div className="space-y-5 max-w-3xl">
      {paras.map((p, i) => (
        <p key={i} className="text-lg sm:text-xl leading-relaxed font-medium">
          {p}
        </p>
      ))}
    </div>
  );
}

export function FramedImage({ src, alt, caption, sticker, accent }: ImageData & { accent: Accent }) {
  return (
    // w-fit + capped height keeps portrait images from towering; landscape still fills
    <div className="relative w-fit max-w-full mx-auto">
      {sticker ? (
        <Sticker text={sticker} accent={accent} />
      ) : (
        <div
          aria-hidden="true"
          className={`absolute -top-3 -left-3 w-16 h-16 ${ACCENT_BG[accent]} border-3 border-neobrutalism-black`}
        />
      )}
      <div
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 w-10 h-10 bg-neobrutalism-black rotate-12"
      />
      <figure className="relative border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-white">
        {src.endsWith('.mp4') ? (
          // ponytail: autoplaying muted loop, same treatment as gallery video tiles
          <video src={src} className="max-w-full max-h-[640px] w-auto h-auto block" autoPlay muted loop playsInline aria-label={alt} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- ponytail: plain img, swap to next/image before prod
          <img src={src} alt={alt} loading="lazy" decoding="async" className="max-w-full max-h-[640px] w-auto h-auto block" />
        )}
        {caption && (
          // w-0 min-w-full: caption wraps to the image's width instead of widening the frame
          <figcaption className="w-0 min-w-full border-t-3 border-neobrutalism-black px-4 py-3 text-sm font-bold bg-neobrutalism-white">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

function Ticker({ words, accent }: { words: string[]; accent: Accent }) {
  const loop = Array.from({ length: 4 }, () => words).flat();
  return (
    <div
      aria-hidden="true"
      className="bg-neobrutalism-black border-y-4 border-neobrutalism-black py-4 overflow-hidden"
    >
      <div className="ticker-wrap">
        <div className="ticker">
          <span className="inline-flex items-center gap-8 text-white font-black text-xl md:text-2xl px-4">
            {loop.map((w, i) => (
              <span key={i} className="inline-flex items-center gap-8">
                <span className={ACCENT_TEXT[accent]}>★</span> {w.toUpperCase()}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

function renderBlock(block: Block, accent: Accent, index: number) {
  const tilt = index % 2 === 0 ? '-rotate-1' : 'rotate-1';
  switch (block.type) {
    case 'heading':
      return (
        <div className="relative w-fit">
          {block.kicker && (
            // hugs the plate's top edge instead of floating above it
            <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black whitespace-nowrap">{block.kicker}</p>
            </div>
          )}
          <div className={`block w-fit px-6 py-3 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg ${tilt}`}>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black ${ACCENT_TEXT[accent]}`}>
              {block.text}
            </h2>
          </div>
        </div>
      );

    case 'text':
      return (
        <div className="max-w-3xl">
          {block.title && <h3 className="text-2xl sm:text-3xl font-black mb-4">{block.title}</h3>}
          <Paragraphs body={block.body} />
        </div>
      );

    case 'twoCol':
      // Magazine float: text starts at the image's top edge and wraps around it —
      // a centered 50/50 grid strands short text in vertical whitespace
      return (
        <div className="flow-root">
          <div className={`mb-6 sm:mb-4 sm:w-[45%] ${block.flip ? 'sm:float-left sm:mr-8 lg:mr-12' : 'sm:float-right sm:ml-8 lg:ml-12'}`}>
            <FramedImage {...block.image} accent={accent} />
          </div>
          {block.title && <h3 className="text-2xl sm:text-3xl font-black mb-4">{block.title}</h3>}
          <Paragraphs body={block.body} />
        </div>
      );

    case 'image':
      return <FramedImage src={block.src} alt={block.alt} caption={block.caption} sticker={block.sticker} accent={accent} />;

    case 'gallery': {
      const aspect = {
        wide: 'aspect-[4/3] object-cover',
        square: 'aspect-square object-cover',
        story: 'aspect-[9/16] object-cover',
        natural: 'h-auto',
      }[block.aspect ?? 'wide'];
      const tile = (img: ImageData, i: number, extra = '') => (
        <figure
          key={i}
          className={`relative border-3 border-neobrutalism-black shadow-neobrutalism-md bg-neobrutalism-white ${i % 2 === 0 ? 'rotate-[0.75deg]' : '-rotate-[0.75deg]'} hover:rotate-0 hover:-translate-y-1 hover:shadow-neobrutalism-lg transition-all duration-200 ${extra}`}
        >
          {img.sticker && <Sticker text={img.sticker} accent={accent} small />}
          {img.src.endsWith('.mp4') ? (
            // ponytail: autoplaying muted loop for motion creatives; add controls/reduced-motion handling if this leaves dev
            <video src={img.src} className={`w-full block ${aspect}`} autoPlay muted loop playsInline aria-label={img.alt} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className={`w-full block ${aspect}`} />
          )}
        </figure>
      );
      // Mixed aspect ratios pack as masonry columns — a grid row would stretch to
      // its tallest item and leave craters next to the short ones
      if ((block.aspect ?? 'wide') === 'natural') {
        const cols = { 2: 'sm:columns-2', 3: 'sm:columns-2 lg:columns-3', 4: 'sm:columns-2 lg:columns-4' }[block.cols ?? 3];
        return (
          <div className={`columns-1 ${cols} gap-6`}>
            {block.images.map((img, i) => tile(img, i, 'mb-6 break-inside-avoid'))}
          </div>
        );
      }
      const cols = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[block.cols ?? 3];
      return (
        <div className={`grid grid-cols-1 ${cols} gap-6 items-start`}>
          {block.images.map((img, i) => tile(img, i))}
        </div>
      );
    }

    case 'stats':
      return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {block.items.map((s, i) => (
            <div
              key={i}
              className={`border-3 border-neobrutalism-black shadow-neobrutalism-lg p-6 ${i % 2 === 0 ? 'bg-neobrutalism-black -rotate-1' : 'bg-neobrutalism-white rotate-1'} hover:rotate-0 transition-transform duration-200`}
            >
              <div className={`font-heading font-black text-4xl sm:text-5xl leading-none ${i % 2 === 0 ? ACCENT_TEXT[accent] : 'text-neobrutalism-black'}`}>
                {s.value}
              </div>
              <div className={`mt-3 text-sm font-bold uppercase tracking-wide ${i % 2 === 0 ? 'text-white' : 'text-neobrutalism-black'}`}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      );

    case 'list':
      return (
        <div className="max-w-3xl">
          {block.title && <h3 className="text-2xl sm:text-3xl font-black mb-6">{block.title}</h3>}
          <ul className="space-y-4">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className={`mt-1.5 w-4 h-4 shrink-0 rotate-45 border-3 border-neobrutalism-black ${ACCENT_BG[accent]}`}
                />
                <span className="text-lg sm:text-xl font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'quote':
      return (
        <div className="relative w-fit max-w-4xl">
          <div
            aria-hidden="true"
            className={`absolute -top-4 -right-4 w-14 h-14 ${ACCENT_BG[accent]} border-3 border-neobrutalism-black rotate-12`}
          />
          <figure className="relative p-8 sm:p-10 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-xl -rotate-1">
            <blockquote className={`text-2xl sm:text-3xl font-black leading-snug ${ACCENT_TEXT[accent]}`}>
              &ldquo;{block.text}&rdquo;
            </blockquote>
            {block.attribution && (
              <figcaption className="mt-4 text-white font-bold">{block.attribution}</figcaption>
            )}
          </figure>
        </div>
      );

    case 'cta':
      return (
        <div className="flex flex-wrap gap-4">
          {block.links.map((l, i) => {
            // static map — a computed `btn-${variant}` string gets purged by Tailwind's scanner
            const cls = { primary: 'btn-primary', secondary: 'btn-secondary', tertiary: 'btn-tertiary', outline: 'btn-outline' }[l.variant ?? 'primary'];
            return l.href.startsWith('http') ? (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {l.label}
              </a>
            ) : (
              <Link key={i} href={l.href} className={cls}>
                {l.label}
              </Link>
            );
          })}
        </div>
      );

    case 'custom':
      return <>{block.node}</>;

    default:
      // Unknown block type renders loud instead of crashing the page
      return (
        <div className="p-6 bg-neobrutalism-yellow border-3 border-neobrutalism-black shadow-neobrutalism-md font-bold">
          Unknown block type: {(block as { type: string }).type}
        </div>
      );
  }
}

// Tickers and section bands run full-bleed; everything else sits in the container
function BlockList({ blocks, accent }: { blocks: Block[]; accent: Accent }) {
  return (
    <>
      {blocks.map((block, i) => {
        // a heading and its content belong together: half-gap after any heading block
        const gap = i > 0 && blocks[i - 1].type === 'heading' ? 'mt-8 sm:mt-10' : 'mt-12 sm:mt-16';
        if (block.type === 'ticker') {
          return (
            <div key={i} className="my-14 sm:my-20">
              <Ticker words={block.words} accent={accent} />
            </div>
          );
        }
        if (block.type === 'section') {
          return (
            <div
              key={i}
              // 'black' band: a dark stage for imagery that carries its own framing (e.g. app mockups)
              className={`${block.bg === 'black' ? 'bg-neobrutalism-black text-white' : ACCENT_BG[block.bg]} border-y-5 border-neobrutalism-black my-14 sm:my-20 pb-14 sm:pb-20`}
            >
              <BlockList blocks={block.blocks} accent={accent} />
            </div>
          );
        }
        return (
          <Container key={i} className={gap}>
            <FadeIn>{renderBlock(block, accent, i)}</FadeIn>
          </Container>
        );
      })}
    </>
  );
}

export function CaseStudyTemplate({ accent = 'yellow', eyebrow, title, summary, facts, heroTicker, blocks }: CaseStudyTemplateProps) {
  return (
    <main className="min-h-screen bg-neobrutalism-white text-neobrutalism-black">
      {/* First viewport = hero field + ticker pinned at the fold, like the home hero */}
      <div className="flex flex-col min-h-svh">
        <header className={`relative overflow-hidden flex-1 flex flex-col ${ACCENT_BG[accent]} border-b-5 border-neobrutalism-black`}>
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]" style={GRID_TEXTURE} />
          <div
            aria-hidden="true"
            className="absolute -right-10 top-28 w-36 h-36 bg-neobrutalism-black rotate-12"
          />
          <div
            aria-hidden="true"
            className="absolute right-28 -bottom-8 w-24 h-24 bg-neobrutalism-white border-5 border-neobrutalism-black -rotate-6"
          />
          <Container className="relative z-10 w-full py-6">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="btn-outline px-4 py-2 text-sm">
                ← Back to portfolio
              </Link>
              <Link
                href="/"
                className="px-4 py-2 bg-neobrutalism-black text-white font-black text-sm tracking-wide border-3 border-neobrutalism-black shadow-neobrutalism-sm"
              >
                SAIRAM VENDRA
              </Link>
            </div>
          </Container>
          {/* flex-1 + justify-center: extra viewport height becomes accent field, not white void */}
          <Container className="relative z-10 w-full flex-1 flex flex-col justify-center py-12 sm:py-14">
            <FadeIn>
            {eyebrow && (
              // block w-fit: never share a line with the title plate, whatever the title length
              <div className="block w-fit px-4 py-2 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm mb-8 -rotate-1">
                <p className="text-sm font-black uppercase tracking-widest">{eyebrow}</p>
              </div>
            )}
            <div className="block w-fit px-6 py-4 sm:px-10 sm:py-6 bg-neobrutalism-white border-5 border-neobrutalism-black shadow-neobrutalism-xl -rotate-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-tight">
                {title}
              </h1>
            </div>
            {summary && (
              <div className="mt-10 max-w-3xl p-6 bg-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-xl">
                <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">{summary}</p>
              </div>
            )}
            {facts && facts.length > 0 && (
              <dl className="mt-10 flex flex-wrap gap-4">
                {facts.map((f, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm hover:-translate-y-0.5 hover:shadow-neobrutalism-md transition-all duration-200"
                  >
                    <dt className="text-xs font-black uppercase tracking-widest">{f.label}</dt>
                    <dd className="text-base font-bold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </FadeIn>
          </Container>
        </header>
        {heroTicker && <Ticker words={heroTicker} accent={accent} />}
      </div>

      <div className="pb-24">
        <BlockList blocks={blocks} accent={accent} />
      </div>
    </main>
  );
}
