import { Link } from "next-view-transitions";

import { jobs } from "@/data/jobs";

export function Jobs() {
  return (
    <section className="jobs" id="jobs">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Vacatures
          </span>
          <h2 data-reveal="1">
            {jobs.length} open rollen.
            <br />
            Eén ervan <em>de jouwe</em>?
          </h2>
          <p data-reveal="2">
            We groeien, en we zoeken mensen die passen. Geen witte voetjes nodig, wel
            nieuwsgierigheid en zin om te bouwen.
          </p>
        </div>
        <div className="list" data-reveal>
          {jobs.map((job) => (
            <Link key={job.slug} className="job" href={`/vacatures/${job.slug}`}>
              <span className="title" style={{ viewTransitionName: `job-${job.slug}` }}>
                {job.title}
              </span>
              <span className="team">{job.team}</span>
              <span className={`tag${job.status === "Nieuw" ? " new" : ""}`}>{job.status}</span>
              <span className="arr">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
