/**
 * Full-bleed marquee of the game's 3D asset renders — the LogoLoop idea from
 * React Bits, done with the site's existing CSS ticker (no JS needed).
 */
export interface HangarItem {
  img: string;
  name: string;
}

function Strip({ items }: { items: HangarItem[] }) {
  return (
    <span className="inline-flex items-end gap-14 px-7 align-bottom">
      {items.map(item => (
        <span key={item.name} className="inline-flex flex-col items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.img} alt={item.name} loading="lazy" decoding="async" className="h-24 sm:h-32 w-auto" />
          <span className="px-2 py-0.5 bg-neobrutalism-black text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
            {item.name}
          </span>
        </span>
      ))}
    </span>
  );
}

export function HangarFlyby({ items }: { items: HangarItem[] }) {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen bg-neobrutalism-white border-y-5 border-neobrutalism-black py-6 overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker hover:[animation-play-state:paused]" style={{ animationDuration: '70s' }}>
          <Strip items={items} />
          <Strip items={items} />
        </div>
      </div>
    </div>
  );
}
