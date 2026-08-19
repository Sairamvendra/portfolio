'use client';

import { useSyncExternalStore } from 'react';
import DriftWall, { type DriftWallItem } from '@/components/reactbits/DriftWall';

// DriftWall's drift loop does its wrap math from tileHeight+gap in JS, so tile
// size must change via props, not CSS: smaller tiles on phones fit 3 columns.
const QUERY = '(max-width: 640px)';
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(QUERY);
  m.addEventListener('change', cb);
  return () => m.removeEventListener('change', cb);
};
const isMobile = () => window.matchMedia(QUERY).matches;

export function VoidWall({ items }: { items: DriftWallItem[] }) {
  const mobile = useSyncExternalStore(subscribe, isMobile, () => false);
  return (
    <DriftWall
      items={items}
      columns={7}
      tileWidth={mobile ? 124 : 250}
      tileHeight={mobile ? 78 : 156}
      gap={mobile ? 8 : 18}
      tilt={16}
      turn={-14}
      perspective={1200}
      depth={120}
      speed={42}
      direction="up"
      variance={0.45}
      parallax={0.6}
      lift={mobile ? 32 : 64}
      fade={0.72}
      dim={0.55}
      overlayColor="#000000"
    />
  );
}
