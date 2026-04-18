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
            <p
              style={{
                margin: "28px 0 0",
                fontSize: 16,
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              We groeien, en we zoeken mensen die passen. Geen witte voetjes nodig, wel
              nieuwsgierigheid en zin om te bouwen. Staat er niks voor je tussen? Stuur een open
              sollicitatie.
            </p>
          </div>
          <div className="list">
            {jobs.map((job) => {
              const content = (
                <>
                  <h3>{job.title}</h3>
                  <span className={`tag${job.status === "Nieuw" ? " new" : ""}`}>{job.status}</span>
                  <span className="meta">
                    {job.team} · {job.location}
                  </span>
                  <span className="arr">→</span>
                </>
              );
              return job.url ? (
                <a key={job.title} className="job" href={job.url}>
                  {content}
                </a>
              ) : (
                <div key={job.title} className="job">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
