"use client";

import "./enrollment.scss";

import Hero from "@components/Hero/hero";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";

export default function Enrollment() {
  return (
    <main>
      <Hero image={"/images/girls-on-steps.jpg"} title="Enrollment" imagePosition="75% 50%" />

      <section id="enrollment" className="section__layout enrollment">
        <div className="enrollment__container">
          <Link className="document-links__link btn btn--icon caps" href="/docs/2025-2026 Enrollment Info Sheet.pdf">
            <ReactSVG
              className="svg-icon--large"
              src="/svgs/pdf.svg"
              beforeInjection={(svg) => {
                svg.setAttribute("style", `fill: #fff`);
              }}
            />
            <span className="btn__text-content">2025-2026 Enrollment Information</span>
          </Link>
          <div className="number-heading">
            <div className="number-heading__box">1</div>
            <h3 className="number-heading__header">Schedule a Tour</h3>
          </div>
          <p className="enrollment__text">
            Experience Winton Road firsthand! Use{" "}
            <a href="https://calendly.com/wrns-tours" target="_blank">
              Calendly
            </a>{" "}
            to set up a visit and see why our school is the perfect place for your child to thrive.
          </p>

          <div className="number-heading">
            <div className="number-heading__box">2</div>
            <h3 className="number-heading__header">Review By-Laws</h3>
          </div>
          <p className="enrollment__text">
            Understand our commitment to a nurturing and collaborative environment. Learn about rights and
            responsibilities in our <Link href="/docs/wrns-by-laws.pdf">by-laws</Link>.
          </p>

          <div className="number-heading">
            <div className="number-heading__box">3</div>
            <h3 className="number-heading__header">Apply</h3>
          </div>
          <p className="enrollment__text">
            Ready to join our community?{" "}
            <a href="https://www.jovial.org/wintonroad/hello" target="_blank">
              Enroll online
            </a>{" "}
            with Jovial and start your child&apos;s journey with us.
          </p>
        </div>

        <div className="enrollment__dates">
          <Image
            src={"/images/playground-in-spring.jpg"}
            alt="playground"
            className="spot-art"
            width={"100"}
            height={"400"}
            style={{
              objectPosition: "50% 60%",
              objectFit: "cover",
            }}
          />
          <h3>Important Enrollment Dates</h3>
          <ul>
            <li>
              <strong className="primary">January 26:</strong> Registration for returning families begins.
            </li>
            <li>
              <strong className="primary">February 2:</strong> Registration for alumni families (without currently
              enrolled students) begins.
            </li>
            <li>
              <strong className="primary">February 9:</strong> Registration for new families (public enrollment)
              begins.
            </li>
          </ul>
        </div>

        <div className="enrollment__scholarships">
          <h3>Scholarship Application</h3>
          <p>
            We believe in making education accessible to all.{" "}
            <Link href="docs/forms/wrns-scholarship.pdf">Download our scholarship application</Link>. Your information
            will remain confidential.
          </p>
        </div>
      </section>
    </main>
  );
}
