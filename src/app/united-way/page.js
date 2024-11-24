import "./united-way.scss";

import Hero from "@components/Hero/hero";
import Image from "next/image";
import ROCtheDayTall from "@public/images/promotions/ROC_email_2024.png";
import ROCtheDayWide from "@public/images/promotions/united-way.jpg";
import React from "react";

const UnitedWay = () => {
  return (
    <main>
      <Hero
        image={"/images/playground-in-spring.jpg"}
        title="ROC the Day"
        description="with the United Way"
        imagePosition="50% 66%"
      />

      <section id="about-us" className="about-us section__layout text-content">
        <div className="ROCtheDay__image-wrapper ">
          <Image src={ROCtheDayWide} alt="" className="ROCtheDay__image desktop" />
          <Image src={ROCtheDayTall} alt="" className="ROCtheDay__image mobile" />
        </div>

        <h2 className="section__heading">What is ROC the Day?</h2>

        <p className="about__text">
          Join us and make a difference. On December 3<sup>rd</sup>, the Greater Rochester community will come together
          to <strong>ROC the Day</strong> and we need <strong>YOU</strong> to join us. It is 24 hours of unprecedented
          community giving. And it is your chance to make a real difference right here in the Greater Rochester region.
        </p>
        <h3>
          <a href="https://roctheday.org/roc-the-day/causes/WRNS" target="_blank">
            ROC the Day with WRNS
          </a>
        </h3>
        <p>
          Join us in supporting our community and ROC the Day on December 3<sup>rd</sup>.
        </p>
      </section>
    </main>
  );
};

export default UnitedWay;
