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
        {/* <Link
          className="document-links__link btn btn--icon caps btn--inverse"
          href="https://www.jovial.org/wintonroad/family"
        >
          <ReactSVG
            className="svg-icon--large"
            src="/svgs/child.svg"
            beforeInjection={(svg) => {
              svg.setAttribute("style", `fill: ${cssPrimary}`);
            }}
          />
          <span className="btn__text-content">Register for 2025/26</span>
        </Link> */}

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
            <Link className="btn btn--icon btn--inverse" href="/docs/wrns-calendar-2025-2026.pdf">
              <ReactSVG
                className="svg-icon--large"
                src="/svgs/calendar.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${cssPrimary}`);
                }}
              />
              <div className="btn__text-content">
                <strong className="btn--caps">Calendar</strong>
                <span>2025-2026</span>
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
        <h2 className="section__heading playdough-recipe__title">WRNS Playdough recipe</h2>
        <div className="playdough-recipe__container  text-content">
          <h3 className="playdough-recipe__note">Please bring 1 batch when bringing playdough in for the class.</h3>

          <h3>Ingredients</h3>
          <ul className="playdough-recipe__list">
            <li className="playdough-recipe__list-item">4 cups flour</li>
            <li className="playdough-recipe__list-item">1 cup salt</li>
            <li className="playdough-recipe__list-item">8 tablespoons cream of tartar</li>
            <li className="playdough-recipe__list-item">4 cups water</li>
            <li className="playdough-recipe__list-item">4 tablespoons vegetable or canola oil</li>
            <li className="playdough-recipe__list-item">Food coloring</li>
          </ul>
          <h3>Mixing Instructions</h3>
          <ol className="playdough-recipe__instructions">
            <li>In a medium bowl, combine the salt, cream of tartar, water, vegetable oil, and food coloring.</li>
            <li>In a medium saucepan, add the wet mixture to the flour.</li>
            <li>Cook over medium low heat, stirring frequently with a wooden spoon or rubber spatula. If it sticks to the bottom of the pan, turn down the heat. You&apos;ll know it&apos;s cooking well when you stir and can start to see the bottom of the pan.</li>
            <li>When the mixture has formed a rough shaggy dough and is difficult to stir for an adult, remove from the heat.</li>
            <li>Take the dough out of the pan and let rest on a floured surface to cool. It will be very hot!</li>
            <li>Once cooled, with floured hands, knead until smooth. You&apos;ll want to do this when the dough is still a little warm and not cold. You can use a stand mixer with the dough hook attachment for this, but be careful not to overwork the dough - it will get very tough if overmixed.</li>
            <li>If the dough seems too wet, add more flour. If it seems to dry add more water, one tablespoon at a time.</li>
            <li>Store in an airtight container or ziplock. Refrigerate for extra shelf life.</li>
          </ol>
        </div>
      </section>
    </main >
  );
}
