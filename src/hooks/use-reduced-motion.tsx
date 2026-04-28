import { useEffect, useState } from "react";

/**
 * Returns true when the user prefers reduced motion OR when the device
 * appears to be low-power (few CPU cores, mobile, or save-data enabled).
 * Used to disable / simplify expensive animated backgrounds.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const lowCores = (nav.hardwareConcurrency ?? 8) <= 4;
    const lowMem = (nav.deviceMemory ?? 8) <= 4;
    const saveData = nav.connection?.saveData === true;
    const slowNet = ["slow-2g", "2g", "3g"].includes(nav.connection?.effectiveType ?? "");
    const lowPower = lowCores || lowMem || saveData || slowNet;

    const update = () => setReduced(mq.matches || lowPower);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
