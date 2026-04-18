const values = [
  {
    num: "01",
    title: "Betrokken",
    body: "Echt contact met de winkels en de mensen erachter. Oog voor hun context en belangen. Niet van bovenaf sturen, maar náást ze staan. We luisteren goed en bouwen aan relaties voor de lange termijn.",
  },
  {
    num: "02",
    title: "Inventief",
    body: "Technologie inzetten waar het zinvol is. Strategisch met creatieve twist. Minder ruis, meer effect. We combineren creativiteit, tech en data om meer te bereiken met minder gedoe.",
  },
  {
    num: "03",
    title: "Ambitieus",
    body: "De ambitie om echte resultaten te boeken voor de winkels is sterk voelbaar. Geen marketing om de marketing, maar meetbare waarde op de vloer. We doen wat werkt, met focus op concrete resultaten.",
  },
  {
    num: "04",
    title: "Energiek",
    body: "We hebben teamgevoel: plezier in samenwerken, enthousiasme en vertrouwen. Een club die het samen doet, met loyaliteit en een vleugje humor. Die energie werkt aanstekelijk, ook naar de winkels toe.",
  },
];

export function Values() {
  return (
    <section className="values" id="values">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Onze merkwaarden</span>
          <h2>
            Vier waarden
            <br />
            die je écht <em>voelt</em>.
          </h2>
          <p>
            Geen posters aan de muur. In juni 2025 hebben we met het hele team vastgesteld hoe we
            met elkaar en met onze franchisepartners willen werken. Dit zijn de vier waarden die
            sindsdien alles sturen.
          </p>
        </div>
        <div className="grid">
          {values.map((v) => (
            <div key={v.num} className="value">
              <span className="num">{v.num}</span>
              <div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
