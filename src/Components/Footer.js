import React from "react";

function Footer() {
  return (
    <div 
    style={{ 
      marginTop: "2rem", 
      border: "2px solid",
      }}>
      <div>
        <h3>GATUNDIA CONCRETE LIMITED</h3>
      </div>
      <div 
      className="icons" 
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "2rem"
      }}
      >
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
      </div>
    </div>
  );
}

export default Footer;
