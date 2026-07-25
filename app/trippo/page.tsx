import { CaseStudyTemplate, FramedImage, type Block } from '@/components/case-study/CaseStudyTemplate';

export const metadata = {
  title: 'Trippo · Travel Planner App | Sairam Vendra',
  description:
    'A travel planner app designed end to end: research, branding, information architecture, wireframes, high-fidelity UI in light and dark, a marketing website, and user testing.',
};

const IMG = (name: string) => `/projects/trippo/${name}.jpg`;

const BLOCKS: Block[] = [
  {
    type: 'image',
    src: IMG('tr-hero'),
    sticker: 'The pitch',
    alt: 'Trippo project brief with role icons and app home screens on the brand blue',
    caption: 'Trippo: wide-range trip suggestions, less worry, the whole trip planned before you leave.',
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          Trippo is an app-based platform that gives travellers a wide range of trip suggestions, encouraging
          them to travel more while worrying less about planning and accommodation. The whole trip is planned
          in advance, so the traveller keeps their peace of mind.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          The client&rsquo;s ask covered branding, a mobile app, and a web presence. I ran the full arc solo:
          research, branding, information architecture, wireframes, visual design, prototype, and user
          testing.
        </p>
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'yellow',
    blocks: [
      { type: 'heading', text: 'Research', kicker: 'Stakeholders, keywords, pain points' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                It started with a stakeholder interview: the client wants users to find trip planning so easy
                that they can enjoy the trip itself without worries. Keyword and mind mapping pulled out the
                product&rsquo;s gravity centres: trip planner, travel journal, reminders, suggestions, peace of
                mind. Then the pain points, straight from travellers:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Unprepared, and end up rescheduling or cancelling',
                  'Problems with accommodation',
                  'People dropping out because planning is hard',
                  'No suggestions on where to go next',
                  'Nowhere to keep shared memories',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 w-4 h-4 shrink-0 rotate-45 border-3 border-neobrutalism-black bg-neobrutalism-cyan"
                    />
                    <span className="text-lg font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <FramedImage
              src={IMG('tr-research')}
              accent="cyan"
              alt="Research mind map with keyword bubbles, stakeholder requirements and user pain points"
            />
          </div>
        ),
      },
    ],
  },

  { type: 'heading', text: 'Branding', kicker: 'Peace of mind, as a system' },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-5">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            The mission: an experience that encourages people to go out and explore more with no worries. The
            vision: a painless, simple planning platform that lifts the whole travel experience. The audience:
            working class, students, travel enthusiasts.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            Four keywords steer every decision on the board: peace of mind, travel, vacation, explore.
          </p>
        </div>
        <FramedImage
          src={IMG('tr-brand-analysis')}
          accent="cyan"
          sticker="Brand analysis"
          alt="Brand mission, vision, value and target audience cards with the four brand keywords"
        />
      </div>
    ),
  },
  {
    type: 'custom',
    node: (
      <div className="max-w-5xl">
        <p className="text-xl sm:text-2xl leading-relaxed font-medium">
          The identity comes from a simple equation: Trips + location pin. Bulu blue and Ocean teal split the
          palette 50/30 over light and dark, Poppins carries headings, Sofia Pro carries body text.
        </p>
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: IMG('tr-logo-explore'), sticker: '4 directions', alt: 'Logo exploration: location pin, camping tent, globe, and pin-on-globe directions' },
      { src: IMG('tr-logo-concept'), sticker: 'Trips + pin', alt: 'Logo concept: the word trips plus a location pin' },
      { src: IMG('tr-palette'), sticker: '50 · 30 · 10 · 10', alt: 'Colour palette: Bulu #2699FB, Ocean #25E6D0, Light #FFFFFF, Dark #181826 with usage bar' },
      { src: IMG('tr-logo-usage'), alt: 'Logo usage on ocean, blue, dark and light backgrounds' },
      { src: IMG('tr-moodboard'), sticker: 'Moodboards', alt: 'Moodboard of beaches, mountains and travel photography behind the palette' },
      { src: IMG('tr-typography'), sticker: 'Poppins · Sofia Pro', alt: 'Typography scale: Poppins for headings, Sofia Pro for body text' },
    ],
  },

  {
    type: 'section',
    bg: 'sky',
    blocks: [
      { type: 'heading', text: 'Information architecture', kicker: 'Five tabs, one critical path' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4">Task flow for creating a trip plan</h3>
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                Five bottom tabs: Home, Gallery, Explore, Chats, Notifications. Search, suggestions, and trip
                planning all sit one step from Home. The journey that matters most, creating a trip plan, is
                mapped end to end: explore or search, plan it, set the calendar, add members and trip details,
                build the checklist and agendas, out to trip details.
              </p>
            </div>
            <FramedImage
              src={IMG('tr-taskflow')}
              accent="cyan"
              sticker="The critical path"
              alt="Task flow diagram for creating a trip plan, from home and search through calendar, members, checklist and agendas"
            />
          </div>
        ),
      },
      {
        type: 'image',
        src: IMG('tr-sitemap'),
        sticker: 'Sitemap',
        alt: 'Information architecture sitemap: Home, Gallery, Explore, Chats and Notifications with their sub-flows',
      },
    ],
  },

  { type: 'heading', text: 'Wireframes', kicker: 'Grey first' },
  {
    type: 'custom',
    node: (
      <div className="max-w-5xl">
        <p className="text-xl sm:text-2xl leading-relaxed font-medium">
          Every screen started grey. Signup, home and navigation, plans, checklists, contact persons, and
          locations for the app; landing, about, trips, stories, and footer for the website.
        </p>
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: IMG('tr-wire-mobile'), sticker: 'Mobile app', alt: 'Mobile app wireframes: signup screens, home and navigation, and other screens' },
      { src: IMG('tr-wire-web'), sticker: 'Website', alt: 'Website wireframes: landing page, about, splash intro, trips, stories, and footer' },
    ],
  },

  { type: 'heading', text: 'Visual design', kicker: 'Atoms to organisms' },
  {
    type: 'custom',
    node: (
      <div className="max-w-5xl">
        <p className="text-xl sm:text-2xl leading-relaxed font-medium">
          A proper UI anatomy before any screens: atoms, molecules, organisms, and a two-weight icon set, line
          for navigation, fill for actions.
        </p>
      </div>
    ),
  },
  {
    type: 'image',
    src: IMG('tr-ui-anatomy'),
    sticker: 'UI anatomy',
    alt: 'UI anatomy board: atoms, molecules, organisms and the line and fill icon sets',
  },
  {
    type: 'image',
    src: IMG('tr-hifi-mobile'),
    sticker: 'Light + dark',
    alt: 'High fidelity mobile app designs in light and dark mode: home, explore, place details and trip timeline',
    caption: 'The app ships both modes: same hierarchy, same components, two palettes.',
  },
  {
    type: 'image',
    src: IMG('tr-hifi-web'),
    sticker: 'The website',
    alt: 'High fidelity website designs: landing page, splash intro, about, trips, stories and footer',
  },

  {
    type: 'section',
    bg: 'cyan',
    blocks: [
      { type: 'heading', text: 'User testing', kicker: 'A/B tested, then redesigned' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              A/B testing brought blunt feedback: the design looked clumsy, suggestions were hard to find,
              search was missing, and trip categorization was off. The initial wireframes were redesigned into
              the final home: search front and centre, suggestions one scroll away, trips categorized the way
              travellers actually think.
            </p>
            <FramedImage
              src={IMG('tr-user-testing')}
              accent="cyan"
              sticker="Variants → final"
              alt="Design variants provided to users in A/B testing beside the final redesigned home screen"
            />
          </div>
        ),
      },
      {
        type: 'stats',
        items: [
          { value: '4', label: 'Pain points fixed in the redesign' },
          { value: '2', label: 'Platforms: app + website' },
          { value: '2', label: 'Modes: light and dark' },
          { value: '7', label: 'Disciplines, one designer' },
        ],
      },
    ],
  },

  {
    type: 'cta',
    links: [
      {
        label: 'View on Behance',
        href: 'https://www.behance.net/gallery/106819621/Trippo-Travel-planner-app-Design-UIUX',
        variant: 'primary',
      },
      { label: '← Back to portfolio', href: '/', variant: 'outline' },
    ],
  },
];

export default function TrippoPage() {
  return (
    <CaseStudyTemplate
      accent="cyan"
      heroTicker={['Research', 'Branding', 'Information architecture', 'Wireframes', 'Visual design', 'Prototype', 'User testing']}
      eyebrow="Case study · UI/UX · Branding"
      title="Trippo"
      summary="A travel planner app designed end to end: research, branding, information architecture, wireframes, high-fidelity UI in light and dark, a marketing website, and user testing. Built so the whole trip is planned before you leave, and the traveller keeps their peace of mind."
      facts={[
        { label: 'Project', value: 'Trippo · Travel planner' },
        { label: 'Role', value: 'Solo · Research → user testing' },
        { label: 'Deliverables', value: 'Branding · Mobile app · Website' },
        { label: 'Design', value: 'Adobe XD' },
      ]}
      blocks={BLOCKS}
    />
  );
}
