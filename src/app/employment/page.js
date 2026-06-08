import "./employment.scss";

import Hero from "@components/Hero/hero";
import Link from "next/link";

export default function Employment() {
  return (
    <main>
      <Hero image={"/images/classroom.jpg"} title="Employment" imagePosition="75% 50%" />

      <section className="employment section__layout">
        <div className="employment__content text-content">
          <h2 className="section__heading">Work With Winton Road</h2>
          <p>
            Winton Road Nursery School is a non-profit, semi-cooperative nursery school founded in 1963 which focuses
            on play-based learning by encouraging creativity, exploration, and guided social activity. Teachers and
            staff come to us with a variety of experience and career backgrounds. All final hiring decisions are made by
            the Board of Directors.
          </p>

          <article className="job-posting" aria-labelledby="job-opening-heading">
            <p className="job-posting__eyebrow">Job Opening</p>
            <h3 id="job-opening-heading" className="job-posting__title">
              Lead Teacher - Big Nursery
            </h3>

            <dl className="job-posting__details">
              <div>
                <dt>Schedule</dt>
                <dd>Part Time</dd>
              </div>
              <div>
                <dt>Term</dt>
                <dd>August 2026 - June 2027</dd>
              </div>
              <div>
                <dt>Program</dt>
                <dd>3&apos;s and 4&apos;s Program</dd>
              </div>
            </dl>

            <Link
              className="btn employment__button"
              href="/docs/2026 JOB DESCRIPTION - BIG NURSERY LEAD TEACHER-2.pdf"
            >
              View complete job description
            </Link>
          </article>

          <section className="employment__apply" aria-labelledby="apply-heading">
            <h3 id="apply-heading">Application Details</h3>
            <p>Accepting applications immediately.</p>
            <a className="btn employment__button employment__button--apply" href="https://form.jotform.com/261396064677064" target="_blank">
              Apply for this position
            </a>
            <p>
              Complete the application online, or email{" "}
              <a href="mailto:jobs@wintonroad.org">jobs@wintonroad.org</a> with questions about this opening.
            </p>
            <p>Job offers are subject to a clear background check.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
