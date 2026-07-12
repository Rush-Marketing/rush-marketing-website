"use client";

import { useEffect, useRef, useState } from "react";

import { NL_PROVINCES, NL_VIEWBOX } from "@/data/nl-map";

type Dot = { x: number; y: number; formule: "k4a" | "s4a" };

// 20 Kitchen4All + 27 Sani4All = 47 winkels. Verdeeld over de provincies naar
// rato, met de posities gesampled uit de provinciepaden zodat ze op land vallen.
const K4A = 20;
const S4A = 27;

export function Winkelkaart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path[data-prov]"));
    if (!paths.length) return;

    // deterministische pseudo-random zodat de kaart bij elke render gelijk is
    let seed = 20260712;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    const total = K4A + S4A;
    // verdeel de punten over provincies naar verhouding van hun omtrek,
    // met ceil + wat extra zodat we altijd minstens `total` punten hebben
    const lengths = paths.map((p) => p.getTotalLength());
    const sum = lengths.reduce((a, b) => a + b, 0);
    const perProv = lengths.map((l) => Math.max(2, Math.ceil((l / sum) * total) + 1));

    const placed: { x: number; y: number }[] = [];
    paths.forEach((path, i) => {
      const len = lengths[i];
      const box = path.getBBox();
      const cx = box.x + box.width / 2;
      const cy = box.y + box.height / 2;
      for (let k = 0; k < perProv[i]; k++) {
        const pt = path.getPointAtLength(rand() * len);
        // trek het punt naar het midden van de provincie zodat het binnen land valt
        const t = 0.35 + rand() * 0.35;
        placed.push({ x: pt.x + (cx - pt.x) * t, y: pt.y + (cy - pt.y) * t });
      }
    });

    // exact 47 punten, en verdeel de formules verspreid over de kaart
    const shuffled = placed
      .map((p) => ({ p, r: rand() }))
      .sort((a, b) => a.r - b.r)
      .slice(0, total)
      .map(({ p }) => p);

    const result: Dot[] = shuffled.map((p, idx) => ({
      x: p.x,
      y: p.y,
      formule: idx % 2 === 0 && idx < K4A * 2 ? "k4a" : "s4a",
    }));
    // corrigeer aantallen exact naar 20 / 27
    let k = 0;
    for (const d of result) {
      if (d.formule === "k4a") k++;
    }
    for (const d of result) {
      if (k > K4A && d.formule === "k4a") {
        d.formule = "s4a";
        k--;
      } else if (k < K4A && d.formule === "s4a") {
        d.formule = "k4a";
        k++;
      }
    }

    setDots(result);
  }, []);

  return (
    <section className="winkelkaart" id="winkels">
      <div className="container">
        <div className="row">
          <div className="text">
            <span className="hand" data-reveal>
              Waar we werken
            </span>
            <h2 data-reveal="1">
              47 winkels,
              <br />
              door heel <em>Nederland</em>.
            </h2>
            <p data-reveal="2">
              Van Groningen tot Limburg. Elke winkel een eigen ondernemer, elke regio een eigen
              verhaal. Wij bouwen de marketing die overal lokaal aanvoelt.
            </p>
            <ul className="legend" data-reveal="3">
              <li>
                <span className="key k4a" /> Kitchen4All · {K4A} winkels
              </li>
              <li>
                <span className="key s4a" /> Sani4All · {S4A} winkels
              </li>
            </ul>
          </div>

          <div className="map" data-reveal="2">
            <svg ref={svgRef} viewBox={NL_VIEWBOX} role="img" aria-label="Kaart van Nederland met 47 winkels">
              <g className="land">
                {NL_PROVINCES.map((p) => (
                  <path key={p.id} data-prov={p.id} d={p.path} />
                ))}
              </g>
              <g className="dots">
                {dots.map((d, i) => (
                  <circle
                    key={i}
                    cx={d.x}
                    cy={d.y}
                    r={hover === i ? 8 : 5}
                    className={`dot ${d.formule}${hover === i ? " on" : ""}`}
                    style={{ animationDelay: `${(i % 10) * 0.22}s` }}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover((h) => (h === i ? null : h))}
                  />
                ))}
              </g>
            </svg>
            {hover !== null && dots[hover] ? (
              <span
                className="tip"
                style={{
                  left: `${(dots[hover].x / 613) * 100}%`,
                  top: `${(dots[hover].y / 724) * 100}%`,
                }}
              >
                {dots[hover].formule === "k4a" ? "Kitchen4All" : "Sani4All"}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
