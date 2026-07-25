import { CaseStudyTemplate, FramedImage, type Block } from '@/components/case-study/CaseStudyTemplate';

export const metadata = {
  title: 'Prime Video · Amazon | Sairam Vendra',
  description:
    'Creative leadership for the Prime Video storefront: studio key art turned into on-brand, accessible campaign creative across regions and surfaces.',
};

const ART = (n: number) => `/projects/primevideo/art-${String(n).padStart(2, '0')}.jpg`;

const BLOCKS: Block[] = [
  { type: 'heading', text: 'How the work works', kicker: 'The brief' },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          Every campaign starts the same way: a studio hands over its key art, the crown jewels of its season
          from Showtime, Max, or Starz, and it has to become unmistakably Prime Video without losing what makes
          the title sell.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          That translation is the craft. Brand framing around partner art, a deal story that reads before the
          artwork does, and type that passes contrast from ten feet on a living-room TV down to thumb-size in a
          newsletter. Art directed once, shipped everywhere, judged in impressions.
        </p>
      </div>
    ),
  },
  {
    type: 'image',
    src: ART(1),
    sticker: 'Key art in',
    alt: 'Cover carousel hero composed from partner key art: Yellowjackets, Succession and Sweetbitter',
    caption: 'Partner key art from Yellowjackets, Succession, and Sweetbitter, composed into the cover carousel hero.',
  },

  {
    type: 'section',
    bg: 'yellow',
    blocks: [
      {
        type: 'custom',
        node: (
          <div className="max-w-5xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-4">One campaign, every surface</h3>
            <p className="text-xl sm:text-2xl leading-relaxed font-medium">
              Prime Day channels, one system: a blue that owns the storefront, a price that reads first, and
              layouts cut for every canvas Amazon owns, from a living-room TV to a 3480-pixel blast banner to a
              640-pixel mobile web slot. Same art, same hierarchy, no surface left off-brand.
            </p>
          </div>
        ),
      },
      {
        type: 'gallery',
        aspect: 'natural',
        cols: 2,
        images: [
          { src: ART(2), sticker: 'Smart TV', alt: 'Prime Day channels creative for Smart TV: 99 cents per month with Showtime, Max and Starz key art' },
          { src: ART(6), sticker: 'Fire TV', alt: 'Fire TV single-title placement: Yellowjackets on Showtime' },
          { src: ART(3), sticker: 'Web hero', alt: 'Web hero banner, 3000 by 600: 99 cents per month channels offer' },
          { src: ART(16), sticker: 'Collection page', alt: 'Channels collection page background: cover art collage on Prime Video blue' },
          { src: ART(4), sticker: 'Blast banner', alt: 'Blast banner strip, 3480 by 360' },
          { src: ART(5), sticker: 'Mobile web', alt: 'Mobile web hero, 640 by 300, the smallest cut of the campaign' },
        ],
      },
    ],
  },

  {
    type: 'custom',
    node: (
      <div className="max-w-5xl">
        <h3 className="text-2xl sm:text-3xl font-black mb-4">Templates that scale taste</h3>
        <p className="text-xl sm:text-2xl leading-relaxed font-medium">
          You cannot personally art-direct every banner in every market, so you build templates that carry the
          taste for you. Locked grids, brand guardrails, pricing hierarchy baked in. And Pug Pierre: our
          in-house placeholder star who kept every draft honest until the real key art arrived.
        </p>
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: ART(7), sticker: 'Meet Pug Pierre', alt: 'Web merch tile template starring Pug Pierre, the placeholder title, renting at 2.99' },
      { src: ART(8), alt: 'Blast UI carousel template with Mutts About Hiking placeholder title at 2.99' },
      { src: ART(9), sticker: 'Lorem = system', alt: 'Matrix hero template with lorem ipsum title slots and a save up to 50% offer on select DC movies' },
      { src: ART(10), alt: 'Multi-title standard hero background: Easter Sunday, Peter Rabbit 2 and Prince of Egypt collage' },
    ],
  },

  {
    type: 'section',
    bg: 'cyan',
    blocks: [
      {
        type: 'custom',
        node: (
          <div className="max-w-5xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-4">Every region, same standard</h3>
            <p className="text-xl sm:text-2xl leading-relaxed font-medium">
              The system had to speak Portuguese in São Paulo, Spanish in Mexico City, Czech in Prague. Regional
              art directors in the US, UK, Australia and beyond ran their markets; my job was making sure a Buen
              Fin banner and a Black Friday banner felt like one brand having two conversations.
            </p>
          </div>
        ),
      },
      {
        type: 'gallery',
        aspect: 'natural',
        cols: 3,
        images: [
          { src: ART(11), sticker: 'Mexico', alt: 'Ofertas de Buen Fin: Mexican holiday campaign banners with AcornTV and Adrenalina channel offers at 35 pesos' },
          { src: ART(12), sticker: 'Brazil', alt: 'Semana Black Friday: Brazilian campaign, channels from 7.90 reais with Paramount+ and Lionsgate+' },
          { src: ART(13), sticker: 'LATAM', alt: 'Listen Watch Save: Amazon Music and Prime Video bundle hero for Latin America at 1.99 a month' },
        ],
      },
    ],
  },

  {
    type: 'custom',
    node: (
      <div className="max-w-5xl">
        <h3 className="text-2xl sm:text-3xl font-black mb-4">The brand, off the storefront</h3>
        <p className="text-xl sm:text-2xl leading-relaxed font-medium">
          Campaign systems went past the buy box: out-of-home, merch, awards season. Find Your Story and Culture
          Rated took the storefront language to the street, with billboards, totes, hoodies, the works.
        </p>
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: ART(14), sticker: 'OOH & merch', alt: 'Brand board: Prime Video out-of-home, tote bags, street poles, The B is for Black and Culture Rated creative' },
      { src: ART(15), sticker: 'Type system', alt: 'Brand board: Find Your Story type system, Nerd hoodie, Czech billboard and awards season creative' },
    ],
  },

  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black mb-4">Shipped, at Amazon scale</h3>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            Everything above ends here: the storefront. Heroes, deal tiles, and price rows, all measured in
            impressions, contrast-checked at every size, doing their job in the two seconds a scroll gives
            them.
          </p>
        </div>
        <FramedImage
          src="/projects/primevideo/pv-01.jpg"
          accent="sky"
          sticker="Live on amazon.com"
          alt="Prime Video Store live: 99 cents per month channel deals hero with deal tiles"
          caption="Channel deals, live on the store. The system at work."
        />
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'sky',
    blocks: [
      { type: 'heading', text: 'Outcome', kicker: 'What it took' },
      {
        type: 'stats',
        items: [
          { value: '4+', label: 'Markets on this page: US · MX · BR · CZ' },
          { value: '10+', label: 'Placement formats, TV to newsletter' },
          { value: '3', label: 'Studio partners in one campaign: Showtime · Max · Starz' },
          { value: 'AA', label: 'Contrast targets, TV to thumbnail' },
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
                <blockquote className="text-2xl sm:text-3xl font-black leading-snug text-neobrutalism-sky">
                  &ldquo;Studios trust you with their crown jewels. Send them back on-brand, accessible, and
                  impossible to scroll past.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-white font-bold">Creative direction, in one sentence</figcaption>
              </figure>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              The storefront is one of the most-seen design surfaces at Amazon, creative that lives or dies in
              impressions. This system is how one team kept it on-brand in every market it touched.
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
        href: 'https://www.behance.net/gallery/115005921/Prime-Video',
        variant: 'primary',
      },
      { label: '← Back to portfolio', href: '/', variant: 'outline' },
    ],
  },
];

export default function PrimeVideoPage() {
  return (
    <CaseStudyTemplate
      accent="sky"
      heroTicker={['Key art in', 'On-brand out', 'Every region', 'Every surface']}
      eyebrow="Case study · Prime Video"
      title="Prime Video"
      summary="Creative leadership for the Prime Video storefront. Studio key art turned into on-brand, accessible campaign creative by art director teams across the US, UK, Australia and beyond."
      facts={[
        { label: 'Company', value: 'Amazon · Prime Video' },
        { label: 'Role', value: 'Design Lead · Creative direction · Art direction' },
        { label: 'Team', value: 'Art directors across US · UK · AU + more' },
        { label: 'Focus', value: 'Brand systems · Accessibility · Impressions' },
      ]}
      blocks={BLOCKS}
    />
  );
}
