import Image from "next/image";

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div>
            <span className="eyebrow">Wie wij zijn</span>
            <h2>
              De marketing
              <br />
              achter <em>4All</em>.
            </h2>
            <p className="lede">
              Rush Marketing is het marketingbureau achter Kitchen4All en Sani4All. We werken
              dagelijks voor 20 Kitchen4All en 27 Sani4All showrooms, vanuit één kantoor in
              Doetinchem.
            </p>
            <div className="body">
              <p>
                Bij Rush draait het om groei. Groei van onze franchisepartners, groei van onze
                organisatie, én groei van jou als medewerker. Samen werken we in een moderne,
                dynamische omgeving waar creativiteit en data elkaar versterken.
              </p>
              <p>
                We zijn geen klassiek bureau. We zijn een club mensen die het samen doet:
                marketeers, developers, designers, content makers en strategen die dichtbij de
                winkels staan en hun werk écht het verschil laten maken op de vloer. Verdeeld over
                vier teams: Merk &amp; Content, Performance &amp; Groei, Franchise &amp; Lokale
                Activatie en Tech &amp; Innovatie.
              </p>
              <p>
                Werk mag leuk, zinvol en uitdagend zijn. Daar geloven we in. Vandaar onze belofte
                naar elkaar en naar de winkels: <b>Zo fijn kan &apos;t zijn.</b>
              </p>
            </div>
          </div>
          <div className="collage">
            <div className="img a">
              <Image
                src="/imagery/rush-team-2.jpg"
                alt="Team van Rush Marketing"
                fill
                sizes="(max-width: 960px) 70vw, 35vw"
              />
            </div>
            <div className="img b">
              <Image
                src="/imagery/rush-kook-4.jpg"
                alt="Kookmoment op kantoor"
                fill
                sizes="(max-width: 960px) 60vw, 30vw"
              />
            </div>
            <div className="stamp">
              Zo fijn
              <br />
              kan &apos;t
              <br />
              zijn.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
