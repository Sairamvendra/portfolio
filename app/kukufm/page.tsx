import { CaseStudyTemplate, FramedImage, type Block } from '@/components/case-study/CaseStudyTemplate';
import { ComicScroller } from '@/components/case-study/ComicScroller';

export const metadata = {
  title: 'Kuku FM · Head of Design & AI Products | Sairam Vendra',
  description:
    'What I built at Kuku FM: GPT-powered thumbnail engines, AI content pipelines for video, audio and comics, a 20-member design team, and the AI transformation that made the front page of Mint.',
};

const IMG = (name: string) => `/projects/kukufm/${name}`;

const DRIVE = 'https://drive.google.com/drive/folders/11wSLFydyzVOu7jozFvYH-rfI_cMeWmlB';
const SHOWREEL = 'https://drive.google.com/file/d/1VIrNS6vLkngvOCXltjO8lQ9I8K-t0BgQ/view';
const MINT = 'https://drive.google.com/file/d/1XNPfhtgMvZq78ZmLuEsNjuw0SnK6wieM/view';

// The thumbnail engine, stage by stage (from the pipeline deck)
const STAGES = [
  { n: '01', title: 'The brief', body: 'Content partner sends one line of the story, a poster reference, and a deadline. That is the whole input.' },
  { n: '02', title: 'GPT breakdown', body: 'A tuned bot dissects the reference: scene setup, lighting, pose and composition, skin texture, background, quality.' },
  { n: '03', title: 'Prompt craft', body: 'Cinematic tone, camera angle and mood go in. Text, logos, clutter and heavy filters are banned from the frame.' },
  { n: '04', title: 'Generate', body: 'Midjourney with cref for character, sref for style, 9:16 for the app tile. Ten variants per title when A/B calls for it.' },
  { n: '05', title: 'Camera Raw polish', body: 'Brightness, contrast, skin glow and sharpening in Photoshop. Small corrections, big cinematic payoff.' },
  { n: '06', title: 'Minimal type', body: 'A clean title, no drop shadows, no heavy effects. The image stays the hero, the text supports it softly.' },
];

// The bot roster (custom GPTs on ChatGPT, Claude and Gemini)
const BOTS = [
  { verb: 'Scripts', title: 'Promo scripter', body: 'Writes promo scripts in the tone of the show, trained on the hooks that already converted.' },
  { verb: 'Ideates', title: 'Thumbnail ideator', body: 'Turns a one-line plot into thumbnail directions by script tone, audience cohort and genre.' },
  { verb: 'Draws', title: 'Comic generator', body: 'Breaks episodes into panels, keeps characters consistent, ships whole AI comic chapters.' },
  { verb: 'Translates', title: 'Localization pipeline', body: 'Multilingual translation for book and audio localization, humans only where nuance demands it.' },
];

const TOOLKIT = [
  'ChatGPT', 'Claude', 'Gemini', 'Midjourney', 'Ideogram', 'Stable Diffusion', 'Flux',
  'ElevenLabs', 'Runway', 'Kling AI', 'AT Labs', 'Quickmake (in-house)',
];

