import React from "react";

import SingleCar from "./SingleCar";

class Cars extends React.Component {
  state = {
    makes: ["Kia", "Kia", "Tesla"],
    cars: [
      {
        make: "Kia",
        model: "Sorento",
        year: 2020,
        id: 1,
      },
      {
        make: "Kia",
        model: "Optima",
        year: 2019,
        id: 2,
      },
      {
        make: "Tesla",
        model: "Model 3",
        year: 2021,
        id: 3,
      },
      {
        make: "Honda",
        model: "Civic",
        year: 2019,
        id: 4,
      },
      {
        make: "Honda",
        model: "Accord",
        year: 2018,
        id: 5,
      },
      {
        make: "Volkswagen",
        model: "Jetta",
        year: 2021,
        id: 6,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2021,
        id: 7,
      },
      {
        make: "Ford",
        model: "Mustang",
        year: 2019,
        id: 8,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2019,
        id: 9,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        id: 10,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2021,
        id: 11,
      },
    ],
    show: true,
  };

  componentDidMount() {
    this.setState((preState) => {
      return { mappedCars: preState.cars.map(this.mapCar) };
    });

    console.log("hot diggity");
  }

  mapCar = (oneCar) => {
    return <SingleCar key={oneCar.id} car={oneCar}></SingleCar>;
  };

  mapCarSimple = (oneCar) => {
    return <p key={oneCar.id}>{oneCar.make}</p>;
  };

  handleHide = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  // onNineteen = () => {
  //this.setState.oneCar.year.2019;  ATTEMPT 1

  // {oneCar.filter(year === 2019).map(filteredCar =>(
  //     <li>{oneCar.year}</li>
  // ))      ATTEMNPT 2

  // let isNineteen = this.state.filter(number => {return number =2019})
  // return {(
  //     <ul> Number is q</ul>
  // )}

  //  I didn't go over this filtering process in my work yet so I really didn't know what to do
  // here except connect the option buttons.  I was thinking of creating a separate JS component
  // but I was running out of time and it became daunting.  I know I can learn it and apply if I could have just
  // found it in the videos.  I looked into Gregorios REACT JS example videos and looked at the rendering
  // lists but i was running out of time.  I saw people lists (js component) and I was wondering if I should
  // do that.

  //  Secondly I just ran out of time and could not hide the car cards.  I wanted to find the right
  // syntax to make it hide (looked for container (d-none?) and just ran out of time.)

  //   };

  //   onTwenty = () => {
  //    // this.setState.oneCar.year.2020;
  //   };

  //   onTwentyOne = () => {
  //     //this.setState.oneCar.year.2021;
  //   };

  render() {
    return (
      <div className="col-md-12 p-5">
        <strong>Cars</strong>
        <div className="col"></div>

        <button className="btn btn-success" onClick={this.handleShow}>
          Show
        </button>

        {this.state.show ? (
          <button className="btn btn-info" onClick={this.handleHide}>
            Hide
          </button>
        ) : (
          <h4>Fugasi</h4>
        )}

        <div className="dropdown">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Year of Car</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option value="">Select Year</option>
              <option /*onClick={this.onNineteen}*/>2019</option>
              <option /*onClick={this.onTwenty}*/>2020</option>
              <option /*onClick={this.onTwentyOne}*/>2021</option>
            </select>
          </div>

          <hr />
          <div className="row">
            {/*this.state.cars.map(this.mapCar*/}
            {this.state.mappedCars}
          </div>
        </div>
      </div>
    );
  }
}

export default Cars;
