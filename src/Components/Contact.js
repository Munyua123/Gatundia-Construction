import React from "react";

function Contact({
  firstname,email,phonenumbers,reason,descriptions,handlesubmit,handlechange
}) {
  return (
    <div
      style={{
        border: "solid black 2px",
        width: "50%",
        margin: "auto",
        padding: "1rem",
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
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "7rem", marginBottom: "5px", marginLeft: "5rem" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
