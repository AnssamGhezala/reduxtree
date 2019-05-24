import React, { Component } from "react";
import "./App.css";
import Tree from "./Components/Tree/Tree";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tree title="Root" />
      </div>
    );
  }
}

export default App;
