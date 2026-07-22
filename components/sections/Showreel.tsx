// Full-bleed autoplay loop between About and Skills. The source video has
// native letterbox bars (~5.5vw tall at full width), so the section pulls
// itself under the neighbors by that amount and About/Skills (z-10) overlay
// the bars — vw units keep the overlap proportional on mobile.
export function Showreel() {
  return (
    <section
      className="relative z-0 bg-neobrutalism-black overflow-hidden -mt-[9.5vw] -mb-[9.5vw]"
      aria-label="Showreel"
    >
      <video
        src="/showreel.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="block w-full h-auto"
      />
    </section>
  );
}
