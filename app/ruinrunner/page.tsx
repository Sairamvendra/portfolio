import { CaseStudyTemplate, type Block } from '@/components/case-study/CaseStudyTemplate';
import { ArcadeStats } from '@/components/case-study/ArcadeStats';
import { BiomeVelocity } from '@/components/case-study/BiomeVelocity';
import { EnemyRoster } from '@/components/case-study/EnemyRoster';
import { FuzzyTitle } from '@/components/case-study/FuzzyTitle';
import { HangarFlyby } from '@/components/case-study/HangarFlyby';
import { LiveLeaderboard } from '@/components/case-study/LiveLeaderboard';
import { DevLog } from '@/components/case-study/DevLog';
import { FlightPlanAnimatic } from '@/components/case-study/FlightPlanAnimatic';
import { RunLoopAnimatic } from '@/components/case-study/RunLoopAnimatic';
import { SaltDealAnimatic } from '@/components/case-study/SaltDealAnimatic';
import MorphSlider from '@/components/reactbits/MorphSlider';
import { VoidWall } from '@/components/case-study/VoidWall';
import AccordionGallery from '@/components/reactbits/AccordionGallery';
import { TiltShineCard } from '@/components/ui/ProfileTiltCard';
import { HoverCarViewer } from '@/components/case-study/HoverCarViewer';

export const metadata = {
  title: 'Ruin Runner | Sairam Vendra',
  description:
    'A browser-native 3D endless arcade flyer: eleven procedurally dealt ruined worlds, a boulder-hurling devil, deep-space runs under real NASA skies, and a global leaderboard, built solo with an AI pair-programming workflow in 14 days, on infrastructure that costs nothing.',
  openGraph: {
    images: ['/projects/ruinrunner.jpg'],
  },
};

const ASSET = (name: string) => `/projects/ruinrunner/${name}`;

const BIOMES = [
  'Ruin City',
  'Crash Desert',
  'Deep Forest',
  'Lost Temple',
  'Slot Canyon',
  'Volcanic Caldera',
  'Titan Boneyard',
  'Sunken City',
  'Sky Shards',
  'Sacred Peaks',
  'Elder Grove',
];

const SHIPS = [
  {
    img: ASSET('objects/enemy-saucer.png'),
    name: 'Armoured Saucer',
    tier: 'Threat I',
    blurb: 'Slow, shielded, and everywhere. The first rung of the ladder: it soaks a full cannon burst before it pops.',
  },
  {
    img: ASSET('objects/enemy-dart.png'),
    name: 'Strike Dart',
    tier: 'Threat II',
    blurb: 'Fast flanker with lead-prediction fire. If it shoots, it shot at where you were about to be.',
  },
  {
    img: ASSET('objects/enemy-gunship.png'),
    name: 'Fortress Gunship',
    tier: 'Threat III',
    blurb: 'A flying wall of turrets. Outrun it or thread under it. You do not duel it.',
  },
  {
    img: ASSET('objects/enemy-drone.png'),
    name: 'Socketed Drone',
    tier: 'Threat IV',
    blurb: 'The late-wave swarm unit. Socketed guns, no self-preservation, arrives in numbers.',
  },
];

const BOSS = {
  img: ASSET('objects/devil.png'),
  name: 'The Devil',
  tier: 'Boss',
  blurb:
    'A morph-target boss who stalks every biome on a timer, eyes tinted to the world he hunts you in. Boulder-hurling, fluidly animated, impossible to miss on the minimap.',
};

