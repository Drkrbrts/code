import React from "react";

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCars: [
        {
          id: "001",
          make: "Kia",
          model: "Sorento",
          year: 2020,
        },
        {
          id: "002",
          make: "Kia",
          model: "Optima",
          year: 2019,
        },
        {
          id: "003",
          make: "Tesla",
          model: "Model 3",
          year: 2021,
        },
        {
          id: "004",
          make: "Honda",
          model: "Civic",
          year: 2019,
        },
        {
          id: "005",
          make: "Honda",
          model: "Accord",
          year: 2018,
        },
        {
          id: "006",
          make: "Volkswagen",
          model: "Jetta",
          year: 2021,
        },
        {
          id: "007",
          make: "Toyota",
          model: "Camry",
          year: 2021,
        },
        {
          id: "008",
          make: "Ford",
          model: "Mustang",
          year: 2019,
        },
        {
          id: "009",
          make: "Ford",
          model: "F-150",
          year: 2019,
        },
        {
          id: "010",
          make: "Toyota",
          model: "Camry",
          year: 2020,
        },
        {
          id: "011",
          make: "Ford",
          model: "F-150",
          year: 2021,
        },
      ],
      formData: {
        dropdownSelection: "",
      },
      buttonClassName: "btn btn-primary",
      buttonLabel: "Show Cars",
      containerClass: "",
    };
  }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    console.log({ currentTarget, newValue });

    this.setState((preState) => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      formData.dropdownSelection = Number(formData.dropdownSelection);
      return {
        filteredCars: preState.myCars.filter(this.filterCars),
        formData,
      };
    });
  };

  filterCars = (oneCar) => {
    if (this.state.formData.dropdownSelection === 2000) {
      return (
        <React.Fragment key={oneCar.id}>
          <div className="row">
            <div className="card col-md-3 m-1">
              <div className="card-body">
                <h5 className="card-title">Make: {oneCar.make}</h5>
                <h5 className="card-text">Model: {oneCar.model}</h5>
                <h5 className="card-text">Year: {oneCar.year}</h5>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    if (this.state.formData.dropdownSelection === oneCar.year) {
      return (
        <React.Fragment key={oneCar.id}>
          <div className="row">
            <div className="card col-md-3 m-1">
              <div className="card-body">
                <h5 className="card-title">Make: {oneCar.make}</h5>
                <h5 className="card-text">Model: {oneCar.model}</h5>
                <h5 className="card-text">Year: {oneCar.year}</h5>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return {};
  };

  onShowCarsClicked = () => {
    this.setState((preState) => {
      if (this.state.buttonLabel === "Hide Cars") {
        return {
          containerClass: "d-none",
          buttonClassName: "btn btn-primary",
          buttonLabel: "Show Cars",
        };
      }
      return {
        buttonClassName: "btn btn-warning",
        buttonLabel: "Hide Cars",
        containerClass: "row",
        mappedCars: preState.myCars.map(this.mapCars),
      };
    });
  };

  mapCars = (oneCar) => {
    return (
      <React.Fragment key={oneCar.id}>
        <div className="row">
          <div className="card col-md-3 m-1">
            <div className="card-body">
              <h5 className="card-title">Make: {oneCar.make}</h5>
              <h5 className="card-text">Model: {oneCar.model}</h5>
              <h5 className="card-text">Year: {oneCar.year}</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <button
            type="button"
            style={{
              marginTop: "50px",
              marginLeft: "38px",
              width: "10%",
              height: "10%",
            }}
            className={this.state.buttonClassName}
            onClick={this.onShowCarsClicked}
          >
            {this.state.buttonLabel}
          </button>
          <div className="col">
            <label htmlFor="dropdownSelection"></label>
            <select
              name="dropdownSelection"
              className="form-control"
              onChange={this.onFormFieldChanged}
              style={{ marginTop: "27px", marginLeft: "35px", width: "10%" }}
              value={this.state.formData.dropdownSelection}
            >
              <option value="2000">View All</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </div>
        </div>
        <div className={this.state.containerClass}>{this.state.mappedCars}</div>
      </React.Fragment>
    );
  }
}

export default Cars;
