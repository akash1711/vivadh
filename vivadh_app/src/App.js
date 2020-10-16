import React, { Component } from "react";
import "./App.css";
import AppBuilder from "./container/AppBuilder";
import Aux from "./hoc/Auxiliary";

class App extends Component {
  render() {
    return (
      <Aux>
        <AppBuilder />
      </Aux>
    );
  }
}

export default App;
