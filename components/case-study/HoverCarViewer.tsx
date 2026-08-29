'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// three/webgl is browser-only; the static render stands in while the model loads
const ModelViewer = dynamic(() => import('@/components/reactbits/ModelViewer'), {
  ssr: false,
  loading: () => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/projects/ruinrunner/objects/hover-car.png"
      alt=""
      aria-hidden="true"
      className="max-h-full w-auto mx-auto -rotate-6 drop-shadow-[8px_10px_0_rgba(255,215,0,0.35)]"
    />
  ),
});

// Both hulls are the actual in-game meshes (car rebuilt from game.js; the NK-7
// exported from its Blender kit). The stack slides between them every 15 s.
const RIDES = [
  {
    url: '/projects/ruinrunner/objects/hover-car.glb',
    modelYOffset: 0.15,
    // NOTE: ModelViewer swaps these — X is yaw, Y is pitch. Car faces -z: 160/20 = front 3/4 from above
    defaultRotationX: 160,
    defaultRotationY: 20,
  },
  {
    url: '/projects/ruinrunner/objects/hovercycle-nk7.glb',
    modelYOffset: 0.1,
    // cycle faces +z after the Blender export; -20 gives the matching front 3/4
    defaultRotationX: -20,
    defaultRotationY: 20,
  },
];

export function HoverCarViewer({ height = 210, zoom = 0.85 }: { height?: number; zoom?: number }) {
  const [ride, setRide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRide(r => (r + 1) % RIDES.length), 15000);
    return () => clearInterval(id);
  }, []);

  const r = RIDES[ride];
  return (
    <ModelViewer
      key={r.url}
      url={r.url}
      width="100%"
      height={height}
      modelYOffset={r.modelYOffset}
      fadeIn
      autoRotate
      autoRotateSpeed={0.5}
      showScreenshotButton={false}
      enableManualZoom={false}
      // model is normalized to radius 0.5 by the viewer; ~1.0 fills the frame
      defaultZoom={zoom}
      minZoomDistance={Math.min(0.6, zoom)}
      // ponytail: drei Environment presets kill the WebGL context with three r185; plain lights
      // cranked up instead — the metal materials read black without an environment
      environmentPreset="none"
      ambientIntensity={2}
      keyLightIntensity={2}
      fillLightIntensity={1.3}
      rimLightIntensity={1.6}
      defaultRotationX={r.defaultRotationX}
      defaultRotationY={r.defaultRotationY}
    />
  );
}
