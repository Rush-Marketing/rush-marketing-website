import Image from "next/image";

const brands = [
  {
    name: "Kitchen4All",
    url: "https://www.kitchen4all.nl",
    display: "kitchen4all.nl",
    image: "/imagery/kitchen4all-hero.jpg",
    logo: "/logos/kitchen4all-logo.png",
    facts: "20 winkels · 3.000+ keukens per jaar",
    body: "De keukenfranchise die inspiratie, apparatuur en service combineert. Winkels door heel Nederland en een online platform dat de hele aankoopreis begeleidt.",
  },
  {
    name: "Sani4All",
    url: "https://www.sani4all.nl",
    display: "sani4all.nl",
    image: "/imagery/sani4all-hero.jpg",
    logo: "/logos/sani4all-logo.png",
    facts: "27 winkels · 6.000+ badkamers per jaar",
    body: "De badkamerfranchise die het begrijpelijk en betaalbaar maakt. Advies van mensen die hun vak verstaan, geen trucjes, gewoon eerlijk.",
  },
];

export function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Onze merken
          </span>
          <h2 data-reveal="1">
            Twee merken,
            <br />
            één familie.
          </h2>
          <p data-reveal="2">
            Kitchen4All en Sani4All delen hetzelfde DNA: eerlijke prijzen, slimme winkels, échte
            begeleiding. Wij maken de marketing voor beide formules, van strategie tot campagne
            tot materiaal op de vloer.
          </p>
        </div>
        <div className="cards">
          {brands.map((brand, i) => (
            <a
              key={brand.name}
              className="brand-card"
              href={brand.url}
              target="_blank"
              rel="noreferrer"
              data-reveal={i}
            >
              <div className="photo">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                />
                <div className="logo">
                  <Image src={brand.logo} alt="" width={110} height={30} />
                </div>
              </div>
              <div className="body">
                <b className="facts">{brand.facts}</b>
                <p>{brand.body}</p>
                <span className="url">
                  {brand.display} <span className="arr">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
