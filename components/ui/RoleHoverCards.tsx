'use client';

import { Fragment, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react';
import { AnimatePresence, motion, useSpring } from 'framer-motion';
import {
  AppWindow,
  ChartColumn,
  Clapperboard,
  Compass,
  Database,
  Lightbulb,
  MousePointer2,
  Palette,
  Rocket,
  Sparkles,
  Target,
  Users
} from 'lucide-react';

// React Bits Pro "Hover Preview" (above, 0.2s in / 0.15s out, 12° max rotation,
// 15px max offset, 200×200, 4px target padding), rebuilt here because the Pro
// registry is license-gated — and each role gets its own neobrutalist card
// instead of an image. The highlight cycles through the roles; hovering (or
// tapping on touch) pins it and opens that role's card. Roles wrap mid-phrase
// like plain text, so the card anchors to the line fragment under the pointer.

const ENTER = 0.2;
const EXIT = 0.15;
const MAX_ROTATION = 12;
const MAX_OFFSET = 15;
const SIZE = 200;
const TARGET_PADDING = 4;
const CYCLE_MS = 2000;

function Shell({ bg, index, label, children }: { bg: string; index: number; label: string; children: ReactNode }) {
  return (
    <div
      className={`flex flex-col border-3 border-neobrutalism-black shadow-neobrutalism-md ${bg}`}
      style={{ width: SIZE, height: SIZE }}
    >
      <div className="flex items-center justify-between bg-neobrutalism-black px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
        <span>{label}</span>
        <span className="text-neobrutalism-yellow">0{index + 1}</span>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2 p-3 text-neobrutalism-black">{children}</div>
    </div>
  );
}

const chip = 'border-2 border-neobrutalism-black bg-neobrutalism-white shadow-neobrutalism-sm';

const ARCH_TITLE = 'flex h-8 w-[62%] items-center border-2 border-white bg-neobrutalism-blue px-2 font-mono text-[10px] font-bold text-white';

const ROLES: { text: string; cards: ReactNode[] }[] = [
  {
    text: 'AI solutions architect',
    // two designs; one is picked at random each time the card opens
    cards: [
      <Shell key="blueprint" bg="bg-neobrutalism-blue" index={0} label="Architect">
        <div
          className="relative h-full border-2 border-white/70"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}
        >
          {['MODEL', 'AGENTS', 'PRODUCT'].map((layer, i) => (
            <div key={layer} className={`absolute ${ARCH_TITLE}`} style={{ left: `${8 + i * 12}%`, bottom: `${10 + i * 26}%` }}>
              {layer}
            </div>
          ))}
        </div>
      </Shell>,
      <Shell key="pipeline" bg="bg-neobrutalism-cyan" index={0} label="Architect">
        <div className="flex items-center">
          <div className={`flex h-10 w-10 items-center justify-center ${chip}`}>
            <Database className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="h-1 flex-1 bg-neobrutalism-black" />
          <div className="flex h-12 w-12 items-center justify-center border-2 border-neobrutalism-black bg-neobrutalism-black text-neobrutalism-yellow shadow-[3px_3px_0_0_#FFD700]">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="h-1 flex-1 bg-neobrutalism-black" />
          <div className={`flex h-10 w-10 items-center justify-center ${chip}`}>
            <AppWindow className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
        <div className="border-2 border-neobrutalism-black bg-neobrutalism-black p-2 font-mono text-[10px] leading-relaxed text-white">
          <div>&gt; agent.deploy()</div>
          <div className="text-neobrutalism-lime">✓ live in prod</div>
        </div>
      </Shell>
    ]
  },
  {
    text: 'Creative Technologist',
    cards: [
      <Shell key="code" bg="bg-neobrutalism-yellow" index={1} label="Creative tech">
        <div className="border-2 border-neobrutalism-black bg-neobrutalism-black p-2 font-mono text-[10px] leading-relaxed text-white">
          <div><span className="text-neobrutalism-pink">const</span> idea = <span className="text-neobrutalism-cyan">shader</span>(</div>
          <div className="pl-3">art, <span className="text-neobrutalism-yellow">code</span></div>
          <div>);</div>
        </div>
        <div className="flex items-center gap-1.5">
          <Palette className="h-5 w-5" aria-hidden="true" />
          {['bg-neobrutalism-pink', 'bg-neobrutalism-cyan', 'bg-neobrutalism-purple', 'bg-neobrutalism-lime'].map(c => (
            <span key={c} className={`h-5 flex-1 border-2 border-neobrutalism-black ${c}`} />
          ))}
        </div>
      </Shell>
    ]
  },
  {
    text: 'Product Designer',
    cards: [
      <Shell key="wireframe" bg="bg-neobrutalism-pink" index={2} label="Product">
        <div className={`relative mx-auto flex h-full w-24 flex-col gap-1.5 p-1.5 ${chip}`}>
          <div className="h-3 bg-neobrutalism-black" />
          <div className="h-8 border-2 border-neobrutalism-black bg-neobrutalism-yellow" />
          <div className="h-1.5 w-3/4 bg-neobrutalism-black/30" />
          <div className="h-1.5 w-1/2 bg-neobrutalism-black/30" />
          <div className="mt-auto h-4 border-2 border-neobrutalism-black bg-neobrutalism-cyan" />
          <MousePointer2 className="absolute -bottom-1 -right-4 h-6 w-6 fill-neobrutalism-white" aria-hidden="true" />
        </div>
      </Shell>
    ]
  },
  {
    text: 'AI film director',
    cards: [
      <Shell key="film" bg="bg-neobrutalism-purple" index={3} label="Director">
        <div className="flex gap-1 border-2 border-neobrutalism-black bg-neobrutalism-black p-1">
          {['bg-neobrutalism-orange', 'bg-neobrutalism-sky', 'bg-neobrutalism-magenta'].map(c => (
            <span key={c} className={`h-12 flex-1 ${c}`} />
          ))}
        </div>
        <div className={`flex items-center gap-2 px-2 py-1 font-mono text-[10px] font-bold uppercase ${chip}`}>
          <Clapperboard className="h-4 w-4" aria-hidden="true" />
          Scene 01 · Take 3
        </div>
      </Shell>
    ]
  },
  {
    text: 'Strategic generalist',
    cards: [
      <Shell key="toolkit" bg="bg-neobrutalism-lime" index={4} label="Strategy">
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              [Lightbulb, 'bg-neobrutalism-yellow'],
              [Target, 'bg-neobrutalism-pink'],
              [Rocket, 'bg-neobrutalism-cyan'],
              [Users, 'bg-neobrutalism-purple'],
              [ChartColumn, 'bg-neobrutalism-orange'],
              [Compass, 'bg-neobrutalism-white']
            ] as const
          ).map(([Icon, bg]) => (
            <span key={bg} className={`flex aspect-square items-center justify-center border-2 border-neobrutalism-black shadow-neobrutalism-sm ${bg}`}>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
          ))}
        </div>
      </Shell>
    ]
  }
];

