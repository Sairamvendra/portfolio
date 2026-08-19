/**
 * The game's real global top-10, fetched from the live leaderboard API at build
 * time and revalidated hourly (same ISR pattern as the GitHub activity strip).
 * Two-column band: the board on the left, how it's wired + a challenge CTA on
 * the right, so the section reads balanced at full width.
 */
interface Score {
  name: string;
  score: number;
}

async function getTopPilots(): Promise<Score[] | null> {
  try {
    const res = await fetch('https://ruin-runner.vercel.app/api/scores', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { top?: Score[] };
    return data.top?.slice(0, 10) ?? null;
  } catch {
    return null;
  }
}

const WIRING = [
  { label: 'The game', detail: 'every run posts its score with three arcade initials' },
  { label: 'One serverless function', detail: '/api/scores · reads and writes a Vercel Blob' },
  { label: 'This page', detail: 'fetched at build time, revalidated hourly' },
];

export async function LiveLeaderboard() {
  const top = await getTopPilots();
  if (!top || top.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      <div className="flex flex-col border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-black">
        <div className="flex items-center justify-between px-5 py-4 border-b-3 border-white/20">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-neobrutalism-yellow">
            Top Pilots
          </h3>
          <span className="inline-flex items-center gap-2 px-2 py-1 bg-neobrutalism-yellow border-3 border-neobrutalism-black text-[10px] font-black uppercase tracking-widest text-neobrutalism-black">
            <span className="w-2 h-2 rounded-full bg-neobrutalism-black animate-pulse" />
            Live
          </span>
        </div>
        <ol className="flex-1 px-5 py-3">
          {top.map((s, i) => (
            <li
              key={`${s.name}-${s.score}`}
              className={`flex items-baseline gap-4 py-2 font-heading font-black tabular-nums ${
                i < 3 ? 'text-neobrutalism-yellow text-lg sm:text-xl' : 'text-white/80 text-base'
              } ${i > 0 ? 'border-t border-white/10' : ''}`}
            >
              <span className="w-8 text-white/40 text-sm">{String(i + 1).padStart(2, '0')}</span>
              <span className="tracking-[0.3em]">{s.name}</span>
              <span className="ml-auto">{Intl.NumberFormat('en-US').format(s.score)}</span>
            </li>
          ))}
        </ol>
        <p className="px-5 py-3 border-t-3 border-white/20 text-xs font-bold text-white/50 uppercase tracking-wide">
          Fetched from the game&apos;s leaderboard API · refreshes hourly
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-lg sm:text-xl leading-relaxed font-medium">
          Not a mockup: the actual top ten, fetched from the game&apos;s leaderboard API when this page
          builds. Beat a score in the game and your initials show up here within the hour.
        </p>

        <div className="space-y-0">
          {WIRING.map((step, i) => (
            <div key={step.label}>
              {i > 0 && (
                <div aria-hidden="true" className="ml-6 h-5 w-1 bg-neobrutalism-black" />
              )}
              <div className="flex items-baseline gap-3 px-4 py-3 bg-neobrutalism-white border-3 border-neobrutalism-black shadow-neobrutalism-sm">
                <span className="text-sm font-black uppercase tracking-widest whitespace-nowrap">{step.label}</span>
                <span className="text-sm font-medium text-neobrutalism-black/70">{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto relative border-3 border-neobrutalism-black shadow-neobrutalism-lg bg-neobrutalism-yellow p-5 flex flex-wrap items-center justify-between gap-4">
          <p className="font-black uppercase tracking-wide text-neobrutalism-black">
            Think your initials belong up there?
          </p>
          <a
            href="https://ruin-runner.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neobrutalism bg-neobrutalism-black text-white"
          >
            ▶ Fly a run
          </a>
        </div>
      </div>
    </div>
  );
}
