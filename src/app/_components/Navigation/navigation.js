"use client";

import "./navigation.scss";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";

export default function Navigation({ closeMenu }) {
  const [primaryColor, setPrimaryColor] = useState("");

  const closeNavMenu = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  useEffect(() => {
    const color = window.getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    setPrimaryColor(color);
  }, []);

  return (
    <nav id="flyout-nav" className="flyout-nav">
      <Link className="flyout-nav__link" href="/" onClick={closeNavMenu}>
        <div className="logo">
          {/* <Image className="logo__image" src={"/images/WRNS-Logo.png"} width={177} height={102} alt="" /> */}
        </div>
      </Link>

      <ul className="flyout-nav__menu">
        <li className="flyout-nav__menu--item">
          <Link className="flyout-nav__link" href="/enrollment" onClick={closeNavMenu}>
            Admissions
          </Link>
        </li>
        <li className="flyout-nav__menu--item">
          <Link className="flyout-nav__link" href="/programs" onClick={closeNavMenu}>
            Programs
          </Link>
        </li>
        <li className="flyout-nav__menu--item">
          <Link className="flyout-nav__link" href="/calendar" onClick={closeNavMenu}>
            Calendar
          </Link>
        </li>
        <li className="flyout-nav__menu--item">
          <Link className="flyout-nav__link" href="/our-school" onClick={closeNavMenu}>
            Our School
          </Link>
        </li>
        <li className="flyout-nav__menu--item">
          <Link className="flyout-nav__link" href="/staff" onClick={closeNavMenu}>
            Our Staff
          </Link>
        </li>
        <li className="flyout-nav__menu--item">
          <Link className="flyout-nav__link" href="/current-families" onClick={closeNavMenu}>
            Current Families
          </Link>
        </li>
        {/* Disabled until Email system can be finalized */}
        {/* <li className="flyout-nav__menu--item">
          <Link className="flyout-nav__link" href="/contact" onClick={closeNavMenu}>
            Get in Touch
          </Link>
        </li> */}
        <li className="flyout-nav__menu--item">
          <Link className="flyout-nav__link" href="/contribute" onClick={closeNavMenu}>
            Contribute
          </Link>
        </li>

        <li className="flyout-nav__menu--item flyout-nav__menu--xl-margin">
          <a className="flyout-nav__link" href="https://www.jovial.org/wintonroad/hello/sign/in">
            Family Portal (Jovial)
          </a>
        </li>
      </ul>

      <div className="socials-container">
        <a className="socials-link" href="https://www.facebook.com/WintonRoadNurserySchool/" target="_blank">
          <ReactSVG
            src={"/svgs/facebook.svg"}
            beforeInjection={(svg) => {
              const paths = svg.querySelectorAll("path");
              if (paths[1]) paths[1].setAttribute("fill", primaryColor);
              if (paths[2]) paths[2].setAttribute("fill", "#fff");
            }}
            alt="facebook"
          />
        </a>
        <a className="socials-link" href="https://www.instagram.com/wrnschool/" target="_blank">
          <ReactSVG
            src={"/svgs/instagram.svg"}
            beforeInjection={(svg) => {
              const paths = svg.querySelectorAll("path");
              if (paths[0]) paths[0].setAttribute("fill", primaryColor);
              if (paths[1]) paths[1].setAttribute("fill", "#fff");
            }}
            alt="instagram"
          />
        </a>
      </div>
    </nav>
  );
}
