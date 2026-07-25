import { CaseStudyTemplate, FramedImage, type Block } from '@/components/case-study/CaseStudyTemplate';

export const metadata = {
  title: 'Agentic Ad Creative Engine · Cashfree | Sairam Vendra',
  description:
    'An agentic AI tool that writes, renders, judges, and refines on-brand marketing creatives for Cashfree Payments.',
};

const IMG = (n: number, ext = 'jpg') => `/projects/cashfree/cf-${String(n).padStart(2, '0')}.${ext}`;

const BLOCKS: Block[] = [
  { type: 'heading', text: 'The product', kicker: 'What it is' },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-5">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            Jade is an agentic creative engine built around the Cashfree brand system. Give it a brief (product,
            channel, audience, campaign goal, an optional trend hook) and it returns finished, on-brand ad
            creatives, not moodboards.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            Brand guardrails are enforced in the pipeline itself: locked palette, logo rules, type system, tone.
            The engine can push hard on the idea because it cannot drift on the brand.
          </p>
          <h3 className="text-2xl sm:text-3xl font-black pt-2">One brief in</h3>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            The brief panel reads like a media plan, not a prompt box: product, channel, audience, campaign
            goal, plus live trend hooks pulled from what is currently moving.
          </p>
        </div>
        <FramedImage
          src={IMG(2)}
          accent="purple"
          alt="Jade brief panel with product, channel, audience, campaign goal and brand guardrails"
          caption="The brief panel, with brand guardrails pinned to every generation."
        />
      </div>
    ),
  },
  {
    type: 'image',
    src: IMG(1),
    alt: 'Jade variant review screen showing generated ad variants with scores and structured feedback',
    caption: 'Variant review: every creative is generated, scored, and refined against the brief and the brand.',
  },

  {
    type: 'section',
    bg: 'sky',
    blocks: [
      { type: 'heading', text: 'How it works', kicker: 'The loop' },
      {
        type: 'custom',
        node: (
          <div>
            <p className="text-xl sm:text-2xl font-medium mb-8">Four verbs, one loop.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {[
                { verb: 'Writes', body: 'Headlines, hooks, and copy variants tuned to the audience and the channel.' },
                { verb: 'Renders', body: 'Full layouts in the brand system, with palette, logo, type, and real product UI.' },
                { verb: 'Judges', body: 'An AI creative director scores each variant against the brief and the brand before a human ever sees it.' },
                { verb: 'Refines', body: 'Feedback, human or judged, loops back into the next generation instead of dying in a comment thread.' },
              ].map((v, i) => (
                <div
                  key={v.verb}
                  className={`p-6 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-md ${i % 2 === 0 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]'} hover:rotate-0 transition-transform duration-200`}
                >
                  <span className="inline-block px-3 py-1 bg-neobrutalism-purple border-3 border-neobrutalism-black shadow-neobrutalism-sm font-black uppercase tracking-widest text-sm">
                    {v.verb}
                  </span>
                  <p className="mt-4 font-medium leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
  },

  { type: 'ticker', words: ['Every save counts', 'बस बनाओ', 'janjat → no janjat', 'Product stats'] },

  { type: 'heading', text: 'The output', kicker: 'Three campaign systems, four formats' },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black mb-4">Every save counts</h3>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            Settlements and reconciliation, told through a goalkeeper who never drops a payment. One prompt
            system, rendered across story, feed, and banner formats.
          </p>
        </div>
        <FramedImage
          src={IMG(10)}
          accent="purple"
          alt="Goalkeeper catching a gold coin beside a settled-payments panel"
        />
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'story',
    cols: 3,
    images: [
      { src: IMG(9), alt: 'Save every payment, score every time: goalkeeper diving with reconciliation dashboard' },
      { src: IMG(11), alt: 'Every save counts: goalkeeper guarding a settlement table in the goal net' },
      { src: IMG(12), alt: 'Clean sheets, clean books: goalkeeper with reconciliation status matched' },
      { src: IMG(6), alt: 'Stop chasing mismatched settlements: goalkeeper story ad' },
      { src: IMG(15), alt: 'No manual matching: goalkeeper variant with sign-up call to action' },
      { src: IMG(19), alt: 'Match-day rush? Do not drop a single payment: live sales graph ad' },
    ],
  },
  {
    type: 'image',
    src: IMG(3),
    alt: 'Every Save Counts leaderboard display banner',
    caption: 'Same system, display formats: leaderboard banner…',
  },
  {
    type: 'image',
    src: IMG(21),
    alt: 'Every Save Counts thin strip banner',
    caption: '…down to the strip banner. Same campaign, same guardrails.',
  },

  {
    type: 'section',
    bg: 'yellow',
    blocks: [
      {
        type: 'custom',
        node: (
          <div className="max-w-5xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-4">बस बनाओ (just build)</h3>
            <p className="text-xl sm:text-2xl leading-relaxed font-medium">
              Payment links for first-time sellers, drawn in Indian folk-art style. Same brief, two art
              directions (vibrant and paper-muted), because the engine argues in variants, not opinions.
            </p>
          </div>
        ),
      },
      {
        type: 'gallery',
        aspect: 'story',
        cols: 3,
        images: [
          { src: IMG(16), alt: 'Bas banao: folk-art payment links hero creative' },
          { src: IMG(17), alt: 'Four-panel folk-art story: start the dream, send a link, money lands, start today (vibrant version)' },
          { src: IMG(18), alt: 'Four-panel folk-art story, paper-muted art direction' },
        ],
      },
      {
        type: 'image',
        src: IMG(7),
        alt: 'janjat / no janjat comic creative: confused notebook seller versus relaxed seller with a Cashfree payment link',
        caption: 'janjat / no janjat: the same message flipped into a comic format for social.',
      },
    ],
  },

  {
    type: 'custom',
    node: (
      <div className="max-w-5xl">
        <h3 className="text-2xl sm:text-3xl font-black mb-4">Product, stated plainly</h3>
        <p className="text-xl sm:text-2xl leading-relaxed font-medium">
          Stat-led product ads pulled straight from real surfaces (payout cards, payment links, UPI volume),
          rendered as clean feed squares.
        </p>
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'square',
    cols: 3,
    images: [
      { src: IMG(4), alt: 'Plus Jakarta UPI volume: phone and growth graph creative' },
      { src: IMG(5), alt: 'Settled T+1: twelve lakh settlement amount creative' },
      { src: IMG(8), alt: 'UPI, cards, wallets, net banking: phone payment methods creative' },
      { src: IMG(13), alt: 'Payout in progress card with real-time status' },
      { src: IMG(14), alt: '24 lakh crore in UPI payments last month: stat creative' },
      { src: IMG(20), alt: 'A Cashfree payment link for 24,999 rupees: merchant photo creative' },
    ],
  },

  {
    type: 'section',
    bg: 'mint',
    blocks: [
      {
        type: 'custom',
        node: (
          <div className="max-w-5xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-4">In motion</h3>
            <p className="text-xl sm:text-2xl leading-relaxed font-medium">
              The engine renders motion too: eight video creatives in story format, spanning all three campaign
              systems.
            </p>
          </div>
        ),
      },
      {
        type: 'gallery',
        aspect: 'story',
        cols: 4,
        images: Array.from({ length: 8 }, (_, i) => ({
          src: `/projects/cashfree/vid-${String(i + 1).padStart(2, '0')}.mp4`,
          alt: `Motion ad creative ${i + 1}`,
        })),
      },
    ],
  },

  {
    type: 'section',
    bg: 'purple',
    blocks: [
      { type: 'heading', text: 'Outcome', kicker: 'What shipped' },
      {
        type: 'stats',
        items: [
          { value: '1', label: 'Person, from design to ship' },
          { value: '3', label: 'Campaign systems' },
          { value: '4', label: 'Formats: square · story · banner · strip' },
          { value: '27', label: 'Finished creatives on this page' },
        ],
      },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 w-14 h-14 bg-neobrutalism-white border-3 border-neobrutalism-black rotate-12"
              />
              <figure className="relative p-8 sm:p-10 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-xl -rotate-1">
                <blockquote className="text-2xl sm:text-3xl font-black leading-snug text-neobrutalism-purple">
                  &ldquo;Designed, engineered, and shipped solo.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-white font-bold">Project thesis</figcaption>
              </figure>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              The point was never one good ad. It is a system that produces campaign-consistent creatives on
              demand: taste encoded in the judge, brand encoded in the pipeline.
            </p>
          </div>
        ),
      },
    ],
  },

  {
    type: 'cta',
    links: [
      {
        label: 'View on Behance',
        href: 'https://www.behance.net/gallery/253120527/Agentic-AD-Creative-engine-forCashfree',
        variant: 'primary',
      },
      { label: '← Back to portfolio', href: '/', variant: 'outline' },
    ],
  },
];

export default function CashfreePage() {
  return (
    <CaseStudyTemplate
      accent="purple"
      heroTicker={['Writes', 'Renders', 'Judges', 'Refines']}
      eyebrow="Case study · Agentic AI"
      title="Agentic Ad Creative Engine"
      summary="An agentic AI tool that writes, renders, judges, and refines on-brand marketing creatives for Cashfree Payments. Designed, engineered, and shipped solo as a working product, not a prototype."
      facts={[
        { label: 'Brand', value: 'Cashfree Payments' },
        { label: 'Role', value: 'Agentic design · Art direction · Creative direction' },
        { label: 'Built with', value: 'Claude Code · Next.js · React · TypeScript' },
      ]}
      blocks={BLOCKS}
    />
  );
}
