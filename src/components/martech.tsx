const features = [
  {
    title: "Eigen 4All Platform",
    body: "De websites, het CMS en de tooling van beide formules bouwen en beheren we zelf. Van idee naar live, zonder wachtrij en zonder extern bureau.",
    icon: (
      <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM8 21h8M12 17v4" />
    ),
  },
  {
    title: "Eén datawarehouse",
    body: "Alle data uit winkels, webshops en campagnes komt samen op één plek. We beslissen op cijfers, niet op onderbuik.",
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
  },
  {
    title: "Automation overal",
    body: "E-mailflows, leadopvolging, rapportages: wat een systeem kan, doet een systeem. Zo blijft er tijd over voor werk dat er echt toe doet.",
    icon: (
      <path d="M12 2v4M12 18v4M4.9 4.9l2.9 2.9M16.2 16.2l2.9 2.9M2 12h4M18 12h4M4.9 19.1l2.9-2.9M16.2 7.8l2.9-2.9" />
    ),
  },
  {
    title: "AI in het dagelijkse werk",
    body: "Van contentproductie tot data-analyse: we zetten AI in waar het werk beter én leuker van wordt. Nieuwsgierig blijven hoort bij de baan.",
    icon: (
      <path d="M12 3l1.8 4.6L18 9.4l-4.2 1.8L12 16l-1.8-4.8L6 9.4l4.2-1.8L12 3zM19 15l.9 2.3 2.1.9-2.1.9L19 21l-.9-1.9-2.1-.9 2.1-.9L19 15z" />
    ),
  },
];

export function Martech() {
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
            We geloven niet in marketing óf techniek. Bij Rush is het één ding. We bouwen ons
            eigen platform, sturen op data en automatiseren alles wat repetitief is.
          </p>
        </div>
        <div className="grid">
          {features.map((f, i) => (
            <div key={f.title} className="feature" data-reveal={i}>
              <div className="icon">
                <svg viewBox="0 0 24 24">{f.icon}</svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
        <p className="stack" data-reveal>
          Onze stack: Next.js · Payload · PostHog · Vercel · en alles wat we morgen beter vinden.
        </p>
      </div>
    </section>
  );
}
