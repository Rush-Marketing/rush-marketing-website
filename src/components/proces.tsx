const steps = [
  {
    n: "01",
    title: "Je stuurt een bericht",
    body: "Een paar regels over jou, met je CV of LinkedIn. Geen uitgebreide motivatiebrief nodig.",
  },
  {
    n: "02",
    title: "We bellen kort",
    body: "Even kennismaken en je vragen beantwoorden. Klikt het van twee kanten, dan gaan we door.",
  },
  {
    n: "03",
    title: "Bakkie op kantoor",
    body: "Je komt langs in Doetinchem, ontmoet het team en ziet waar je zou werken.",
  },
  {
    n: "04",
    title: "Ons voorstel",
    body: "Past het? Dan maken we het rond, met een eerlijk aanbod uit ons eigen salarishuis.",
  },
];

export function Proces() {
  return (
    <section className="proces" id="proces">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Solliciteren bij Rush
          </span>
          <h2 data-reveal="1">
            Zo werkt <em>solliciteren</em>.
          </h2>
          <p data-reveal="2">
            Geen black box en geen eindeloze rondes. Vier stappen, menselijk en helder. We
            reageren altijd binnen een paar werkdagen, ook als het een keer niet matcht.
          </p>
        </div>
        <ol className="steps">
          {steps.map((step, i) => (
            <li key={step.n} className="step" data-reveal={i % 4}>
              <span className="n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
