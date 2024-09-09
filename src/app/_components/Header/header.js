"use client";

import "./header.scss";

import React, { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@components/Navigation/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isPrimaryTextColor, setIsPrimaryTextColor] = useState(false);
  const [hasPageBeenScrolled, setPageScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const rgbToHex = (rgb) => {
    const result = rgb.match(/\d+/g).map((num) => {
      const hex = parseInt(num, 10).toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    });
    return `#${result.join("")}`;
  };

  // used to fix minification issues in PROD
  const expandHex = (hex) => {
    if (hex.length === 4) {
      return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }
    return hex;
  };

  const setHeaderColors = useCallback(() => {
    const header = document.getElementById("globalHeader");
    if (!header) return;

    const headerHeight = header.offsetHeight;
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;
    let textColorPrimary = false;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= headerHeight && rect.bottom >= 0) {
        const backgroundColor = window.getComputedStyle(section).backgroundColor;
        const sectionBackgroundColorHex = expandHex(rgbToHex(backgroundColor));

        const lightBackgroundSassVariable = expandHex(
          getComputedStyle(document.documentElement).getPropertyValue("--light").trim()
        );

        if (sectionBackgroundColorHex === lightBackgroundSassVariable) {
          textColorPrimary = true;
        }
      }
    });

    scrollPosition > 80 ? setPageScrolled(true) : setPageScrolled(false);
    setIsPrimaryTextColor(textColorPrimary);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderColors();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case the page loads with the header already over a section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHeaderColors]);

  return (
    <div className="top-nav">
      <header id="globalHeader" className={`globalHeader ${isPrimaryTextColor ? "header--invert" : ""}`}>
        {/* Don't show the Enroll link on the Enrollment page */}
        <div className="globalHeader__col-left">
          {pathname !== "/enrollment" && (
            <Link className="tourLink btn btn--underline caps" href="/enrollment">
              <span>enroll now</span>
            </Link>
          )}
        </div>

        <div className={`globalHeader__col-center ${hasPageBeenScrolled ? "fade" : ""}`}>
          <div className="logo masthead-logo">
            <Image className="logo__image" src={"/images/WRNS-Logo.png"} width={106} height={61} alt="" />
          </div>
        </div>

        <div className="globalHeader__col-right">
          <div className={`hamburger-menu-wrapper navModal ${menuActive ? "open" : ""}`}>
            <button className="hamburger-menu" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={`globalHeader-menu-container ${menuActive ? "open" : ""}`}>
            <div className="back-overlay"></div>
            <div className="menus">
              <Navigation closeMenu={closeMenu} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
