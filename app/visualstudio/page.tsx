import type { ReactNode } from 'react';
import { CaseStudyTemplate, FramedImage, type Block } from '@/components/case-study/CaseStudyTemplate';
import { FeatureTabs } from '@/components/case-study/FeatureTabs';
import { SceneBuilderViewer } from '@/components/case-study/SceneBuilderViewer';
import { GhostsInNumbers } from '@/components/case-study/GhostsInNumbers';
import { HardProblemsSlider } from '@/components/case-study/HardProblemsSlider';

export const metadata = {
  title: 'Visual Studio Pro | Sairam Vendra',
  description:
    'A full AI creative studio in the browser: one canvas that speaks to 16 image models, a cinematography brain that turns camera gear into prompt language, and a reel factory that turns a topic, a script, a voice note, or raw phone footage into an edited, captioned, music-backed vertical video, plus the Premiere project to keep cutting it.',
};

const ASSET = (name: string) => `/projects/visualstudio/${name}`;

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

/* Tab pane: prose beside a real app screenshot; "the math" callout spans full width below */
function Pane({
  children,
  math,
  img,
}: {
  children: ReactNode;
  math?: string;
  img?: { src: string; alt: string; sticker?: string; caption?: string };
}) {
  const mathBox = math && (
    <div className="mt-6 p-4 bg-neobrutalism-yellow border-3 border-neobrutalism-black shadow-neobrutalism-sm">
      <p className="text-xs font-black uppercase tracking-widest mb-1">The math</p>
      <p className="font-bold leading-relaxed">{math}</p>
    </div>
  );
  if (!img) {
    return (
      <div>
        <div className="space-y-4 max-w-4xl">{children}</div>
        {mathBox}
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
        <div className="space-y-4">{children}</div>
        <FramedImage {...img} accent="cyan" />
      </div>
      {mathBox}
    </div>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-base sm:text-lg leading-relaxed font-medium">{children}</p>;
}

const MODULES = [
  {
    name: 'The Studio',
    chip: 'bg-neobrutalism-yellow',
    body: 'The generation canvas. Sixteen image models behind one prompt box, each with its exact native settings panel. Reference images addressable inline as @mention chips, annotate-to-edit, layer decomposition, relighting, a thumbnail and key-art studio, a multi-ratio banner factory, storyboards, frontier video models, and a cinematography panel that compiles real camera gear into prompt language.',
  },
  {
    name: 'Reel Flow',
    chip: 'bg-neobrutalism-cyan',
    body: 'The video factory. Four ways in: a topic, a script, your voice note, or your raw phone footage. Four cost tiers, a director-trained planner, per-shot medium mixing, three TTS engines in 87 languages, music generation, word-level caption sync, an NLE-grade export timeline, serverless ffmpeg export, and a Premiere Pro handoff verified in Premiere 2026.',
  },
  {
    name: 'Projects',
    chip: 'bg-neobrutalism-purple',
    body: 'The backbone. Every generation from every module is captured at the prediction poll and lands in an R2-backed gallery with its full settings snapshot: reuse the prompt, reuse the image, reuse the exact studio settings, or resume the draft on another device. Auth, per-user daily quotas, an admin dashboard, and block-on-abuse.',
  },
];

const REEL_SOURCES = [
  {
    n: '01',
    title: 'Topic',
    body: 'It writes the script: genre playbooks, hook-first structure, then plans the shoot.',
    color: 'bg-neobrutalism-yellow',
  },
  {
    n: '02',
    title: 'Script',
    body: 'Bring your own words; the planner breaks them into talking-head windows and B-roll beats.',
    color: 'bg-neobrutalism-cyan',
  },
  {
    n: '03',
    title: 'Your audio',
    body: 'Upload or record a voice note. The planner listens to the actual audio, matching presenter gender to your voice and cutting on your emotional beats, while Scribe aligns every word.',
    color: 'bg-neobrutalism-purple',
  },
  {
    n: '04',
    title: 'Your video',
    body: 'Upload raw phone footage. It reframes to 9:16, auto-detects silences, filler words, and repeated takes into reviewable trims, then plans B-roll over your own footage.',
    color: 'bg-neobrutalism-lime',
  },
];

const TIMELINE = [
  { period: 'Dec 2025', commits: '26', shipped: 'The seed: video playground + Replicate proxy, dark UI, Smart Banners, cinema camera module, first reel stitch' },
  { period: 'Jan 2026', commits: '63', shipped: 'CinemaScope in and out, Story-PDF, Seedream 4.5, spec-driven infra hardening: env, CORS, upload validation, Vercel' },
  { period: 'Feb 2026', commits: '10', shipped: 'Async create+poll everywhere, client-side compression, thumbnail style system v1' },
  { period: 'Mar–Apr 2026', commits: '13', shipped: 'Model refresh: Qwen 2 Pro, Nano Banana 2, Gemini 3.1 Pro architect, new video lineup' },
  { period: 'May 2026', commits: '38', shipped: '@mention reference chips (TDD), model-aware prompt composer, Flux Klein family, security pass' },
  { period: 'Jun 2026', commits: '4', shipped: 'SeeDance 2.0 + Mini, dead-model cleanup' },
  { period: 'Jul 2026', commits: '150', shipped: 'The explosion: Reel Flow end to end, Remotion Studio tier, R2 + Supabase migration, auth/quotas/admin, precision-edit annotation, Qwen layers, Key-art Director, two full audits' },
];

/* ---------------------- the Studio feature explorer ---------------------- */

const STUDIO_TABS = [
  {
    id: 'models',
    label: '16 Models',
    content: (
      <Pane
        img={{
          src: ASSET('app-canvas.jpg'),
          alt: 'The Studio canvas with the model selector, native settings rail, and 3D orbit camera controls',
          sticker: 'The canvas',
          caption: 'One prompt box, a per-model native settings rail, and the camera controls beside it.',
        }}
        math="Typical marginal cost: $0.02–0.25 per image depending on model and resolution. A 10-variant exploration across 3 model families runs under $2 and about 5 minutes, against a day of a designer's exploratory comps."
      >
        <P>
          One generation surface wired to sixteen image models: the Nano Banana, Flux, Qwen, Seedream, GPT
          Image, Grok, and Hunyuan families. Each model gets its exact native schema: its own settings panel,
          its own aspect-ratio list (22 ratios including 9:21 vertical ultrawide and Auto), resolutions to 4K,
          seeds, safety toggles, output formats.
        </P>
        <P>
          The invisible hard part is the prompt composer. Models speak different dialects: instruction-following
          models want conversational direction, diffusion models want tag-style prompts with negatives,
          LLM-profile models want narrative scene description. A per-model prompt profile compiles one intent
          into each dialect, decides where negative prompts go, and coerces illegal aspect ratios on model
          switch, a live bug class that got its own fix pass.
        </P>
        <P>
          Up to ten reference images ride along as @mention chips, addressable inline in the prompt, and the
          Prompt Architect chat co-writes prompts that survive the LLM round-trip with mentions intact. Auto
          ratio adopts the first reference&rsquo;s dimensions.
        </P>
      </Pane>
    ),
  },
  {
    id: 'architect',
    label: 'Architect',
    content: (
      <Pane
        img={{
          src: ASSET('app-architect.jpg'),
          alt: 'The Prompt Architect chat turning a one-line lighthouse brief into a structured SCENE/SHOT/SUBJECT prompt, handed off into the Final Prompt box',
          sticker: 'Co-writer',
          caption: 'One sentence in, a structured cinematic prompt out, handed off to the Final Prompt box with one click.',
        }}
      >
        <P>
          The Prompt Architect is a chat co-writer that sits beside the canvas. Describe the idea in a
          sentence, &ldquo;a lighthouse keeper&rsquo;s last night before the light is automated&rdquo;, and it
          returns a structured cinematic prompt: scene, shot grammar, subject detail, framing, lens, depth of
          field. One click hands it off to the Final Prompt box, ready to generate or keep editing.
        </P>
        <P>
          It is not a separate world from the canvas: @mention reference chips survive the LLM round-trip
          intact, an uploaded storyboard can seed the conversation, and whatever the Architect writes still
          passes through the per-model prompt composer on its way to whichever of the sixteen models is
          selected. Taste in, dialect out.
        </P>
      </Pane>
    ),
  },
  {
    id: 'annotate',
    label: 'Annotate',
    content: (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <P>
            Draw on the image itself: box, lasso, arrow, point, colour swatch, each mark carrying a note like
            &ldquo;remove this cable&rdquo; or &ldquo;make this wall #2E5A87&rdquo;. The marks compile into a
            burned control image plus a precision-edit prompt block, and the model edits exactly what you
            pointed at. It is the client-feedback loop, the product-photo cleanup, the sign-text replacement,
            without the retoucher.
          </P>
          <P>
            One strategy does not fit all models. Instruction models receive the burned annotated image as
            their first input; diffusion models leaked the drawn marks into the output in live tests, so they
            get a clean base plus text-encoded regions instead, hardened by an anti-leak prompt pass with a
            zero-graphics rule. Below, a live round from this exact page: one box, one note, one generation.
          </P>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <FramedImage
            src={ASSET('app-annotate.jpg')}
            alt="Annotation overlay on the dragon scene: a red box drawn around the warrior's sword with the note 'Make the sword blade blaze with orange fire instead of purple'"
            sticker="Point at the problem"
            caption="Mark 1, box tool: 'Make the sword blade blaze with orange fire instead of purple.'"
            accent="cyan"
          />
          <FramedImage
            src={ASSET('app-annotate-result.jpg')}
            alt="The regenerated scene: the sword now blazes with orange fire while the dragon, cave, and warrior stay identical"
            sticker="One generation later"
            caption="The sword burns. The dragon, the cave, and the light never moved, and the marks never leak into the output."
            accent="cyan"
          />
        </div>
        <div className="mt-6 p-4 bg-neobrutalism-yellow border-3 border-neobrutalism-black shadow-neobrutalism-sm">
          <p className="text-xs font-black uppercase tracking-widest mb-1">The math</p>
          <p className="font-bold leading-relaxed">
            A feedback round is one regeneration: seconds and $0.03–0.24, and the round above cost cents. A
            traditional retouch round-trip is $30–120/hr and 1–3 days per round. Five revision rounds on one
            asset: about a dollar, versus $150–600 and a week.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'layers',
    label: 'Layers',
    content: (
      <Pane
        img={{
          src: ASSET('app-layers.jpg'),
          alt: 'The Layer Editor: the warrior, decomposed as a separate RGBA layer, mid-drag across the dragon scene with the transform box active',
          sticker: 'Photoshop files from thin air',
          caption: 'A live session: the warrior is a lifted layer, dragged across the frame with the transform box, dragon plate untouched underneath.',
        }}
        math="Manual masking and separation in Photoshop runs 30–90 minutes per image at retoucher rates. Here it is one generation, $0.02–0.05, and the layers arrive already cut."
      >
        <P>
          Feed any image to Qwen Image Layered and get back 2–8 true RGBA layers, background at index zero:
          Photoshop files from thin air. The built-in Layer Editor gives drag, per-layer scale, z-reorder, and
          rotation with a Photoshop-style transform box and visibility eyes; Apply flattens client-side on a
          canvas and pushes the composite back as a result and an auto-reference for the next generation. In
          the session shown here, the warrior is his own layer, walked across the cave floor to face the
          dragon.
        </P>
        <P>
          Arrangements persist, sessions can be re-edited later, and external images can be imported as layers.
          Use it for subject lift-outs, poster re-composition, swapping backgrounds while keeping the product
          layer, or building banner variants from one hero image. The naive version of this shipped 57.8 MB of
          layer stack on every save; the shrunk-composite pipeline that fixed it is one of the war stories
          below.
        </P>
      </Pane>
    ),
  },
  {
    id: 'relight',
    label: 'Relight',
    content: (
      <Pane
        img={{
          src: ASSET('app-relight.jpg'),
          alt: 'Relight Studio panel with lighting presets, gel palette, and key/rim light fixtures',
          sticker: 'Virtual lighting mixer',
          caption: 'Six presets, a gel palette, and per-fixture key, rim, back, and bounce controls.',
        }}
        math="A reshoot for new lighting is $500–5,000 and days; a compositing artist's relight is hours. Here it is cents and seconds per attempt: try ten light directions for under a dollar."
      >
        <P>
          Change the light, skip the reshoot. Drag a light beam on the preview, aim it with a subject target
          point, and pick from six lighting presets: Three-Point Classic, Rembrandt, Butterfly, Film Noir,
          Golden Hour Backlight, Neon Cyberpunk. A gel palette and individual key, rim, back, and bounce
          fixtures tune the mix before a relight pass re-renders the image.
        </P>
        <P>
          Flux models route through a dedicated relight LoRA, and the whole pipeline is verified with a live
          end-to-end harness that generates real images. Product photography day-to-night, mood changes on
          portraits, matching a composite&rsquo;s light to a new background.
        </P>
      </Pane>
    ),
  },
  {
    id: 'keyart',
    label: 'Key Art',
    content: (
      <Pane
        img={{
          src: ASSET('app-thumbnail.jpg'),
          alt: 'Thumbnail Studio with Logo, Key Art, and Compose tabs and style presets',
          sticker: 'Thumbnail Studio',
          caption: 'Logo, key art, and compose workspaces with style presets and variant runs.',
        }}
        math="A designer thumbnail is $10–50, agency key art $150–1,500 for indie and $5k–50k for studio work. Here a candidate poster is about $0.05–0.30, and a dozen distinct directions cost under $3, in minutes."
      >
        <P>
          A dedicated thumbnail and key-art workspace: text layers, undo/redo, export options, and sixteen
          visual styles, ten tightened thumbnail styles with intensity and colour-punch sliders plus a
          six-style movie-poster family. Every one of the ten thumbnail styles has a live-generated
          end-to-end proof set.
        </P>
        <P>
          The interesting part is the Key-art Art Director: a Claude pre-pass distilled from movie-poster
          craft, with 12 composition archetypes, controlled palettes, a visual-hook library, and a prime
          directive, &ldquo;poster, not film still&rdquo;, that was proven by a live paid A/B against the naive
          prompt path before it shipped. YouTube and OTT thumbnails at volume, film-festival posters, app-store
          tiles, episodic cover families that stay on-brand.
        </P>
      </Pane>
    ),
  },
  {
    id: 'banners',
    label: 'Banners',
    content: (
      <Pane
        img={{
          src: ASSET('app-banners.jpg'),
          alt: 'Smart Banners module with a 13-ratio target grid from landscape to skyscraper',
          sticker: 'The resize matrix',
          caption: 'Thirteen target formats, from 16:9 to leaderboard, billboard, and skyscraper.',
        }}
        math="A designer's 10-ratio adapt set is $150–400 and a day. Here it is about $0.04 per ratio, minutes for the batch, and the refinement loop is natural language."
      >
        <P>
          Upload one hero visual, tick target ratios, 16:9, 9:16, 1:1, 4:3, 21:9, and on through the IAB ad
          formats, and batch-generate intelligently reframed, not cropped, variants. The model recomposes each
          format around the subject instead of slicing pixels off the edges.
        </P>
        <P>
          Every result carries a per-asset &ldquo;Edit with AI&rdquo; refinement loop, and the whole set
          downloads as a ZIP. One hero image becomes a campaign&rsquo;s worth of placements before the
          coffee cools.
        </P>
      </Pane>
    ),
  },
  {
    id: 'gear',
    label: 'Cinema Gear',
    content: (
      <Pane
        img={{
          src: ASSET('app-gear.jpg'),
          alt: 'Studio settings rail with the 3D orbit camera rig, lighting and mood selectors, and the digital intermediate section',
          sticker: 'The DI suite',
          caption: 'The orbit rig, lighting and mood, and the Digital Intermediate pipeline controls.',
        }}
      >
        <P>
          A cinematography panel that speaks gear: camera bodies, lens kits, and 61 named film-stock and DI
          looks across Digital Pipeline, Photochemical Process, and Stock &amp; Effect Emulation, grouped the
          way a real DI suite groups them. Shot angle comes from an interactive 3D orbit camera rig, with a
          roll axis, rather than from typing &ldquo;low angle&rdquo; and hoping.
        </P>
        <P>
          None of it is decoration. Every choice compiles into semantic prompt language, what the look does to
          the image, not just its name, because models do not know what an Alexa 35 is, but they know highlight
          rolloff, halation, and fine grain. The panel gives consistent cinematic grading across a campaign,
          and teaches non-DPs to ask for the right image.
        </P>
      </Pane>
    ),
  },
  {
    id: 'story',
    label: 'Story',
    content: (
      <Pane
        img={{
          src: ASSET('app-story.mp4'),
          alt: 'Story Flow module generating sequential scenes from a storyboard, screen recording',
          sticker: 'Story Flow',
          caption: 'Upload a board, describe the flow, and generate scene-by-scene with continuity.',
        }}
      >
        <P>
          Story mode generates sequential scenes with character persona and image injection, held together by a
          camera-grammar continuity prompt that went through three reviewer-feedback rewrites. A character bank
          feeds every scene, so the same face survives the sequence.
        </P>
        <P>
          Story-PDF turns a pasted script or uploaded file into a cinematic storyboard document. Together they
          cover the pre-production side: block the story here, then carry the frames into generation or into
          Reel Flow as reference material.
        </P>
      </Pane>
    ),
  },
  {
    id: 'video',
    label: 'Video Lab',
    content: (
      <Pane
        img={{
          src: ASSET('app-video.jpg'),
          alt: 'Video Generation panel with start and end frames, cinema camera gear, model selector, and audio toggle',
          sticker: 'Frontier lineup',
          caption: 'Start/end frames, cinema gear carried over, audio generation, negative prompts.',
        }}
      >
        <P>
          The video tab runs the current frontier lineup: Veo 3.1, Kling V3, Wan 2.7, Hailuo 2.3, Luma Ray 2,
          and SeeDance 2.0, behind the same one-canvas discipline as the image models. Optional start and end
          frames anchor the motion, the cinema-gear language carries over from the stills side, and audio
          generation is a toggle.
        </P>
        <P>
          This is also where model curation shows: the lineup has been refreshed three times as the frontier
          moved, and dead models get deleted rather than accumulating. The bar is what earns shelf space today,
          not what was impressive in March.
        </P>
      </Pane>
    ),
  },
];

/* --------------------- the 3D Scene Builder slides --------------------- */

const SCENE_TABS = [
  {
    id: 'build',
    label: 'Build',
    content: (
      <div>
        <P>
          Build your scene with generative 3D, or with traditional tools like Blender. This is the real
          showpiece: the city blockout, exported straight from its .blend and rendered live on this page.
          Drag to orbit, scroll to zoom.
        </P>
        <div className="mt-8 border-3 border-neobrutalism-black shadow-neobrutalism-lg bg-neobrutalism-black">
          <SceneBuilderViewer />
        </div>
      </div>
    ),
  },
  {
    id: 'shot1',
    label: 'Shot 01',
    content: (
      <div className="space-y-12">
        <P>
          Reposition your camera and build your comp. Block the shot in 3D first, then the generative pass
          paints the blocking into a finished frame with the composition intact.
        </P>
        <FramedImage
          src={ASSET('3d-1.webp')}
          sticker="The 3D blocking"
          alt="Low-poly 3D blockout of a city street at eye level, grey towers and simple grass tufts"
          caption="Street-level camera, blocked out in the 3D scene."
          accent="cyan"
        />
        <FramedImage
          src={ASSET('3d-1sc.webp')}
          sticker="The generated frame"
          alt="Generated cinematic frame of the same street: cracked asphalt, overgrown ruined buildings, sunrise haze"
          caption="The same camera after the generative pass: composition intact, world rendered."
          accent="cyan"
        />
      </div>
    ),
  },
  {
    id: 'shot2',
    label: 'Shot 02',
    content: (
      <div className="space-y-12">
        <P>
          An aerial camera straight from the Blender viewport, and four generated looks from that one
          blocking: same towers, same streets, four different moods.
        </P>
        <FramedImage
          src={ASSET('3d-2.webp')}
          sticker="The 3D blocking"
          alt="Blender viewport screenshot: aerial user-perspective view over the low-poly city blockout"
          caption="The working viewport, camera repositioned overhead."
          accent="cyan"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <FramedImage
            src={ASSET('3d-2sc.webp')}
            sticker="Look 01"
            alt="Generated aerial of the ruined city at dusk with scattered fires burning in the streets"
            caption="Dusk, fires still burning."
            accent="cyan"
          />
          <FramedImage
            src={ASSET('3d-2sc1.webp')}
            sticker="Look 02"
            alt="Generated aerial of the ruined city swallowed in white morning fog"
            caption="Morning fog."
            accent="cyan"
          />
          <FramedImage
            src={ASSET('3d-2sc2.webp')}
            sticker="Look 03"
            alt="Generated aerial of mossy overgrown towers in warm sunlit haze"
            caption="Sunlit overgrowth."
            accent="cyan"
          />
          <FramedImage
            src={ASSET('3d-2sc3.webp')}
            sticker="Look 04"
            alt="Generated aerial of the ruined city under cold blue storm light"
            caption="Cold front."
            accent="cyan"
          />
        </div>
      </div>
    ),
  },
  {
    id: 'shot3',
    label: 'Shot 03',
    content: (
      <div className="space-y-12">
        <P>
          The wide: the whole island block against the ocean. One camera move in the scene, one generative
          pass, and the blockout becomes golden-hour ruin.
        </P>
        <FramedImage
          src={ASSET('3d-3.webp')}
          sticker="The 3D blocking"
          alt="Low-poly white and green city blockout on an island against a deep blue ocean"
          caption="The wide, blocked out against the ocean."
          accent="cyan"
        />
        <FramedImage
          src={ASSET('3d-3sc.webp')}
          sticker="The generated frame"
          alt="Generated golden-hour frame of ruined overgrown towers on the same island coastline"
          caption="The same wide after the generative pass."
          accent="cyan"
        />
      </div>
    ),
  },
  {
    id: 'motion',
    label: 'Motion',
    content: (
      <div className="space-y-8">
        <P>
          Finally, give motion to your creations: the generated frames go through the video pass and the
          still city starts to breathe.
        </P>
        <FramedImage
          src={ASSET('3d-motion.mp4')}
          sticker="The motion pass"
          alt="Generated video flythrough of the ruined city built from the 3D scene"
          caption="From .blend to blocking to frame to motion, one pipeline."
          accent="cyan"
        />
      </div>
    ),
  },
];

/* ------------------------------- the page ------------------------------- */

const BLOCKS: Block[] = [
  {
    type: 'image',
    src: ASSET('export-timeline.png'),
    alt: 'Reel Flow export timeline: video, caption, and audio lanes with draggable clips, a brand logo overlay, and a vertical preview',
    sticker: 'Live product',
    caption: 'The Reel Flow export screen: V3/CC/V2/V1/A1/A2 lanes, drag-to-trim clips, word-paced captions, brand overlay. A real NLE, in a browser tab.',
  },
  {
    type: 'stats',
    items: [
      { value: '43,650', label: 'Lines of TypeScript' },
      { value: '304', label: 'Commits, solo' },
      { value: '16', label: 'Image models on one canvas' },
      { value: '~$3', label: 'A fully edited 60-second reel' },
    ],
  },

  { type: 'heading', text: 'What it is', kicker: 'Two products, one spine' },
  {
    type: 'custom',
    node: (
      <p className="text-xl sm:text-2xl leading-relaxed font-medium max-w-5xl">
        Most AI tools wrap one model. Visual Studio Pro wraps a production department: ideation, generation,
        precision editing, relighting, key art, banners, full video post-production, and an NLE handoff, with
        every generation captured into a project library.
      </p>
    ),
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {MODULES.map((m, i) => (
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
      { type: 'heading', text: 'The problem', kicker: 'A specialist per asset' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
            <div className="space-y-5">
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                Every piece of content a creator ships, the thumbnail, the key art, the ad banner set, the
                talking-head reel, the motion-graphics insert, traditionally belongs to a different
                specialist, with a different invoice, a different brief, and a different feedback loop. The
                table below is what a working week of content costs a solo creator or a small brand on the
                traditional route.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-black">
                The tool&rsquo;s core bet: one operator with taste, one tab, marginal cost in cents.
              </p>
            </div>
            <div className="p-6 bg-neobrutalism-black border-3 border-neobrutalism-black shadow-neobrutalism-md">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-cyan mb-3">
                A note on the numbers
              </p>
              <p className="text-sm font-bold text-white leading-relaxed">
                Traditional figures are typical market ranges, not quotes, and they include human judgement and
                creative authorship the tool does not replace. The comparison is on throughput and iteration
                cost, not on replacing collaborators. Rates vary by market.
              </p>
            </div>
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <DataTable
            head={['Asset', 'Traditional route', 'Typical cost', 'Turnaround']}
            rows={[
              ['YouTube thumbnail', 'Freelance designer', '$10–30 marketplace · $30–150 experienced', '1–3 days'],
              ['Movie-poster key art', 'Key-art designer or agency', '$150–5,000 indie · $10k–20k+ agency tier', '2–4 weeks with revisions'],
              ['Ad banner resize set (~10 sizes)', 'Designer recomposes each ratio', '$50–250 freelance · $250–1,500 agency', '2–5 days'],
              ['Product reshoot, new lighting', 'Photographer + studio', '$500–2,500 per shoot day, post adds 20–50%', '1–2 weeks to finals'],
              ['Precision photo edit round', 'Retoucher, $30–75/hr', '$5–100+ per image by finish level', '1–3 days per round'],
              ['60s edited vertical reel', 'Editor, UGC creator, or production co', '$25–300 edit · $150–800 UGC · $1.5k–8k production co', '2 days – 5 weeks by tier'],
              ['Voiceover', 'VO artist, non-broadcast web', '$100–450 per 60s spot', '1–2 days, revisions extra'],
              ['Word-synced captions', 'Captioning service or editor hours', '$1.50–2/min human-made, manual sync adds hours', 'same day – 24h'],
              ['Motion-graphics insert', 'Freelance motion designer', '$25–130 templated · $100–600 custom', '2–7 days'],
              ['NLE conform for the editor', 'Assistant editor rebuilds timeline', '$60–240 · 2–4 hours of editor time', 'half a working day'],
            ]}
          />
        ),
      },
    ],
  },

  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <div className="relative w-fit">
            <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
              <p className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Computed from the app&rsquo;s own cost model</p>
            </div>
            <div className="block w-fit px-6 py-4 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-cyan">The economics</h2>
            </div>
          </div>
          <div className="mt-10 space-y-5">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            The worked example: a 60-second reel built from 3 talking-head windows and 13 B-roll beats. The
            numbers are computed from the cost model the app itself uses to show live estimates, per-model
            per-second rates in the pipeline code, so they are auditable rather than illustrative.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            The four tiers are a creative decision, not just a budget one. Near-Free leans on branded motion
            graphics and staged stills. Smart Saver spends video only where motion is the message. Premium
            Motion runs a 65% video share. And Remotion Studio generates no media at all: every cutaway is a
            code-authored React scene, rendered in the browser for free.
          </p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-black mb-4">One reel, four price points</h3>
          <DataTable
            head={['Tier', 'What you get', 'Marginal compute']}
            rows={[
              ['Near-Free', 'stills + branded motion only', <strong key="t1" className="font-black">≈ $1.26</strong>],
              ['Smart Saver', '3 video beats, rest stills and motion', <strong key="t2" className="font-black">≈ $1.92</strong>],
              ['Premium Motion', '8 video beats (SeeDance Mini)', <strong key="t3" className="font-black">≈ $3.00</strong>],
              ['Premium on Veo 3.1 Fast', '8 premium video beats', <strong key="t4" className="font-black">≈ $5.90</strong>],
              ['Remotion Studio', 'all cutaways code-authored, $0 media', <strong key="t5" className="font-black">≈ $0.10–0.30</strong>],
            ]}
          />
          <p className="mt-4 font-bold leading-relaxed">
            The $3.00 row, itemised: 15s of avatar video, 8 four-second B-roll clips, 5 stills, planning,
            transcription, and a 30-second music bed. Smart Saver&rsquo;s real spend lands below its estimate
            because prompt reuse is free.
          </p>
        </div>
      </div>
    ),
  },
  {
    type: 'custom',
    node: (
      <div>
        <h3 className="text-2xl sm:text-3xl font-black mb-4">The headline comparison</h3>
        <DataTable
          head={['', 'Traditional', 'Visual Studio Pro', 'Delta']}
          rows={[
            ['Cost, 60s edited reel', '$25–300 freelance edit · $150–800 UGC · $1.5k–8k production co', '$0.10 – $5.90', <strong key="d1" className="font-black">~50× – 500× cheaper</strong>],
            ['Turnaround', '2 days – 5 weeks by tier', 'a lunch break, script to MP4', <strong key="d2" className="font-black">days collapse to minutes</strong>],
            ['A 10-variant hook test', '10 revision cycles', '10 cheap runs', <strong key="d3" className="font-black">less than one revision note</strong>],
            ['A feedback round on an image', 'retoucher round-trip, 1–3 days', 'one regeneration, seconds', <strong key="d4" className="font-black">cents</strong>],
          ]}
        />
        <div className="mt-4 text-sm font-bold space-y-1">
          <p>Tool figures are marginal API compute. They exclude the operator&rsquo;s own time and the Vercel/Supabase/R2 baseline.</p>
          <p>Traditional figures are typical market ranges and include human authorship the tool does not replace.</p>
          <p>Model prices drift; per-image and per-second rates are as priced at time of writing.</p>
        </div>
      </div>
    ),
  },
  {
    type: 'section',
    bg: 'purple',
    blocks: [
      {
        type: 'custom',
        node: (
          <div className="relative">
            <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black whitespace-nowrap">The number that matters here</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              <div className="p-8 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-xl -rotate-1">
                <div className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-none text-neobrutalism-cyan">
                  ≈ $3
                </div>
                <p className="mt-4 text-white font-bold text-lg">
                  A fully edited, captioned, music-backed 60-second vertical reel on the Premium Motion tier,
                  in marginal compute.
                </p>
              </div>
              <div className="p-8 bg-neobrutalism-white border-5 border-neobrutalism-black shadow-neobrutalism-xl rotate-1">
                <div className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-none">
                  $150–800
                </div>
                <p className="mt-4 font-bold text-lg">
                  A UGC creator&rsquo;s rate for the same 60-second deliverable, before paid-usage rights, at a
                  5–10 day turnaround.
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg sm:text-xl font-bold">
              And the ceiling runs lower still: on the Remotion Studio tier, where every cutaway is
              code-authored motion, the whole reel costs the price of the LLM tokens that wrote it.
            </p>
          </div>
        ),
      },
    ],
  },

  {
    type: 'custom',
    node: (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
          <div className="relative w-fit">
            <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
              <p className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Nine tools, one canvas — pick a tab</p>
            </div>
            <div className="block w-fit px-6 py-4 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-cyan">The Studio</h2>
            </div>
          </div>
          <p className="text-xl sm:text-2xl leading-relaxed font-medium">
            Everything on the image side shares one canvas, one project library, and one prompt-composition
            brain. Each tool below is a full module in the live app, with its own economics against the
            specialist it stands in for.
          </p>
        </div>
        <div className="mt-10">
          <FeatureTabs tabs={STUDIO_TABS} />
        </div>
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'pink',
    blocks: [
      { type: 'heading', text: '3D Scene Builder', kicker: 'Coming soon' },
      {
        type: 'custom',
        node: (
          <div>
            <p className="text-xl sm:text-2xl leading-relaxed font-medium max-w-5xl">
              The next module on the canvas: build your scene with generative 3D or with traditional tools
              like Blender, reposition the camera until the comp is right, then let the generative pass
              paint the frame and the video pass set it moving. The slides below are a real run: one
              Blender city, start to finish.
            </p>
            <div className="mt-10">
              <FeatureTabs tabs={SCENE_TABS} />
            </div>
          </div>
        ),
      },
    ],
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
            <div className="font-heading font-black leading-none text-8xl lg:text-9xl text-neobrutalism-cyan">16</div>
            <p className="mt-3 text-sm font-black uppercase tracking-widest text-white">Models</p>
            <p className="text-sm font-black uppercase tracking-widest text-white/50">Seven families</p>
            <div className="mt-4 inline-block px-3 py-1.5 bg-neobrutalism-cyan border-3 border-neobrutalism-black shadow-neobrutalism-sm -rotate-2">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black whitespace-nowrap">One prompt box</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { family: 'Nano Banana', color: 'bg-neobrutalism-yellow', models: ['Nano Banana 2', 'NB 2 Lite'] },
              { family: 'Flux', color: 'bg-neobrutalism-cyan', models: ['Flux 2 Flex', 'Flux 2 Max', 'Klein 4B', 'Klein 9B', 'Klein 9B LoRA'] },
              { family: 'Qwen', color: 'bg-neobrutalism-purple', models: ['Qwen Image 2 Pro', 'Qwen Image Layered'] },
              { family: 'Seedream', color: 'bg-neobrutalism-lime', models: ['Seedream 4.5', 'Seedream 5 Lite', 'Seedream 5 Pro'] },
              { family: 'GPT Image', color: 'bg-neobrutalism-orange', models: ['GPT Image 2'] },
              { family: 'Grok', color: 'bg-neobrutalism-white', models: ['Grok Imagine', 'Imagine Quality'] },
              { family: 'Hunyuan', color: 'bg-neobrutalism-pink', models: ['Hunyuan Image 3'] },
            ].map((f, i) => (
              <div
                key={f.family}
                className={`${f.color} p-4 border-3 border-neobrutalism-black shadow-neobrutalism-md ${
                  i % 2 === 0 ? 'rotate-1' : '-rotate-1'
                } hover:rotate-0 hover:-translate-y-1 transition-transform duration-200`}
              >
                <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-black mb-2">{f.family}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.models.map((m) => (
                    <span
                      key={m}
                      className="px-2 py-1 bg-neobrutalism-black text-white font-mono text-xs font-bold whitespace-nowrap"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
            <div>
              <div className="inline-block px-3 py-1.5 bg-neobrutalism-white text-neobrutalism-black border-3 border-neobrutalism-black mb-3 rotate-1">
                <p className="text-xs font-black uppercase tracking-widest whitespace-nowrap">The flagship</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-cyan">Reel Flow</h2>
            </div>
            <p className="text-lg sm:text-xl font-medium leading-relaxed max-w-4xl text-white/90">
              Making a talking-head reel is a pipeline problem: script, voice, presenter, B-roll, sync,
              captions, music, grade, export. Reel Flow runs the whole pipeline with a director-trained
              planner, and lets you enter at any stage.
            </p>
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSET('app-reelflow.jpg')}
              alt="Reel Flow start screen: four entry sources, four cutaway budget tiers, planner AI choice, and a live cost estimate"
              loading="lazy"
              decoding="async"
              className="w-full block border-3 border-white/40"
            />
            <p className="mt-3 font-mono text-sm font-bold text-white/60">
              Step 1 of 5 in the live app: pick a source, pick a cutaway budget, pick your planner. The
              estimate in the corner is the app&rsquo;s own cost model talking.
            </p>
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REEL_SOURCES.map((s, i) => (
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
                <div
                  aria-hidden="true"
                  className={`absolute bottom-3 right-3 w-3.5 h-3.5 rotate-45 ${s.color} border-2 border-neobrutalism-black`}
                />
              </div>
            ))}
          </div>
        ),
      },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5">
              <p className="text-lg sm:text-xl leading-relaxed font-medium text-white/90">
                The planner is trained with director craft rules: on-camera clips capped at 4–10 seconds and no
                more than 30% of runtime, enforced in three layers. B-roll is anchored to the exact words it
                covers, word timestamps from transcription making cutaway timing frame-accurate. Lists get
                rapid cuts, section headers get title cards, and B-roll prompts are semantic rather than
                literal.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-medium text-white/90">
                Every planned beat is image, video, or motion, switchable per shot before generating. Motion is
                the budget tier&rsquo;s superpower: free, browser-rendered branded animation from eight
                templates, or Custom AI motion, where Claude authors a JSON scene spec that a concept-blind
                interpreter animates. On the Remotion Studio tier, Claude writes actual React scenes under an
                authoring contract, a sandboxed iframe compile-checks them, and WebCodecs renders in the
                browser.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed font-medium text-white/90">
                Voice is three TTS engines and an 87-language picker; the planner never translates your
                script. Presenter images enforce voice gender at generation. Music is a generated 30-second
                bed, looped at export.
              </p>
            </div>
            <figure className="relative w-fit max-w-full mx-auto border-3 border-white shadow-neobrutalism-md bg-neobrutalism-black rotate-[0.5deg]">
              {/* ponytail: autoplaying muted loop, same treatment as the What's next Remotion video */}
              <video
                src={ASSET('who-its-for.mp4')}
                className="w-full max-w-[560px] block"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Animated slides of who Reel Flow is for: founders and solo creators shipping daily shorts, marketing teams localising one reel into ten languages, podcasters turning episodes into clip reels, UGC-style ads without a UGC agency, and a ten-variant hook test costing less than one revision note"
              />
            </figure>
          </div>
        ),
      },
      {
        type: 'gallery',
        aspect: 'story',
        cols: 3,
        images: [
          { src: ASSET('influencer-final-word-captions.mp4'), sticker: 'Finished reel', alt: 'A finished Reel Flow vertical reel with word-synced captions and a music bed' },
          { src: ASSET('reel-broll.mp4'), sticker: 'Planned B-roll', alt: 'A Reel Flow reel segment showing director-planned B-roll cutaways over a talking head' },
          { src: ASSET('remotion-motion.mp4'), sticker: 'Code-authored motion', alt: 'A Remotion Studio tier reel whose cutaways are code-authored branded motion graphics' },
        ],
      },
    ],
  },

  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
        <div>
          <div className="relative w-fit">
            <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
              <p className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Premiere Pro handoff</p>
            </div>
            <div className="block w-fit px-6 py-4 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-cyan">
                The tool doesn&rsquo;t trap you
              </h2>
            </div>
          </div>
          <div className="mt-10 space-y-5">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Every AI video tool renders a flat MP4. This one also hands the editor a real project: one
              click exports an XML bundle that reconstructs the full V1/V2/A1 timeline in Premiere Pro,
              layers intact, editable native cross dissolves, reference render included. Verified by
              importing into Premiere 2026: import, save, and you have a native project file.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              An assistant editor&rsquo;s conform of the same timeline is one to three hours of rebuilding.
              Here it is a download. AI does the assembly; the human keeps the final cut.
            </p>
          </div>
        </div>
        <FramedImage
          src={ASSET('export-settings.png')}
          sticker="NLE handoff"
          alt="Reel Flow export settings drawer with format, polish, and Premiere handoff options"
          caption="The export drawer: MP4 render, cinematic polish levels, and the Premiere Pro project handoff."
          accent="cyan"
        />
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'orange',
    blocks: [
      { type: 'heading', text: 'Nothing is a one-off', kicker: 'Projects & infrastructure' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                Every generation across every module is captured at the prediction poll into an R2-backed
                gallery with a sanitized settings snapshot. Under it sits the production plumbing that
                separates a demo from a product, all built solo:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  'Three reuses on any past generation: the prompt, the image as a reference, or the exact studio settings that made it.',
                  'Drafts auto-sync across dev, production, and devices; discard archives instead of deleting.',
                  'A full storage migration: Cloudflare R2 for media bytes, Supabase for Postgres, auth, and row-level security.',
                  'PKCE OAuth with no tokens in redirect URLs, presigned direct-to-R2 uploads that dodge serverless body limits, and an SSRF allowlist on export downloads.',
                  'Per-user daily quotas and tiers, and an admin dashboard where block means ban: blocked users are kicked from live sessions.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 w-4 h-4 shrink-0 rotate-45 border-3 border-neobrutalism-black bg-neobrutalism-cyan"
                    />
                    <span className="text-base sm:text-lg font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <FramedImage
              src={ASSET('app-projects.jpg')}
              sticker="The backbone"
              alt="The Projects space: saved reel projects and a gallery of real generations with settings snapshots"
              caption="The Projects space in the live app: saved reels, and every generation captured with its settings."
              accent="cyan"
            />
          </div>
        ),
      },
    ],
  },

  {
    type: 'custom',
    node: (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
          <div className="relative w-fit">
            <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
              <p className="text-xs font-black uppercase tracking-widest">Engineering</p>
            </div>
            <div className="block w-fit px-6 py-4 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-cyan">The hard problems</h2>
            </div>
          </div>
          <p className="text-xl sm:text-2xl leading-relaxed font-medium">
            A React + TypeScript SPA with Replicate as the single AI gateway for every model, Cloudflare R2 for
            media bytes, Supabase for Postgres and auth, ffmpeg on serverless for export, and WebCodecs in the
            browser for code-authored motion. The interesting parts are where those seams meet.
          </p>
        </div>
        <div className="mt-10">
          <HardProblemsSlider />
        </div>
      </div>
    ),
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black mb-6">And the smaller ghosts</h3>
          <ul className="space-y-4">
            {[
              'Serverless ffmpeg has no fontconfig and no disk state: the export was rebuilt around blob-backed jobs with 49 bundled caption fonts, word-synced captions in Indic scripts included.',
              'ffmpeg 5.2’s subtitle burn-in uses legacy alignment numbering, where 6 means top-centre, not the middle-right every numpad-style reference assumes. One integer, hours of captions in the wrong corner.',
              'Diffusion models drew the annotation marks into the output in live tests. The fix is a per-model strategy: instruction models get the burned annotated image, diffusion models get a clean base plus text-encoded regions, and an anti-leak prompt pass enforces a zero-graphics rule.',
              'One planner model returned JSON truncated by its own thinking tokens, a hard dead end. Long planning jobs now auto-retry and fall back across the model family, and every model’s real schema is live-probed, with per-model aspect-ratio coercion on switch.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1.5 w-4 h-4 shrink-0 rotate-45 border-3 border-neobrutalism-black bg-neobrutalism-cyan"
                />
                <span className="text-lg sm:text-xl font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <GhostsInNumbers />
      </div>
    ),
  },
  {
    type: 'stats',
    items: [
      { value: '580', label: 'Unit & component tests' },
      { value: '40/40', label: 'Audit findings shipped' },
      { value: '19', label: 'Agents in one review fan-out' },
      { value: '49', label: 'Caption fonts bundled for serverless' },
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
          First commit 2 December 2025. <strong className="font-black">304 commits over eight months, and half of them
          in the final four weeks</strong>: velocity compounding as the tool started building itself.
        </p>
      </div>
    ),
  },
  {
    type: 'custom',
    node: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-5">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            The project is built spec-first: significant features have committed specs and implementation plans
            before the code, visible in git as spec, plan, then feature sequences for the annotation layer, the
            your-video source, and the Remotion phases. Ship-critical features went through large fan-out AI
            review: one integration got a 19-agent review that caught two bugs before ship, and a full audit of
            Reel Flow produced 40 findings, every one of which shipped, in three review-hardened waves.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            Testing runs two-tier: 580 unit and component tests plus stubbed-network end-to-end runs that
            exercise the full UI at zero cost, and live paid harnesses where visual truth matters, all ten
            thumbnail styles generated for eyeball verification and the Key-art Director proven with a live
            paid A/B before it shipped. The final shakedown was a full paid two-minute reel produced end to end
            in the live app, with every bug found en route fixed and re-verified.
          </p>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-4 -right-4 w-14 h-14 bg-neobrutalism-cyan border-3 border-neobrutalism-black rotate-12"
          />
          <div className="relative p-8 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-xl -rotate-1">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <p className="text-xs font-black uppercase tracking-widest text-neobrutalism-cyan">Commit velocity</p>
              <p className="text-xs font-black uppercase tracking-widest text-white/50">304 commits · 8 months</p>
            </div>
            <div className="mt-6 flex items-end gap-2 sm:gap-3">
              {[
                { m: 'Dec', n: 26 },
                { m: 'Jan', n: 63 },
                { m: 'Feb', n: 10 },
                { m: 'Mar–Apr', n: 13 },
                { m: 'May', n: 38 },
                { m: 'Jun', n: 4 },
                { m: 'Jul', n: 150 },
              ].map((b) => (
                <div key={b.m} className="flex-1 flex flex-col items-center gap-1.5">
                  <span className={`font-mono text-xs font-bold ${b.n === 150 ? 'text-neobrutalism-cyan' : 'text-white'}`}>
                    {b.n}
                  </span>
                  <div className="w-full h-36 flex items-end">
                    <div
                      className={`w-full ${b.n === 150 ? 'bg-neobrutalism-cyan' : 'bg-white/80'}`}
                      style={{ height: `${Math.max((b.n / 150) * 100, 4)}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50 whitespace-nowrap">
                    {b.m}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 pt-4 border-t-3 border-white/20 text-sm font-bold text-white">
              By the end, the tool was making its own demos:{' '}
              <span className="text-neobrutalism-cyan">the reels demoing Reel Flow are made in Reel Flow.</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    type: 'section',
    bg: 'lime',
    blocks: [
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-center">
            <div>
              <div className="relative w-fit">
                <div className="absolute -top-4 left-0 z-10 px-3 py-1.5 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm rotate-1">
                  <p className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Researched, parked, ready</p>
                </div>
                <div className="block w-fit px-6 py-4 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-lg -rotate-1">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neobrutalism-cyan">What’s next</h2>
                </div>
              </div>
              <ul className="mt-10 space-y-4">
                {[
                  'A 3D blocking module: stage a scene in the browser with React Three Fiber, snapshot it, and feed the blocking as reference images, with image-to-3D generation researched across three providers and costed to the cent.',
                  'An agent director: promoting the AI Director prototype into Reel Flow, so the planner does not just plan the shoot but supervises it.',
                  'Authored HTML-to-MP4 infographics, evaluated with a rendered spike and parked on render-infrastructure cost.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 w-4 h-4 shrink-0 rotate-45 border-3 border-neobrutalism-black bg-neobrutalism-cyan"
                    />
                    <span className="text-lg sm:text-xl font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-fit max-w-full mx-auto">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-10 h-10 bg-neobrutalism-black rotate-12"
              />
              <figure className="relative border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-black">
                {/* ponytail: autoplaying muted loop, same treatment as the reel gallery tiles */}
                <video
                  src={ASSET('whats-next.mp4')}
                  className="w-full max-w-[560px] block"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Animated slides of the roadmap: 3D blocking, agent director, and HTML-to-MP4 infographics"
                />
              </figure>
            </div>
          </div>
        ),
      },
    ],
  },

  {
    type: 'section',
    bg: 'cyan',
    blocks: [
      { type: 'heading', text: 'One operator, one tab, a production department', kicker: 'Closing' },
      {
        type: 'custom',
        node: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              Visual Studio Pro started as a question about how much of a creative production stack one person
              could hold in a browser tab. The answer keeps growing. The interesting part was never calling AI
              models; it was the production-department behaviour around them: a planner that listens to your
              voice note before it cuts, a composer that speaks sixteen model dialects, an annotation layer
              that turns pointing into edit instructions, and an export engine that survived serverless ffmpeg
              in production.
            </p>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-10 h-10 bg-neobrutalism-white border-3 border-neobrutalism-black rotate-12"
              />
              <figure className="relative p-8 bg-neobrutalism-black border-5 border-neobrutalism-black shadow-neobrutalism-xl rotate-1">
                <p className="text-xl sm:text-2xl font-black leading-snug text-white">
                  It is live, multi-user, and in production, with auth, quotas, abuse handling, and an admin
                  dashboard, all built solo. Every generation is captured with its exact settings.{' '}
                  <span className="text-neobrutalism-cyan">Nothing you make is ever a one-off.</span>
                </p>
              </figure>
            </div>
          </div>
        ),
      },
      {
        type: 'stats',
        items: [
          { value: '16', label: 'Models on one canvas' },
          { value: '~$3', label: 'A fully edited 60s reel' },
          { value: '50–500×', label: 'Cheaper than traditional' },
          { value: '87', label: 'Languages, matched voices' },
        ],
      },
    ],
  },

  {
    type: 'cta',
    links: [
      { label: 'Open the live app', href: 'https://visualstudioprox.vercel.app', variant: 'primary' },
      { label: '← Back to portfolio', href: '/', variant: 'outline' },
    ],
  },
];

export default function VisualStudioPage() {
  return (
    <CaseStudyTemplate
      accent="cyan"
      heroTicker={['16 image models', 'One canvas', 'Annotate-to-edit', 'Reel factory', '4 cost tiers', 'Code-authored motion', 'Premiere handoff', '87 languages']}
      eyebrow="Case study · AI product · Solo build"
      title="Visual Studio Pro"
      summary="A full AI creative studio in the browser. One canvas that speaks to sixteen image models, a cinematography brain that turns camera gear into prompt language, and a reel factory that takes a topic, a script, a voice note, or raw phone footage and hands back an edited, captioned, music-backed vertical video, plus the Premiere project to keep cutting it. Built solo: product, design, engineering, prompt architecture."
      facts={[
        { label: 'Role', value: 'Solo · Product, design, engineering' },
        { label: 'Timeline', value: 'Dec 2025 – present' },
        { label: 'Status', value: 'Live, multi-user, in production' },
        { label: 'Stack', value: 'React · TypeScript · Replicate · Supabase · R2' },
      ]}
      blocks={BLOCKS}
    />
  );
}
