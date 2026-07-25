import { CaseStudyTemplate, type Block } from '@/components/case-study/CaseStudyTemplate';

export const metadata = {
  title: 'Agentic Ad Creative Engine · Cashfree | Sairam Vendra',
  description:
    'An agentic AI tool that writes, renders, judges, and refines on-brand marketing creatives for Cashfree Payments.',
};

const IMG = (n: number, ext = 'jpg') => `/projects/cashfree/cf-${String(n).padStart(2, '0')}.${ext}`;

const BLOCKS: Block[] = [
  { type: 'heading', text: 'The product', kicker: 'What it is' },
  {
    type: 'text',
    body: [
      'Jade is an agentic creative engine built around the Cashfree brand system. Give it a brief (product, channel, audience, campaign goal, an optional trend hook) and it returns finished, on-brand ad creatives, not moodboards.',
      'Brand guardrails are enforced in the pipeline itself: locked palette, logo rules, type system, tone. The engine can push hard on the idea because it cannot drift on the brand.',
    ],
  },
  {
    type: 'twoCol',
    title: 'One brief in',
    body: 'The brief panel reads like a media plan, not a prompt box: product, channel, audience, campaign goal, plus live trend hooks pulled from what is currently moving.',
    image: {
      src: IMG(2),
      alt: 'Jade brief panel with product, channel, audience, campaign goal and brand guardrails',
      caption: 'The brief panel, with brand guardrails pinned to every generation.',
    },
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
        type: 'list',
        title: 'Four verbs, one loop',
        items: [
          'Writes: headlines, hooks, and copy variants tuned to the audience and the channel.',
          'Renders: full layouts in the brand system, with palette, logo, type, and real product UI.',
          'Judges: an AI creative director scores each variant against the brief and the brand before a human ever sees it.',
          'Refines: feedback, human or judged, loops back into the next generation instead of dying in a comment thread.',
        ],
      },
    ],
  },

  { type: 'ticker', words: ['Every save counts', 'बस बनाओ', 'janjat → no janjat', 'Product stats'] },

  { type: 'heading', text: 'The output', kicker: 'Three campaign systems, four formats' },
  {
    type: 'twoCol',
    title: 'Every save counts',
    body: 'Settlements and reconciliation, told through a goalkeeper who never drops a payment. One prompt system, rendered across story, feed, and banner formats.',
    image: {
      src: IMG(10),
      alt: 'Goalkeeper catching a gold coin beside a settled-payments panel',
    },
    flip: true,
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
        type: 'text',
        title: 'बस बनाओ (just build)',
        body: 'Payment links for first-time sellers, drawn in Indian folk-art style. Same brief, two art directions (vibrant and paper-muted), because the engine argues in variants, not opinions.',
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
    type: 'text',
    title: 'Product, stated plainly',
    body: 'Stat-led product ads pulled straight from real surfaces (payout cards, payment links, UPI volume), rendered as clean feed squares.',
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
        type: 'text',
        title: 'In motion',
        body: 'The engine renders motion too: eight video creatives in story format, spanning all three campaign systems.',
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
        type: 'quote',
        text: 'Designed, engineered, and shipped solo.',
        attribution: 'Project thesis',
      },
      {
        type: 'text',
        body: 'The point was never one good ad. It is a system that produces campaign-consistent creatives on demand: taste encoded in the judge, brand encoded in the pipeline.',
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
