/**
 * The game's real global top-10, fetched from the live leaderboard API at build
 * time and revalidated hourly (same ISR pattern as the GitHub activity strip).
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

export async function LiveLeaderboard() {
  const top = await getTopPilots();
  if (!top || top.length === 0) return null;

  return (
    <div className="max-w-xl">
      <div className="border-5 border-neobrutalism-black shadow-neobrutalism-xl bg-neobrutalism-black">
        <div className="flex items-center justify-between px-5 py-4 border-b-3 border-white/20">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-neobrutalism-yellow">
            Top Pilots
          </h3>
          <span className="inline-flex items-center gap-2 px-2 py-1 bg-neobrutalism-yellow border-3 border-neobrutalism-black text-[10px] font-black uppercase tracking-widest text-neobrutalism-black">
            <span className="w-2 h-2 rounded-full bg-neobrutalism-black animate-pulse" />
            Live
          </span>
        </div>
        <ol className="px-5 py-3">
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
    </div>
  );
}
