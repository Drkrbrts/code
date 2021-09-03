import React, { Component } from "react";
import "./Car.css";

class Car extends Component {
  render() {
    return (
      <div className="card col-md-2 m-1">
        <div className="card-body">
          <h3>{this.props.car.make}</h3>
          <p>{this.props.car.model}</p>
          <p>{this.props.car.year}</p>
        </div>

        {/* <div>
          <div>{this.props.find((car) => car.year === "2018").car}</div>
          <div>{this.props.find((car) => car.year === "2018").car}</div>
          <div>{this.props.find((car) => car.year === "2018").car}</div>
        </div> */}
      </div>
    );
  }
}

export default Car;
