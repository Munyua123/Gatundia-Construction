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
      <div className="contacts">
        <div
          style={{
            padding: "1rem",
            marginTop: "2rem",
            width: "20rem",
          }}
          className="contactform"
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
            width: "21rem",
            height: "14rem",
            padding: "1rem",
          }}
          className="contactinfo"
        >
          <p>
            <i
              className="fa-solid fa-phone fa-lg"
              style={{ paddingRight: "1rem" }}
            ></i>
            +254721953823
          </p>
          <p>
            <i
              className="fa-regular fa-envelope fa-lg"
              style={{ paddingRight: "1rem" }}
            ></i>
            Gatundiaconcretelimited@gmail.com
          </p>
          <p>
            <i
              className="fa-solid fa-location-dot fa-lg"
              style={{ paddingRight: "1rem" }}
            ></i>
            Off Nyahururu-Rumuruti Road,just past Gatundia shopping centre,
            Rumuruti
          </p>
        </div>
      </div>
      <div
        className="mx-auto d-block"
      >
        <h2 style={{ textAlign: "center" }}>Google Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485021.77247428783!2d36.27280135245142!3d0.051421603410170144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1787737f83efce35%3A0x5de2ebcd74987a12!2sGatundia%20Concrete%20Crushing%20Plant!5e0!3m2!1sen!2ske!4v1715679296938!5m2!1sen!2ske"
          width="400rem"
          height="230rem"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="maps mx-auto d-block"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