export function RoleHoverCards() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState<number | null>(null);
  const [variant, setVariant] = useState(0);
  // where the card sits: centre-top of the line fragment that was hovered/tapped
  const [anchor, setAnchor] = useState({ x: 0, y: 0 });
  const lineRef = useRef<DOMRect | null>(null);
  const x = useSpring(0, { stiffness: 300, damping: 25 });
  const rotate = useSpring(0, { stiffness: 300, damping: 25 });

  useEffect(() => {
    if (open !== null) return;
    const id = setInterval(() => setActive(i => (i + 1) % ROLES.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [open]);

  // touch: a tap anywhere else closes the card
  useEffect(() => {
    if (open === null) return;
    const close = (e: PointerEvent) => {
      if (!(e.target as Element).closest?.('[data-role-word]')) setOpen(null);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);

  const follow = (e: ReactPointerEvent) => {
    const line = lineRef.current;
    if (!line) return;
    const t = Math.max(-1, Math.min(1, (e.clientX - line.left - line.width / 2) / (line.width / 2)));
    x.set(t * MAX_OFFSET);
    rotate.set(t * MAX_ROTATION);
  };

  const openAt = (i: number, e: ReactPointerEvent<HTMLElement>) => {
    const root = rootRef.current;
    if (!root) return;
    const rects = [...e.currentTarget.getClientRects()];
    const line = rects.find(r => e.clientY >= r.top && e.clientY <= r.bottom) ?? rects[0];
    const base = root.getBoundingClientRect();
    lineRef.current = line;
    setAnchor({ x: line.left + line.width / 2 - base.left, y: line.top - base.top });
    follow(e);
    setVariant(Math.floor(Math.random() * ROLES[i].cards.length));
    setOpen(i);
    setActive(i);
  };

  const closeIf = (i: number) => setOpen(o => (o === i ? null : o));

  return (
    <div ref={rootRef} className="relative">
      {ROLES.map((role, i) => (
        <Fragment key={role.text}>
          {i > 0 && ', '}
          <span
            data-role-word
            className={`cursor-pointer transition-colors duration-300 ${(open ?? active) === i ? 'text-neobrutalism-yellow' : ''}`}
            style={{ padding: TARGET_PADDING, margin: -TARGET_PADDING }}
            onPointerEnter={e => e.pointerType === 'mouse' && openAt(i, e)}
            onPointerLeave={e => e.pointerType === 'mouse' && closeIf(i)}
            onPointerMove={follow}
            // touch has no hover, so a tap toggles (pointerup skips scroll gestures, which cancel)
            onPointerUp={e => e.pointerType !== 'mouse' && (open === i ? closeIf(i) : openAt(i, e))}
          >
            {role.text}
          </span>
        </Fragment>
      ))}
      <AnimatePresence>
        {open !== null && (
          <span
            key={open}
            className="pointer-events-none absolute z-30 block -translate-x-1/2 -translate-y-full pb-3"
            style={{ left: anchor.x, top: anchor.y }}
          >
            <motion.span
              className="block"
              style={{ x, rotate, originY: 1 }}
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: ENTER } }}
              exit={{ opacity: 0, scale: 0.85, y: 10, transition: { duration: EXIT } }}
            >
              {ROLES[open].cards[variant] ?? ROLES[open].cards[0]}
            </motion.span>
          </span>
        )}
      </AnimatePresence>
    </div>
  );
}
