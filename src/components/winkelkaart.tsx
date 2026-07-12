"use client";

import { useState } from "react";

import { NL_LAND, NL_VIEWBOX, STORES } from "@/data/nl-stores";

const K4A = STORES.filter((s) => s.formule === "k4a").length;
const S4A = STORES.filter((s) => s.formule === "s4a").length;

const [, , VW, VH] = NL_VIEWBOX.split(" ").map(Number);

export function Winkelkaart() {
  const [hover, setHover] = useState<number | null>(null);

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
              Van Groningen tot Sittard. Elke winkel een eigen ondernemer, elke regio een eigen
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
            <svg
              viewBox={NL_VIEWBOX}
              role="img"
              aria-label="Kaart van Nederland met de 47 winkels van Kitchen4All en Sani4All"
            >
              <g className="land">
                {NL_LAND.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </g>
              <g className="dots">
                {STORES.map((s, i) => (
                  <circle
                    key={`${s.city}-${s.formule}`}
                    cx={s.x}
                    cy={s.y}
                    r={hover === i ? 8 : 5}
                    className={`dot ${s.formule}${hover === i ? " on" : ""}`}
                    style={{ animationDelay: `${(i % 10) * 0.22}s` }}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover((h) => (h === i ? null : h))}
                  />
                ))}
              </g>
            </svg>
            {hover !== null && STORES[hover] ? (
              <span
                className="tip"
                style={{
                  left: `${(STORES[hover].x / VW) * 100}%`,
                  top: `${(STORES[hover].y / VH) * 100}%`,
                }}
              >
                {STORES[hover].formule === "k4a" ? "Kitchen4All" : "Sani4All"} ·{" "}
                {STORES[hover].city}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
