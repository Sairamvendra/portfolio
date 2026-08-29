'use client';

import dynamic from 'next/dynamic';

// three/webgl is browser-only; the static render stands in while the model loads
const ModelViewer = dynamic(() => import('@/components/reactbits/ModelViewer'), {
  ssr: false,
  loading: () => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/projects/ruinrunner/objects/warden.png"
      alt=""
      aria-hidden="true"
      className="h-[380px] w-auto mx-auto drop-shadow-[8px_10px_0_rgba(255,215,0,0.25)]"
    />
  ),
});

// The in-game rigged Warden GLB (meshopt-compressed), playing its authored sway clip
export function WardenViewer() {
  return (
    <ModelViewer
      url="/projects/ruinrunner/objects/warden.glb"
      width="100%"
      height={440}
      fadeIn
      playAnimation
      autoRotate
      autoRotateSpeed={0.25}
      showScreenshotButton={false}
      enableManualZoom={false}
      defaultZoom={0.9}
      minZoomDistance={0.6}
      // ponytail: drei Environment presets kill the WebGL context with three r185; plain lights
      environmentPreset="none"
      ambientIntensity={2.2}
      keyLightIntensity={2}
      fillLightIntensity={1.4}
      rimLightIntensity={1.8}
      // NOTE: ModelViewer swaps these — X is yaw, Y is pitch. Model faces +z (toward camera)
      defaultRotationX={-18}
      defaultRotationY={12}
    />
  );
}
