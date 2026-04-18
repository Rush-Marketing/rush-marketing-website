import Link from "next/link";

import { jobs } from "@/data/jobs";

export function Jobs() {
  return (
    <section className="jobs" id="jobs">
      <div className="container">
        <div className="row">
          <div>
            <span className="eyebrow">Vacatures</span>
            <h2>
              Kom jij ons
              <br />
              team versterken?
            </h2>
            <p className="jobs-intro">
              We groeien, en we zoeken mensen die passen. Geen witte voetjes nodig, wel
              nieuwsgierigheid en zin om te bouwen. Staat er niks voor je tussen? Stuur een open
              sollicitatie.
            </p>
          </div>
          <div className="list">
            {jobs.map((job) => (
              <Link key={job.slug} className="job" href={`/vacatures/${job.slug}`}>
                <h3>{job.title}</h3>
                <span className={`tag${job.status === "Nieuw" ? " new" : ""}`}>{job.status}</span>
                <span className="meta">{job.team}</span>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
