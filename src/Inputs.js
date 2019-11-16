import React, { Component } from "react";
import Result from "./Result";
import "bootstrap/dist/css/bootstrap.css";

export class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { weight: "", distance: "", counted: 0 };
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
  }

  render() {
    return (
      <div style={{ color: "white" }} className="m-1 ">
        <form onSubmit={this.countCalories}>
          <div className="col-sm-10  ">
            <h1>WHAT YOU SCORE TODAY?</h1>
            <label htmlFor="exampleInputEmail1">What is your weight?</label>
            <input
              className="form-control "
              type="text"
              name="weight"
              placeholder="weight"
              value={this.state.weight}
              onChange={this.handleFormChanges}
            />
          </div>
          <div className="col-sm-10 ">
            <label htmlFor="exampleInputEmail1">
              How many kilometers you run?
            </label>
            <input
              className="form-control "
              type="text"
              name="distance"
              placeholder="distance"
              value={this.state.distance}
              onChange={this.handleFormChanges}
            />
            <input
              type="submit"
              value="CHECK OUT"
              className="btn btn-primary m-1"
            ></input>
            <Result calories={this.state.counted} />
          </div>
        </form>
      </div>
    );
  }
}

export default Inputs;
