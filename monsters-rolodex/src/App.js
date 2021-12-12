import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      previous: "Hello Awesome",
      current: "Hello Kishore Karunakaran",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.current}</p>
          <button onClick={() => this.setState(changeText(this.state))}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

function changeText(state) {
  let temp = state.current;
  state.current = state.previous;
  state.previous = temp;
  return state;
}

export default App;
