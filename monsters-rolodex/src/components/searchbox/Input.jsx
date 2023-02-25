/** @format */

import { Component } from "react";
import "./style.css";

class Input extends Component {
  render() {
    const { className, placeholder, handleOnChnage } = this.props;
    return (
      <input
        className={`search-box  ${className}`}
        type="text"
        placeholder={placeholder}
        onChange={handleOnChnage}
      />
    );
  }
}

export default Input;
