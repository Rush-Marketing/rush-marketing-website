type Perk = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const perks: Perk[] = [
  {
    title: "Sport onder werktijd",
    body: "Elke week 1 uur sporten met een personal trainer, volledig in de baas z'n tijd. Daarbuiten onbeperkt sportfaciliteiten op kantoor.",
    icon: (
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" />
    ),
  },
  {
    title: "Vegetarische lunch elke dag",
    body: "Gezond en verzorgd. Op maandag staat een collega in de keuken en eten we samen. Leuk, gezellig, verbindend.",
    icon: (
      <path d="M3 10h18M5 6h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM8 14h.01M12 14h.01M16 14h.01" />
    ),
  },
  {
    title: "Flexibele werktijden",
    body: "Starttijd tussen 07:00 en 09:00 uur. Op woensdag werken we vanuit huis voor focus en balans.",
    icon: <path d="M12 8v4l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
  },
  {
    title: "25 vakantiedagen",
    body: "Op fulltime basis. Extra verlof bijkopen kan tot 40 uur per jaar. Plus een dag per jaar voor een goed doel naar keuze.",
    icon: <path d="M20 7L9 18l-5-5" />,
  },
  {
    title: "Opleidingsbudget",
    body: "€ 2.500 per 2 jaar voor cursus, training, opleiding of inspiratiereis. Passend bij jouw rol en waar je naartoe wilt.",
    icon: <path d="M4 4h16v4H4zM4 10h10M4 14h10M4 18h10M18 14v6M15 17h6" />,
  },
  {
    title: "Eigen salarishuis",
    body: "Transparant, eerlijk, met duidelijke groeipaden. We wijken positief af van de CAO zodat beloning past bij de markt.",
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  },
  {
    title: "Teamdagen, 4 per jaar",
    body: "Inspiratie, teambuilding, en gewoon plezier. Vier keer per jaar even uit de werkmodus samen met je collega's.",
    icon: (
      <path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
    ),
  },
  {
    title: "Gezondheid op niveau",
    body: "Preventief medisch onderzoek elke 2 jaar. Sport en voedingsplan op maat. Ergonomisch ingerichte werkplek en thuis.",
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </>
    ),
  },
];

export function Perks() {
  return (
    <section className="perks" id="perks">
      <div className="container">
        <div className="row">
          <div>
            <span className="eyebrow">Werken bij Rush</span>
            <h2>
              Hoe we voor je <em>zorgen</em>.
            </h2>
            <p className="lede">
              We willen dat je fijn kunt werken én lang plezier houdt in je werk. Daarom hebben we
              een paar afspraken gemaakt die zorgen voor rust, gezondheid en ruimte om te groeien.
            </p>
          </div>
          <div className="grid">
            {perks.map((perk) => (
              <div key={perk.title} className="perk">
                <div className="icon">
                  <svg viewBox="0 0 24 24">{perk.icon}</svg>
                </div>
                <b>{perk.title}</b>
                <p>{perk.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
