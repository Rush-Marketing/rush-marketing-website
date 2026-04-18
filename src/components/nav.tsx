import Image from "next/image";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container row">
        <a className="logo" href="#top">
          <Image
            src="/logos/rush-marketing-circle.png"
            alt="Rush Marketing"
            width={44}
            height={44}
          />
          <b>Rush Marketing</b>
        </a>
        <ul>
          <li>
            <a href="#about">Wie wij zijn</a>
          </li>
          <li>
            <a href="#brands">Onze merken</a>
          </li>
          <li>
            <a href="#mensen">Onze mensen</a>
          </li>
          <li>
            <a href="#perks">Werken bij</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#jobs" className="btn btn-gold">
          Bekijk vacatures <span className="arr">→</span>
        </a>
      </div>
    </nav>
  );
}
