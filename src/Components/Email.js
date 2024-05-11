import React from "react";

function Email() {
  return (
    <div>
      <nav className="navbar" style={{ backgroundImage: `url(/assets/pexels-slendyalex-3745234.jpg)` }}>
        <div className="container-fluid">
          <div className="email">
            <a
              href="mailto:Gatundiaconcretelimited@gmail.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
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
              href="https://wa.me/254112374473/?text=HiGatundia"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-whatsapp fa-lg"
                style={{ paddingLeft: "1rem" }}
              ></i>
            </a>
            <a
              href="https://www.google.com/maps/place/Gatundia+Concrete+Crushing+Plant/@0.2288191,36.4592979,15.79z/data=!4m6!3m5!1s0x1787737f83efce35:0x5de2ebcd74987a12!8m2!3d0.227301!4d36.4627878!16s%2Fg%2F11ll9vc1p2?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-solid fa-location-dot fa-lg"
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
