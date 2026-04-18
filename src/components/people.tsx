import { employeesByTeam, teams } from "@/data/employees";

export function People() {
  return (
    <section className="mensen" id="mensen">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Onze mensen</span>
          <h2>
            Dit zijn we.
            <br />
            Bij naam <em>en toenaam.</em>
          </h2>
          <p>
            Geen stockfoto&apos;s, geen anonieme &quot;het team&quot;. Dit zijn de collega&apos;s
            die elke dag aan Kitchen4All en Sani4All werken. Vijf teams, één club, twintig
            verhalen.
          </p>
        </div>

        <div className="teams">
          {teams.map((team) => {
            const people = employeesByTeam(team.slug);
            return (
              <div key={team.slug} className="team-block">
                <div className="head">
                  <div className="count">
                    {String(team.count).padStart(2, "0")}
                    <sup>personen</sup>
                  </div>
                  <h3>
                    {team.name.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < team.name.split("\n").length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </h3>
                  <p>{team.description}</p>
                </div>
                <div className="people">
                  {people.map((p) => (
                    <div key={p.name} className={`person${p.isLead ? " lead" : ""}`}>
                      <div className="avatar">{p.initials}</div>
                      <div className="info">
                        <div className="name">{p.name}</div>
                        <div className="role">{p.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="foot">
          <div className="txt">
            <b>Jouw naam hier?</b>
            <p>
              We zijn nog niet uitgegroeid. Kijk bij vacatures of stuur ons een open sollicitatie,
              we maken graag kennis.
            </p>
          </div>
          <a href="#jobs" className="btn btn-green">
            Bekijk vacatures <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
