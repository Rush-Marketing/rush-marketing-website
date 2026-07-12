import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { jobBySlug, jobs } from "@/data/jobs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = jobBySlug(slug);
  if (!job) return { title: "Vacature niet gevonden · Rush Marketing" };
  return {
    title: `${job.title} · Rush Marketing`,
    description: job.summary,
  };
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = jobBySlug(slug);
  if (!job) notFound();

  const mailSubject = encodeURIComponent(`Sollicitatie: ${job.title}`);
  const mailBody = encodeURIComponent(
    `Hoi Rush Marketing,\n\nIk reageer graag op de vacature "${job.title}".\n\n`,
  );
  const mailHref = `mailto:info@rushmarketing.nl?subject=${mailSubject}&body=${mailBody}`;

  return (
    <>
      <SmoothScroll />
      <Nav />

      <header className="job-hero">
        <div className="container">
          <Link href="/#jobs" className="back">
            ← Alle vacatures
          </Link>
          <h1>{job.title}</h1>
          <div className="meta">
            <span className={`pill status${job.status === "Open" ? " open" : ""}`}>
              {job.status}
            </span>
            <span className="pill">{job.team}</span>
            <span className="pill">Doetinchem</span>
          </div>
        </div>
      </header>

      <section className="job-body">
        <div className="container">
          <div className="layout">
            <div className="content">
              <p className="lede">{job.summary}</p>

              <h2>Wat ga je doen?</h2>
              <ul>
                {job.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>

              <h2>Wat breng je mee?</h2>
              <ul>
                {job.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>

              <h2>Hoe we werken</h2>
              <p className="how">
                Samen op kantoor in Doetinchem, op woensdag vanuit huis. Maandag kookt er iemand
                uit het team en lunchen we samen. Sporten onder werktijd, opleidingsbudget en
                ruimte om te groeien. Meer lezen? <Link href="/#perks">Werken bij Rush →</Link>
              </p>
            </div>

            <aside className="aside">
              <b>In het kort</b>
              <dl>
                <div>
                  <dt>Team</dt>
                  <dd>{job.team}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{job.status}</dd>
                </div>
                <div>
                  <dt>Locatie</dt>
                  <dd>Doetinchem</dd>
                </div>
              </dl>
              <a href={mailHref} className="btn btn-primary">
                Solliciteer
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="job-apply">
        <div className="container">
          <h2>
            Kom een keer <em>langs</em>.
          </h2>
          <p>
            Stuur je bericht met CV of LinkedIn. We reageren binnen een paar werkdagen en nodigen
            je, als het klikt, graag uit voor een goed gesprek op kantoor.
          </p>
          <div className="ctas">
            <a href={mailHref} className="btn btn-light">
              info@rushmarketing.nl
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
