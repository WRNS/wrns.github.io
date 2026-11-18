"use client";

import "./contribute.scss";

import Hero from "@components/Hero/hero";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import rocTheDayImage from "@public/images/promotions/roc-2026.png";

export default function Contribute() {
  return (
    <main>
      <Hero image={"/images/volunteering.jpg"} title="Contribute" imagePosition="40% 30%" />

      <section id="roc-the-day" className="roc-the-day section__layout" aria-labelledby="roc-the-day-heading">
        <div className="text-content">
          <h2 id="roc-the-day-heading" className="section__heading">Help WRNS ROC the Day!</h2>
          <Image
            src={rocTheDayImage}
            alt="United Way’s ROC the Day — December 1, 2026"
            className="roc-the-day__image"
            sizes="(max-width: 800px) 80vw, 640px"
          />
          <p>
            On <strong>Tuesday, December 1, 2026</strong>, Winton Road Nursery School will participate in ROC the Day,
            a 24-hour giving event supporting local non-profit organizations. In 2025, the WRNS community raised
            <strong> $1,760</strong> thanks to some fabulous ROCstars. This year, we hope to inspire even more ROCstars
            to give to WRNS!
          </p>
          <div className="roc-the-day__goal">
            <h3>Help our kiddos earn a pajama and stuffy party!</h3>
            <p>Our goal: <strong>$250 and 20 donors</strong>. Help us meet or exceed both goals!</p>
          </div>
          <h3>How you can help us ROC the Day</h3>
          <ul>
            <li>Donate on December 1 through the link below.</li>
            <li>Share the donation link with friends and family on December 1.</li>
            <li>Share WRNS&apos;s posts on your own social media pages on December 1.</li>
          </ul>
          <p>
            A donation of any amount makes WRNS eligible for hourly cash bonuses sponsored by the United Way and
            Glover-Crask Charitable Trust. Share, share, share &mdash; visibility is key!
          </p>
          <p>
            Donations will be accepted from <strong>12:00 AM to 11:59 PM on December 1</strong> through a secure online
            platform. All donations directly support WRNS.
          </p>
          <div className="roc-the-day__actions">
            <a className="btn roc-the-day__donate" href="https://www.unitedwayrocflx.org/roc-the-day/causes/WRNS">
              Donate to WRNS on December 1
            </a>
            <a href="https://www.facebook.com/WintonRoadNurserySchool">Follow WRNS on Facebook and share our posts</a>
          </div>
        </div>
      </section>

      <section id="donation" className="donation section__layout">
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
            <button type="submit" className="btn btn--icon caps">
              <ReactSVG
                className="svg-icon--large"
                src="/svgs/donation.svg"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: #fff`);
                }}
              />
              <span className="btn__text-content">Donate</span>
            </button>
          </form>
        </div>
      </section>

      {/* <section id="programs" className="section__layout">
        <div className="text-content">
          <h2 className="section__heading">Fundraising</h2>
          <small className="remove-me-later">Information about Fundraising goes here!</small>
        </div>
      </section> */}
    </main>
  );
}
