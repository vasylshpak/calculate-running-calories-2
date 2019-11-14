import React, { Component } from "react";

export class Result extends Component {
  render() {
    return (
      <div>
        <h2>You total burned {this.props.calories} calories</h2>
      </div>
    );
  }
}

export default Result;
