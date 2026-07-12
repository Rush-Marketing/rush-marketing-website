const values = [
  {
    num: "01",
    title: "Betrokken",
    body: "Echt contact met de winkels en de mensen erachter. Niet van bovenaf sturen, maar naast ze staan. We luisteren goed en bouwen aan relaties voor de lange termijn.",
  },
  {
    num: "02",
    title: "Inventief",
    body: "Technologie inzetten waar het zinvol is. Strategisch, met een creatieve twist. Minder ruis, meer effect: we combineren creativiteit, tech en data.",
  },
  {
    num: "03",
    title: "Ambitieus",
    body: "Geen marketing om de marketing, maar meetbare waarde op de vloer. We doen wat werkt, met focus op concrete resultaten voor de winkels.",
  },
  {
    num: "04",
    title: "Energiek",
    body: "Plezier in samenwerken, enthousiasme en vertrouwen. Een club die het samen doet, met loyaliteit en een vleugje humor. Die energie werkt aanstekelijk.",
  },
];

export function Values() {
  return (
    <section className="values" id="values">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Onze waarden
          </span>
          <h2 data-reveal="1">
            Vier waarden die
            <br />
            je écht <em>voelt</em>.
          </h2>
          <p data-reveal="2">
            Geen posters aan de muur. Met het hele team hebben we vastgesteld hoe we met elkaar en
            met onze franchisepartners willen werken. Dit stuurt sindsdien alles.
          </p>
        </div>
        <div className="grid">
          {values.map((v, i) => (
            <div key={v.num} className="value" data-reveal={i}>
              <span className="num">{v.num}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
