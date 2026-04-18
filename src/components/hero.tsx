import Image from "next/image";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="layout">
          <div>
            <div className="eyebrow">
              <span className="mark">
                <Image src="/logos/rush-4-gold.png" alt="" width={28} height={28} />
              </span>
              Marketing voor Kitchen4All en Sani4All
            </div>
            <h1>
              Zo fijn kan <span className="italic">&apos;t</span> zijn.
            </h1>
            <p className="sub">
              Rush Marketing is het marketingbureau achter Kitchen4All en Sani4All. We combineren
              creativiteit, tech en data om onze franchisepartners zichtbaar te laten groeien. Met
              plezier, loyaliteit en een vleugje humor.
            </p>
            <div className="ctas">
              <a href="#jobs" className="btn btn-gold">
                Bekijk onze vacatures <span className="arr">→</span>
              </a>
              <a href="#about" className="btn btn-ghost">
                Leer ons kennen
              </a>
            </div>
            <div className="chips">
              <span className="chip">
                <span className="dot" />
                Kantoor in Doetinchem
              </span>
              <span className="chip">
                <span className="dot" />
                Thuiswerkdag op woensdag
              </span>
              <span className="chip">
                <span className="dot" />
                Sporten onder werktijd
              </span>
            </div>
          </div>
          <div className="photo-stack" aria-hidden="true">
            <div className="p a">
              <Image
                src="/imagery/rush-portrait-7.jpg"
                alt="Collega van Rush Marketing aan het werk"
                fill
                sizes="(max-width: 960px) 70vw, 35vw"
                priority
              />
            </div>
            <div className="p b">
              <Image
                src="/imagery/rush-kook-2.jpg"
                alt=""
                fill
                sizes="(max-width: 960px) 55vw, 28vw"
              />
            </div>
            <div className="mark4">
              <Image src="/logos/rush-4-gold.png" alt="" width={120} height={120} />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        Scroll
        <span className="line" />
      </div>
    </header>
  );
}
