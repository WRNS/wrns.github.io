"use client";

import "./homepage.scss";

import Hero from "@components/Hero/hero";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import SlidingCard from "@components/SlidingCard/slidingCard";
import coopSpotImg from "@public/images/boy-on-bike.jpg";
import useImagePreloader from "@components/ImagePreloader/imagePreloader";

// ==== This is the NextJS Homepage.
// ===== The homepage is the page.js file that sits in the src/app/page.js location by default.

export default function Home() {
  const heroImages = [
    "/images/outdoors.jpg",
    "/images/playground.jpg",
    "/images/playground-in-spring.jpg",
    "/images/blocks.jpg",
    "images/teachers.jpg",
    "images/contact.jpg",
    "images/events.jpg",
  ];

  // call the image preloader component to reduce load times on non-landing pages.
  useImagePreloader(heroImages);

  return (
    <main>
      <Hero
        image={"/images/book-play.jpg"}
        title={"Winton Road Nursery School"}
        description={"We Play. We Grow. We Nurture. We Work Together."}
      />

      <section id="about-us" className="about-us background-primary section__layout">
        <h2 className="section__heading">About Us</h2>
        <p className="about-us__text">
          At Winton Road, we believe that by nurturing a child&apos;s curiosity and growth in a supportive environment,
          we inspire a lifelong love of learning.
        </p>

        <SlidingCard
          svgSource={"/svgs/child.svg"}
          fillColor={"white"}
          heading={"Safe Play Environment"}
          text={
            "For over 50 years, we have provided a secure and welcoming space where children can explore, play, and learn with confidence."
          }
          align={"left"}
        />

        <SlidingCard
          svgSource={"/svgs/playground.svg"}
          fillColor={"white"}
          heading={"Outdoor Exploration"}
          text={
            "Our fenced playground and nature trails offer children the opportunity to connect with nature, fostering curiosity and physical activity in a safe setting."
          }
          align={"right"}
        />

        <SlidingCard
          svgSource={"/svgs/blocks.svg"}
          fillColor={"white"}
          heading={"Kindergarten Readiness"}
          text={
            "We prepare children academically and socially for kindergarten, ensuring they have the skills and confidence needed to succeed in their next educational step."
          }
          align={"left"}
        />

        <SlidingCard
          svgSource={"/svgs/family.svg"}
          fillColor={"white"}
          heading={"Family Involvement"}
          text={
            "Our supportive community encourages family participation, building strong, lasting relationships that enrich the educational experience and create lifelong bonds."
          }
          align={"right"}
        />

        <SlidingCard
          svgSource={"/svgs/classroom.svg"}
          fillColor={"white"}
          heading={"Engaging Classrooms"}
          text={
            "Our classrooms are designed to be engaging and child-friendly, creating an environment where young learners feel inspired and excited to explore new concepts."
          }
          align={"left"}
        />
      </section>

      <section id="coop" className="coop text-content section__layout">
        <h2 className="section__heading">Semi-Cooperative</h2>

        <div className="coop__container">
          <div className="coop__image-wrapper">
            <Image src={coopSpotImg} alt="" className="coop__image" />
          </div>
          <div className="coop__text">
            <p>
              At our semi-cooperative nursery school, parents play a vital role in shaping their child&apos;s first
              educational experience. As members of a non-profit, non-sectarian cooperative, parents help guide the
              school through an appointed board of directors. This involvement isn&apos;t daunting&mdash;it&apos;s a
              fantastic opportunity!
            </p>

            <p>
              Parents contribute to decision-making and participate in committees, creating a supportive and
              collaborative environment. This hands-on approach ensures that your child&apos;s early education is a
              personalized and enriching experience.
            </p>

            <p>
              Winton Road welcomes students of all backgrounds and offer a limited number of scholarships based on
              financial need, ensuring a diverse and inclusive community.
            </p>

            <p>
              For more details on our school structure, including committee roles, parental responsibilities, and
              financial commitments, please refer to the following:
            </p>
          </div>
        </div>

        <div className="document-links">
          <Link className="document-links__link btn btn--icon caps" href="/docs/wrns-by-laws.pdf">
            <ReactSVG
              className="svg-icon--large"
              src="/svgs/bylaws.svg"
              beforeInjection={(svg) => {
                svg.setAttribute("style", `fill: #fff`);
              }}
            />
            <span className="btn__text-content">School By-Laws</span>
          </Link>

          <Link className="document-links__link btn btn--icon caps" href="/docs/wrns-parent-handbook.pdf">
            <ReactSVG
              className="svg-icon--large"
              src="/svgs/handbook.svg"
              beforeInjection={(svg) => {
                svg.setAttribute("style", `fill: #fff`);
              }}
            />
            <span className="btn__text-content">Parent&apos;s Handbook</span>
          </Link>

          <Link className="document-links__link btn btn--icon caps" href="/docs/wrns-committees.pdf">
            <ReactSVG
              className="svg-icon--large"
              src="/svgs/committee.svg"
              beforeInjection={(svg) => {
                svg.setAttribute("style", `fill: #fff`);
              }}
            />
            <span className="btn__text-content">Description of Committees</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
