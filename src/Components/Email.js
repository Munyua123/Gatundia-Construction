import React from "react";

function Email() {
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "#3D3B40" }}>
        <div className="container-fluid">
          <div className="email">
            <a
              href="mailto:Gatundiaconcretelimited@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none"}}
            >
              <i className="fa-solid fa-envelope fa-xl"></i>
              Gatundiaconcretelimited@gmail.com
            </a>
          </div>
          <div style={{ color: "black" }} className="last">
            <button type="button" className="btn btn-success">
              <a
                href="tel: 0721953823"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                Request A Quote
              </a>
            </button>
          </div>
          <div className="icons">
            <a href="tel: +254721953823">
              <i
                className="fa-solid fa-phone fa-lg"
                style={{ paddingLeft: "1rem" }}
              ></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100072124434733&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-facebook fa-lg"
                style={{ paddingLeft: "1rem" }}
              ></i>
            </a>
            <a
              href="mailto:Gatundiaconcretelimited@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-regular fa-envelope fa-lg"
                style={{ paddingLeft: "1rem" }}
              ></i>
            </a>
            <a
              href="https://wa.me/254112374473/?text=HiGatundia"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-whatsapp fa-lg"
                style={{ paddingLeft: "1rem" }}
              ></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Email;
