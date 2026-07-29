'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * The three engineering war stories as stacked animated diagrams. Each panel
 * plays its choreography once when scrolled into view: the scroll is the
 * timeline, no carousel chrome.
 */

const POP = { type: 'spring' as const, stiffness: 280, damping: 18 };
const VIEW = { once: true, margin: '-90px 0px' } as const;

function Pop({
  delay,
  className,
  children,
  from = { opacity: 0, y: 16, scale: 0.9 },
}: {
  delay: number;
  className?: string;
  children: ReactNode;
  from?: Record<string, number>;
}) {
  return (
    <motion.div
      initial={from}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={VIEW}
      transition={{ ...POP, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Node({ delay, label, sub }: { delay: number; label: string; sub?: string }) {
  return (
    <Pop
      delay={delay}
      className="px-3 py-2 bg-neobrutalism-white text-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-sm text-center"
    >
      <p className="text-[11px] sm:text-xs font-black tracking-wider whitespace-nowrap">{label}</p>
      {sub && <p className="text-[9px] font-bold text-neobrutalism-black/55 whitespace-nowrap">{sub}</p>}
    </Pop>
  );
}

function HArrow({ delay, dim }: { delay: number; dim?: boolean }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: dim ? 0.35 : 1 }}
      viewport={VIEW}
      transition={{ ...POP, delay }}
      className="origin-left flex items-center"
      aria-hidden="true"
    >
      <div className="h-1 w-6 sm:w-10 bg-current" />
      <div className="border-y-[6px] border-y-transparent border-l-8 border-l-current -ml-px" />
    </motion.div>
  );
}

/* ---------- panel chrome ---------- */

function Panel({
  dark,
  plate,
  title,
  body,
  chip,
  children,
}: {
  dark?: boolean;
  plate: string;
  title: string;
  body: string;
  chip: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`border-5 border-neobrutalism-black shadow-neobrutalism-xl p-7 lg:p-9 ${
        dark ? 'bg-neobrutalism-black text-white' : 'bg-neobrutalism-white text-neobrutalism-black'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 lg:gap-10 items-center">
        <div>
          <Pop delay={0} from={{ opacity: 0, x: -24 }} className={`w-fit px-4 py-2 ${plate} -rotate-1 shadow-neobrutalism-md`}>
            <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-neobrutalism-black">{title}</h3>
          </Pop>
          {/* the full story for readers who want the real info; the diagram carries the gist */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ ...POP, delay: 0.15 }}
            className={`mt-5 font-medium leading-relaxed ${dark ? 'text-white/90' : ''}`}
          >
            {body}
          </motion.p>
          <Pop
            delay={0.35}
            className={`mt-4 w-fit px-3 py-1.5 border-3 border-neobrutalism-black text-xs font-black uppercase tracking-widest ${plate} text-neobrutalism-black shadow-neobrutalism-sm rotate-1`}
          >
            {chip}
          </Pop>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

/* ---------- story 1: the queue that spans two clouds ---------- */

function TimeoutDiagram() {
  return (
    <div className="text-white">
      {/* the direct path, which dies */}
      <div className="flex items-center justify-between gap-2">
        <Node delay={0.4} label="VERCEL EDGE" sub="wall clock · 25 s" />
        <div className="relative flex-1 flex items-center justify-center">
          <HArrow delay={0.7} dim />
          <Pop
            delay={1.0}
            from={{ opacity: 0, scale: 2 }}
            className="absolute -top-4 px-2 py-0.5 bg-neobrutalism-pink border-2 border-neobrutalism-black text-neobrutalism-black text-[10px] font-black tracking-widest rotate-2"
          >
            504 ✗
          </Pop>
          <Pop delay={1.15} className="absolute -bottom-5 text-[9px] font-black tracking-widest text-white/50 whitespace-nowrap">
            THE NAIVE PATH: SILENT 1K DOWNGRADE
          </Pop>
        </div>
        <Node delay={0.55} label="CLIENT" sub="asked for 4K" />
      </div>

      {/* down into the second cloud */}
      <div className="mt-7 grid grid-cols-[auto_1fr_auto] items-center gap-2">
        <Pop delay={1.5} className="flex flex-col items-center text-[9px] font-black tracking-widest text-white/70">
          <span>WRITES A ROW</span>
          <span className="text-lg leading-none">↓</span>
        </Pop>
        <div />
        <Pop delay={3.0} className="flex flex-col items-center text-[9px] font-black tracking-widest text-neobrutalism-mint">
          <span className="text-lg leading-none">↑</span>
          <span>REALTIME PUSH · 4K ✓</span>
        </Pop>
      </div>

      {/* the queue path */}
      <div className="mt-2 relative border-3 border-dashed border-white/40 p-4">
        <Pop delay={1.6} className="absolute -top-3 left-3 px-2 bg-neobrutalism-black text-[9px] font-black tracking-widest text-white/70">
          SUPABASE · NO VERCEL TIMEOUT IN THE PATH
        </Pop>
        <div className="flex items-center justify-between gap-2 text-neobrutalism-mint">
          <Node delay={1.7} label="QUEUE TABLE" />
          <HArrow delay={1.95} />
          <Node delay={2.1} label="EDGE FUNCTION" sub="postgres trigger" />
          <HArrow delay={2.35} />
          <Node delay={2.5} label="GEMINI · 4K" sub="takes what it takes" />
        </div>
      </div>

      <Pop delay={3.4} className="mt-5 w-fit px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black text-neobrutalism-black text-[10px] font-black uppercase tracking-widest shadow-neobrutalism-sm">
        Callers never learn it went async · Flash stays synchronous
      </Pop>
    </div>
  );
}

/* ---------- story 2: one transaction around six tables ---------- */

const TABLES = ['projects', 'scenes', 'shots', 'characters', 'environments', 'costumes'];

function AtomicDiagram() {
  return (
    <div>
      <div className="relative p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {TABLES.map((t, i) => (
            <Pop key={t} delay={0.3 + i * 0.12} className="border-2 border-neobrutalism-black bg-neobrutalism-white px-3 py-2">
              <div className="space-y-0.5" aria-hidden="true">
                <div className="h-1 w-full bg-neobrutalism-black/70" />
                <div className="h-1 w-3/4 bg-neobrutalism-black/30" />
                <div className="h-1 w-1/2 bg-neobrutalism-black/30" />
              </div>
              <p className="mt-1.5 font-mono text-[10px] font-bold">{t}</p>
            </Pop>
          ))}
        </div>
        {/* the transaction boundary slams around all six */}
        <motion.div
          initial={{ opacity: 0, scale: 1.12 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEW}
          transition={{ ...POP, delay: 1.9 }}
          className="absolute inset-0 border-5 border-neobrutalism-black pointer-events-none"
          aria-hidden="true"
        />
        <Pop
          delay={2.1}
          from={{ opacity: 0, scale: 2 }}
          className="absolute -top-4 left-1/2 -ml-24 px-3 py-1 bg-neobrutalism-yellow border-3 border-neobrutalism-black text-[10px] font-black tracking-widest rotate-[-2deg] shadow-neobrutalism-sm"
        >
          1 TRANSACTION · POSTGRES RPC
        </Pop>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 items-center">
        <Pop delay={1.1} className="px-2.5 py-1 bg-neobrutalism-black text-white text-[10px] font-black tracking-widest">
          BEFORE: DELETE + REINSERT
        </Pop>
        <Pop delay={1.35} from={{ opacity: 0, scale: 2 }} className="px-2.5 py-1 bg-neobrutalism-pink border-2 border-neobrutalism-black text-[10px] font-black tracking-widest rotate-1">
          FRESH UUIDs → EVERY FK BREAKS ✗
        </Pop>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {['client sends names, never IDs', 'server builds the name → UUID map', 'mutex: latest save wins'].map((c, i) => (
          <Pop key={c} delay={2.5 + i * 0.2} className="px-2.5 py-1 border-2 border-neobrutalism-black text-[10px] font-black uppercase tracking-widest bg-neobrutalism-white">
            {c} ✓
          </Pop>
        ))}
      </div>
    </div>
  );
}

/* ---------- story 3: defense in depth, stamped ---------- */

const DEFENSES = [
  '9 AI PROMPTS · SERVER-SIDE',
  'ORIGIN + CORS WHITELIST',
  'HMAC-SIGNED RATE LIMITS',
  'SSRF GUARD ON THE PROXY',
  'ROW-LEVEL SECURITY · EVERY TABLE',
  'REFERRER-LOCKED API KEY',
];

function SecurityDiagram() {
  return (
    <div className="text-white">
      <div className="flex flex-wrap gap-2.5">
        {DEFENSES.map((d, i) => (
          <Pop
            key={d}
            delay={0.3 + i * 0.18}
            from={{ opacity: 0, scale: 1.9 }}
            className={`px-3 py-1.5 border-3 border-neobrutalism-black text-[10px] font-black tracking-widest shadow-neobrutalism-sm ${
              i % 2 === 0 ? 'bg-neobrutalism-mint text-neobrutalism-black' : 'bg-neobrutalism-white text-neobrutalism-black'
            } ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
          >
            {d} ✓
          </Pop>
        ))}
      </div>

      {/* the stolen key hits the wall */}
      <div className="relative mt-7 h-16 border-2 border-dashed border-white/30 overflow-hidden">
        <div className="absolute right-[26%] top-0 bottom-0 border-l-5 border-neobrutalism-mint" aria-hidden="true" />
        <span className="absolute right-2 top-1/2 -mt-2 text-[9px] font-black tracking-widest text-neobrutalism-mint">
          GOOGLE CLOUD
        </span>
        <motion.div
          initial={{ x: -20, y: 12, rotate: 0, opacity: 0 }}
          whileInView={{ x: [-20, 150, 150], y: [12, 12, 34], rotate: [0, 0, 38], opacity: [0, 1, 0.55] }}
          viewport={VIEW}
          transition={{ delay: 1.6, duration: 1.5, times: [0, 0.55, 1], ease: 'easeIn' }}
          className="absolute left-0 top-0 w-fit px-2.5 py-1 bg-neobrutalism-pink border-2 border-neobrutalism-black text-neobrutalism-black text-[10px] font-black tracking-widest"
        >
          STOLEN KEY ⚷
        </motion.div>
        <Pop
          delay={3.0}
          from={{ opacity: 0, scale: 2.2 }}
          className="absolute right-[28%] top-2 px-2 py-0.5 bg-neobrutalism-white text-neobrutalism-black text-[10px] font-black tracking-widest -rotate-6"
        >
          INERT
        </Pop>
      </div>
      <Pop delay={3.3} className="mt-4 w-fit px-3 py-1.5 border-3 border-neobrutalism-black bg-neobrutalism-white text-neobrutalism-black text-[10px] font-black uppercase tracking-widest shadow-neobrutalism-sm">
        wrong referrer → the key does nothing
      </Pop>
    </div>
  );
}

