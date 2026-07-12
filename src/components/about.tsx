import Image from "next/image";

export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="text">
            <span className="hand" data-reveal>
              Wie wij zijn
            </span>
            <h2 data-reveal="1">
              Geen klassiek bureau.
              <br />
              Eén <em>club</em>.
            </h2>
            <p className="lede" data-reveal="2">
              Rush Marketing is het team achter Kitchen4All en Sani4All. We werken dagelijks voor
              20 Kitchen4All en 27 Sani4All winkels, vanuit één kantoor in Doetinchem.
            </p>
            <div className="body" data-reveal="3">
              <p>
                Bij Rush draait het om groei. Groei van onze ondernemers, groei van onze
                organisatie, én groei van jou. Marketeers, engineers, designers en strategen die
                dichtbij de winkels staan en hun werk écht het verschil laten maken op de vloer.
              </p>
              <p>
                Want daar doen we het voor: ondernemers die met passie hun winkel draaien. Zij
                staan elke dag voor hun klanten, wij staan elke dag voor hen. Met slimme
                oplossingen, korte lijnen en zonder gedoe.
              </p>
              <p>
                Werk mag leuk, zinvol en uitdagend zijn. Daar geloven we in. Vandaar onze belofte
                naar elkaar en naar de winkels: <b>Zo fijn kan &apos;t zijn.</b>
              </p>
            </div>
          </div>
          <div className="photo" data-reveal="2">
            <Image
              src="/imagery/rush-kook-4.jpg"
              alt="Twee collega's bakken samen in de kookstudio"
              fill
              sizes="(max-width: 960px) 100vw, 46vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
