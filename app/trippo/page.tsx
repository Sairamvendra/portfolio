import { CaseStudyTemplate, FramedImage, type Block } from '@/components/case-study/CaseStudyTemplate';

export const metadata = {
  title: 'Trippo · Travel Planner App | Sairam Vendra',
  description:
    'A travel planner app designed end to end: research, branding, information architecture, wireframes, high-fidelity UI in light and dark, a marketing website, and user testing.',
};

const IMG = (name: string) => `/projects/trippo/${name}.jpg`;

/* ---------- page data (mirrors the /visualstudio card patterns) ---------- */

const DELIVERABLES = [
  {
    name: 'The Brand',
    chip: 'bg-neobrutalism-yellow',
    body: 'An identity from a simple equation: Trips + location pin. Bulu blue and Ocean teal split the palette 50/30 over light and dark surfaces, Poppins carries headings, Sofia Pro carries body text, and the logo survives ocean, blue, dark, and light backgrounds.',
  },
  {
    name: 'The App',
    chip: 'bg-neobrutalism-cyan',
    body: 'Five bottom tabs: Home, Gallery, Explore, Chats, Notifications. Search, suggestions, and trip planning sit one step from Home, and the full planner runs calendar, members, checklists, and agendas, shipped in light and dark from the same components.',
  },
  {
    name: 'The Website',
    chip: 'bg-neobrutalism-purple',
    body: 'The marketing face: landing, splash intro, about, trips, stories, and footer, wireframed grey-first and finished in the same design system as the app, so the brand reads identically across both platforms.',
  },
];

const PAIN_POINTS = [
  { n: '01', title: 'Unprepared', body: 'Travellers end up rescheduling or cancelling the trip outright.', color: 'bg-neobrutalism-yellow' },
  { n: '02', title: 'Accommodation', body: 'Booking problems surface mid-trip, when they cost the most.', color: 'bg-neobrutalism-cyan' },
  { n: '03', title: 'Drop-outs', body: 'People abandon trips because planning is simply hard work.', color: 'bg-neobrutalism-purple' },
  { n: '04', title: 'No suggestions', body: 'Nothing answers the question: where should we go next?', color: 'bg-neobrutalism-lime' },
  { n: '05', title: 'Lost memories', body: 'No shared place keeps the photos and stories of a trip together.', color: 'bg-neobrutalism-pink' },
];

const TEST_FINDINGS = [
  { n: '01', title: 'Clumsy', body: 'The first design read as cluttered: too much competing for one screen.', color: 'bg-neobrutalism-yellow' },
  { n: '02', title: 'Hidden gems', body: 'Suggestions, the product’s core promise, were too hard to find.', color: 'bg-neobrutalism-cyan' },
  { n: '03', title: 'No search', body: 'Users reached for a search bar that was not there.', color: 'bg-neobrutalism-purple' },
  { n: '04', title: 'Wrong buckets', body: 'Trip categorization did not match how travellers actually think.', color: 'bg-neobrutalism-lime' },
];

const BRAND_KEYWORDS = ['Peace of mind', 'Travel', 'Vacation', 'Explore'];

const PALETTE = [
  { name: 'Bulu', hex: '#2699FB', share: '50%', dark: false },
  { name: 'Ocean', hex: '#25E6D0', share: '30%', dark: false },
  { name: 'Light', hex: '#FFFFFF', share: '10%', dark: false },
  { name: 'Dark', hex: '#181826', share: '10%', dark: true },
];

