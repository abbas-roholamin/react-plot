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

      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to="/shop" label="Shop" />
        </li>
      </ul>
    </nav>
  );
}

export default index;
