'use client';

import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Geometry, Triangle, Texture, RenderTarget } from 'ogl';

// React Bits RippleDistortion, reworked as a reveal: the cursor's ripple field
// distorts `src` and, where the field is strong enough, shows `revealSrc` as if
// it sits behind it. Ring edges pick up the brand tint. Sits as an overlay on
// top of the real <img>, which stays for SSR / alt text / no-WebGL.

const MAX_WAVES = 100;
const QUALITY_SCALE = { low: 0.4, medium: 0.7, high: 1 };
const START_SCALE = 1.5;
const LIFE_CONSTANT = Math.log(500);

const waveVertex = `
precision highp float;

attribute vec2 position;
attribute vec2 uv;
attribute vec2 iOffset;
attribute vec2 iScale;
attribute float iOpacity;

varying vec2 vUv;
varying float vOpacity;

void main() {
  vUv = uv;
  vOpacity = iOpacity;
  gl_Position = vec4(iOffset + position * iScale, 0.0, 1.0);
}
`;

const waveFragment = `
precision highp float;

varying vec2 vUv;
varying float vOpacity;

uniform float uRings;

const float PI = 3.141592653589793;
const float EDGE = 0.006737947;

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = dot(p, p);
  if (r > 1.0) discard;

  float brush = (exp(-r * 5.0) - EDGE) / (1.0 - EDGE);
  brush *= 0.55 + 0.45 * cos(sqrt(r) * PI * 2.0 * uRings);

  gl_FragColor = vec4(vec3(brush * vOpacity * vOpacity), 1.0);
}
`;

const screenVertex = `
precision highp float;
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const compositeFragment = `
precision highp float;

varying vec2 vUv;

uniform sampler2D uTexture;
uniform sampler2D uReveal;
uniform sampler2D uDisplacement;
uniform vec2 uResolution;
uniform vec2 uTextureSize;
uniform vec2 uTexel;
uniform vec3 uTint;
uniform vec3 uHighlight;
uniform float uStrength;
uniform float uSwirl;
uniform float uGlint;
uniform float uTintAmount;
uniform float uThreshold;

const float TAU = 6.283185307179586;

vec2 coverUV(vec2 uv) {
  vec2 safe = max(uTextureSize, vec2(1.0));
  vec2 s = uResolution / safe;
  vec2 scaledSize = safe * max(s.x, s.y);
  vec2 offset = (uResolution - scaledSize) * 0.5;
  return (uv * uResolution - offset) / scaledSize;
}

