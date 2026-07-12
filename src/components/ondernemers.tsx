const pillars = [
  {
    title: "Marketeers als collega's, geen bureau als leverancier",
    body: "Ons hele team werkt maar voor twee merken: Kitchen4All en Sani4All. We kennen elke winkel, elke regio en elke actie. Elke campagne start met die context.",
  },
  {
    title: "Lokaal wint van landelijk",
    body: "Een landelijke commercial vult geen winkel in Hoogeveen. Daarom bouwen we campagnes rond jouw verzorgingsgebied, en staan we naast je bij een opening, verbouwing of lokale actie.",
  },
  {
    title: "Data op de werkvloer, niet in de kelder",
    body: "Geen veertig dashboards, maar heldere cijfers waar je iets mee kunt. Zodat jij beslissingen neemt op basis van wat er echt gebeurt in jouw winkel.",
  },
  {
    title: "Slimmer met tech, persoonlijk in de winkel",
    body: "We bouwen ons eigen platform en zetten AI in om ruis en dubbel werk weg te halen. Zo houd jij tijd over voor waar het om draait: jouw klanten.",
  },
];

export function Ondernemers() {
  return (
    <section className="ondernemers" id="ondernemers">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Voor onze ondernemers
          </span>
          <h2 data-reveal="1">
            Retail kan anders.
            <br />
            Dat bewijzen we <em>samen</em>.
          </h2>
          <p data-reveal="2">
            De 47 winkels van Kitchen4All en Sani4All worden gerund door ondernemers die met
            passie hun zaak draaien. Zij staan elke dag voor hun klanten. Wij staan elke dag voor
            hen. Minder traditioneel, moderner, en altijd met de winkel als vertrekpunt.
          </p>
        </div>
        <div className="grid">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="pillar" data-reveal={i % 2}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>
        <p className="closing" data-reveal>
          Ondernemen doe je zelf. Maar bij 4All doe je &apos;t nooit alleen.
        </p>
      </div>
    </section>
  );
}
