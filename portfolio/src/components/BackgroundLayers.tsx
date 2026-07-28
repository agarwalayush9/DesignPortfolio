export default function BackgroundLayers() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className="grid-dots" aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true">
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="orb-3" />
      </div>
      <div className="vignette" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}
