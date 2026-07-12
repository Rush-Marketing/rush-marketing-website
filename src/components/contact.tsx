import Image from "next/image";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="text">
            <span className="hand" data-reveal>
              Kom langs
            </span>
            <h2 data-reveal="1">
              Ons kantoor in
              <br />
              <em>Doetinchem</em>.
            </h2>
            <p className="lede" data-reveal="2">
              We ontmoeten liever mensen in het echt. Koffie of thee staat altijd klaar. Bel, mail
              of loop gewoon binnen.
            </p>
            <dl className="details" data-reveal="3">
              <div>
                <dt>Bezoekadres</dt>
                <dd>
                  Raadhuisstraat 69-B
                  <br />
                  7001 EX Doetinchem
                </dd>
              </div>
              <div>
                <dt>Telefoon</dt>
                <dd>
                  <a href="tel:+31850645753">085 0645753</a>
                </dd>
              </div>
              <div>
                <dt>Mail</dt>
                <dd>
                  <a href="mailto:info@rushmarketing.nl">info@rushmarketing.nl</a>
                </dd>
              </div>
              <div>
                <dt>Werken bij</dt>
                <dd>
                  <a href="mailto:info@rushmarketing.nl">info@rushmarketing.nl</a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="photo" data-reveal="2">
            <Image
              src="/imagery/rush-gevel.jpg"
              alt="Rush Marketing hoofdkantoor ingang"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
