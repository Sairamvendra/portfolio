import { CaseStudyTemplate, FramedImage, type Block } from '@/components/case-study/CaseStudyTemplate';

export const metadata = {
  title: 'Imaging Associate · Amazon | Sairam Vendra',
  description:
    'Catalog imaging at Amazon: studio photography retouched and recolored into every listing variant in Photoshop.',
};

// ?v=2 busts browser caches from the pre-crop versions of these files
const IMG = (n: number) => `/projects/amazon/az-${String(n).padStart(2, '0')}.jpg?v=2`;

const BLOCKS: Block[] = [
  { type: 'heading', text: 'The work', kicker: 'What it is' },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          Amazon lists a product family once per colorway, but shoots it once, full stop. Catalog imaging turns
          a single studio sample into every variant the listing needs, each one true to the Amazon style guide:
          same frame, same crop, same light, colors accurate enough to survive a return policy.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          The craft is invisible when done right. Nobody browsing the catalog should be able to tell which
          colorway stood in front of the camera and which ones were built in Photoshop.
        </p>
      </div>
    ),
  },

  {
    type: 'custom',
    node: (
      <div className="max-w-5xl">
        <h3 className="text-2xl sm:text-3xl font-black mb-4">One shirt, two colorways</h3>
        <p className="text-xl sm:text-2xl leading-relaxed font-medium">
          The orange top is the studio frame. The navy one never existed on set: same model, same pose, the
          pattern rebuilt dot by dot in a new palette.
        </p>
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: IMG(2), sticker: 'Studio', alt: 'Studio frame: model in an orange patterned top, shot to the Amazon style guide' },
      { src: IMG(3), sticker: 'Manipulation', alt: 'Photoshop manipulation: the same frame recolored to a navy colorway' },
    ],
  },

  {
    type: 'section',
    bg: 'sky',
    blocks: [
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">One shoot, six listings</h3>
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                Maternity pants, shot front and back in one colorway. Those two frames are the entire
                photography budget for the product family. Every other colorway on the listing is a
                manipulation.
              </p>
            </div>
            <FramedImage
              src={IMG(4)}
              accent="orange"
              sticker="Studio"
              alt="Studio shots: front and back views of blue maternity pants"
              caption="The studio pair: front and back, one colorway."
            />
          </div>
        ),
      },
      {
        type: 'gallery',
        aspect: 'natural',
        cols: 3,
        images: [
          { src: '/projects/amazon/az-05a.jpg?v=2', sticker: 'Manipulations', alt: 'Black colorway manipulation: front and back views, catalog-ready' },
          { src: '/projects/amazon/az-05b.jpg?v=2', alt: 'Purple colorway manipulation: front and back views, catalog-ready' },
          { src: '/projects/amazon/az-05c.jpg?v=2', alt: 'Tan colorway manipulation: front and back views, catalog-ready' },
        ],
      },
    ],
  },

  {
    type: 'section',
    bg: 'orange',
    blocks: [
      { type: 'heading', text: 'Outcome', kicker: 'Why it matters' },
      {
        type: 'stats',
        items: [
          { value: '1', label: 'Studio shoot per product family' },
          { value: '6', label: 'Catalog listings from one shoot' },
          { value: '2', label: 'Views: front and back' },
          { value: '0', label: 'Reshoots for new colorways' },
        ],
      },
      {
        type: 'quote',
        text: 'Shoot the sample once. Photoshop ships the rest of the rack.',
        attribution: 'The economics of catalog imaging',
      },
    ],
  },

  {
    type: 'cta',
    links: [
      {
        label: 'View on Behance',
        href: 'https://www.behance.net/gallery/99484467/Imaging-Associate',
        variant: 'primary',
      },
      { label: '← Back to portfolio', href: '/', variant: 'outline' },
    ],
  },
];

export default function AmazonPage() {
  return (
    <CaseStudyTemplate
      accent="orange"
      heroTicker={['Shoot once', 'Retouch', 'Recolor', 'Ship the catalog']}
      eyebrow="Case study · Amazon"
      title="Imaging Associate"
      summary="Catalog imaging at Amazon: studio photography retouched and recolored into every listing variant, to a style guide that leaves no room for interpretation."
      facts={[
        { label: 'Company', value: 'Amazon' },
        { label: 'Role', value: 'Imaging Associate · Catalog imaging' },
        { label: 'Craft', value: 'Studio photography · Photo manipulation' },
        { label: 'Tools', value: 'Adobe Photoshop' },
      ]}
      blocks={BLOCKS}
    />
  );
}
