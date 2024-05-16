import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Navbar.css";

const logo = "./Logo/rac_madhyapur-Final.png";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 30) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  window.addEventListener("scroll", changeNav);
  return (
    <>
      <nav
        className={
          shadow
            ? "navbar navShadow navbar-expand-lg slide-in-top"
            : "navbar navbar-expand-lg"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo" alt="" />
          </a>
          <i
            class="fa-solid fa-bars-staggered navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></i>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who We Are
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/mission">
                      Our Mission/Vision
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/team">
                      Our Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/pastpresident">
                      Our Past Presidents
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/project">
                  Our Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item loginBtn">
                <NavLink className="nav-link " to="/login">
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
