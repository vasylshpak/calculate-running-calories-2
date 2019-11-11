import React, { Component } from "react";

export class Imputs extends Component {
  constructor(props) {
    super(props);
    this.state = { weight: "" };
  }
  handleEvent() {
    console.log("handle event has been clicked");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleEvent}>
          <input
            type="text"
            name="weight"
            //value={this.state.weight}
            placeholder="what is your weight?"
          />
          <input type="text" placeholder="what is your age?" />
          <input type="text" placeholder="what distance you done?" />
          <input type="text" placeholder="how many time it took?" />
          <input type="submit" value="count"></input>
        </form>
      </div>
    );
  }
}

export default Imputs;
