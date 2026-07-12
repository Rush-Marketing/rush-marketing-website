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
    // Zeeland heeft geen winkels, dus daar plaatsen we ook geen punten.
    const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path[data-prov]")).filter(
      (p) => p.getAttribute("data-name") !== "Zeeland",
    );
    if (!paths.length) return;

    // deterministische pseudo-random zodat de kaart bij elke render gelijk is
    let seed = 20260712;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    const total = K4A + S4A;
    const boxes = paths.map((p) => p.getBBox());
    const areas = boxes.map((b) => b.width * b.height);
    const areaSum = areas.reduce((a, b) => a + b, 0);

    // punt echt binnen het land? isPointInFill test tegen de provincievorm
    const inside = (path: SVGPathElement, x: number, y: number) =>
      path.isPointInFill(new DOMPoint(x, y));

    const sampleInside = (path: SVGPathElement, box: DOMRect, n: number) => {
      const out: { x: number; y: number }[] = [];
      let tries = 0;
      while (out.length < n && tries < n * 400) {
        tries++;
        const x = box.x + rand() * box.width;
        const y = box.y + rand() * box.height;
        if (inside(path, x, y)) out.push({ x, y });
      }
      return out;
    };

    // verdeel de punten over de provincies naar rato van hun oppervlak
    let placed: { x: number; y: number }[] = [];
    paths.forEach((path, i) => {
      const target = Math.max(1, Math.round((areas[i] / areaSum) * total));
      placed.push(...sampleInside(path, boxes[i], target));
    });

    // exact 47 punten
    placed = placed
      .map((p) => ({ p, r: rand() }))
      .sort((a, b) => a.r - b.r)
      .map(({ p }) => p);
    let guard = 0;
    while (placed.length < total && guard < paths.length * 60) {
      const i = guard % paths.length;
      guard++;
      placed.push(...sampleInside(paths[i], boxes[i], 1));
    }
    const chosen = placed.slice(0, total);

    const result: Dot[] = chosen.map((p, idx) => ({
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
                  <path key={p.id} data-prov={p.id} data-name={p.name} d={p.path} />
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