void main() {
  float amount = texture2D(uDisplacement, vUv).r;
  vec2 base = coverUV(vUv);

  float theta = amount * uSwirl * TAU;
  vec2 push = vec2(sin(theta), cos(theta)) * amount * uStrength;

  vec3 front = texture2D(uTexture, base + push).rgb;
  // the image behind moves less, so it reads as a deeper layer
  vec3 back = texture2D(uReveal, base + push * 0.35).rgb;

  float mask = smoothstep(uThreshold, uThreshold + 0.18, amount);
  vec3 color = mix(front, back, mask);

  // brand-tinted rim where the two layers meet
  float rim = mask * (1.0 - mask) * 4.0;
  color = mix(color, uTint, rim * uTintAmount);

  if (uGlint > 0.001) {
    float ex = texture2D(uDisplacement, vUv + vec2(uTexel.x, 0.0)).r - texture2D(uDisplacement, vUv - vec2(uTexel.x, 0.0)).r;
    float ey = texture2D(uDisplacement, vUv + vec2(0.0, uTexel.y)).r - texture2D(uDisplacement, vUv - vec2(0.0, uTexel.y)).r;
    vec3 normal = normalize(vec3(-ex * 26.0, -ey * 26.0, 1.0));
    vec3 light = normalize(vec3(-0.35, 0.55, 1.0));
    float raw = pow(max(dot(normal, light), 0.0), 22.0);
    float flatSpec = pow(max(light.z, 0.0), 22.0);
    color += uHighlight * clamp((raw - flatSpec) / max(1.0 - flatSpec, 0.0001), 0.0, 1.0) * uGlint;
  }

  gl_FragColor = vec4(color, 1.0);
}
`;

const hexToRGB = hex => {
  const clean = hex.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean;
  const n = parseInt(full, 16);
  if (Number.isNaN(n)) return [1, 1, 1];
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

const RippleReveal = ({
  src,
  revealSrc,
  brushSize = 130,
  strength = 0.08,
  swirl = 1,
  rings = 4,
  spread = 5,
  fade = 2.5,
  spacing = 15,
  threshold = 0.3,
  glint = 0.6,
  tint = '#FF6B6B', // neobrutalism-pink
  tintAmount = 0.55,
  highlightColor = '#4ECDC4', // neobrutalism-cyan
  quality = 'medium',
  className = ''
}) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const renderer = new Renderer({ alpha: false, antialias: false, dpr: Math.min(window.devicePixelRatio || 1, 2) });
    const gl = renderer.gl;
    const canvas = gl.canvas;
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;opacity:0';
    mount.appendChild(canvas);

    const makeTexture = () =>
      new Texture(gl, {
        generateMipmaps: false,
        minFilter: gl.LINEAR,
        magFilter: gl.LINEAR,
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE
      });
    const frontTexture = makeTexture();
    const backTexture = makeTexture();

    let disposed = false;
    let dirty = false;
    let pending = 2;
    const load = (url, texture, onReady) => {
      const image = new window.Image();
      image.crossOrigin = 'anonymous';
      image.decoding = 'async';
      image.onload = () => {
        if (disposed) return;
        texture.image = image;
        onReady?.(image);
        // canvas stays hidden (the <img> underneath shows) until both layers exist
        if (--pending === 0) {
          dirty = true;
          canvas.style.opacity = '1';
        }
      };
      image.src = url;
    };

    const offsets = new Float32Array(MAX_WAVES * 2);
    const scales = new Float32Array(MAX_WAVES * 2);
    const opacities = new Float32Array(MAX_WAVES);
    const waves = Array.from({ length: MAX_WAVES }, () => ({ x: 0, y: 0, scale: START_SCALE, target: START_SCALE, opacity: 0 }));
    let current = 0;

    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]) },
      uv: { size: 2, data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]) },
      iOffset: { instanced: 1, size: 2, data: offsets },
      iScale: { instanced: 1, size: 2, data: scales },
      iOpacity: { instanced: 1, size: 1, data: opacities }
    });

    const waveProgram = new Program(gl, {
      vertex: waveVertex,
      fragment: waveFragment,
      uniforms: { uRings: { value: rings } },
      transparent: true,
      depthTest: false,
      depthWrite: false,
      cullFace: false
    });
    waveProgram.setBlendFunc(gl.ONE, gl.ONE);
    const waveMesh = new Mesh(gl, { geometry, program: waveProgram, frustumCulled: false });

    const displacementTarget = new RenderTarget(gl, {
      width: 2,
      height: 2,
      depth: false,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
      wrapS: gl.CLAMP_TO_EDGE,
      wrapT: gl.CLAMP_TO_EDGE
    });

    const uniforms = {
      uTexture: { value: frontTexture },
      uReveal: { value: backTexture },
      uDisplacement: { value: displacementTarget.texture },
      uResolution: { value: [1, 1] },
      uTextureSize: { value: [1, 1] },
      uTexel: { value: [1, 1] },
      uTint: { value: hexToRGB(tint) },
      uHighlight: { value: hexToRGB(highlightColor) },
      uStrength: { value: strength },
      uSwirl: { value: swirl },
      uGlint: { value: glint },
      uTintAmount: { value: tintAmount },
      uThreshold: { value: threshold }
    };

    // ponytail: both layers share the front image's cover crop; fine while they're the same aspect
    load(src, frontTexture, image => {
      uniforms.uTextureSize.value = [image.naturalWidth || 1, image.naturalHeight || 1];
    });
    load(revealSrc, backTexture);

    const compositeMesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program: new Program(gl, { vertex: screenVertex, fragment: compositeFragment, uniforms, depthTest: false, depthWrite: false })
    });

    let width = 1;
    let height = 1;
    const resize = () => {
      width = Math.max(1, mount.clientWidth);
      height = Math.max(1, mount.clientHeight);
      renderer.setSize(width, height);
      uniforms.uResolution.value = [width, height];
      const scale = QUALITY_SCALE[quality] || QUALITY_SCALE.high;
      const fieldW = Math.max(2, Math.round(width * scale));
      const fieldH = Math.max(2, Math.round(height * scale));
      displacementTarget.setSize(fieldW, fieldH);
      uniforms.uTexel.value = [1 / fieldW, 1 / fieldH];
      dirty = true;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let previousX = 0;
    let previousY = 0;
    const onMove = event => {
      const rect = mount.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
      const x = event.clientX - rect.left;
      const y = rect.height - (event.clientY - rect.top);
      if (Math.abs(x - previousX) <= spacing && Math.abs(y - previousY) <= spacing) return;
      const wave = waves[current];
      current = (current + 1) % MAX_WAVES;
      wave.x = x;
      wave.y = y;
      wave.scale = START_SCALE;
      wave.target = START_SCALE * Math.max(1, spread);
      wave.opacity = 1;
      previousX = x;
      previousY = y;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let raf = 0;
    let previousTime = 0;
    const loop = now => {
      raf = requestAnimationFrame(loop);
      const delta = previousTime ? Math.min(0.05, (now - previousTime) / 1000) : 0;
      previousTime = now;

      const growth = 1 - Math.exp(-delta * 1.09);
      const decay = Math.exp((-delta * LIFE_CONSTANT) / Math.max(0.15, fade));

      let alive = 0;
      for (let i = 0; i < MAX_WAVES; i += 1) {
        const wave = waves[i];
        if (wave.opacity > 0) {
          wave.opacity *= decay;
          wave.scale += (wave.target - wave.scale) * growth;
          if (wave.opacity < 0.002) wave.opacity = 0;
        }
        opacities[i] = wave.opacity;
        if (!wave.opacity) continue;
        alive += 1;
        const half = (wave.scale * brushSize) / 2;
        offsets[i * 2] = (wave.x / width) * 2 - 1;
        offsets[i * 2 + 1] = (wave.y / height) * 2 - 1;
        scales[i * 2] = (half / width) * 2;
        scales[i * 2 + 1] = (half / height) * 2;
      }

      // idle: nothing moving, last frame already shows the plain photo
      if (pending || (!alive && !dirty)) return;
      dirty = alive > 0;

      geometry.attributes.iOffset.needsUpdate = true;
      geometry.attributes.iScale.needsUpdate = true;
      geometry.attributes.iOpacity.needsUpdate = true;
      renderer.render({ scene: waveMesh, target: displacementTarget, clear: true });
      renderer.render({ scene: compositeMesh });
    };
    raf = requestAnimationFrame(loop);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      if (canvas.parentNode === mount) mount.removeChild(canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
    // ponytail: props are read once at mount; add a uniform-sync effect if they ever need to animate
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, revealSrc, quality]);

  return <div ref={mountRef} aria-hidden="true" className={`absolute inset-0 pointer-events-none ${className}`.trim()} />;
};

export default RippleReveal;
