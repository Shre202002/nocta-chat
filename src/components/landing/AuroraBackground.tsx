import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Grok-style animated aurora background.
 * Disables drift animations & heavy blur when prefers-reduced-motion
 * is set or the device looks low-power. Falls back to a static gradient.
 */
export function AuroraBackground() {
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* Base radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0_0_0)_75%)]" />

      {/* Grok-style: dark left, bright spreading light from the right */}
      <div className="grok-light-right" />
      {!reduced && <div className="grok-light-right-anim" />}
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-background via-background/90 to-transparent" />

      {/* Bottom fade into black */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
