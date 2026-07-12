"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  "/imagery/rush-office-tafel.jpg",
  "/imagery/rush-office-keuken.jpg",
  "/imagery/rush-office-vide.jpg",
];

/**
 * Wisselt de hero-achtergrond rustig door 3 kantoorfoto's met een
 * langzame cross-fade en Ken Burns-zoom. Valt terug op één stilstaand
 * beeld bij prefers-reduced-motion.
 */
export function HeroBackground() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % IMAGES.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      {IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={i === 0}
          className={`slide${i === active ? " on" : ""}`}
        />
      ))}
    </>
  );
}
