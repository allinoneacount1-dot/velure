"use client";

import { useEffect, useRef, useCallback } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let cancelled = false;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      if (cancelled) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };
      rafRef.current = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, []);

  return <>{children}</>;
}

export function useLenisScroll() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollTo = useCallback((target: string | number | HTMLElement, options?: Record<string, unknown>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(target, options);
    } else {
      if (typeof target === "string") {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth", ...options });
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: "smooth", ...options });
      }
    }
  }, []);

  return { scrollTo };
}