const HANGAR = [
  { img: ASSET('objects/hover-car.png'), name: 'RR-09 Hull' },
  { img: ASSET('objects/enemy-saucer.png'), name: 'Armoured Saucer' },
  { img: ASSET('objects/tree-giant.png'), name: 'Giant Spruce' },
  { img: ASSET('objects/skull.png'), name: 'Titan Skull' },
  { img: ASSET('objects/enemy-dart.png'), name: 'Strike Dart' },
  { img: ASSET('objects/statue-drowned-goddess.png'), name: 'Drowned Goddess' },
  { img: ASSET('objects/bird-downstroke.png'), name: 'Bird · Downstroke' },
  { img: ASSET('objects/enemy-gunship.png'), name: 'Fortress Gunship' },
  { img: ASSET('objects/tree-a.png'), name: 'Forest Kit A' },
  { img: ASSET('objects/asteroid-bennu.png'), name: 'Bennu · NASA' },
  { img: ASSET('objects/devil.png'), name: 'The Devil' },
  { img: ASSET('objects/tree-grove.png'), name: 'Elder Grove' },
  { img: ASSET('objects/enemy-drone.png'), name: 'Socketed Drone' },
  { img: ASSET('objects/bush.png'), name: 'Scrub Bush' },
  { img: ASSET('objects/bird-upstroke.png'), name: 'Bird · Upstroke' },
  { img: ASSET('objects/debris-rock.png'), name: 'Debris' },
  { img: ASSET('objects/tree-b.png'), name: 'Forest Kit B' },
];

const SKIES = [
  { src: ASSET('skies/u2.jpg'), alt: 'Orion Nebula portal sky', sticker: 'Orion Nebula · Hubble' },
  { src: ASSET('skies/u4.jpg'), alt: 'Pillars of Creation portal sky', sticker: 'Pillars of Creation' },
  { src: ASSET('skies/u7.jpg'), alt: 'Cosmic Cliffs portal sky', sticker: 'Cosmic Cliffs · Webb' },
  { src: ASSET('skies/u1.jpg'), alt: 'Crab Nebula portal sky', sticker: 'Crab Nebula · Chandra' },
  { src: ASSET('skies/u5.jpg'), alt: 'Lagoon Nebula portal sky', sticker: 'Lagoon Nebula' },
  { src: ASSET('skies/u0.jpg'), alt: 'Heart and Soul Nebulae portal sky', sticker: 'Heart & Soul · WISE' },
  { src: ASSET('skies/u6.jpg'), alt: 'Andromeda galaxy in ultraviolet portal sky', sticker: 'Andromeda UV · GALEX' },
  { src: ASSET('skies/u3.jpg'), alt: 'Hubble Ultra Deep Field portal sky', sticker: 'Ultra Deep Field' },
  { src: ASSET('skies/u8.jpg'), alt: 'Gaia all-sky Milky Way portal sky', sticker: 'Milky Way · Gaia' },
];

/* ---------- page-only pieces ---------- */

function PromoPlayer() {
  return (
    <div className="relative w-full">
      <div className="h-0">
        <div className="relative z-10 w-fit -rotate-3 -translate-y-4 -translate-x-4 px-4 py-1.5 bg-neobrutalism-yellow border-3 border-neobrutalism-black shadow-neobrutalism-sm">
          <span className="font-black uppercase tracking-widest whitespace-nowrap text-neobrutalism-black text-sm">
            Live game · the promo
          </span>
        </div>
      </div>
      <div aria-hidden="true" className="absolute -bottom-3 -right-3 w-10 h-10 bg-neobrutalism-black rotate-12" />
      <figure className="relative border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-white">
        <iframe
          src="https://www.youtube.com/embed/afsxkXkfUPE?autoplay=1&mute=1&playsinline=1&vq=hd1080"
          title="Ruin Runner promotional trailer"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video block border-0 bg-neobrutalism-black"
        />
        <figcaption className="w-0 min-w-full border-t-3 border-neobrutalism-black px-4 py-3 text-sm font-bold bg-neobrutalism-white">
          30 seconds of raw gameplay, cut into a trailer. Sound on. 🔊
        </figcaption>
      </figure>
    </div>
  );
}

/* ---------- blocks ---------- */

