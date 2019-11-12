import React, { Component } from "react";

export class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { weight: "", age: "", distance: "", time: "" };

    //BIND OUR OWN THIS TO HANDLE CHANGES
    this.handleFormChanges = this.handleFormChanges.bind(this);
  }

  //CHANGE
  handleFormChanges(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //ON SUBMIT FUNCTION . CALCULATE CALORIES FORMULA AND OUTPUT
  handleEvent() {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleEvent}>
          <input
            type="text"
            name="weight"
            placeholder="what is your weight?"
            value={this.state.weight}
            onChange={this.handleFormChanges}
          />
          <input
            type="text"
            name="age"
            placeholder="what is your age?"
            value={this.state.age}
            onChange={this.handleFormChanges}
          />
          <input
            type="text"
            name="distance"
            placeholder="what distance you done?"
            value={this.state.distance}
            onChange={this.handleFormChanges}
          />
          <input
            type="text"
            name="time"
            placeholder="how many time it took?"
            value={this.state.time}
            onChange={this.handleFormChanges}
          />
          <input type="submit" value="count"></input>
        </form>
      </div>
    );
  }
}

export default Inputs;
