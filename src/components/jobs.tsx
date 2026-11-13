import { Link } from "next-view-transitions";

import { jobs, openJobs } from "@/data/jobs";

/** Vervulde rollen blijven zichtbaar, maar staan onderaan. */
const sorted = [...jobs].sort(
  (a, b) => Number(a.status === "Vervuld") - Number(b.status === "Vervuld"),
);

export function Jobs() {
  return (
    <section className="jobs" id="jobs">
      <div className="container">
        <div className="section-intro">
          <span className="hand" data-reveal>
            Vacatures
          </span>
          <h2 data-reveal="1">
            {openJobs.length} open rollen.
            <br />
            Eén ervan <em>de jouwe</em>?
          </h2>
          <p data-reveal="2">
            We groeien, en we zoeken mensen die passen. Geen witte voetjes nodig, wel
            nieuwsgierigheid en zin om te bouwen.
          </p>
        </div>
        <div className="list" data-reveal>
          {sorted.map((job) => (
            <Link key={job.slug} className={`job${job.status === "Vervuld" ? " filled" : ""}`} href={`/vacatures/${job.slug}`}>
              <span className="title" style={{ viewTransitionName: `job-${job.slug}` }}>
                {job.title}
              </span>
              <span className="team">{job.team}</span>
              <span
                className={`tag${job.status === "Nieuw" ? " new" : ""}${job.status === "Vervuld" ? " filled" : ""}`}
              >
                {job.status}
              </span>
              <span className="arr">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
