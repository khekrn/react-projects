import React from "react";
import "./App.css";
import "./components/card-list/card-list.component";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box-component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchText: searchString,
      };
    });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchText);
    });
    const { onSearchChange } = this;
    return (
      <div className="App">
        <SearchBox
          className="search-box"
          placeholder="search monsters"
          onChangeHandler={onSearchChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
