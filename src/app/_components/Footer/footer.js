"use client";

import "./footer.scss";

import { useEffect, useState } from "react";

import { ReactSVG } from "react-svg";

const Footer = () => {
  const [primaryColor, setPrimaryColor] = useState("");

  useEffect(() => {
    const color = window.getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    setPrimaryColor(color);
  }, []);

  return (
    <footer>
      <div className="blue-box">
        <div className="contact-container">
          <div className="socials">
            <h3 className="white">Follow Us</h3>
            <div className="socials-container">
              <a className="socials-link" href="https://www.facebook.com/WintonRoadNurserySchool/" target="_blank">
                <ReactSVG
                  src={"/svgs/facebook.svg"}
                  beforeInjection={(svg) => {
                    const paths = svg.querySelectorAll("path");
                    if (paths[1]) paths[1].setAttribute("fill", "#fff");
                    if (paths[2]) paths[2].setAttribute("fill", primaryColor);
                  }}
                  alt="facebook"
                />
              </a>
              <a className="socials-link" href="https://www.instagram.com/wrnschool/" target="_blank">
                <ReactSVG
                  src={"/svgs/instagram.svg"}
                  beforeInjection={(svg) => {
                    const paths = svg.querySelectorAll("path");
                    if (paths[0]) paths[0].setAttribute("fill", "#fff");
                    if (paths[1]) paths[1].setAttribute("fill", primaryColor);
                  }}
                  alt="instagram"
                />
              </a>
            </div>
          </div>
          <div className="address">
            <h3 className="white">Get in touch</h3>
            <p className="condensed">220 Winton Road South</p>
            <p className="condensed">Rochester, NY 14610</p>
            <p className="">(585) 442-8340</p>
            <a className="alt-link" href="mailto:operationsmanager@wintonroad.org">
              <span>operationsmanager@wintonroad.org</span>
            </a>
          </div>
          <div className="address">
            <h3 className="white">Mailing Address</h3>
            <p className="condensed">PO Box 10281</p>
            <p className="condensed">Rochester, NY 14610</p>
          </div>
        </div>
        <p id="disclaimer">
          Winton Road Nursery School admits students of any race, color, national, and ethnic origin to all rights,
          privileges, programs, and activities available to students at the school. We do not discriminate based on
          race, color, national, or ethnic origin in the administration of our educational policies, admissions
          policies, scholarship and financial aid programs, and other school-administered programs.
        </p>
        <p id="copyright">&copy; {new Date().getFullYear()} Winton Road Nursery School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
