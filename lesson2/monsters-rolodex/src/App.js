import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users, currentMonsters: users })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchString: searchField,
      };
    });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={onSearchChange}
        ></input>
        {filteredMonster.map((monster) => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
