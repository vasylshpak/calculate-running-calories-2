import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export class Result extends Component {
  //DUMB COMPONENT
  render() {
    return (
      <div className="text-center">
        <h2>
          You burned {this.props.calories} calories{" "}
          <span role="img">🤙 🤙</span>
        </h2>
      </div>
    );
  }
}

export default Result;
