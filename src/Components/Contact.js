import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Footer from "./Footer";

function Contact() {
  const [state, handleSubmit] = useForm("xbjnwono");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            border: "solid black 2px",
            padding: "1rem",
            marginTop: "2rem",
            width: "25rem",
            marginLeft: "4rem",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="mb-3">
              <label htmlFor="phonenumber" className="form-label">
                Telephone Number
              </label>
              <input
                id="phonenumber"
                type="number"
                name="phonenumber"
                className="form-control"
                placeholder="Enter your phonenumber"
              />
            </div>
            <div className="mb-3">
              <select
                id="reason"
                aria-label="Default select example"
                className="form-select"
              >
                <option value="">Reason for Enquiry</option>
                <option value="buyingProducts">Buying Products</option>
                <option value="generalEnquiry">General Enquiry</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Description of Enquiry
              </label>
              <textarea
                className="form-control"
                rows="3"
                id="message"
                name="message"
                placeholder="Enter a description of your request/review"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-primary mx-auto d-block"
              style={{ width: "7rem", marginBottom: "5px" }}
            >
              Submit
            </button>
          </form>
        </div>
        <div
          style={{
            border: "2px solid",
            width: "28rem",
            height: "12rem",
            marginRight: "10rem",
            padding: "2rem",
            marginTop: "10rem",
          }}
        >
          <p>Telephone: +254721953823</p>
          <p>Email: Gatundiaconcretelimited@gmail.com</p>
          <p>
            Location: Off Nyahururu-Rumuruti Road,just past Gatundia shopping
            centre, Rumuruti
          </p>
        </div>
      </div>
      <div style={{ width: "30rem", height: "16rem", marginLeft: "30rem" }}>
        <a
          href="https://www.google.com/maps/place/Gatundia+Concrete+Crushing+Plant/@0.2288191,36.4592979,15.79z/data=!4m6!3m5!1s0x1787737f83efce35:0x5de2ebcd74987a12!8m2!3d0.227301!4d36.4627878!16s%2Fg%2F11ll9vc1p2?entry=ttu"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./assets/2024-05-01 (3).png"
            alt="Google Maps"
            width="400rem"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
