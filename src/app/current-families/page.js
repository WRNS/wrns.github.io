"use client";

import "./parents.scss";

import React, { useEffect, useState } from "react";

import Hero from "@components/Hero/hero";
import Link from "next/link";
import { ReactSVG } from "react-svg";

export default function CurrentFamilies() {
  const [cssPrimary, setCssPrimary] = useState("");

  useEffect(() => {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    setCssPrimary(primaryColor);
  }, []);

  return (
    <main>
      <Hero image={"/images/science.jpg"} title="Family Information" imagePosition="50% 0%" />

      <section id="parent-resources" className="section__layout parent-resources background-primary">
        <h2 className="section__heading">Resources</h2>
        <ul className="parent-resources__list text-content">
          <li className="parent-resources__list-item">
            <Link className="btn btn--icon btn--inverse" href="https://www.jovial.org/wintonroad/hello/sign/in">
              <ReactSVG
                className="svg-icon--large"
                src="/svgs/portal.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${cssPrimary}`);
                }}
              />
              <div className="btn__text-content">
                <strong className="btn--caps">Current Family Portal</strong>
                <span>Powered by Jovial</span>
              </div>
            </Link>
          </li>

          <li className="parent-resources__list-item">
            <Link className="btn btn--icon btn--inverse" href="/docs/wrns-calendar-2023-2024.pdf">
              <ReactSVG
                className="svg-icon--large"
                src="/svgs/calendar.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${cssPrimary}`);
                }}
              />
              <div className="btn__text-content">
                <strong className="btn--caps">Calendar</strong>
                <span>2023-2024</span>
              </div>
            </Link>
          </li>

          <li className="parent-resources__list-item">
            <Link className="btn btn--icon btn--inverse" href="/docs/wrns-committees.pdf">
              <ReactSVG
                className="svg-icon--large"
                src="/svgs/committee.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${cssPrimary}`);
                }}
              />
              <div className="btn__text-content">
                <strong className="btn--caps">School Structure</strong>
                <span>Committee descriptions</span>
              </div>
            </Link>
          </li>

          <li className="parent-resources__list-item">
            <Link className="btn btn--icon btn--inverse" href="/docs/wrns-by-laws.pdf">
              <ReactSVG
                className="svg-icon--large"
                src="/svgs/bylaws.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${cssPrimary}`);
                }}
              />
              <div className="btn__text-content">
                <strong className="btn--caps">By-Laws</strong>
                <span>Rights & responsibilities</span>
              </div>
            </Link>
          </li>

          <li className="parent-resources__list-item">
            <Link className="btn btn--icon btn--inverse" href="/docs/wrns-parent-handbook.pdf">
              <ReactSVG
                className="svg-icon--large"
                src="/svgs/handbook.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${cssPrimary}`);
                }}
              />
              <div className="btn__text-content">
                <strong className="btn--caps">Parent&apos;s Handbook</strong>
                <span>Resources for parents</span>
              </div>
            </Link>
          </li>
        </ul>
      </section>

      <section className="playdough-recipe  section__layout">
        <h2 className="section__heading playdough-recipe__title">Playdough recipe</h2>
        <div className="playdough-recipe__container  text-content">
          <h4 className="playdough-recipe__note">Please double the recipe when bringing playdough in for the class.</h4>
          <ul className="playdough-recipe__list">
            <li className="playdough-recipe__list-item">4 cups flour</li>
            <li className="playdough-recipe__list-item">1 cup salt</li>
            <li className="playdough-recipe__list-item">8 tablespoons cream of tartar</li>
            <li className="playdough-recipe__list-item">4 cups water</li>
            <li className="playdough-recipe__list-item">4 tablespoons oil</li>
            <li className="playdough-recipe__list-item">food coloring</li>
          </ul>
          <p className="playdough-recipe__instructions">
            Cook all ingredients together over medium heat. Cool and knead on a floured surface. Store in an airtight
            container.
          </p>
        </div>
      </section>
    </main>
  );
}