/* ---------- export ---------- */

export function HardProblemsAnimatic() {
  return (
    <div className="space-y-10">
      <Panel
        dark
        plate="bg-neobrutalism-cyan"
        title="25 s timeout vs. 4K generation"
        body="Pro-tier 4K generation exceeds Vercel's Edge Function wall clock. The naive result is a 504 and a silent downgrade: the user asks for 4K and quietly gets 1K. The fix is a queue that spans two clouds. The Edge Function writes a row to a queue table, a Postgres trigger fires a Supabase Edge Function that calls Gemini with no Vercel timeout in the path, and Supabase Realtime pushes the completion back to the client. Callers never learn the operation was asynchronous. Flash stays on the direct synchronous path where it comfortably fits."
        chip="A 504 became a feature"
      >
        <TimeoutDiagram />
      </Panel>
      <Panel
        plate="bg-neobrutalism-yellow"
        title="Atomic saves across six tables"
        body="A project is rows across six tables, and saving is delete-and-reinsert, which hands characters fresh UUIDs on every save and breaks every foreign key pointing at them. The solution is a Postgres RPC that wraps the whole save in one transaction and builds a name-to-UUID map server-side: the client sends character names, never IDs. A client-side mutex queues concurrent saves, and the latest state wins."
        chip="One RPC, one transaction"
      >
        <AtomicDiagram />
      </Panel>
      <Panel
        dark
        plate="bg-neobrutalism-mint"
        title="Security as a design constraint"
        body="Nine AI system prompts, all server-side. Origin validation and CORS whitelisting on every proxy. Stateless rate limiting via HMAC-SHA256 signed cookies. An SSRF guard on the fal proxy. Row-level security on every table. And a Google Cloud referrer restriction so a stolen API key is inert."
        chip="Six layers, zero trust"
      >
        <SecurityDiagram />
      </Panel>
    </div>
  );
}
