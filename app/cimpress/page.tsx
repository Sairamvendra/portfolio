import { CaseStudyTemplate, FramedImage, type Block } from '@/components/case-study/CaseStudyTemplate';

// ponytail: dev-testing page, not linked from prod nav, noindex until approved
export const metadata = {
  title: 'Cimpress Vistaprint | Sairam Vendra',
  description:
    'Art direction and custom design for Vistaprint clients worldwide: identity systems carried across print, objects, and digital.',
  robots: { index: false, follow: false },
};

const IMG = (n: number) => `/projects/cimpress/ci-${String(n).padStart(2, '0')}.jpg`;

const BLOCKS: Block[] = [
  { type: 'heading', text: 'The work', kicker: 'What it is' },
  // Intro + next section share the float so text fills the space beside the tall image
  {
    type: 'custom',
    node: (
      <div className="flow-root">
        <div className="mb-6 sm:mb-4 sm:w-[45%] sm:float-right sm:ml-8 lg:ml-12">
          <FramedImage
            src="/projects/cimpress/ci-06.jpg"
            sticker="Front & back"
            accent="cyan"
            alt="Dough to Dough standard business cards, front and reverse"
            caption="Where every brand starts: the 3.5-inch card."
          />
        </div>
        <div className="space-y-5 max-w-3xl">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            Cimpress runs Vistaprint, the place a small business anywhere on earth goes to become a
            brand. The briefs arrive from everywhere: a cookie fundraiser in Edmonton, a realtor on
            the Mississippi coast, a salon in Colchester, a wedding in California wine country.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            Every one of them needs the same thing: an identity that works on whatever surface their
            business touches. A 3.5-inch card and a six-foot banner, a door hanger and a car door.
            One system, every canvas, print-safe and legible at every size.
          </p>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black mt-12 mb-4">One client, every surface</h3>
        <p className="text-lg sm:text-xl leading-relaxed font-medium max-w-3xl">
          Dough to Dough, a gourmet-cookie fundraising brand from Alberta. One system built from
          ruled notebook paper, a red ribbon, and the cookies themselves, rolled out across cards, calendar
          magnets, door hangers, stickers and notepads. Pick any piece off the counter and you know
          whose it is.
        </p>
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 3,
    images: [
      { src: IMG(2), sticker: 'One client', alt: 'Dough to Dough gourmet cookies postcard on ruled notebook paper with red ribbon logo' },
      { src: IMG(3), alt: 'Dough to Dough 2018 calendar magnet with contact details' },
      { src: IMG(4), alt: 'Dough to Dough door hanger with first-order discount offer' },
      { src: IMG(7), alt: 'Dough to Dough ten percent off notepad flyer' },
      { src: IMG(5), alt: 'Dough to Dough oval sticker with phone number' },
    ],
  },

  {
    type: 'section',
    bg: 'yellow',
    blocks: [
      {
        type: 'text',
        title: 'A realty brand, road-ready',
        body: 'New Horizons Realty, Gulfport, Mississippi. Their tagline says worldwide; their brand had to survive everything from a letterhead to a car magnet doing 70 on the highway. Same sunburst, same blue, from the signature card to the rear door.',
      },
      {
        type: 'gallery',
        aspect: 'natural',
        cols: 3,
        images: [
          { src: IMG(19), sticker: 'One system', alt: 'New Horizons Realty standard business cards, front and back' },
          { src: IMG(20), alt: 'New Horizons Realty signature business cards with realtor portrait' },
          { src: IMG(24), alt: 'New Horizons Realty letterhead' },
          { src: IMG(25), alt: 'New Horizons Realty full-page flyers, front and back' },
          { src: IMG(21), alt: 'New Horizons Realty retractable banner' },
          { src: IMG(23), sticker: 'Car magnet', alt: 'New Horizons Realty car magnets at 8.7 by 11.5 inches' },
        ],
      },
    ],
  },

  {
    type: 'text',
    title: 'Print you can hold, hang, or park',
    body: 'Vistaprint design has to live on objects, not artboards. Mouse pads, six-foot event banners, oval car magnets, mailer postcards. Every file checked at its final size: thumb distance for a card, sidewalk distance for a banner.',
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: IMG(18), sticker: 'Six feet wide', alt: 'Cub Scout Pack 1849 large-format banner with person mockup for scale, Chicopee Massachusetts' },
      { src: IMG(17), sticker: 'Objects too', alt: 'Kevins Kreations handmade jewelry mouse pad, gold shield on black' },
      { src: IMG(22), alt: 'New Horizons Realty oval car magnet' },
      { src: `${IMG(13)}?v=2`, alt: 'Green Wellness dispensary mailer postcard front, held in hand' },
      { src: '/projects/cimpress/ci-13b.jpg', alt: 'Green Wellness dispensary mailer postcard back, held in hand' },
    ],
  },

  {
    type: 'section',
    bg: 'magenta',
    blocks: [
      {
        type: 'text',
        title: 'Every client, their own world',
        body: 'No templates, no house style. A unisex salon and a concrete-cutting company should not look like siblings, so they don’t. Price-list posters for Colchester, union-signatory cards for Southern California, foil-confetti wedding invitations for Seal Beach. Each brief gets its own visual world.',
      },
      {
        type: 'gallery',
        aspect: 'natural',
        cols: 3,
        images: [
          { src: IMG(10), sticker: 'UK', alt: 'Simple Beauty unisex salon price-list poster, black and gold, Colchester' },
          { src: IMG(11), alt: 'Simi’s Nails price-list poster with nail extensions menu, black and gold' },
          { src: IMG(14), alt: 'Kevins Kreations handmade jewelry business card with gold shield crest' },
          { src: IMG(15), sticker: 'US', alt: 'Strive Concrete Cutting signature business cards, front and back' },
          { src: IMG(16), alt: 'Gold confetti wedding invitation for a Seal Beach celebration' },
          { src: IMG(12), alt: 'Navy and white wedding invitation for a San Joaquin Winery ceremony' },
        ],
      },
    ],
  },

  {
    type: 'section',
    bg: 'cyan',
    blocks: [
      { type: 'heading', text: 'Outcome', kicker: 'The range' },
      {
        type: 'stats',
        items: [
          { value: '3', label: 'Countries on this page: US · CA · UK' },
          { value: '20+', label: 'Printed pieces shown' },
          { value: '6', label: 'Identity systems, built from scratch' },
          { value: '3.5″→6′', label: 'Smallest canvas to largest' },
        ],
      },
      {
        type: 'quote',
        text: 'A small business hands you a name. You hand back a brand they can print, hang, wear, and drive.',
        attribution: 'Custom design, the Vistaprint years',
      },
      {
        type: 'text',
        body: 'This is where the craft got drilled in: worldwide clients, every design space at once, and files that had to be right the first time, because print does not ship patches.',
      },
    ],
  },

  {
    type: 'cta',
    links: [
      {
        label: 'View on Behance',
        href: 'https://www.behance.net/gallery/99231029/Print-and-digital-design-products-(Previous-works)',
        variant: 'primary',
      },
      { label: '← Back to portfolio', href: '/', variant: 'outline' },
    ],
  },
];

export default function CimpressPage() {
  return (
    <CaseStudyTemplate
      accent="cyan"
      heroTicker={['Business cards', 'Banners', 'Car magnets', 'Door hangers', 'Invitations', 'Logos']}
      eyebrow="Case study · Print & digital"
      title="Cimpress Vistaprint"
      summary="Art direction and custom design for Vistaprint clients around the world. Complete identity systems for small businesses, designed once and carried across everything they print, hang, wear, or drive."
      facts={[
        { label: 'Company', value: 'Cimpress · Vistaprint' },
        { label: 'Role', value: 'Art direction · Custom design' },
        { label: 'Clients', value: 'Small businesses, US · CA · UK + more' },
        { label: 'Tools', value: 'Photoshop · Illustrator · InDesign' },
      ]}
      blocks={BLOCKS}
    />
  );
}
