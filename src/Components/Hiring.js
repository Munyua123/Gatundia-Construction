import React from "react";
import { Link } from "react-router-dom";

function Hiring() {
  return (
    <div>
      <h4>
        Incase you want to hire any of out machines you can contact us through
        the social media and the contacts below.
      </h4>
      <Link to="/contacts">Contact us </Link>
    </div>
  );
}


export default Hiring