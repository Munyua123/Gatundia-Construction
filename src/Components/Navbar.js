import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        {/* This will contain a link to the home page */}
        <NavLink to="/" className="navbar-brand" >
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                {/* This will contain a link to the home page */}
              <NavLink to="/" className="nav-link active" aria-current="page" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
                {/* This will contain a link to the projects page */}
              <NavLink to="/projects" className="nav-link" >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
                {/* This will contain a link to the products page */}
              <NavLink to="/products" className="nav-link" >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
                {/* This will contain a link to the hiring page */}
              <NavLink to="/hiring" className="nav-link" >
                Hiring
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}


export default Navbar