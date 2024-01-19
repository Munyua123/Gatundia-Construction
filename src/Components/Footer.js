import React from "react";

function Footer() {
  return (
    <div style={{ marginTop: "2rem", border: "2px solid" }}>
      {/* this will be the company Logo */}
      <div>
        <img
          src="./Assets/WhatsApp Image 2024-01-17 at 23.13.50_4d5d9ca1.jpg"
          alt=""
          style={{ height: "15rem", marginTop: "1rem", marginBottom: "1rem" }}
        />
        <h3>GATUNDIA CONCRETE LIMITED</h3>
      </div>
      {/* This will be the socials place */}
      <div className="icons" style={{ color: "black" }}>
        <a href="tel: +254721953823">
          <i className="fa-solid fa-phone" style={{ paddingLeft: "1rem" }}></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100072124434733&mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-facebook"
            style={{ paddingLeft: "1rem" }}
          ></i>
        </a>
        <a href="mailto:Gatundiaconcretelimited@gmail.com" target="_blank" rel="noreferrer">
          <i
            className="fa-regular fa-envelope"
            style={{ paddingLeft: "1rem" }}
          ></i>
        </a>
        <a
          href="https://wa.me/254112374473/?text=urlencodedtext"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp" style={{ paddingLeft: "1rem" }}>
          </i>
        </a>
        {/* GOOGLE MAPS LOCATION */}
        {/* <a>
          <i
            className="fa-solid fa-map-pin"
            style={{ paddingLeft: "1rem" }}
          ></i>
        </a> */}
      </div>
    </div>
  );
}

export default Footer;
