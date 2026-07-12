"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { employees, employeesByTeam, teams, type Team } from "@/data/employees";

function TeamRail({ team }: { team: Team }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const update = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const overflow = rail.scrollWidth > rail.clientWidth + 8;
    setHasOverflow(overflow);
    setCanPrev(rail.scrollLeft > 8);
    setCanNext(rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 8);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    update();
    rail.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(rail);
    return () => {
      rail.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollByCards = (dir: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const step = Math.max(246, Math.floor(rail.clientWidth / 246) * 246);
    const from = rail.scrollLeft;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
    // Sommige embedded browsers voeren smooth scroll niet uit; val dan terug op direct.
    window.setTimeout(() => {
      if (Math.abs(rail.scrollLeft - from) < 2) {
        rail.scrollLeft = from + dir * step;
      }
      update();
    }, 250);
  };

  const people = employeesByTeam(team.slug);

  return (
    <div className="team-rail" data-reveal>
      <div className="head">
        <div className="text">
          <h3>{team.name}</h3>
          <p>{team.description}</p>
        </div>
        <div className="side">
          {team.openRoles > 0 ? (
            <a href="#jobs" className="open-link">
              {team.openRoles} open {team.openRoles === 1 ? "rol" : "rollen"} →
            </a>
          ) : null}
          {hasOverflow ? (
            <div className="arrows">
              <button
                type="button"
                aria-label={`Vorige collega's van ${team.name}`}
                onClick={() => scrollByCards(-1)}
                disabled={!canPrev}
              >
                ←
              </button>
              <button
                type="button"
                aria-label={`Volgende collega's van ${team.name}`}
                onClick={() => scrollByCards(1)}
                disabled={!canNext}
              >
                →
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="rail" ref={railRef}>
        {people.map((p) => (
          <div key={p.name} className="card" tabIndex={0}>
            <div className="photo">
              <Image src={p.avatarUrl} alt={p.name} fill sizes="240px" />
              <div className="overlay">
                <p className="bio">{p.bio}</p>
                <p className="call">
                  <b>Bel voor:</b> {p.callFor}
                </p>
              </div>
            </div>
            <div className="meta">
              <b>{p.name}</b>
              <span>{p.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function People() {
  return (
    <section className="people" id="team">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Wie doet wat
          </span>
          <h2 data-reveal="1">
            {employees.length} mensen.
            <br />
            Bij naam <em>en toenaam</em>.
          </h2>
          <p data-reveal="2">
            Geen stockfoto&apos;s, geen anoniem &quot;het team&quot;. Dit zijn de collega&apos;s
            die elke dag aan Kitchen4All en Sani4All werken, en waarvoor je ze kunt bellen.
          </p>
        </div>

        {teams.map((team) => (
          <TeamRail key={team.slug} team={team} />
        ))}
      </div>
    </section>
  );
}
