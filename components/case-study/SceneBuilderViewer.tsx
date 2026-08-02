'use client';

import dynamic from 'next/dynamic';

// three/webgl is browser-only; load the viewer client-side with a framed placeholder
const ModelViewer = dynamic(() => import('@/components/reactbits/ModelViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[520px] items-center justify-center">
      <p className="text-sm font-black uppercase tracking-widest">Loading the scene…</p>
    </div>
  ),
});

export function SceneBuilderViewer() {
  return (
    <ModelViewer
      url="/projects/visualstudio/3d-city.glb"
      width="100%"
      height={520}
      defaultZoom={0.4}
      minZoomDistance={0.25}
      autoRotate
      fadeIn
      showScreenshotButton={false}
      // ponytail: drei Environment presets kill the WebGL context with three r185; plain lights instead
      environmentPreset="none"
      ambientIntensity={0.7}
      defaultRotationX={-30}
      defaultRotationY={35}
    />
  );
}
