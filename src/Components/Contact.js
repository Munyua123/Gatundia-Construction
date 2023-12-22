import React from "react";

function Contact() {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label htmlFor="firstname" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="firstname" />
        </div>
        <div class="mb-3">
          <label htmlFor="customeremail" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="customeremail"
            placeholder="name@example.com"
          />
        </div>
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
        <div class="mb-3">
          <label htmlFor="phonenumber" class="form-label">
            Telephone Number
          </label>
          <input type="number" class="form-control" id="phonenumber" />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
