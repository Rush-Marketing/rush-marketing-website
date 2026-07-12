import Image from "next/image";

import { jobs } from "@/data/jobs";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="bg" aria-hidden="true">
        <Image
          src="/imagery/rush-office-tafel.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className="container inner">
        <p className="kicker" data-reveal>
          Werken bij Rush Marketing
        </p>
        <h1 data-reveal="1">
          <Image
            src="/logos/zo-fijn-script.png"
            alt="Zo fijn kan 't zijn"
            width={2417}
            height={542}
            priority
            className="script"
          />
        </h1>
        <p className="sub" data-reveal="2">
          Wij zijn het team van marketing, tech en data achter Kitchen4All en Sani4All. Eén club
          die elke dag klaarstaat voor 47 winkels en een stel hele fijne ondernemers.
        </p>
        <div className="ctas" data-reveal="3">
          <a href="#jobs" className="btn btn-light">
            Bekijk {jobs.length} vacatures
          </a>
          <a href="#team" className="btn btn-glass">
            Ontmoet het team
          </a>
        </div>
      </div>
      <span className="caption">Ons kantoor · Raadhuisstraat, Doetinchem</span>
    </header>
  );
}
