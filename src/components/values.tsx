const values = [
  {
    title: "Echt ontzorgen",
    motto: "Underpromise, overdeliver. Mikken op een 9+.",
    body: "We doen wat we beloven, denken vooruit en nemen eigenaarschap. We spreken een plan af en houden ons eraan. Niet omdat het moet, maar omdat we het de ondernemers gunnen.",
  },
  {
    title: "Samen dichtbij",
    motto: "Dichtbij als voorwaarde.",
    body: "We kennen de ondernemers persoonlijk en weten wat er speelt. We zijn benaderbaar en gelijkwaardig, vragen en bieden hulp, ook tussen teams. En we zeggen het eerlijk als iets niet kan.",
  },
  {
    title: "Steeds slimmer",
    motto: "Start before you're ready.",
    body: "Het hoeft niet perfect: gewoon doen en gaan. We maken het snel concreet, proberen het uit en kijken of het werkt. Nieuwsgierigheid is de motor, techniek de versneller en nooit het doel.",
  },
];

export function Values() {
  return (
    <section className="values" id="values">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Onze kernwaarden
          </span>
          <h2 data-reveal="1">
            Fijn om
            <br />
            erbij te <em>zijn</em>.
          </h2>
          <p data-reveal="2">
            Dat moet een ondernemer, een collega en een klant voelen als ze met Rush werken. Met MT
            en directie hebben we drie kernwaarden vastgesteld. Ze sturen hoe we werken,
            samenwerken en groeien.
          </p>
        </div>
        <div className="grid">
          {values.map((v, i) => (
            <div key={v.title} className="value" data-reveal={i}>
              <h3>{v.title}</h3>
              <span className="motto">{v.motto}</span>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
