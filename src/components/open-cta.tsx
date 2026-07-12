import Image from "next/image";

export function OpenCta() {
  return (
    <section className="open-cta">
      <div className="container">
        <div className="script-wrap" data-reveal>
          <Image
            src="/logos/zo-fijn-script.png"
            alt="Zo fijn kan 't zijn"
            width={2417}
            height={542}
          />
        </div>
        <h2 data-reveal="1">
          <em>Ook voor jou.</em>
        </h2>
        <p data-reveal="2">
          Niks gevonden dat past? De beste aanwinsten komen vaak buiten een openstaande rol om.
          Vertel ons wie je bent, wat je doet en wat je zoekt. We lezen alles.
        </p>
        <div className="ctas" data-reveal="3">
          <a href="mailto:info@rushmarketing.nl" className="btn btn-light">
            Stuur een open sollicitatie
          </a>
        </div>
      </div>
    </section>
  );
}
