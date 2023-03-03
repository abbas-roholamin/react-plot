/** @format */

import React from "react";

import { Category } from "../../components";

import "./style.scss";

function index({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </div>
  );
}

export default index;
