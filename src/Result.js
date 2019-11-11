import React, { Component } from "react";

export class Result extends Component {
  constructor(props) {
    super(props);
    this.state = { counted: "123" };
  }
  countedCalorier() {
    this.setState{}
  }

  render() {
    return (
      <div>
        <h2>You total burned calories {this.state.counted}</h2>
      </div>
    );
  }
}

export default Result;
