import React from "react";

function Contact({
  firstname,
  email,
  phonenumbers,
  reason,
  descriptions,
  handlesubmit,
  handlechange,
}) {
  return (
    <div
    className="mx-auto d-block"
      style={{
        border: "solid black 2px",
        padding: "1rem",
        marginTop: "2rem",
        width: "25rem"
      }}
    >
      <form onSubmit={handlesubmit}>
        <h2 style={{ textAlign: "center" }}>Contact Us</h2>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            value={firstname}
            onChange={handlechange}
            placeholder="Enter ryour name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customeremail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={handlechange}
          />
        </div>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
        <div className="mb-3">
          <label htmlFor="phonenumber" className="form-label">
            Telephone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phonenumbers"
            value={phonenumbers}
            onChange={handlechange}
            placeholder="Enter your phonenumber"
          />
        </div>
        <div className="mb-3">
          <select
            id="reason"
            className="form-select"
            aria-label="Default select example"
            value={reason}
            onChange={handlechange}
          >
            <option value="">Reason for Enquiry</option>
            <option value="buyingProducts">Buying Products</option>
            <option value="machineHiring">Machine Hiring</option>
            <option value="generalEnquiry">General Enquiry</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="descriptions" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="descriptions"
            rows="3"
            value={descriptions}
            onChange={handlechange}
            placeholder="Enter a description of your request/review"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-auto d-block"
          style={{ width: "7rem", marginBottom: "5px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
