"use client";

import "./contribute.scss";

import { useEffect, useState } from "react";

import Hero from "@components/Hero/hero";
import { ReactSVG } from "react-svg";

export default function Contribute() {
  const [cssPrimary, setCssPrimary] = useState("");

  useEffect(() => {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    setCssPrimary(primaryColor);
  }, []);

  return (
    <main>
      <Hero image={"/images/volunteering.jpg"} title="Contribute" imagePosition="40% 30%" />

      <section id="donation" className="donation section__layout background-primary">
        <div className="text-content">
          <h2 className="section__heading">Make a Donation to Winton Road</h2>

          <p className="donation__text">
            Your donation to Winton Road Nursery School nurtures young minds, supports our inclusive community, and
            enhances learning experiences with innovative programs and resources. By contributing, you help sustain our
            50-year legacy of excellence in early childhood education, ensuring we can continue to serve future
            generations.
          </p>

          <form id="donate" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="W7AGQ6XFNSZW4" />
            <button type="submit" className="btn btn--icon btn--inverse caps">
              <ReactSVG
                className="svg-icon--large"
                src="/svgs/donation.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${cssPrimary}`);
                }}
              />
              <span className="btn__text-content">Donate</span>
            </button>
          </form>
        </div>
      </section>

      <section id="programs" className="section__layout">
        <div className="text-content">
          <h2 className="section__heading">Fundraising</h2>
          <small className="remove-me-later">Information about Fundraising goes here!</small>
        </div>
      </section>
    </main>
  );
}
