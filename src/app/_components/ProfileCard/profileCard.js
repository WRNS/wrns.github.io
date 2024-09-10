import "./profileCard.scss";

import Image from "next/image";
import React from "react";

const ProfileCard = ({ imageSrc, imagePosition, name, role, description, alignRight }) => {
  return (
    <div className={`profile-card ${alignRight ? "profile-card--right" : ""}`}>
      <div className="profile-card__image">
        <Image
          src={imageSrc}
          width={500}
          height={500}
          style={{
            objectPosition: imagePosition,
          }}
          alt=""
        />
      </div>
      <div className="profile-card__info">
        <h2 className="profile-card__name">{name}</h2>
        <p className="profile-card__role">{role}</p>
        <p className="profile-card__description">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
