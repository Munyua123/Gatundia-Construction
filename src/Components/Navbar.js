import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg "
      data-bs-theme="dark"
      style={{ marginBottom: "1rem", backgroundColor: "black" }}
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          GATUNDIA CONCRETE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="middle">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* This will contain a link to the home page */}
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* This will contain a link to the projects page */}
                <NavLink to="/projects" className="nav-link">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                {/* This will contain a link to the products page */}
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                {/* This will contain a link to the contact us page */}
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                {/* This will contain a link to the contact us page */}
                <NavLink to="/contacts" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="last">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button type="button" className="btn btn-success">
                  <a href="tel: +254721953823" target="_blank" rel="noreferrer" className="nav-link">
                    Call Us
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
