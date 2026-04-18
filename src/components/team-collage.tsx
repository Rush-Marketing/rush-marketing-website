import Image from "next/image";

export function TeamCollage() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Zo doen we het</span>
          <h2>
            Een dag bij Rush
            <br />
            ziet er zo uit.
          </h2>
          <p>
            Op maandag kookt er iemand uit het team de lunch. Op woensdag werken we thuis. De rest
            van de week zie je ons op kantoor: werkend, sparrend, af en toe bakkend, altijd met
            koffie binnen handbereik.
          </p>
        </div>
        <div className="grid">
          <div className="cell tall">
            <Image
              src="/imagery/rush-portrait-1.jpg"
              alt="Collega aan het werk in de keuken"
              fill
              sizes="(max-width: 960px) 50vw, 25vw"
            />
          </div>
          <div className="cell">
            <Image
              src="/imagery/rush-kook-1.jpg"
              alt="Koken op kantoor"
              fill
              sizes="(max-width: 960px) 50vw, 25vw"
            />
          </div>
          <div className="cell caption tall">
            <span className="tag">Elke maandag</span>
            <h3>
              Samen lunchen,
              <br />
              samen plannen.
            </h3>
            <p>
              Een collega kookt, de rest dekt de tafel. Geen agendapunten, wel de beste gesprekken
              van de week.
            </p>
          </div>
          <div className="cell">
            <Image
              src="/imagery/rush-portrait-5.jpg"
              alt=""
              fill
              sizes="(max-width: 960px) 50vw, 25vw"
            />
          </div>
          <div className="cell">
            <Image
              src="/imagery/rush-lunch-1.jpg"
              alt="Lunch met het team"
              fill
              sizes="(max-width: 960px) 50vw, 25vw"
            />
          </div>
          <div className="cell gold">
            <div className="big">20</div>
            <div className="sub">specialisten, één club</div>
          </div>
          <div className="cell tall">
            <Image
              src="/imagery/rush-team-1.jpg"
              alt=""
              fill
              sizes="(max-width: 960px) 50vw, 25vw"
            />
          </div>
          <div className="cell wide">
            <Image
              src="/imagery/rush-kook-5.jpg"
              alt="Bakken en proeven met het team"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
          <div className="cell">
            <Image
              src="/imagery/rush-oven-1.jpg"
              alt=""
              fill
              sizes="(max-width: 960px) 50vw, 25vw"
            />
          </div>
          <div className="cell">
            <Image
              src="/imagery/rush-portrait-3.jpg"
              alt=""
              fill
              sizes="(max-width: 960px) 50vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
