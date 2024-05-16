import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerSection py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <h3>Important Links</h3>
              <div className="footerLinks ">
                <a href="https://www.rotary.org/en" target="_blank">
                  Rotary International
                </a>
                <a href="https://rotaract3292.org/" target="_blank">
                  Rotaract District 3292
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h3>About Us</h3>
              <div className="footerLinks">
                <NavLink to="/about">Who We Are</NavLink>
                <NavLink to="/mission">Our Mission/Vision</NavLink>
                <NavLink to="/pastpresident">Our Past Presidents</NavLink>
                <NavLink to="/team">Our Team</NavLink>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h3>Our Works</h3>
              <div className="footerLinks">
                <NavLink to="/project">Our Projects</NavLink>
                <NavLink to="/gallery">Our Memory</NavLink>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <h3>Contact Us</h3>
              <p>Rotaract Club Of Madhyapur</p>
              <p>Kumar Bakary, Madhyapur thimi, Bhaktapur, Nepal</p>
              <p>rotaract.madhyapur@gmail.com</p>
              <div className="socialIcons d-flex gap-3">
                <a
                  href="https://www.facebook.com/rac.madhyapur"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/rotaract.madhyapur/"
                  target="_blank"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="container pt-2">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7">
              <p>© | 2023 Rotaract Club Of Madhyapur | All rights reserved</p>
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <div className="term d-flex justify-content-end">
                <p>Terms & Condition | Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
