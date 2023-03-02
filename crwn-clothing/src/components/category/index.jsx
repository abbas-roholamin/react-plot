/** @format */

import React from "react";

import "./style.scss";

function index({ category }) {
  const { title, imageUrl } = category;

  return (
    <div className="category-container ">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default index;
