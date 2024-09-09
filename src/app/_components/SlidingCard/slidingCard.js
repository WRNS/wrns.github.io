"use client";

import "./slidingCard.scss";

import { useEffect, useRef } from "react";

import { ReactSVG } from "react-svg";

const SlidingCard = ({ svgSource, fillColor, heading, text, align }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    const current = cardRef.current;

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section ref={cardRef} className={`sliding-card ${align === "left" ? "left" : "right"}`}>
      <div className="sliding-card__svg-container">
        <ReactSVG
          className="sliding-card__icon"
          src={svgSource}
          beforeInjection={(svg) => {
            svg.setAttribute("style", `fill: ${fillColor}`);
          }}
        />
      </div>
      <div className="sliding-card__content">
        <h4 className="white">{heading}</h4>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default SlidingCard;
