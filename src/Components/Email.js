import React from "react";

function Email() {
  return (
    <div>
      <nav
        className="navbar"
        style={{backgroundColor: "#3D3B40"}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./assets/2024-05-01 (1).png"
              alt="Logo"
              width="250"
              height="60"
              className="d-inline-block align-text-top"
            />
          </a>
          <div>
            <a
              href="mailto:Gatundiaconcretelimited@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "black"
            }}
            >
              <i className="fa-solid fa-envelope fa-xl" style={{marginRight: "1rem", color: "white"}}></i>
              Gatundiaconcretelimited@gmail.com
            </a>
          </div>
          <div style={{ color: "black" }} className="last">
            <button type="button" className="btn btn-warning">
              <a
                href="tel: 0721953823"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                Call Us
              </a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Email;
