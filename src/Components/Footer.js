import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        marginTop: "2rem",
        border: "2px solid",
        padding: "1rem",
      }}
      className="contacts"
    >
      <div>
        <img
          src="./assets/2024-05-01 (1).png"
          alt="Logo"
          width="250"
          height="60"
          className="d-inline-block align-text-top"
        />
      </div>
      <div className="faq">
        <Link to="/contacts">
          <button className="btn btn-primary">
            Contact Us
          </button>
        </Link>
        <button className="btn btn-success">Frequently Asked Questions</button>
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
  );
}

export default Footer;
