/** @format */

import { Link } from "react-router-dom";
import React from "react";

function NavLink({ to, label, children, ...props }) {
  return (
    <Link to={to} {...props}>
      {children || label}
    </Link>
  );
}

export default NavLink;
