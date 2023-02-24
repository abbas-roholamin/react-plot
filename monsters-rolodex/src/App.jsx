/** @format */

import { Component } from "react";

import "./App.css";

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
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state.monsters);
          }
        )
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
        <input
          type="text"
          placeholder="Monster name"
          onChange={handleSearching}
        />
        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
