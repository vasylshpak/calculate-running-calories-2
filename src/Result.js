import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export class Result extends Component {
  //DUMB COMPONENT
  render() {
    return (
      <div className="text-center">
        <h2>You total burned {this.props.calories} calories</h2>
      </div>
    );
  }
}

export default Result;
