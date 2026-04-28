import { useEffect, useState } from "react";

const STORAGE_KEY = "nocta:motion-pref";
type Pref = "auto" | "reduce" | "full";

/**
 * Reduced-motion detection with persistence + smart heuristics.
 *
 * Returns `reduced = true` when ANY of:
 *  - User explicitly chose "reduce" (persisted to localStorage)
 *  - OS prefers-reduced-motion media query matches
 *  - Device looks low-power (cores, memory, save-data, slow network)
 *  - Small viewport (<= 640px) → mobile gets simpler render
 *  - Initial page load was slow (Web Vitals heuristic, > 2.5s)
 *
 * User can override via setMotionPreference("full" | "reduce" | "auto").
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const compute = () => {
      // 1. Explicit user preference wins
      const stored = (localStorage.getItem(STORAGE_KEY) as Pref | null) ?? "auto";
      if (stored === "reduce") return true;
      if (stored === "full") return false;

      // 2. OS preference
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

      // 3. Device hints
      const nav = navigator as Navigator & {
        deviceMemory?: number;
        connection?: { saveData?: boolean; effectiveType?: string };
      };
      const lowCores = (nav.hardwareConcurrency ?? 8) <= 4;
      const lowMem = (nav.deviceMemory ?? 8) <= 4;
      const saveData = nav.connection?.saveData === true;
      const slowNet = ["slow-2g", "2g", "3g"].includes(nav.connection?.effectiveType ?? "");
      if (lowCores || lowMem || saveData || slowNet) return true;

      // 4. Small viewport → simpler render on mobile
      if (window.innerWidth <= 640) return true;

      // 5. Web Vitals heuristic — slow first paint indicates a slow device
      try {
        const [nav0] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
        if (nav0) {
          const fcpEntry = performance.getEntriesByName("first-contentful-paint")[0];
          const fcp = fcpEntry?.startTime ?? nav0.domContentLoadedEventEnd;
          if (fcp > 2500) return true;
        }
      } catch {
        // performance API not available — ignore
      }

      return false;
    };

    const update = () => setReduced(compute());
    update();

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", update);

    const onResize = () => update();
    window.addEventListener("resize", onResize);

    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) update();
    };
    window.addEventListener("storage", onStorage);

    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return reduced;
}

export function getMotionPreference(): Pref {
  if (typeof window === "undefined") return "auto";
  return (localStorage.getItem(STORAGE_KEY) as Pref | null) ?? "auto";
}

export function setMotionPreference(pref: Pref) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, pref);
  // Trigger our own listeners on the same tab
  window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY, newValue: pref }));
}