const blocks: Block[] = [
  { type: 'custom', node: <PromoPlayer /> },
  {
    type: 'custom',
    node: (
      <ArcadeStats
        items={[
          { to: 11, label: 'Biomes' },
          { to: 14, label: 'Days to v1' },
          { to: 72, label: 'Commits, solo' },
          { to: 0, prefix: '~$', label: 'Monthly infra' },
        ]}
      />
    ),
  },

  {
    type: 'custom',
    node: (
      // Heading, copy, and CTAs fill the left column; the animatic stretches to
      // match their height exactly (same treatment as the asset pipeline).
      <div className="grid lg:grid-cols-[1fr_minmax(320px,420px)] gap-10 lg:gap-14 items-stretch">
        <div className="flex flex-col h-full">
          <div className="relative w-fit">
            <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black whitespace-nowrap">
                One core loop, deep variety around it
              </p>
            </div>
            <div className="block w-fit px-6 py-3 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-yellow">What it is</h2>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 space-y-5">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              You fly a hover-car at ever-increasing speed through an infinite world. Everything else exists to
              make the next thirty seconds different from the last: the world deals a fresh map every run,
              hostile waves escalate on a threat ladder, a boulder-hurling giant wakes on a timer, and portals
              lead to deep-space runs under real NASA skies.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-bold">
              Zero build step, zero engine license: the whole game is two files, served static. It ships by git
              push and runs on a phone, a laptop, or a gamepad from one link.
            </p>
          </div>
          <div className="mt-8 lg:mt-auto lg:pt-8 flex flex-wrap gap-4">
            <a href="https://ruin-runner.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Play Ruin Runner
            </a>
          </div>
        </div>
        <RunLoopAnimatic />
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'yellow',
    blocks: [
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <div className="relative w-fit">
                <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
                  <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black whitespace-nowrap">
                    The world
                  </p>
                </div>
                <div className="block w-fit px-6 py-3 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-yellow">
                    A new ruin every run
                  </h2>
                </div>
              </div>
              <p className="mt-8 sm:mt-10 text-lg sm:text-xl leading-relaxed font-medium">
                Eleven procedural biomes, infinite in every direction, and the entire map derives from one
                hashed salt, re-rolled with a random starting biome every run. Deterministic worldgen is also
                the growth engine hiding in the codebase: pin the salt to the calendar date and everyone flies
                the same world on the same leaderboard. Seeded, shareable worlds are a near-free future feature.
              </p>
            </div>
            <SaltDealAnimatic />
          </div>
        ),
      },
    ],
  },
  { type: 'custom', node: <BiomeVelocity biomes={BIOMES} /> },
  {
    type: 'custom',
    node: (
      <AccordionGallery
        items={[
          { image: ASSET('shots/flight-peaks.jpg'), label: 'Sacred Peaks', alt: 'Daytime flight through snowy peaks, saucer in pursuit' },
          { image: ASSET('shots/dusk-skyline.jpg'), label: 'Ruin City', alt: 'Gliding between broken towers under a pink dusk skyline' },
          { image: ASSET('shots/canyon-chase.jpg'), label: 'Slot Canyon', alt: 'Threading a narrow canyon as a saucer closes in' },
          { image: ASSET('shots/flight-caldera.jpg'), label: 'Volcanic Caldera', alt: 'Flying over glowing lava vents in haze' },
          { image: ASSET('shots/forest-portal.jpg'), label: 'Deep Forest', alt: 'A purple portal glowing between low-poly trees' },
          { image: ASSET('shots/flight-boneyard.jpg'), label: 'Titan Boneyard', alt: 'Flying over giant ribcages with a portal ahead' },
          { image: ASSET('shots/sky-isles.jpg'), label: 'Floating Isles', alt: 'Hopping between floating grass islands above the clouds' },
          { image: ASSET('shots/void-nebula.jpg'), label: 'The Void', alt: 'Deep-space run through a star-dense NASA nebula' },
        ]}
        defaultIndex={2}
        expandRatio={0.52}
        trigger="hover"
        height={520}
        autoAdvanceInterval={8}
      />
    ),
  },

  { type: 'heading', text: 'Know your enemy', kicker: 'The threat ladder' },
  {
    type: 'text',
    body: 'Four ship classes on an escalating threat-tier ladder, each with lead-prediction fire, and a fifth hostile who is not on the ladder. He is on a timer.',
  },
  { type: 'custom', node: <EnemyRoster ships={SHIPS} boss={BOSS} /> },

  { type: 'ticker', words: ['cannon', 'shield', 'score ×2', 'magnet field', 'hearts', 'warp crystal', 'near-miss bonus', 'combo chain'] },

  {
    type: 'section',
    bg: 'black',
    blocks: [
      {
        type: 'custom',
        node: (
          // Heading and intro share one row so the band's full width is used
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
            <div className="relative w-fit">
              <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
                <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black whitespace-nowrap">
                  Portals to deep space
                </p>
              </div>
              <div className="block w-fit px-6 py-3 bg-neobrutalism-yellow border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-black whitespace-nowrap">
                  The void
                </h2>
              </div>
            </div>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Portals open onto deep-space runs under nine photographic NASA skies, with see-through previews, a
              void-only warp crystal, five seconds of shielded hyperburn behind a chromatic-aberration lens,
              and pursuing ships that physically fall away when outrun.
            </p>
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          // full-bleed wall: the closest-side vignette scales with the box, so the
          // side fades land on the viewport edges at any size
          <div className="relative left-1/2 -translate-x-1/2 w-screen h-[55vh] min-h-[440px] max-h-[680px]">
            <VoidWall items={[...SKIES, ...SKIES].map(s => ({ image: s.src, title: s.sticker }))} />
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <p className="text-center text-sm font-bold text-white/50 max-w-4xl mx-auto">
            Imagery: NASA (WISE, Spitzer, Chandra, GALEX, public domain) and ESA/Hubble · ESA/Webb (CC BY 4.0).
            The base starfield stitches ESA Gaia’s all-sky map.
          </p>
        ),
      },
    ],
  },

  {
    type: 'custom',
    node: (
      // Heading, copy, and image in one grid: the frame's top edge sits level
      // with the heading and its bottom edge lands on the last text line.
      <div className="grid lg:grid-cols-[1fr_minmax(300px,360px)] gap-10 lg:gap-14 items-stretch">
        <div>
          <div className="relative w-fit">
            <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black whitespace-nowrap">
                Blender → JSON → instanced meshes
              </p>
            </div>
            <div className="block w-fit px-6 py-3 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-yellow">
                THE ASSET PIPELINE
              </h2>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 space-y-5 max-w-3xl">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Blender kits scripted in Python → vertex-colored JSON → instanced meshes, so a biome full of props
              costs a handful of draw calls. NASA’s public-domain models fly too: asteroid Bennu tumbles past in
              the desert, and a derelict Voyager probe is worth a flyby bonus.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Physics is Rapier WASM (the game degrades gracefully without it), and the music and SFX are
              synthesized procedurally in the browser. There is not a single audio file in the repo.
            </p>
          </div>
        </div>
        <div>
          <div className="h-0 relative z-10">
            <div className="w-fit -rotate-3 -translate-y-4 -translate-x-4 px-4 py-1.5 bg-neobrutalism-yellow border-3 border-neobrutalism-black shadow-neobrutalism-sm">
              <span className="font-black uppercase tracking-widest text-sm text-neobrutalism-black">Vertex-colored</span>
            </div>
          </div>
          <figure className="relative h-full flex flex-col border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-white">
            <div className="relative flex-1 min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSET('objects/statue-torso.png')}
                alt="The drowned goddess statue, vertex-colored low-poly render"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            <figcaption className="border-t-3 border-neobrutalism-black px-4 py-3 text-sm font-bold">
              The drowned goddess: scripted in Python, baked to JSON, instanced in Three.js.
            </figcaption>
          </figure>
        </div>
      </div>
    ),
  },
  { type: 'custom', node: <HangarFlyby items={HANGAR} /> },

  { type: 'heading', text: 'Development log', kicker: '72 commits, August 6–19' },
  {
    type: 'text',
    body: 'The compressed story, and the story is part of the pitch: one developer, an AI pair, fourteen days.',
  },
  { type: 'custom', node: <DevLog /> },
  {
    type: 'custom',
    node: (
      // the template quote caps at max-w-4xl; this one spans the row (page feedback: use the space fully)
      <div className="relative w-full">
        <div
          aria-hidden="true"
          className="absolute -top-4 -right-4 w-14 h-14 bg-neobrutalism-yellow border-3 border-neobrutalism-black rotate-12"
        />
        <figure className="relative p-8 sm:p-10 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-xl -rotate-1">
          <blockquote className="text-2xl sm:text-3xl font-black leading-snug text-neobrutalism-yellow">
            &ldquo;The velocity is the demo. Every system, from procedural worldgen and physics to enemy AI, audio
            synthesis, and the live-ops-ready leaderboard, was designed, shipped, and play-tested by one person
            orchestrating AI agents, on infrastructure that costs nothing.&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-white font-bold">Sairam Vendra · pilot in command</figcaption>
        </figure>
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'black',
    blocks: [
      {
        type: 'custom',
        node: (
          // title and copy share one full-width row instead of stacking in the left corner
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
            <div>
              <div className="inline-block px-3 py-1.5 mb-4 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
                <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black">Incident report</p>
              </div>
              <FuzzyTitle text="WRECKED" color="#FF4911" />
            </div>
            <p className="text-lg sm:text-xl leading-relaxed font-medium max-w-3xl">
              Death comes fast and always feels like your fault: the classic arcade contract. The death screen is an
              incident report in the game’s flight-deck design language: score, distance, and one button that matters.
            </p>
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          // one incident report at a time, auto-melting into the next
          <div className="relative h-[420px] sm:h-[540px] border-3 border-neobrutalism-black shadow-neobrutalism-lg">
            <MorphSlider
              items={[
                { image: ASSET('shots/wrecked-forest.jpg'), caption: 'Deep Forest · 2.6 km' },
                { image: ASSET('shots/wrecked-boneyard.jpg'), caption: 'Titan Boneyard' },
              ]}
              transition="melt"
              intensity={0.55}
              aberration={0.35}
              drift={0.4}
              autoplay
              autoplayDelay={4.5}
              showControls={false}
            />
          </div>
        ),
      },
    ],
  },

  { type: 'heading', text: 'The board to beat', kicker: 'Live from the game' },
  { type: 'custom', node: <LiveLeaderboard /> },

  {
    type: 'custom',
    node: (
      // Heading, list, and animatic in one grid: the card's top edge sits level
      // with the heading and its bottom edge lands on the last list line.
      <div className="grid lg:grid-cols-[1fr_minmax(320px,420px)] gap-10 lg:gap-14 items-stretch">
        <div>
          <div className="relative w-fit">
            <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black whitespace-nowrap">
                Engagement & virality, four phases
              </p>
            </div>
            <div className="block w-fit px-6 py-3 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-yellow">
                Flight plan
              </h2>
            </div>
          </div>
          <ul className="mt-8 sm:mt-10 space-y-4">
          {[
            'P1 · Instruments: see what players actually do: anonymous gameplay telemetry, real run reports, a balance dashboard.',
            'P2 · Return flights: a reason to come back tomorrow: the daily world on one shared salt, missions earning pilot wings, streaks, hull liveries.',
            'P3 · Wingmen: players recruiting players: “fly my world” challenge links, incident-report death cards, ghost runs.',
            'P4 · New airspace: distribution: Google Play via TWA (parked at the Bubblewrap step) and web-game portals like Poki and CrazyGames.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-1.5 w-4 h-4 shrink-0 rotate-45 border-3 border-neobrutalism-black bg-neobrutalism-yellow"
              />
              <span className="text-lg sm:text-xl font-medium leading-relaxed">{item}</span>
            </li>
          ))}
          </ul>
        </div>
        <FlightPlanAnimatic />
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'yellow',
    blocks: [
      { type: 'heading', text: 'The one-slide version', kicker: 'Closing' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              A polished 3D arcade game with eleven worlds, a boss, deep-space runs, and a global leaderboard,
              live at a URL, playable in one tap, built by one person with AI agents in fourteen days, running on
              infrastructure that costs nothing.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-bold">
              The engine underneath, deterministic seeded worlds plus zero-friction web distribution, is
              precisely the shape of a viral daily game: same world for everyone, one link to challenge a friend,
              no install wall in the loop.
            </p>
          </div>
        ),
      },
      {
        type: 'stats',
        items: [
          { value: '6.9k', label: 'Lines · 2 files' },
          { value: '4+1', label: 'Enemy types + boss' },
          { value: '9', label: 'Photographic NASA skies' },
          { value: 'Top 100', label: 'Live global leaderboard' },
        ],
      },
    ],
  },

  {
    type: 'custom',
    node: (
      <div>
        <div className="relative border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-black p-8 sm:p-12 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 w-28 h-28 bg-neobrutalism-yellow rotate-12 border-3 border-neobrutalism-black"
          />
          <div
            aria-hidden="true"
            className="absolute -left-6 -bottom-6 w-20 h-20 bg-neobrutalism-yellow -rotate-6 border-3 border-neobrutalism-black"
          />
          <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-xs font-black uppercase tracking-widest text-white/60">Boarding now · RR-09</p>
              <h2 className="mt-2 text-4xl sm:text-6xl font-black uppercase leading-none text-neobrutalism-yellow">
                Ready to fly?
              </h2>
              <p className="mt-4 text-lg sm:text-xl font-bold text-white">
                One link. No install. The dead city is waiting.
              </p>
            </div>
            <div className="flex flex-col items-center gap-6 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ASSET('objects/hover-car.png')}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-24 sm:h-32 w-auto -rotate-6 drop-shadow-[8px_10px_0_rgba(255,215,0,0.35)]"
              />
              <a
                href="https://ruin-runner.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg sm:text-xl px-10 py-4"
              >
                ▶ Play Ruin Runner
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <a href="/" className="btn-outline">← Back to portfolio</a>
        </div>
      </div>
    ),
  },
];

