import React, { Component } from "react";
import Inputs from "./Inputs";
import "bootstrap/dist/css/bootstrap.css";

export class App extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: "700px"
        }}
      >
        <Inputs />
      </div>
    );
  }
}

export default App;
