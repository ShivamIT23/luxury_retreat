import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // 1. Scroll to top on normal route changes
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      // Use Lenis if available for smooth scroll
      type LenisType = { scrollTo: (target: number, opts?: { immediate?: boolean }) => void };
      type LenisWindow = Window & { lenis?: LenisType };
      const lenis = (window as LenisWindow).lenis;
      if (lenis && typeof lenis.scrollTo === 'function') {
        // immediate: true to snap to top without inertia carry-over
        lenis.scrollTo(0, { immediate: true });
      } else {
        // Fallback to native scroll
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  }, [pathname]);

  return null;
}