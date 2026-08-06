import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/animations/FadeIn';

const USERNAME = 'Sairamvendra';
// Primary source: third-party mirror (clean JSON, no key). Falls back to
// parsing GitHub's own public HTML fragment if the mirror is unreachable.
const API_BASE = `https://github-contributions-api.jogruber.de/v4/${USERNAME}`;

// index = contribution level 0–4, dark → bright mint (drawn on the black panel)
const LEVEL_COLORS = ['#2A2A2A', '#14532D', '#16A34A', '#4ADE80', '#7BF1A8'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const CELL = 11; // px — legend swatches only; the grid itself is fluid
const GRID_GAP = 'clamp(1px, 0.25vw, 3px)'; // gutters shrink with the cells

interface Day {
  date: string;
  count: number;
  level: number;
}

async function fromMirror(year: number): Promise<Day[] | null> {
  try {
    const res = await fetch(`${API_BASE}?y=${year}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data.contributions) && data.contributions.length > 0
      ? data.contributions
      : null;
  } catch {
    return null;
  }
}

// GitHub serves the calendar first-party as an HTML fragment: each day is a
// <td data-date data-level id> with its count in a <tool-tip for={id}> label.
async function fromGitHub(year: number): Promise<Day[] | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${USERNAME}/contributions?from=${year}-01-01&to=${year}-12-31`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const html = await res.text();

    const counts = new Map<string, number>();
    for (const m of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>(\d+|No) contributions? on/g)) {
      counts.set(m[1], m[2] === 'No' ? 0 : parseInt(m[2], 10));
    }

    const days: Day[] = [];
    for (const m of html.matchAll(/<td[^>]*data-date="[^"]+"[^>]*>/g)) {
      const tag = m[0];
      const date = tag.match(/data-date="([^"]+)"/)?.[1];
      const id = tag.match(/id="([^"]+)"/)?.[1];
      const level = tag.match(/data-level="(\d)"/)?.[1];
      if (!date || !level) continue;
      days.push({ date, count: id ? counts.get(id) ?? 0 : 0, level: Number(level) });
    }
    days.sort((a, b) => a.date.localeCompare(b.date));
    return days.length > 0 ? days : null;
  } catch {
    return null;
  }
}

export async function GitHubActivity() {
  const year = new Date().getFullYear();
  const fetched = (await fromMirror(year)) ?? (await fromGitHub(year));
  if (!fetched) return null; // API down → strip disappears, homepage unaffected

  const total = fetched.reduce((sum, d) => sum + d.count, 0);

  // full Jan 1 – Dec 31 calendar like GitHub's year view; future days render empty
  const byDate = new Map(fetched.map((d) => [d.date, d]));
  const days: Day[] = [];
  for (let t = Date.UTC(year, 0, 1); t <= Date.UTC(year, 11, 31); t += 86_400_000) {
    const date = new Date(t).toISOString().slice(0, 10);
    days.push(byDate.get(date) ?? { date, count: 0, level: 0 });
  }

  // chunk days into Sunday-first week columns, padding the first partial week
  const weeks: (Day | null)[][] = [];
  let week: (Day | null)[] = new Array(new Date(days[0].date).getUTCDay()).fill(null);
  for (const day of days) {
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
    week.push(day);
  }
  weeks.push(week);

  const monthLabels: { weekIndex: number; label: string }[] = [];
  let prevMonth = -1;
  weeks.forEach((w, i) => {
    const first = w.find(Boolean) as Day | undefined;
    if (!first) return;
    const m = new Date(first.date).getUTCMonth();
    if (m !== prevMonth) {
      monthLabels.push({ weekIndex: i, label: MONTHS[m] });
      prevMonth = m;
    }
  });

  return (
    <section
      aria-label="GitHub contribution activity"
      className="bg-neobrutalism-black relative z-10 pb-16 md:pb-20"
    >
      <Container>
        <FadeIn>
          <Card className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <p className="font-heading font-bold uppercase text-neobrutalism-black">
                <span className="font-black text-3xl mr-2">{total.toLocaleString('en-US')}</span>
                contributions in {year}
              </p>
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-neobrutalism-mint border-3 border-neobrutalism-black shadow-neobrutalism-sm px-4 py-2 font-heading font-bold uppercase text-sm text-neobrutalism-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-neobrutalism-black animate-pulse" />
                Live from GitHub
              </a>
            </div>

            <div className="bg-neobrutalism-black border-3 border-neobrutalism-black p-2 sm:p-4">
              <div>
                <div className="relative h-4 mb-1">
                  {monthLabels.map(({ weekIndex, label }) => (
                    <span
                      key={`${label}-${weekIndex}`}
                      className="absolute text-[8px] sm:text-[10px] font-bold uppercase text-neobrutalism-white/70"
                      style={{ left: `${(weekIndex / weeks.length) * 100}%` }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                    gap: GRID_GAP,
                  }}
                >
                  {weeks.map((w, wi) => (
                    <div key={wi} className="flex flex-col" style={{ gap: GRID_GAP }}>
                      {w.map((day, di) => (
                        <div
                          key={day?.date ?? `pad-${wi}-${di}`}
                          title={day ? `${day.count} contributions on ${day.date}` : undefined}
                          className="w-full aspect-square rounded-[2px]"
                          style={{
                            backgroundColor: day
                              ? LEVEL_COLORS[Math.min(day.level, 4)]
                              : 'transparent',
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] font-bold uppercase text-neobrutalism-white/70">
                  Less
                  {LEVEL_COLORS.map((color) => (
                    <span
                      key={color}
                      className="inline-block rounded-[2px]"
                      style={{ width: CELL, height: CELL, backgroundColor: color }}
                    />
                  ))}
                  More
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
