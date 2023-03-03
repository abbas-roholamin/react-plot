/** @format */
import { Outlet } from "react-router-dom";
import React from "react";

import { Navbar } from "../components";
function AppLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
