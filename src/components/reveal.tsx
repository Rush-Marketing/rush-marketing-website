"use client";

import { useEffect } from "react";

/**
 * Voegt `.in` toe aan elementen met [data-reveal] zodra ze in beeld komen.
 * Bewust scroll-gebaseerd (geen IntersectionObserver): dat is robuuster in
 * combinatie met de view-transitions-wrapper en faalt "open" (content wordt
 * getoond, nooit permanent verborgen). Respecteert prefers-reduced-motion.
 */
export function Reveal() {
  useEffect(() => {
    let els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    let raf = 0;
    const check = () => {
      raf = 0;
      const vh = window.innerHeight;
      els = els.filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9) {
          el.classList.add("in");
          return false;
        }
        return true;
      });
      if (!els.length) detach();
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(check);
    };
    const detach = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // failsafe: reveal alles na een tijdje, zodat er nooit iets verborgen blijft
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
      els = [];
      detach();
    }, 4000);

    return () => {
      detach();
      window.clearTimeout(fallback);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
