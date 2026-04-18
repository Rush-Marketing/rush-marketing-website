import Image from "next/image";

export function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Onze merken</span>
          <h2>
            Twee merken,
            <br />
            één familie.
          </h2>
          <p>
            Kitchen4All en Sani4All delen dezelfde DNA. Eerlijke prijzen, slimme showrooms, échte
            begeleiding. Wij maken de marketing voor beide franchises, van strategie tot campagne
            tot campagnemateriaal op de vloer.
          </p>
        </div>
        <div className="cards">
          <a
            className="brand-card"
            href="https://www.kitchen4all.nl"
            target="_blank"
            rel="noreferrer"
          >
            <div className="photo">
              <Image
                src="/imagery/kitchen4all-hero.jpg"
                alt="Kitchen4All"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
              />
              <div className="logo">
                <Image
                  src="/logos/kitchen4all-logo.png"
                  alt="Kitchen4All"
                  width={120}
                  height={32}
                />
              </div>
            </div>
            <div className="body">
              <h3>Kitchen4All</h3>
              <p className="desc">
                <b>20 showrooms · 3.000+ keukens per jaar.</b> De keukenfranchise die inspiratie,
                apparatuur en service combineert. Showrooms door heel Nederland en een online
                platform dat de hele aankoopreis begeleidt.
              </p>
            </div>
            <div className="foot">
              <span className="url">kitchen4all.nl</span>
              <span className="arrow">→</span>
            </div>
          </a>
          <a
            className="brand-card"
            href="https://www.sani4all.nl"
            target="_blank"
            rel="noreferrer"
          >
            <div className="photo">
              <Image
                src="/imagery/sani4all-hero.jpg"
                alt="Sani4All"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
              />
              <div className="logo">
                <Image src="/logos/sani4all-logo.png" alt="Sani4All" width={120} height={32} />
              </div>
            </div>
            <div className="body">
              <h3>Sani4All</h3>
              <p className="desc">
                <b>27 showrooms · 6.000+ badkamers per jaar.</b> De badkamerfranchise die het
                begrijpelijk en betaalbaar maakt. Advies van mensen die hun vak verstaan, geen
                trucjes, gewoon eerlijk.
              </p>
            </div>
            <div className="foot">
              <span className="url">sani4all.nl</span>
              <span className="arrow">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
