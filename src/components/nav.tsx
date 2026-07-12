import Image from "next/image";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container row">
        <a className="logo" href="#top">
          <Image
            src="/logos/rush-marketing-circle.png"
            alt="Rush Marketing"
            width={36}
            height={36}
          />
          <b>Rush Marketing</b>
        </a>
        <ul>
          <li>
            <a href="#about">Wie wij zijn</a>
          </li>
          <li>
            <a href="#ondernemers">Ondernemers</a>
          </li>
          <li>
            <a href="#martech">Martech</a>
          </li>
          <li>
            <a href="#perks">Werken bij</a>
          </li>
          <li>
            <a href="#team">Ons team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="#jobs" className="btn btn-primary">
          Vacatures
        </a>
      </div>
    </nav>
  );
}
