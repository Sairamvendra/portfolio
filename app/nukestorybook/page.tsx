import type { ReactNode } from 'react';
import { CaseStudyTemplate, type Block } from '@/components/case-study/CaseStudyTemplate';

// ponytail: dev-testing page, not linked from prod nav, noindex until approved
export const metadata = {
  title: 'Nuke Storybook | Sairam Vendra',
  description:
    'An AI pre-production suite that turns a screenplay into a shot-by-shot cinematic storyboard, with consistent characters, scouted locations, and real camera language, in minutes instead of weeks.',
  robots: { index: false, follow: false },
};

const IMG = (name: string) => `/projects/nuke/${name}.jpg`;

/* ---------- small local pieces (page-only, not template concerns) ---------- */

function DataTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto border-3 border-neobrutalism-black shadow-neobrutalism-md bg-neobrutalism-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-neobrutalism-black text-white">
            {head.map((h, i) => (
              <th key={i} className="px-4 py-3 text-xs font-black uppercase tracking-widest whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t-3 border-neobrutalism-black">
              {r.map((c, j) => (
                <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-black' : 'font-bold'}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const MODULES = [
  {
    name: 'Write',
    chip: 'bg-neobrutalism-yellow',
    img: IMG('01-home-write-panel'),
    alt: 'Nuke Storybook home screen with the Write panel expanded, amber accent',
    body: 'AI-assisted screenwriting. A real Fountain-format screenplay editor with scene navigation, character tracking, revision history with WGA colour coding, and analytics that read the script back to you. Type in English, get Telugu, Hindi, Tamil, or Malayalam output live.',
  },
  {
    name: 'Storyboard',
    chip: 'bg-neobrutalism-cyan',
    img: IMG('02-home-storyboard-panel'),
    alt: 'Nuke Storybook home screen with the Storyboard panel expanded, teal accent',
    body: 'The engine. Feed it a script, a PDF, a DOCX, a Fountain file, or three paragraphs of an idea, and it returns a full shot list with camera framing, focal length, lens type, lighting, and duration for every shot. Then it draws them. Characters stay the same person across every frame. Locations stay the same place.',
  },
  {
    name: 'Cut',
    chip: 'bg-neobrutalism-purple',
    img: IMG('12-cut-module-coming-soon'),
    alt: 'Nuke Storybook Cut module panel in its coming-soon state, violet accent',
    body: 'Assemble shots into animated sequences with transitions, timing, and preview export. In design: the provider landscape is mapped and the integration architecture is specified below.',
  },
];

const CHALLENGES = [
  {
    code: 'C1',
    title: 'Text-to-shot translation is lossy',
    body: 'Directors reported difficulty precisely conveying visual details like shot composition and lighting through text, "leading to increased communication costs and frequent misunderstandings across departments."',
  },
  {
    code: 'C2',
    title: 'Consistency does not hold',
    body: '"Inconsistencies in character styles and environment style, especially in complex narratives or multi-character dialogues, required significant additional communications and adjustments."',
  },
  {
    code: 'C3',
    title: 'Confirmation cycles are the real cost',
    body: 'Hand-drawn sketches and verbal description "frequently caused ineffective communication, prolonged confirmation processes, and misunderstandings," with high time costs and a rising risk of misinterpretation.',
  },
  {
    code: 'C4',
    title: 'Traditional tools throttle iteration',
    body: 'Professionals indicated traditional tools "offer limited flexibility, hindering rapid creative iteration and restricting visual diversity."',
  },
];

// NASA-TLX workload scores, 7-point scale, lower is better (CineVision, 24 participants)
const TLX = [
  { label: 'Temporal demand', values: [1.75, 4.25, 4.75] },
  { label: 'Effort', values: [2.75, 4.75, 5.25] },
  { label: 'Frustration', values: [2.25, 3.13, 5.0] },
];
const TLX_SERIES = [
  { name: 'Interactive previz system', fill: 'bg-neobrutalism-mint' },
  { name: 'Baseline B', fill: 'bg-neutral-300' },
  { name: 'Baseline C', fill: 'bg-neutral-400' },
];

const STAGES = [
  {
    n: '01',
    title: 'Ingest',
    body: 'Paste a script, or upload PDF, DOCX, TXT, or Fountain. PDFs are parsed by X-coordinate element classification: screenplay elements are identified by their horizontal position on the page, which is how the format actually encodes meaning. Scanned Indian-language scripts fall through to local OCR, zero API calls.',
  },
  {
    n: '02',
    title: 'Break down',
    body: 'The breakdown returns scenes, shots, framing, focal length, lens type, lighting, duration, dialogue, and action. No cap on shot density, a 4-shot minimum per scene: the model is instructed to extrapolate the coverage a director would actually shoot, not to transcribe what is on the page.',
  },
  {
    n: '03',
    title: 'Cast and scout',
    body: 'Characters, environments, and costumes are extracted from the story, and each gets a generated reference plate: characters as front + 3/4 turnarounds, costumes as flat-lays on white, environments as establishing plates. These are the consistency anchors.',
  },
  {
    n: '04',
    title: 'Compose the frame prompt',
    body: 'The prompt composer fuses each shot into one directive, then guarantees the referential scaffolding survives: it re-injects every location tag and character mention that got dropped, deduplicates novelty language, and layers in colour science, director style, film texture, and camera sensor signature.',
  },
  {
    n: '05',
    title: 'Generate',
    body: 'Four image models, user-selectable, with live speed estimates in the UI: Flash at ~3 s and 1K, Pro2F at ~2 s up to 4K, Pro and SeedDream up to 4K. A full 23-image board is one to five minutes of generation.',
  },
  {
    n: '06',
    title: 'Deliver',
    body: 'Production-ready PDF with cover page, one shot per page, cast and location grids, and costume plates. CSV shot list. FDX and Fountain export. Fullscreen Presentation Mode. Public share links that need no login.',
  },
];

const TIMELINE = [
  { period: 'Feb 2026', commits: '188', shipped: 'Storyboard engine, Supabase migration, security hardening, performance pass, PDF export, presentation mode, share links' },
  { period: 'Mar 2026', commits: '186', shipped: 'The entire Write module in 3 phases, costume system, translation, reformat pipeline, breakdown tagging, mobile responsive' },
  { period: 'Apr 2026', commits: '1', shipped: 'Admin user blocking' },
  { period: 'Jul 2026', commits: '2', shipped: 'Model migration to Nano Banana 2, human-readable errors' },
];

/* ------------------------------- the page ------------------------------- */

const BLOCKS: Block[] = [
  {
    type: 'image',
    src: IMG('00-hero'),
    alt: 'Nuke Storybook hero: THE DIVINE CLASH in Presentation Mode with headline and stat strip',
    sticker: 'Live product',
    caption: 'THE DIVINE CLASH in Presentation Mode. Every frame generated by the tool, from a script written in the tool.',
  },
  {
    type: 'stats',
    items: [
      { value: '712', label: 'Shots generated' },
      { value: '33', label: 'Storyboards built' },
      { value: '26,979', label: 'Lines of TypeScript' },
      { value: '377', label: 'Commits, solo' },
    ],
  },

  { type: 'heading', text: 'What it is', kicker: 'Three modules, one spine of data' },
  {
    type: 'text',
    body: 'Nuke Storybook is built as a triptych. Write the screenplay, generate the visual breakdown, hold the whole film in your hands before a single frame is shot.',
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {MODULES.map((m, i) => (
          <div
            key={m.name}
            className={`border-3 border-neobrutalism-black shadow-neobrutalism-lg bg-neobrutalism-white ${i % 2 === 0 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]'} hover:rotate-0 transition-transform duration-200`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.img} alt={m.alt} loading="lazy" decoding="async" className="w-full block border-b-3 border-neobrutalism-black" />
            <div className="p-5">
              <span className={`inline-block px-3 py-1 ${m.chip} border-3 border-neobrutalism-black shadow-neobrutalism-sm font-black uppercase tracking-widest text-sm`}>
                {m.name}
              </span>
              <p className="mt-4 font-medium leading-relaxed">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'yellow',
    blocks: [
      { type: 'heading', text: 'The problem', kicker: 'What pre-production actually costs' },
      {
        type: 'text',
        body: [
          'Storyboarding sits in a budget line most people outside the industry never see, and it is not cheap. A mid-level storyboard artist runs $150–350 a day, a senior artist $450–700. Professional frames cost $40–100 each. Full-service previsualization runs $5,000–50,000 over two to six weeks.',
          'In India, the market this tool was built in, storyboarding and concept development on a regional feature runs ₹2,00,000 to ₹20,00,000. That is 4% of the entire budget of a ₹50 lakh film, spent before a camera turns over.',
          'The software does not help. Final Draft is $199 one-time, Celtx and StudioBinder are monthly subscriptions, and none of them draw anything. They format text and organise production paperwork. The visual breakdown is still a separate human being with a separate invoice.',
        ],
      },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CHALLENGES.map((c, i) => (
              <div
                key={c.code}
                className={`p-6 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-md ${i % 2 === 0 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]'} hover:rotate-0 transition-transform duration-200`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 bg-neobrutalism-black text-neobrutalism-mint font-black text-sm">
                    {c.code}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black leading-tight">{c.title}</h3>
                </div>
                <p className="font-medium leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <div className="max-w-4xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-2">The measured cost of that friction</h3>
            <p className="font-medium mb-6 max-w-3xl">
              NASA-TLX workload scores from the CineVision evaluation: 24 participants, 7-point scale, lower is
              better. An interactive previz system against two baseline methods.
            </p>
            <div className="border-3 border-neobrutalism-black shadow-neobrutalism-md bg-neobrutalism-white p-6 space-y-5">
              {TLX.map((row) => (
                <div key={row.label}>
                  <div className="font-black uppercase tracking-widest text-xs mb-2">{row.label}</div>
                  <div className="space-y-1.5">
                    {row.values.map((v, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-1 h-6 border-2 border-neobrutalism-black bg-white">
                          <div className={`h-full ${TLX_SERIES[i].fill}`} style={{ width: `${(v / 7) * 100}%` }} />
                        </div>
                        <span className="font-mono font-bold text-sm w-10 text-right">{v.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t-2 border-neobrutalism-black">
                {TLX_SERIES.map((s) => (
                  <span key={s.name} className="inline-flex items-center gap-2 text-sm font-bold">
                    <span className={`w-4 h-4 border-2 border-neobrutalism-black ${s.fill}`} />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm font-bold max-w-3xl">
              Sourced research, not first-party: CineVision (ACM UIST 2025, arXiv:2507.20355), a peer-reviewed
              previsualization study built on interviews with senior industry professionals and a 24-participant
              evaluation. Its four identified challenges, C1–C4 above, map almost exactly onto what this tool was
              built to solve.
            </p>
          </div>
        ),
      },
    ],
  },

  { type: 'heading', text: 'The economics', kicker: 'A real project, auditable numbers' },
  {
    type: 'text',
    body: [
      'Everything below is computed from a real project in the live database, so the numbers are auditable rather than illustrative.',
      'THE DIVINE CLASH, a mythological action short: 18 shots across 6 scenes, 3 characters with front + 3/4 turnaround reference sheets, 2 scouted environments, 3 min 30 s estimated runtime. Total image generations required: 18 shot frames + 3 character sheets + 2 environment plates = 23 images.',
    ],
  },
  {
    type: 'custom',
    node: (
      <div className="max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-black mb-4">What it cost to make</h3>
        <DataTable
          head={['Model tier', 'Rate / image', '23 images']}
          rows={[
            ['Flash · 1K', '~$0.039', '$0.90'],
            ['SeedDream 5 Lite · fal.ai', '~$0.04', '$0.92'],
            ['Pro2F · 2K', '~$0.10', '$2.30'],
            ['Pro · 4K', '~$0.24', '$5.52'],
          ]}
        />
        <p className="mt-4 text-lg sm:text-xl font-medium leading-relaxed">
          Text inference for the breakdown, character, environment, and costume extraction runs under $0.05 for the
          whole project. Total marginal cost for a complete 18-shot board with cast and location references:{' '}
          <strong className="font-black">$0.95 at draft quality, $5.60 at 4K delivery quality.</strong> The same board
          traditionally: 23 plates at professional per-frame rates is $920–$2,300, or two to four days of a senior
          artist at $450–700 a day.
        </p>
      </div>
    ),
  },
  {
    type: 'custom',
    node: (
      <div>
        <h3 className="text-2xl sm:text-3xl font-black mb-4">The headline comparison</h3>
        <DataTable
          head={['', 'Traditional', 'Nuke Storybook', 'Delta']}
          rows={[
            ['Cost, 18-shot board', '$920 – $2,300', '$0.95 – $5.60', <strong key="d1" className="font-black">160× – 400× cheaper</strong>],
            ['Time to first pass', '2 – 4 days', 'under 10 minutes', <strong key="d2" className="font-black">days collapse to minutes</strong>],
            ['Cost per revision round', 'Restart the sequence', 'Regenerate one card', <strong key="d3" className="font-black">seconds, cents</strong>],
            ['Character consistency', 'Manual, artist-dependent', 'Reference-locked, automatic', ''],
          ]}
        />
        <div className="mt-4 max-w-3xl text-sm font-bold space-y-1">
          <p>Figures are marginal API compute cost. They exclude the operator&rsquo;s own time, hosting, and the Supabase/Vercel baseline.</p>
          <p>Traditional cost includes an artist&rsquo;s judgement, revisions, and creative authorship. The comparison is on throughput, not on replacing a collaborator.</p>
          <p>Rates vary by market, complexity, and turnaround.</p>
        </div>
      </div>
    ),
  },
  {
    type: 'section',
    bg: 'cyan',
    blocks: [
      {
        type: 'custom',
        node: (
          <div>
            <div className="inline-block px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm mb-8 rotate-1">
              <p className="text-xs font-black uppercase tracking-widest">The number that matters here</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              <div className="p-8 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-xl -rotate-1">
                <div className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-none text-neobrutalism-mint">
                  ₹3,750
                </div>
                <p className="mt-4 text-white font-bold text-lg">
                  A feature-length board on Nuke Storybook: ~400 shots plus ~50 reference plates, 450 generations at 2K.
                </p>
              </div>
              <div className="p-8 bg-neobrutalism-white border-5 border-neobrutalism-black shadow-neobrutalism-xl rotate-1">
                <div className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-none">
                  ₹2,00,000
                </div>
                <p className="mt-4 font-bold text-lg">
                  Traditional storyboarding and concept development in India, at the very floor of a bracket that runs
                  to ₹20,00,000.
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg sm:text-xl font-bold max-w-3xl">
              A 53× reduction at the floor. Against the ₹20 lakh ceiling, 533×. Denominated in the currency of the
              market the tool was built for.
            </p>
          </div>
        ),
      },
    ],
  },

  { type: 'heading', text: 'How it works', kicker: 'Six stages, all real code paths' },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STAGES.map((s, i) => (
          <div
            key={s.n}
            className={`p-6 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-md ${i % 2 === 0 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]'} hover:rotate-0 transition-transform duration-200`}
          >
            <div className="font-heading font-black text-4xl text-neobrutalism-black/20 leading-none">{s.n}</div>
            <h3 className="mt-2 text-xl font-black">{s.title}</h3>
            <p className="mt-3 font-medium leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: IMG('03-storyboard-config'), sticker: 'The console', alt: 'Storyboard generation configuration: art style, aspect ratio, era, camera body, colour science, director style, film texture, model, resolution' },
      { src: IMG('05-shot-cards'), sticker: 'Per-shot controls', alt: 'Generated shot cards with per-shot framing and lens controls' },
    ],
  },
  {
    type: 'image',
    src: IMG('06-character-bank'),
    sticker: 'Consistency anchors',
    alt: 'Character bank with Shiva, Vishnu, and Sage Bhrigu front and 3/4 turnaround reference sheets',
    caption: 'The character bank: front + 3/4 turnarounds, generated once, locked, and re-injected into every frame.',
  },

  {
    type: 'section',
    bg: 'black',
    blocks: [
      {
        type: 'custom',
        node: (
          <div>
            <div className="inline-block px-3 py-1.5 bg-neobrutalism-white text-neobrutalism-black border-3 border-neobrutalism-black mb-4 rotate-1">
              <p className="text-xs font-black uppercase tracking-widest">Consistency across a sequence</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-mint">Proof</h2>
            <p className="mt-4 text-lg sm:text-xl font-medium leading-relaxed max-w-3xl text-white/90">
              Three frames from THE DIVINE CLASH: shots 1, 5, and 10 of 18. Same characters. Same forest.
              Different coverage, different lighting beat, different blocking.
            </p>
            {/* The mockups carry their own framing and bloom, built for a dark stage: no tile chrome here */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-2">
              {[
                { src: IMG('07-presentation-shot-01'), alt: 'Shot 1A, ultra wide, 35mm: establishing frame with three characters staged in depth' },
                { src: IMG('08-presentation-shot-05'), alt: 'Shot 2A, medium: the same character in a new scene, recognisably the same figure' },
                { src: IMG('09-presentation-shot-10'), alt: 'Shot 3B, medium: a second character ten shots later, identical costume and design language' },
              ].map((f) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={f.src}
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full block hover:-translate-y-1 transition-transform duration-200"
                />
              ))}
            </div>
            <p className="mt-4 font-mono text-sm font-bold text-white/60">
              Shot 1A · Ultra Wide · 35mm &nbsp;→&nbsp; Shot 2A · Medium &nbsp;→&nbsp; Shot 3B · Medium
            </p>
          </div>
        ),
      },
    ],
  },
  {
    type: 'quote',
    text: 'Any image model can draw a forest. The difficulty is drawing the same forest eighteen times, with the same people in it, while the camera moves and the light changes.',
    attribution: 'Why consistency is the whole problem',
  },
  {
    type: 'text',
    body: 'Nuke Storybook solves it by generating locked reference plates first and re-injecting them, as images and as prompt tokens, into every downstream frame. The prompt composer guarantees the model cannot lose track of who it is drawing.',
  },

  { type: 'heading', text: 'The hard problems', kicker: 'Engineering' },
  {
    type: 'text',
    body: 'A React 19 SPA on Vercel Edge Functions, Supabase for Postgres, Storage, Auth, and Realtime, and two model providers: Google Gemini and fal.ai. The interesting parts are where those seams meet.',
  },
  {
    type: 'text',
    title: 'A 25-second timeout vs. 4K image generation',
    body: 'Pro-tier 4K generation exceeds Vercel’s Edge Function wall clock. The naive result is a 504 and a silent downgrade: the user asks for 4K and quietly gets 1K. The fix is a queue that spans two clouds. The Edge Function writes a row to a queue table, a Postgres trigger fires a Supabase Edge Function that calls Gemini with no Vercel timeout in the path, and Supabase Realtime pushes the completion back to the client. Callers never learn the operation was asynchronous. Flash stays on the direct synchronous path where it comfortably fits.',
  },
  {
    type: 'text',
    title: 'Atomic saves across six tables',
    body: 'A project is rows across six tables, and saving is delete-and-reinsert, which hands characters fresh UUIDs on every save and breaks every foreign key pointing at them. The solution is a Postgres RPC that wraps the whole save in one transaction and builds a name-to-UUID map server-side: the client sends character names, never IDs. A client-side mutex queues concurrent saves, and the latest state wins.',
  },
  {
    type: 'text',
    title: 'Security as a design constraint',
    body: 'Nine AI system prompts, all server-side. Origin validation and CORS whitelisting on every proxy. Stateless rate limiting via HMAC-SHA256 signed cookies. An SSRF guard on the fal proxy. Row-level security on every table. And a Google Cloud referrer restriction so a stolen API key is inert.',
  },
  {
    type: 'stats',
    items: [
      { value: '26,979', label: 'Lines of TypeScript, 95 files' },
      { value: '3,051', label: 'Lines in the largest module' },
      { value: '1,978', label: 'Lines in the AI service layer' },
      { value: '10', label: 'Screenplay AI actions on one endpoint' },
    ],
  },

  {
    type: 'section',
    bg: 'orange',
    blocks: [
      { type: 'heading', text: 'The Write module', kicker: 'A full application, not a text box' },
      {
        type: 'text',
        body: [
          'A TipTap/ProseMirror editor with a custom screenplay schema, industry-standard element cycling on Ctrl+1–7, autocomplete on character names, and a live page count and runtime estimate in the status bar. Version history with the nine-colour WGA revision cycle and a side-by-side diff view. Eleven production breakdown categories as editor marks, with an AI auto-tagger you review as checkboxes and apply in a single transaction.',
          'Analytics that read the script back to you: dialogue distribution per character, scene pacing, estimated runtime, and a built-in Bechdel test.',
          'AI assistance throughout: scene generation from a beat or logline, dialogue polish, a script-aware chat, a four-pass reformat pipeline that takes an unformatted document and returns industry-standard screenplay format, translation, and continuity checking with severity filters and scene jump links.',
        ],
      },
      {
        type: 'text',
        title: 'Type namaskaram, get నమస్కారం',
        body: 'Latin keystrokes buffer, flush on space or punctuation, and resolve through a rate-limited transliteration proxy, with a candidate popup offering five alternatives selectable by number key. Telugu, Hindi, Tamil, and Malayalam. Every competitor in this category is built for English-language screenwriters. Indic input is not a feature bolted on: it is the difference between a tool a Telugu screenwriter can use and one they cannot.',
      },
      {
        type: 'gallery',
        aspect: 'natural',
        cols: 2,
        images: [
          { src: IMG('14-script-editor'), sticker: 'Fountain editor', alt: 'Script editor with scene navigator and character panel' },
          { src: IMG('15-script-ai-panel'), alt: 'AI assistant sidebar in the script editor' },
          { src: IMG('16-analytics-characters'), alt: 'Dialogue distribution analytics per character' },
          { src: IMG('17-analytics-structure'), sticker: 'Bechdel test built in', alt: 'Script structure analytics including a built-in Bechdel test' },
          { src: IMG('18-transliteration-languages'), sticker: '4 languages', alt: 'Indic transliteration language selector: Telugu, Hindi, Tamil, Malayalam' },
          { src: IMG('13-script-gallery'), alt: 'Script gallery with saved screenplay drafts' },
        ],
      },
    ],
  },

  { type: 'heading', text: 'How it was built', kicker: 'Spec-first, at velocity' },
  {
    type: 'custom',
    node: (
      <div>
        <DataTable
          head={['Period', 'Commits', 'What shipped']}
          rows={TIMELINE.map((t) => [t.period, t.commits, t.shipped])}
        />
        <p className="mt-4 text-lg sm:text-xl font-medium leading-relaxed max-w-3xl">
          First commit 9 February 2026. <strong className="font-black">374 of 377 commits land in a nine-week window</strong>{' '}
          across February and March.
        </p>
      </div>
    ),
  },
  {
    type: 'text',
    body: [
      'The project was built spec-first. Every significant feature has a design document and an implementation plan committed to the repo before the code: 26 planning documents covering the scriptwriting module phases, the costume system, FDX export, script translation, the adaptive PDF importer, the webhook orchestration layer, and the prompt-injection hardening pass. The Write module shipped as three explicitly-scoped phases, each planned, then executed, then verified against the plan.',
      'The story here is not "I prompted an AI and got an app." It is a solo developer running a disciplined spec-driven process at high velocity, with an explicit production-safety boundary, and the artifacts are in the repo to prove it.',
    ],
  },
  {
    type: 'quote',
    text: 'The Storyboard module is production. Never modify its internals. Scriptwriting is additive only.',
    attribution: 'The one architectural rule, written into project memory. It is why a 3,000-line production component survived a five-month feature expansion without a rewrite.',
  },
  {
    type: 'twoCol',
    title: 'Where it stands',
    body: [
      'Live and multi-user at aistorybookz.vercel.app, with Supabase Auth and row-level security on every table. 33 storyboard projects, 712 shots generated, 4 screenplay drafts in the Write module.',
      'An admin dashboard with per-user quota management, credit accounting, feature toggles, and user blocking. A live credit system. 15 of 20 items on the internal improvement roadmap shipped. Two of three modules live.',
    ],
    image: {
      src: IMG('04-project-gallery'),
      sticker: 'In production',
      alt: 'Project gallery showing six real projects with generated cast plates',
      caption: 'The project gallery: real projects, real users, generated cast plates.',
    },
  },

  {
    type: 'section',
    bg: 'purple',
    blocks: [
      { type: 'heading', text: 'What’s next: Cut', kicker: 'Designed, not built' },
      {
        type: 'twoCol',
        body: [
          'A storyboard is static. The gap between "here are 18 frames" and "here is what the sequence feels like" is the gap between a board and an animatic, and closing it is where the remaining pre-production value sits.',
          'Nuke Storybook is unusually well-positioned for this, because it already produces the hard input. Multi-keyframe video generation needs consistent keyframes, and that is exactly what the Storyboard module manufactures: shots 1A and 1B of the same scene are already the same characters in the same location under the same light. They are keyframe pairs by construction.',
          'The research is done: 20 video models evaluated across three tiers, a keyframe normalizer, provider router, and segment-chaining fallback specified. And the webhook orchestration layer built in February was designed provider-agnostic from the start, so adding a video adapter is adding a file to a registry, not rearchitecting the app.',
        ],
        image: {
          src: IMG('12-cut-module-coming-soon'),
          sticker: 'Coming soon',
          alt: 'The Cut module panel in its coming-soon state, violet accent',
        },
      },
      {
        type: 'stats',
        items: [
          { value: '20', label: 'Video models evaluated' },
          { value: '8', label: 'Max keyframes, top tier' },
          { value: '$0.05/s', label: 'Cheapest hosted rate' },
          { value: '~$10.50', label: 'Fully-timed animatic of the whole 3 min 30 s short' },
        ],
      },
    ],
  },

  {
    type: 'section',
    bg: 'mint',
    blocks: [
      { type: 'heading', text: 'One person, five months, a pre-production department', kicker: 'Closing' },
      {
        type: 'text',
        body: [
          'Nuke Storybook started as a question about whether a director could see their film before shooting it, without spending two weeks and two lakh rupees finding out. The answer turned out to be yes. And the interesting part was never the image generation. It was the plumbing: keeping a character’s face stable across eighteen frames, routing a 4K request around a serverless timeout, making a Telugu screenwriter’s keyboard work, and holding a 3,000-line production module still while building a second application beside it.',
          'Two modules are live. The third is designed. The frames above were generated by the tool, from a script written in the tool, in about the time it takes to read this page.',
        ],
      },
      {
        type: 'stats',
        items: [
          { value: '712', label: 'Shots generated' },
          { value: '$0.04', label: 'Per frame' },
          { value: '<10 min', label: 'Script to full board' },
          { value: '160–400×', label: 'Cheaper than traditional' },
        ],
      },
    ],
  },

  {
    type: 'cta',
    links: [
      { label: 'Open the live app', href: 'https://aistorybookz.vercel.app', variant: 'primary' },
      { label: '← Back to portfolio', href: '/', variant: 'outline' },
    ],
  },
];

export default function NukeStorybookPage() {
  return (
    <CaseStudyTemplate
      accent="mint"
      heroTicker={['Screenplay in', 'Shot list out', 'Consistent characters', 'Scouted locations', 'Real camera language', 'Minutes, not weeks']}
      eyebrow="Case study · AI product · Solo build"
      title="Nuke Storybook"
      summary="Script to shot-list to screen. An AI pre-production suite that turns a screenplay into a shot-by-shot cinematic storyboard, with consistent characters, scouted locations, and real camera language, in minutes instead of weeks. Built solo: product, design, engineering, and prompt architecture."
      facts={[
        { label: 'Role', value: 'Solo · Product, design, engineering' },
        { label: 'Timeline', value: 'Feb 2026 – present' },
        { label: 'Status', value: 'Live, multi-user, in production' },
        { label: 'Stack', value: 'React 19 · TypeScript · Supabase · Gemini · fal.ai' },
      ]}
      blocks={BLOCKS}
    />
  );
}
