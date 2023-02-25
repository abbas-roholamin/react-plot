/** @format */

import { Component } from "react";

import "./App.css";
import { List } from "./components/card";
import { Input } from "./components/searchbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  handleSearching = (e) => {
    const searchFeild = e.target.value.toLocaleLowerCase();
    this.setState({ searchFeild });
  };

  render() {
    const { monsters, searchFeild } = this.state;
    const { handleSearching } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFeild);
    });

    return (
      <div className="App">
        <h1 className="title">monsters rolodex</h1>
        <Input placeholder="search..." handleOnChnage={handleSearching} />
        <List monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
