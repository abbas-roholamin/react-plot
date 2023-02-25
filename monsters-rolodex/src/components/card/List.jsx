/** @format */

import { Component } from "react";
import Card from "./Card";
import "./list.css";

class List extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default List;
