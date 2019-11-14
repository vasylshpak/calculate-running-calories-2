import React, { Component } from "react";
import Result from "./Result";

export class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { weight: "", age: "", distance: "", time: "", counted: "0" };
    //BIND OUR OWN THIS TO HANDLE CHANGES
    this.handleFormChanges = this.handleFormChanges.bind(this);
    this.countCalories = this.countCalories.bind(this);
  }

  //CHANGE
  handleFormChanges(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //ON SUBMIT FUNCTION . CALCULATE CALORIES FORMULA AND OUTPUT
  countCalories(e) {
    e.preventDefault(e);
    // const weightVal = this.state.weight;
    // const distanceVal = this.state.distance;
    // const sum = weightVal * distanceVal;
    this.setState({ counted: this.state.weight * this.state.distance });

    console.log(this.counted);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.countCalories}>
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
        <Result calories={this.state.counted} />
      </div>
    );
  }
}

export default Inputs;