export default function RuinRunnerPage() {
  return (
    <CaseStudyTemplate
      accent="yellow"
      eyebrow="3D game · Solo build"
      title="RUIN RUNNER"
      summary="A browser-native 3D endless arcade flyer: pilot the last hover-car through eleven procedurally dealt ruined worlds, outrun hostile waves, and chase a global leaderboard. Built solo in under 14 days!"
      facts={[
        { label: 'Role', value: 'Solo: product, code, 3D, audio' },
        { label: 'Timeline', value: 'Aug 6–19, 2026 · 14 days' },
        { label: 'Status', value: 'v1 · playable · deployed' },
        { label: 'Stack', value: 'Three.js · Rapier WASM' },
      ]}
      heroExtra={
        <div className="relative w-full max-w-sm justify-self-center rotate-1">
        <TiltShineCard className="border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-black p-8">
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-6 w-20 h-20 bg-neobrutalism-yellow rotate-12 border-3 border-neobrutalism-black"
          />
          <div
            aria-hidden="true"
            className="absolute -left-5 -bottom-5 w-14 h-14 bg-neobrutalism-yellow -rotate-6 border-3 border-neobrutalism-black"
          />
          <div className="relative flex flex-col items-center text-center gap-4">
            <p className="text-xs font-black uppercase tracking-widest text-white/60">Boarding now · RR-09</p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-none text-neobrutalism-yellow">
              Ready to fly?
            </h2>
            <div className="w-full">
              <HoverCarViewer />
            </div>
            <p className="text-base font-bold text-white">
              One link. No install. The dead city is waiting.
            </p>
            <a
              href="https://ruin-runner.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base sm:text-lg px-8 py-3"
            >
              ▶ Play Ruin Runner
            </a>
          </div>
        </TiltShineCard>
        </div>
      }
      heroTicker={[
        '11 procedural biomes',
        '9 real NASA skies',
        '4 ship classes + one devil',
        'global top-100 leaderboard',
        'one link · no install',
        '14 days · 72 commits',
      ]}
      blocks={blocks}
    />
  );
}
