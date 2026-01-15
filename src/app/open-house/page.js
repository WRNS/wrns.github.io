"use client";

import "./open-house.scss";

import Hero from "@components/Hero/hero";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import React from "react";

const OpenHouse = () => {
  return (
    <main>
      <Hero
        image={"/images/classroom.jpg"}
        title="Open House"
        description="at Winton Road Nursery School"
        imagePosition="50% 66%"
      />

      <section id="open-house" className="section__layout text-content">
        <h2 className="section__heading">Visit Winton Road Nursery School</h2>
        <p className="about__text">
          Are you ready to learn more about Winton Road Nursery School? Come check out our open house on <strong>Saturday, January 17 at 10 AM</strong>. Teachers and parent volunteers will be there to answer your questions and show you around.
        </p>
        <p>Our building is located at <strong><a target="_blank" href="https://maps.app.goo.gl/yS2SopsSR2oNVjiS8">220 Winton Road S, Rochester, NY 14610</a></strong>. Park in the parking lot near the playground and come in through the door with the rainbow sign. Prospective students and siblings are welcome.
        </p>

        <div className="open-house__actions">

          <Link className="document-links__link btn btn--icon caps" href="/programs">
            <ReactSVG
              className="svg-icon--large"
              src="/svgs/handbook.svg"
              beforeInjection={(svg) => {
                svg.setAttribute("style", `fill: #fff`);
              }}
            />
            <span className="btn__text-content">
              School Programs</span>
          </Link>

          <Link className="document-links__link btn btn--icon caps" href="/admissions">
            <ReactSVG
              className="svg-icon--large"
              src="/svgs/child.svg"
              beforeInjection={(svg) => {
                svg.setAttribute("style", `fill: #fff`);
              }}
            />
            <span className="btn__text-content">Apply Now</span>
          </Link></div>
      </section>
    </main>
  );
};

export default OpenHouse;