const BLOCKS: Block[] = [
  {
    type: 'image',
    src: IMG('tr-hero'),
    sticker: 'The pitch',
    alt: 'Trippo project brief with role icons and app home screens on the brand blue',
    caption: 'Trippo: wide-range trip suggestions, less worry, the whole trip planned before you leave.',
  },
  {
    type: 'stats',
    items: [
      { value: '7', label: 'Disciplines, one designer' },
      { value: '2', label: 'Platforms: app + website' },
      { value: '2', label: 'Modes: light and dark' },
      { value: '5', label: 'Pain points, straight from travellers' },
    ],
  },

  { type: 'heading', text: 'What it is', kicker: 'One trip, planned before you leave' },
  {
    type: 'custom',
    node: (
      <p className="text-xl sm:text-2xl leading-relaxed font-medium max-w-5xl">
        Most travel apps assume the trip is already planned. Trippo is designed so the whole trip is planned
        before you leave: research, brand, information architecture, wireframes, high-fidelity UI in light and
        dark, and a marketing website, one designer running the full arc from stakeholder interview to user
        testing.
      </p>
    ),
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {DELIVERABLES.map((m, i) => (
          <div
            key={m.name}
            className={`p-6 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-lg ${i % 2 === 0 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]'} hover:rotate-0 transition-transform duration-200`}
          >
            <span className={`inline-block px-3 py-1 ${m.chip} border-3 border-neobrutalism-black shadow-neobrutalism-sm font-black uppercase tracking-widest text-sm`}>
              {m.name}
            </span>
            <p className="mt-4 font-medium leading-relaxed">{m.body}</p>
          </div>
        ))}
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'yellow',
    blocks: [
      { type: 'heading', text: 'The problem', kicker: 'Why trip planning fails' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
            <div className="space-y-5">
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                It started with a stakeholder interview, then keyword and mind mapping to pull out the
                product&rsquo;s gravity centres: trip planner, travel journal, reminders, suggestions, peace of
                mind. Then the pain points, straight from travellers, five ways a trip dies before it starts.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-black">
                The design bet: put planning one step from Home, and the traveller keeps their peace of mind.
              </p>
            </div>
            <div className="p-6 bg-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-md">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-cyan mb-3">
                The client&rsquo;s ask
              </p>
              <p className="text-sm font-bold text-white leading-relaxed">
                Users should find trip planning so easy that they can enjoy the trip itself without worries:
                branding, a mobile app, and a web presence, for working people, students, and travel
                enthusiasts.
              </p>
            </div>
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PAIN_POINTS.map((s, i) => (
              <div
                key={s.n}
                className={`relative mt-5 p-5 bg-neobrutalism-white text-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-lg ${i % 2 === 0 ? 'rotate-[0.75deg]' : '-rotate-[0.75deg]'} hover:rotate-0 hover:-translate-y-1 transition-transform duration-200`}
              >
                <div
                  className={`absolute -top-5 left-4 w-11 h-11 flex items-center justify-center ${s.color} border-3 border-neobrutalism-black shadow-neobrutalism-sm -rotate-3 font-heading font-black text-lg`}
                >
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-black uppercase">{s.title}</h3>
                <div aria-hidden="true" className={`mt-2 h-2 w-10 ${s.color} border-2 border-neobrutalism-black`} />
                <p className="mt-3 text-sm font-medium leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        type: 'image',
        src: IMG('tr-research'),
        sticker: 'The mind map',
        alt: 'Research mind map with keyword bubbles, stakeholder requirements and user pain points',
        caption: 'One interview, thirteen keywords, five pain points: the map every later decision traces back to.',
      },
    ],
  },

  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
        <div className="relative w-fit">
          <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
            <p className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Peace of mind, as a system</p>
          </div>
          <div className="block w-fit px-6 py-4 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-cyan">The brand</h2>
          </div>
        </div>
        <p className="text-xl sm:text-2xl leading-relaxed font-medium">
          The mission: an experience that encourages people to go out and explore more with no worries. Four
          keywords steer every decision on the board, and the identity comes from a simple equation: Trips +
          location pin.
        </p>
      </div>
    ),
  },
  {
    type: 'custom',
    node: (
      <div className="relative p-8 lg:p-10 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-xl rotate-[0.5deg]">
        <div
          aria-hidden="true"
          className="absolute -top-3 -right-3 w-12 h-12 bg-neobrutalism-cyan border-3 border-neobrutalism-black rotate-12"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
          <div className="shrink-0">
            <div className="font-heading font-black leading-none text-8xl lg:text-9xl text-neobrutalism-cyan">4</div>
            <p className="mt-3 text-sm font-black uppercase tracking-widest text-white">Keywords</p>
            <p className="text-sm font-black uppercase tracking-widest text-white/50">One equation</p>
            <div className="mt-4 inline-block px-3 py-1.5 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-sm -rotate-2">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black whitespace-nowrap">Trips + pin</p>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {BRAND_KEYWORDS.map((k) => (
                <span key={k} className="px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black font-black uppercase tracking-widest text-xs">
                  {k}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              {PALETTE.map((c, i) => (
                <div
                  key={c.name}
                  className={`p-4 border-3 border-neobrutalism-black shadow-neobrutalism-md ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 hover:-translate-y-1 transition-transform duration-200`}
                  style={{ backgroundColor: c.hex }}
                >
                  <p className={`text-xs font-black uppercase tracking-widest ${c.dark ? 'text-white' : 'text-neobrutalism-black'}`}>
                    {c.name} · {c.share}
                  </p>
                  <p className={`mt-1 font-mono text-xs font-bold ${c.dark ? 'text-white/70' : 'text-neobrutalism-black/70'}`}>{c.hex}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-neobrutalism-black border-3 border-white/40 text-white font-mono text-xs font-bold">Poppins — headings</span>
              <span className="px-2 py-1 bg-neobrutalism-black border-3 border-white/40 text-white font-mono text-xs font-bold">Sofia Pro — body</span>
            </div>
          </div>
        </div>
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

  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
        <div className="relative w-fit">
          <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
            <p className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Grey first</p>
          </div>
          <div className="block w-fit px-6 py-4 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-cyan">Wireframes</h2>
          </div>
        </div>
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

  { type: 'ticker', words: ['Research', 'Branding', 'Information architecture', 'Wireframes', 'Visual design', 'Prototype', 'User testing'] },
  {
    type: 'section',
    bg: 'black',
    blocks: [
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
            <div>
              <div className="inline-block px-3 py-1.5 bg-neobrutalism-white text-neobrutalism-black border-3 border-neobrutalism-black mb-3 rotate-1">
                <p className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Atoms to organisms</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-cyan">Visual design</h2>
            </div>
            <p className="text-lg sm:text-xl font-medium leading-relaxed max-w-4xl text-white/90">
              A proper UI anatomy before any screens: atoms, molecules, organisms, and a two-weight icon set,
              line for navigation, fill for actions. Then the high-fidelity pass, in both modes: same
              hierarchy, same components, two palettes.
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
    ],
  },

  {
    type: 'section',
    bg: 'cyan',
    blocks: [
      { type: 'heading', text: 'What testing said', kicker: 'A/B tested, then redesigned' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEST_FINDINGS.map((s, i) => (
              <div
                key={s.n}
                className={`relative mt-5 p-6 bg-neobrutalism-white text-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-lg ${i % 2 === 0 ? 'rotate-[0.75deg]' : '-rotate-[0.75deg]'} hover:rotate-0 hover:-translate-y-1 transition-transform duration-200`}
              >
                <div
                  className={`absolute -top-5 left-4 w-12 h-12 flex items-center justify-center ${s.color} border-3 border-neobrutalism-black shadow-neobrutalism-sm -rotate-3 font-heading font-black text-xl`}
                >
                  {s.n}
                </div>
                <h3 className="mt-5 text-xl font-black uppercase">{s.title}</h3>
                <div aria-hidden="true" className={`mt-2 h-2 w-12 ${s.color} border-2 border-neobrutalism-black`} />
                <p className="mt-3 font-medium leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Blunt feedback, taken straight: the initial wireframes were redesigned into the final home with
              search front and centre, suggestions one scroll away, and trips categorized the way travellers
              actually think. Testing did not decorate the process at the end; it sent the design back to the
              board and made the shipped screens.
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
    ],
  },

  {
    type: 'section',
    bg: 'lime',
    blocks: [
      { type: 'heading', text: 'Peace of mind, shipped', kicker: 'Closing' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Trippo started as a client brief and became a full design system: one interview mapped into
              thirteen keywords, five pain points turned into an information architecture, grey wireframes
              carried into high fidelity twice over, light and dark, and an A/B round that rewrote the home
              screen before anything shipped. Every screen traces back to the same four words on the brand
              board.
            </p>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-10 h-10 bg-neobrutalism-white border-3 border-neobrutalism-black rotate-12"
              />
              <figure className="relative p-8 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-xl rotate-1">
                <p className="text-xl sm:text-2xl font-black leading-snug text-white">
                  The whole trip is planned before you leave, and the traveller keeps their{' '}
                  <span className="text-neobrutalism-cyan">peace of mind.</span>
                </p>
              </figure>
            </div>
          </div>
        ),
      },
      {
        type: 'stats',
        items: [
          { value: '13', label: 'Keywords mapped from one interview' },
          { value: '4', label: 'Pain points fixed in the redesign' },
          { value: '5', label: 'Tabs, one critical path' },
          { value: '2×2', label: 'Platforms × modes, one system' },
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
