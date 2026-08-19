'use client';

import dynamic from 'next/dynamic';

// three/webgl is browser-only; the static render stands in while the model loads
const ModelViewer = dynamic(() => import('@/components/reactbits/ModelViewer'), {
  ssr: false,
  loading: () => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/projects/ruinrunner/objects/hover-car.png"
      alt=""
      aria-hidden="true"
      className="h-[210px] w-auto mx-auto -rotate-6 drop-shadow-[8px_10px_0_rgba(255,215,0,0.35)]"
    />
  ),
});

// The actual in-game hover-car mesh (rebuilt from game.js, exported to GLB)
export function HoverCarViewer() {
  return (
    <ModelViewer
      url="/projects/ruinrunner/objects/hover-car.glb"
      width="100%"
      height={210}
      modelYOffset={0.15}
      fadeIn
      autoRotate
      autoRotateSpeed={0.5}
      showScreenshotButton={false}
      enableManualZoom={false}
      // model is normalized to radius 0.5 by the viewer; ~1.0 fills the frame
      defaultZoom={0.85}
      minZoomDistance={0.6}
      // ponytail: drei Environment presets kill the WebGL context with three r185; plain lights
      // cranked up instead — the metal materials read black without an environment
      environmentPreset="none"
      ambientIntensity={2}
      keyLightIntensity={2}
      fillLightIntensity={1.3}
      rimLightIntensity={1.6}
      // NOTE: ModelViewer swaps these — X is yaw, Y is pitch. 160/20 = front 3/4 from above
      defaultRotationX={160}
      defaultRotationY={20}
    />
  );
}
