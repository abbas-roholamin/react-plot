/** @format */

import React from "react";

import NavLink from "./NavLink";

import "./style.scss";
import logo from "../../assets/crown.svg";

function index() {
  return (
    <nav className="navigation">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="nav-links">
        <NavLink to="/shop" label="Shop" className="nav-link" />
        <NavLink to="/sign-in" label="Sign-in" className="nav-link" />
      </div>
    </nav>
  );
}

export default index;
