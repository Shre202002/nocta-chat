/**
 * Grok-style animated aurora background.
 * Pure CSS — slowly drifting blurred conic gradients to evoke the x.ai hero motion.
 */
export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background">
      {/* Base radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0_0_0)_75%)]" />

      {/* Drifting conic blobs */}
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />

      {/* Soft grain overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay noise" />

      {/* Bottom fade into black */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
