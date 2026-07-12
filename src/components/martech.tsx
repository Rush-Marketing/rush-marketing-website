"use client";

import { useEffect, useRef, useState } from "react";

type NodeId = "winkels" | "dwh" | "automation" | "ai" | "campagnes" | "resultaat";

type EngineNode = {
  id: NodeId;
  title: string;
  tag: string;
  desc: string;
  /** posities in % van de container, voor desktop (d) en mobiel (m) */
  d: { x: number; y: number };
  m: { x: number; y: number };
  kind: "source" | "hub" | "action" | "result";
};

const NODES: EngineNode[] = [
  {
    id: "winkels",
    title: "47 winkels",
    tag: "De bron",
    desc: "Elke winkel levert data: bezoek, offertes, verkoop. Realtime binnen bij ons.",
    d: { x: 8, y: 50 },
    m: { x: 50, y: 7 },
    kind: "source",
  },
  {
    id: "dwh",
    title: "Eén datawarehouse",
    tag: "Bron van waarheid",
    desc: "Alle data komt samen op één plek. We beslissen op cijfers, niet op onderbuik.",
    d: { x: 33, y: 50 },
    m: { x: 50, y: 27 },
    kind: "hub",
  },
  {
    id: "automation",
    title: "Automation",
    tag: "",
    desc: "E-mailflows, leadopvolging en rapportages. Wat een systeem kan, doet een systeem.",
    d: { x: 64, y: 18 },
    m: { x: 24, y: 50 },
    kind: "action",
  },
  {
    id: "ai",
    title: "AI",
    tag: "",
    desc: "Van content tot data-analyse. AI haalt ruis en dubbel werk weg, elke dag.",
    d: { x: 64, y: 50 },
    m: { x: 50, y: 62 },
    kind: "action",
  },
  {
    id: "campagnes",
    title: "Campagnes",
    tag: "",
    desc: "SEA, SEO en lokale activatie, aangestuurd op wat écht werkt in de winkel.",
    d: { x: 64, y: 82 },
    m: { x: 76, y: 50 },
    kind: "action",
  },
  {
    id: "resultaat",
    title: "Groei op de vloer",
    tag: "Het resultaat",
    desc: "Meer klanten in de winkel. Meetbaar, per formule en per regio.",
    d: { x: 91, y: 50 },
    m: { x: 50, y: 94 },
    kind: "result",
  },
];

const LINKS: [NodeId, NodeId][] = [
  ["winkels", "dwh"],
  ["dwh", "automation"],
  ["dwh", "ai"],
  ["dwh", "campagnes"],
  ["automation", "resultaat"],
  ["ai", "resultaat"],
  ["campagnes", "resultaat"],
];

function cubic(p0: number, c0: number, c1: number, p1: number, t: number) {
  const u = 1 - t;
  return u * u * u * p0 + 3 * u * u * t * c0 + 3 * u * t * t * c1 + t * t * t * p1;
}

export function Martech() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<NodeId>("dwh");
  const activeRef = useRef<NodeId>("dwh");
  activeRef.current = active;

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let mobile = false;

    const centers = () => {
      const map = {} as Record<NodeId, { x: number; y: number }>;
      for (const n of NODES) {
        const p = mobile ? n.m : n.d;
        map[n.id] = { x: (p.x / 100) * w, y: (p.y / 100) * h };
      }
      return map;
    };

    let pts = {} as Record<NodeId, { x: number; y: number }>;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      mobile = window.innerWidth <= 720;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = centers();
    };
    resize();
    window.addEventListener("resize", resize);

    // particles: per link een paar deeltjes met een faseverschil
    const particles = LINKS.flatMap(([a, b], li) =>
      Array.from({ length: 3 }, (_, k) => ({ a, b, t: (k / 3 + li * 0.13) % 1 })),
    );

    const controlPoints = (p0: { x: number; y: number }, p1: { x: number; y: number }) => {
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;
      if (Math.abs(dx) >= Math.abs(dy)) {
        return { c0: { x: p0.x + dx * 0.5, y: p0.y }, c1: { x: p1.x - dx * 0.5, y: p1.y } };
      }
      return { c0: { x: p0.x, y: p0.y + dy * 0.5 }, c1: { x: p1.x, y: p1.y - dy * 0.5 } };
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const act = activeRef.current;

      // verbindingslijnen
      for (const [a, b] of LINKS) {
        const p0 = pts[a];
        const p1 = pts[b];
        const { c0, c1 } = controlPoints(p0, p1);
        const lit = a === act || b === act;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.bezierCurveTo(c0.x, c0.y, c1.x, c1.y, p1.x, p1.y);
        ctx.strokeStyle = lit ? "rgba(207,141,64,0.55)" : "rgba(255,255,255,0.12)";
        ctx.lineWidth = lit ? 1.6 : 1;
        ctx.stroke();
      }

      // deeltjes
      for (const p of particles) {
        const p0 = pts[p.a];
        const p1 = pts[p.b];
        const { c0, c1 } = controlPoints(p0, p1);
        const x = cubic(p0.x, c0.x, c1.x, p1.x, p.t);
        const y = cubic(p0.y, c0.y, c1.y, p1.y, p.t);
        const lit = p.a === act || p.b === act;
        const r = lit ? 3.2 : 2.2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = lit ? "#f4e4cc" : "#cf8d40";
        ctx.shadowColor = "#cf8d40";
        ctx.shadowBlur = lit ? 14 : 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        if (!reduce) {
          p.t += (lit ? 0.0022 : 0.0016) + 0.0004;
          if (p.t > 1) p.t -= 1;
        }
      }
    };

    let raf = 0;
    const loop = () => {
      draw();
      raf = window.requestAnimationFrame(loop);
    };
    if (reduce) {
      draw();
    } else {
      raf = window.requestAnimationFrame(loop);
    }

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const activeNode = NODES.find((n) => n.id === active) ?? NODES[1];

  return (
    <section className="martech" id="martech">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Martech is onze core
          </span>
          <h2 data-reveal="1">
            Techniek die &apos;t
            <br />
            <em>fijn</em> maakt.
          </h2>
          <p data-reveal="2">
            We geloven niet in marketing óf techniek. Bij Rush is het één ding. Dit is de motor
            eronder: van de winkel tot het resultaat, live opgebouwd in de browser.
          </p>
        </div>

        <div className="engine" data-reveal>
          <div className="stage" ref={wrapRef}>
            <canvas ref={canvasRef} aria-hidden="true" />
            {NODES.map((n) => (
              <button
                key={n.id}
                type="button"
                className={`node ${n.kind}${active === n.id ? " active" : ""}`}
                style={
                  {
                    "--dx": `${n.d.x}%`,
                    "--dy": `${n.d.y}%`,
                    "--mx": `${n.m.x}%`,
                    "--my": `${n.m.y}%`,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setActive(n.id)}
                onFocus={() => setActive(n.id)}
                onClick={() => setActive(n.id)}
                aria-pressed={active === n.id}
              >
                <span className="dot" />
                <span className="label">{n.title}</span>
              </button>
            ))}
          </div>

          <div className="detail" aria-live="polite">
            <b>
              {activeNode.tag ? <span className="tag">{activeNode.tag}</span> : null}
              {activeNode.title}
            </b>
            <p>{activeNode.desc}</p>
          </div>
        </div>

        <p className="stack" data-reveal>
          Onze stack: Next.js · Payload · PostHog · Vercel · en alles wat we morgen beter vinden.
        </p>
      </div>
    </section>
  );
}
