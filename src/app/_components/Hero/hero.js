import "./hero.scss";

import Announcement from "@components/Announcement/announcement";
import Image from "next/image";

const Hero = ({ image, title, description, imagePosition }) => {
  return (
    <div className="hero">
      <div className="hero__container">
        <Image
          src={image}
          alt=""
          className="hero__image"
          style={{
            objectPosition: imagePosition,
            objectFit: "cover",
          }}
          fill
          priority
        />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__description">{description}</p>
        </div>
      </div>
      <Announcement />
    </div>
  );
};

export default Hero;
