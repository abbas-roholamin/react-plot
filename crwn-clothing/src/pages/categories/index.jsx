/** @format */

import React from "react";

import { Category } from "../../components";

import "./style.scss";

function index({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
}

export default index;