const BLOCKS: Block[] = [
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          Kuku FM is India&rsquo;s audio-series giant: 4.2 million paying subscribers listening to fiction,
          non-fiction and everything in between, in ten languages. I ran design there, and then I ran the
          thing that changed design there: the company&rsquo;s Gen AI production line.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          This page is not one project. It is the summary of a role: the team I led and the numbers it
          moved first, then the machines we built, thumbnails, micro dramas, an ad engine, comics and
          promos, all the way to the front page of Mint.
        </p>
      </div>
    ),
  },

  { type: 'heading', text: 'Leading through the AI shift', kicker: 'Leadership · Operating model' },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-5">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            The 20-member team was a deliberate mix: designers, visual artists, and Gen-AI management
            trainees straight out of IIT. And the uncomfortable truth of this role is that the craft the
            team was hired for was being automated in front of them, by us. Protecting the old workflow
            was not an option, so I changed what the team was for.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            The new job: hunt problems, not tickets. The team scouts problem statements across the
            company, from growth to content to retention, then thinks like a group product manager: pick
            one statement, design the full end-to-end solution, ship it to production, and move to the
            next. Day-to-day production and operations never stopped running alongside.
          </p>
        </div>
        <FramedImage
          src={IMG('genai-pod.jpg')}
          accent="pink"
          sticker="The Gen AI pod"
          alt="Kuku FM's AI transformation journey: founder's initiative, Gen AI pod, weekly townhall, all-team execution"
          caption="From founder's initiative to all-team execution: the pod that ran the transformation."
        />
      </div>
    ),
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-5">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            That operating model has a shipping record: one problem statement at a time, solved end to
            end, then on to the next. It is also what kept the team growing instead of shrinking while
            its output multiplied.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            OKRs aligned with AI adoption KPIs grew design-led growth experiments by 30%, and
            co-developing AI-first rollouts with Product, Growth and Marketing cut campaign go-to-market
            time by 40%. Outside the building, funnel work with AT Labs through user research lifted flow
            efficiency 18% on priority landing pages.
          </p>
        </div>
        <div className="space-y-6">
          {[
            { n: '01', title: 'Thumbnail pipeline', body: '20 assets a day became 200.' },
            { n: '02', title: 'AI video ads', body: 'One week per ad became 4 hours.' },
            { n: '03', title: 'Traditional ad production', body: 'Cuts now land on emotional cues and hook points, automatically.' },
          ].map((c) => (
            <div
              key={c.n}
              className="flex items-start gap-5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-md p-6"
            >
              <span className="font-heading font-black text-3xl text-neobrutalism-pink leading-none">{c.n}</span>
              <div>
                <h3 className="text-xl font-black mb-1">{c.title}</h3>
                <p className="font-medium leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          The brand had to survive all this speed. I standardized visual guidelines across four verticals,
          marketing, content, app and retention, so a push banner, an app tile and an awards stage all read
          as one Kuku. Brand recall scores rose 28% year on year.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {[
            { src: IMG('award-01.jpg'), alt: 'India Audio Summit and Awards creative on black' },
            { src: IMG('award-02.jpg'), alt: 'India Audio Summit and Awards creative on orange' },
          ].map((img, i) => (
            <figure
              key={img.src}
              className={`border-3 border-neobrutalism-black shadow-neobrutalism-md bg-neobrutalism-white ${i === 0 ? 'rotate-[0.75deg]' : '-rotate-[0.75deg]'}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full block" />
            </figure>
          ))}
        </div>
      </div>
    ),
  },
  {
    type: 'stats',
    items: [
      { value: '+30%', label: 'Design-led growth experiments' },
      { value: '-40%', label: 'Campaign go-to-market time' },
      { value: '+18%', label: 'AT Labs funnel flow efficiency' },
      { value: '+28%', label: 'Brand recall, year on year' },
    ],
  },

  {
    type: 'section',
    bg: 'black',
    blocks: [
      { type: 'heading', text: 'The thumbnail engine', kicker: '4 hours → 12 minutes per asset' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Every title on the platform lives or dies by its tile. I built a proprietary GPT plus
              image-gen workflow that automates thumbnail creation end to end, cutting design cycle time
              from 4 hours to 12 minutes per asset. The bots are tuned on our best-performing past
              creatives, so they generate CTR-optimized thumbnails from script tone, audience cohort and
              genre, not from generic prompts.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              The results came fast: a 46% uplift in average CTR across 80+ titles within the first 30 days
              of rollout, and average clicks up 19% on AI-generated creative thumbnails. Because a variant
              costs minutes instead of hours, we A/B test up to 10 variants per title, and the creative
              feedback loop shrank by 70%.
            </p>
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STAGES.map((s) => (
              <div
                key={s.n}
                className="bg-neobrutalism-white text-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-md p-6 hover:-translate-y-1 hover:shadow-neobrutalism-lg transition-all duration-200"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-heading font-black text-3xl text-neobrutalism-pink">{s.n}</span>
                  <h3 className="text-xl font-black">{s.title}</h3>
                </div>
                <p className="font-medium leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        type: 'gallery',
        aspect: 'story',
        cols: 4,
        images: [
          { src: IMG('th-01.jpg'), sticker: 'The wall', alt: 'AI thumbnail: Mind Reading Game, a couple in icy blue tones' },
          { src: IMG('th-02.jpg'), alt: 'AI thumbnail: Back to 1990, a couple in a golden field' },
          { src: IMG('th-03.jpg'), alt: 'AI thumbnail: CEO Those Twins Look Like You, playful office romance' },
          { src: IMG('th-04.jpg'), alt: 'AI thumbnail: Spy Girl, a woman with a pistol on red' },
          { src: IMG('th-05.jpg'), alt: 'AI thumbnail: Primal, a couple at golden hour' },
          { src: IMG('th-06.jpg'), alt: 'AI thumbnail: Slay Madam, pop collage of four friends' },
          { src: IMG('th-07.jpg'), alt: 'AI thumbnail: The Substitute Bride, a crowned bride beside a groom' },
          { src: IMG('th-08.jpg'), alt: 'AI thumbnail: War God’s Order, an armored warrior mid-battle' },
          { src: IMG('th-09.jpg'), alt: 'AI thumbnail: The Subtle Fragrance from the Deep Forest, a masked couple' },
          { src: IMG('th-10.jpg'), sticker: 'Tamil', alt: 'AI thumbnail: Naan Aval Illai, a Tamil title in warm sunset light' },
          { src: IMG('th-11.jpg'), sticker: 'Tamil', alt: 'AI thumbnail: Vellayangiri Marmam, a hooded figure in a misty forest' },
          { src: IMG('th-12.jpg'), alt: 'AI thumbnail: Zero to Hero, a glitch-styled portrait' },
        ],
      },
      {
        type: 'custom',
        node: (
          <p className="text-lg sm:text-xl leading-relaxed font-medium max-w-5xl">
            One wall, one pipeline, every genre: romance, revenge, wuxia, spy comedy, horror. The Tamil
            tiles are the same engine speaking another language: piloted multilingual AI translation
            pipelines cut human intervention in localization by 60%.
          </p>
        ),
      },
      {
        type: 'stats',
        items: [
          { value: '12 min', label: 'Per asset, down from 4 hours' },
          { value: '+46%', label: 'Average CTR, 80+ titles, first 30 days' },
          { value: '+19%', label: 'Clicks on AI-generated thumbnails' },
          { value: '10', label: 'A/B variants per title, loops cut 70%' },
        ],
      },
    ],
  },

  {
    type: 'section',
    bg: 'pink',
    blocks: [
      { type: 'heading', text: 'AI micro dramas', kicker: 'The hottest format in content' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5">
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                Micro drama is where content is going: vertical, minute-long episodes, a cliffhanger every
                scroll. We built AI micro dramas end to end, script to screen, and shipped Dhokha On The
                Wedding Day, a full 16-episode AI web series, with AI handling visuals, voice and movement
                while the story stayed human.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                The same muscle ran both ways: I creative-directed live-action series shoots for the
                episodic slate, and the experiments kept widening the toolkit, AI story films, trailers,
                voice-plus-motion tests, Flux-generated worlds. Format first, tool second.
              </p>
            </div>
            <div className="relative w-fit max-w-full mx-auto">
              <div className="h-0">
                <div className="relative z-10 w-fit -rotate-3 -translate-y-4 -translate-x-4 px-4 py-1.5 bg-neobrutalism-pink border-3 border-neobrutalism-black shadow-neobrutalism-sm">
                  <span className="font-black uppercase tracking-widest whitespace-nowrap text-sm text-neobrutalism-black">
                    Dhokha · Ep 1
                  </span>
                </div>
              </div>
              <figure className="relative border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-white">
                {/* ponytail: autoplaying muted loop, same treatment as the gallery mp4 tiles */}
                <video
                  src={IMG('md-ep1.mp4')}
                  className="block w-auto h-auto max-w-full max-h-[560px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="AI micro drama Dhokha On The Wedding Day, episode one: a bride steps out of a car"
                />
              </figure>
            </div>
          </div>
        ),
      },
      {
        type: 'gallery',
        aspect: 'natural',
        cols: 2,
        images: [
          { src: IMG('md-trailer.mp4'), sticker: 'Series trailer', alt: 'AI series trailer: a woman walks into a dark haunted corridor' },
          { src: IMG('md-story.mp4'), sticker: 'AI story film', alt: 'AI story film: a golden-hour city skyline and an empty boardroom' },
        ],
      },
    ],
  },

  { type: 'heading', text: 'The ad engine', kicker: 'Prompt in, campaign out' },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          Growth wanted fast-paced, high-impact ads, and it wanted them in volume, every title, every
          cohort, every week. So I worked up pipelines that cut multiple ads with ease: describe what you
          need in a prompt, and the system identifies the hook points and POVs inside the story, then cuts
          a variant for each one. One episode becomes a horror hook, a romance hook, a revenge hook, each
          aimed at the audience it will stop.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          This is the pipeline that took end-to-end production of video, audio and static content from 5
          days to 4 hours, a 92% cut in average production time, tested across 30+ campaigns and moved to
          production. Automated ads in regional languages, devotional verticals, performance hooks and
          product loops, all from the same engine.
        </p>
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'story',
    cols: 4,
    images: [
      { src: IMG('ad-04.mp4'), sticker: 'AI-cut ad', alt: 'Live-action ad cut by the AI pipeline: a man with a coffee mug in a thriller scene' },
      { src: IMG('ad-03.mp4'), sticker: 'Devotional', alt: 'Devotional vertical ad: Shiv and Parvati in the Himalayas, a fire ritual' },
      { src: IMG('ad-05.mp4'), sticker: 'Poster loop', alt: "Animated poster ad: The Dragon's Magic Code, a Kuku FM exclusive" },
      { src: IMG('ad-06.mp4'), sticker: 'Product ad', alt: 'Instagram product ad: audiobooks now in Hindi with The Power of One Thought' },
    ],
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: IMG('ad-01.mp4'), sticker: 'Automated · Telugu', alt: 'Automated Telugu ad: The Digital Payments in India with a glowing world map' },
      { src: IMG('ad-02.mp4'), sticker: 'Performance hook', alt: 'Performance ad: an elderly storyteller and a ghostly figure emerging from mist' },
    ],
  },

  { type: 'heading', text: 'The system behind it', kicker: 'Templates, regeneration, recolor' },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-5">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            A one-off miracle is not a pipeline. Instant thumbnail templates gave every recurring format a
            locked grid, and an internal design automation system built on custom AI chatbots took daily
            output from 2 assets to 20, a 900% efficiency boost in marketing visual generation.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            Integrating Stable Diffusion and Flux into the content pipelines through an in-house tool
            multiplied multi-thumbnail asset generation 4x: one approved scene, re-lit and re-dressed into
            night variants, seasonal variants, campaign variants, without a fresh generation lottery.
          </p>
        </div>
        <FramedImage
          src={IMG('template-board.jpg')}
          accent="pink"
          sticker="Instant templates"
          alt="Instant thumbnail template board with repeatable layouts for book explainer creatives"
        />
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 3,
    images: [
      { src: IMG('gen-before.jpg'), sticker: 'Generation', alt: 'Original AI generation: a woman in a daylit forest scene' },
      { src: IMG('gen-after.jpg'), sticker: 'Interpolation', alt: 'Static interpolation of the same scene, re-lit as a moonlit night' },
      { src: IMG('chacha.jpg'), sticker: 'Custom thumbnail', alt: 'Chacha Chaudhary Returns, a custom comic-style Kuku FM thumbnail' },
    ],
  },

  {
    type: 'section',
    bg: 'pink',
    blocks: [
      { type: 'heading', text: 'My AI team', kicker: 'Bots on payroll' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              I deployed a roster of GPT bots for promo scripting, thumbnail ideation and comic generation,
              custom-built on ChatGPT, Claude and Gemini. Together they pushed creative throughput 10x: the
              team stopped producing assets and started directing them.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              The same playbook went company-wide. Before Gen AI, one audio series took 28 days and five
              specialists. With the AI pipeline, 9 days and three, with AI editors running voicing,
              production and video while humans keep taste and quality control.
            </p>
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BOTS.map((b) => (
              <div
                key={b.title}
                className="bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-md p-6 hover:-translate-y-1 hover:shadow-neobrutalism-lg transition-all duration-200"
              >
                <div className="inline-block px-3 py-1 bg-neobrutalism-black text-neobrutalism-pink font-black uppercase tracking-widest text-xs mb-3 -rotate-1">
                  {b.verb}
                </div>
                <h3 className="text-xl font-black mb-2">{b.title}</h3>
                <p className="font-medium leading-relaxed">{b.body}</p>
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
          {
            src: IMG('process-before.jpg'),
            sticker: '28 days · 5 people',
            alt: 'Pre Gen AI content production process at Kuku: five roles across 28 days',
          },
          {
            src: IMG('process-after.jpg'),
            sticker: '9 days · 3 people',
            alt: 'AI-powered content production process at Kuku: three roles across 9 days',
            caption: 'The internal deck that sold the transformation: same pipeline, AI editors in the loop.',
          },
        ],
      },
      {
        type: 'custom',
        node: (
          <div className="flex flex-wrap gap-3">
            {TOOLKIT.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-neobrutalism-black text-white font-bold border-3 border-neobrutalism-black shadow-neobrutalism-sm"
              >
                {t}
              </span>
            ))}
          </div>
        ),
      },
    ],
  },

  { type: 'heading', text: 'New formats, same engine', kicker: 'Comics · Motion · Web series' },
  {
    type: 'custom',
    node: (
      <div className="max-w-5xl">
        <p className="text-xl sm:text-2xl leading-relaxed font-medium">
          Once the pipelines existed, they started inventing shelf space. AI-generated comics and 3D audio
          promos lifted listener engagement 17% in episodic series, and the comic-generation bots meant a
          whole chapter could ship in a day, characters consistent, panels on model. StudyGod below is an
          actual micro drama adapted into comics. Read them right here: they scroll with the page, or grab
          one and read the chapter.
        </p>
      </div>
    ),
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComicScroller
          src={IMG('strip-awakening-1.jpg')}
          sticker="Awakening · Ch 1"
          alt="AI comic Awakening, chapter one: a storm over Eldoria and a tavern heroine whose ordinary night is about to end"
        />
        <ComicScroller
          src={IMG('strip-awakening-2.jpg')}
          sticker="Awakening · Ch 2"
          alt="AI comic Awakening, chapter two: the heroine flees into the night forest and finds the glowing standing stone"
        />
        <ComicScroller
          src={IMG('strip-studygod.jpg')}
          sticker="StudyGod · micro drama"
          alt="AI comic StudyGod, adapted from the micro drama: a disciple sent by his master to face the serpent god"
        />
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: IMG('motion-01.mp4'), sticker: 'Motion posters', alt: 'Motion poster: a wedding couple with a moving photo frame' },
      { src: IMG('motion-02.mp4'), alt: 'Motion poster: Jeene Laga Hoon with embers drifting across the frame' },
    ],
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          The push channel got the same art direction as the storefront. Notification creatives stopped
          being cropped afterthoughts and became the sharpest frame of the show: one image, one title, one
          reason to tap.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          Motion posters run the loop in three seconds. A still frame becomes a living one, embers drift,
          a photo frame comes alive, and the feed stops scrolling.
        </p>
      </div>
    ),
  },
  {
    type: 'gallery',
    aspect: 'natural',
    cols: 2,
    images: [
      { src: IMG('nt-01.jpg'), sticker: 'Push creative', alt: 'Notification creative: Aryan Ki Alien, a couple in a purple sci-fi glow' },
      { src: IMG('nt-02.jpg'), alt: 'Notification creative: Mafia God, a don walking from a police jeep' },
      { src: IMG('nt-03.jpg'), alt: 'Notification creative: Lav-Kush, two young archers in an epic frame' },
      { src: IMG('nt-04.jpg'), alt: 'Notification creative: Roohi Ya Roohani, a woman between two timelines' },
    ],
  },

  {
    type: 'section',
    bg: 'black',
    blocks: [
      { type: 'heading', text: 'Front page of the AI story', kicker: 'Mint · Long Story · April 2025' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 w-14 h-14 bg-neobrutalism-pink border-3 border-neobrutalism-black rotate-12"
              />
              <figure className="relative p-8 sm:p-10 bg-neobrutalism-white border-5 border-neobrutalism-black shadow-neobrutalism-xl -rotate-1">
                <blockquote className="text-2xl sm:text-3xl font-black leading-snug text-neobrutalism-black">
                  &ldquo;We understand some nuances of how we should prompt.&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-bold text-neobrutalism-black">
                  Quoted in Mint&rsquo;s &ldquo;How audio streamers are harnessing AI&rdquo;, on keeping
                  hallucination out of production
                </figcaption>
              </figure>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Mint&rsquo;s Long Story looked at how India&rsquo;s audio platforms were rebuilding
              themselves around AI, and Kuku FM&rsquo;s production line sat at the centre of the piece.
              The numbers it reports are the pipelines on this page at company scale: a catalogue now
              100% AI-assisted but human-crafted, and monthly output up from 50,000&ndash;60,000 minutes
              of stories to more than 150,000.
            </p>
          </div>
        ),
      },
      {
        type: 'stats',
        items: [
          { value: '150k+', label: 'Minutes of stories a month, up from 50-60k' },
          { value: '₹20k', label: 'Cost per content hour, down from ₹50k' },
          { value: '2 wks', label: 'For 10 new titles, down from 60 days' },
          { value: '4.2M', label: 'Paying subscribers on the platform' },
        ],
      },
      {
        type: 'custom',
        node: (
          <p className="text-sm font-bold uppercase tracking-wide text-white/70">
            Company figures as reported in Mint, 8 April 2025
          </p>
        ),
      },
    ],
  },

  {
    type: 'section',
    bg: 'pink',
    blocks: [
      { type: 'heading', text: 'Outcome', kicker: 'What it added up to' },
      {
        type: 'stats',
        items: [
          { value: '900%', label: 'Daily asset output: 2 → 20' },
          { value: '10x', label: 'Creative throughput from GPT bots' },
          { value: '92%', label: 'Production time cut: 5 days → 4 hours' },
          { value: '+28%', label: 'Brand recall, year on year' },
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
                <blockquote className="text-2xl sm:text-3xl font-black leading-snug text-neobrutalism-pink">
                  &ldquo;AI is the production line. Taste is the product.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-white font-bold">The Kuku FM years, in one sentence</figcaption>
              </figure>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              The job was never to replace the designers. It was to move them one seat up: from making
              every asset to directing an engine that makes twenty a day, in ten languages, on brand, and
              measurably better at getting clicked.
            </p>
          </div>
        ),
      },
    ],
  },

  {
    type: 'cta',
    links: [
      { label: 'Watch the AI showreel', href: SHOWREEL, variant: 'primary' },
      { label: 'Read the Mint feature', href: MINT, variant: 'secondary' },
      { label: 'Browse the full archive', href: DRIVE, variant: 'outline' },
      { label: '← Back to portfolio', href: '/', variant: 'outline' },
    ],
  },
];

export default function KukuFMPage() {
  return (
    <CaseStudyTemplate
      accent="pink"
      heroTicker={['Thumbnail engine', 'Micro dramas', 'Ad engine', 'GPT bots', 'AI comics', 'Motion posters', '10 languages']}
      eyebrow="Company page · Kuku FM"
      title="Kuku FM"
      summary="Head of Design and AI Product Manager at India's microdrama & audio-series giant. Led a 20-member design team across four verticals, built the GPT and image-gen pipelines that took thumbnails from 4 hours to 12 minutes, and shipped the AI transformation that Mint put on its front page."
      facts={[
        { label: 'Company', value: 'Kuku FM · Bengaluru' },
        { label: 'Role', value: 'Head of Design · AI Product Manager' },
        { label: 'Team', value: '20-member multidisciplinary design team' },
        { label: 'Scope', value: 'Marketing · Content · App · Retention' },
      ]}
      blocks={BLOCKS}
    />
  );
}
