import Image from "next/image";

const tiles = [
  {
    src: "/imagery/rush-office-keuken.jpg",
    alt: "De kookstudio met kookeiland in het Rush kantoor",
    caption: "De kookstudio",
    wide: true,
  },
  {
    src: "/imagery/rush-office-vide.jpg",
    alt: "De vide met neon 4 en trap",
    caption: "De vide",
  },
  {
    src: "/imagery/rush-office-lounge.jpg",
    alt: "De lounge met oranje fauteuils",
    caption: "De lounge",
  },
  {
    src: "/imagery/rush-kook-1.jpg",
    alt: "Collega's koken samen de maandaglunch",
    caption: "Maandag: iemand kookt",
  },
  {
    src: "/imagery/rush-kook-5.jpg",
    alt: "Collega maakt de borden op voor de lunch",
    caption: "De lunch komt eraan",
  },
  {
    src: "/imagery/rush-teamfoto.jpg",
    alt: "Het voltallige team van Rush Marketing buiten",
    caption: "Team Rush",
    wide: true,
  },
  {
    src: "/imagery/rush-oven-1.jpg",
    alt: "Vers gebak uit de oven op kantoor",
    caption: "Af en toe bakken we",
  },
];

export function Office() {
  return (
    <section className="office" id="kantoor">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Kom maar binnen
          </span>
          <h2 data-reveal="1">
            Een kantoor waar je
            <br />
            graag <em>bent</em>.
          </h2>
          <p data-reveal="2">
            Kookstudio, vide, lounge en een tafel die elke maandag gedekt wordt. Op maandag
            kookt een collega de lunch, op woensdag werken we thuis, en de rest van de week
            zie je ons hier: werkend, sparrend, af en toe bakkend.
          </p>
        </div>
        <div className="mosaic">
          {tiles.map((tile, i) => (
            <div key={tile.src} className={`tile${tile.wide ? " wide" : ""}`} data-reveal={i % 3}>
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes={tile.wide ? "(max-width: 960px) 100vw, 66vw" : "(max-width: 960px) 100vw, 33vw"}
              />
              <span className="chip">{tile.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
