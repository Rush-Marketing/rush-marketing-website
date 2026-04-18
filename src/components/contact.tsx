import Image from "next/image";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div>
            <span className="eyebrow">Kom langs</span>
            <h2>
              Ons kantoor
              <br />
              in <em>Doetinchem</em>.
            </h2>
            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              We ontmoeten liever mensen in het echt. Koffie of thee staat altijd klaar. Bel, mail
              of loop gewoon binnen.
            </p>
            <div className="info">
              <div className="info-item">
                <span className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <b>Bezoekadres</b>
                  <span>
                    Rush Marketing BV
                    <br />
                    Raadhuisstraat 69-B
                    <br />
                    7001 EX Doetinchem
                  </span>
                </div>
              </div>
              <div className="info-item">
                <span className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <b>Telefoon</b>
                  <span>085 0645753</span>
                </div>
              </div>
              <div className="info-item">
                <span className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1 0 2 1 2 2v12c0 1-1 2-2 2H4c-1 0-2-1-2-2V6c0-1 1-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <b>Algemeen</b>
                  <span>info@rushmarketing.nl</span>
                </div>
              </div>
              <div className="info-item">
                <span className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                  </svg>
                </span>
                <div>
                  <b>Werken bij</b>
                  <span>info@rushmarketing.nl</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gevel">
            <Image
              src="/imagery/rush-gevel.jpg"
              alt="Rush Marketing hoofdkantoor ingang"
              width={1200}
              height={900}
              sizes="(max-width: 960px) 100vw, 55vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
