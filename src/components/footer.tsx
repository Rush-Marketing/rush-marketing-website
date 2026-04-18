import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="brand-col">
            <a className="logo" href="#top">
              <Image src="/logos/rush-marketing-circle.png" alt="" width={48} height={48} />
              <b>Rush Marketing</b>
            </a>
            <p>De marketing achter Kitchen4All en Sani4All. Betrokken, inventief, ambitieus, energiek.</p>
          </div>
          <div className="col">
            <b>Onze merken</b>
            <ul>
              <li>
                <a href="https://www.kitchen4all.nl" target="_blank" rel="noreferrer">
                  Kitchen4All ↗
                </a>
              </li>
              <li>
                <a href="https://www.sani4all.nl" target="_blank" rel="noreferrer">
                  Sani4All ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <b>Werken bij</b>
            <ul>
              <li>
                <a href="#jobs">Vacatures</a>
              </li>
              <li>
                <a href="mailto:info@rushmarketing.nl">Open sollicitatie</a>
              </li>
              <li>
                <a href="#perks">Arbeidsvoorwaarden</a>
              </li>
              <li>
                <a href="#values">Waarden</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <b>Contact</b>
            <ul>
              <li>
                Raadhuisstraat 69-B
                <br />
                7001 EX Doetinchem
              </li>
              <li>085 0645753</li>
              <li>
                <a href="mailto:info@rushmarketing.nl">info@rushmarketing.nl</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} Rush Marketing B.V.</span>
          <span>
            <a href="#">Privacy</a> · <a href="#">Cookies</a> · <a href="#">Algemene voorwaarden</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
