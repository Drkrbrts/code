import React from "react";
import { withRouter } from "react-router-dom";
import SingleCar from "./singleCar";
import { Formik, Form, Field } from "formik";
import "./compStyle.css";

class Cars extends React.Component {
  state = {
    carList: [
      {
        make: "Kia",
        model: "Sorento",
        year: 2020,
      },
      {
        make: "Kia",
        model: "Optima",
        year: 2019,
      },
      {
        make: "Tesla",
        model: "Model 3",
        year: 2021,
      },
      {
        make: "Honda",
        model: "Civic",
        year: 2019,
      },
      {
        make: "Honda",
        model: "Accord",
        year: 2018,
      },
      {
        make: "Volkswagen",
        model: "Jetta",
        year: 2021,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2021,
      },
      {
        make: "Ford",
        model: "Mustang",
        year: 2019,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2019,
      },
      {
        make: "Toyota",
        model: "Camry",
        year: 2020,
      },
      {
        make: "Ford",
        model: "F-150",
        year: 2021,
      },
    ],
    carsMapped: [],
    isShowing: true,
    formData: { year: "select" },
  };

  componentDidMount = () => {
    this.setState((prevState) => {
      let carList = prevState.carList;
      let carsMapped = prevState.carsMapped;
      carsMapped = carList.map(this.mapCar);
      return { carList, carsMapped };
    });
  };

  toggleShowing = () => {
    this.setState((prevState) => {
      return { isShowing: !prevState.isShowing };
    });
  };

  handleSubmit = (values) => {
    // console.log(values);
    if (this.state.isShowing === false) {
      if (values.year === "select") {
        return;
      } else {
        this.setState((prevState) => {
          return { isShowing: !prevState.isShowing };
        });
      }
    }
    if (values.year === "select") {
      return;
    }
    if (values.year === "showAll") {
      this.setState((prevState) => {
        let carList = prevState.carList;
        let carsMapped = prevState.carsMapped;
        carsMapped = carList.map(this.mapCar);
        return { carList, carsMapped };
      });
    } else if (values.year === "showNone") {
      this.setState((prevState) => {
        return { isShowing: !prevState.isShowing };
      });
    } else {
      let yearInt = parseInt(values.year);
      // console.log(yearInt);
      this.setState((prevState) => {
        let carList = prevState.carList;
        let carsMapped = prevState.carsMapped;
        let filteredCarList = carList.filter((car) => {
          let result = false;
          if (car.year === yearInt) {
            result = true;
          }
          return result;
        });
        carsMapped = filteredCarList.map(this.mapCar);
        return { carList, carsMapped, filteredCarList };
      });
    }
  };

  mapCar = (car) => {
    return (
      <SingleCar
        {...this.props}
        key={`car_${car.model}_${car.year}`}
        car={car}
      ></SingleCar>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row m-3">
            <h1>This is a page about Cars</h1>
            <Formik
              enableReinitialize={true}
              initialValues={this.state.formData}
              onSubmit={this.handleSubmit}
            >
              <Form className="py-2">
                <div className="row">
                  <button
                    type="submit"
                    className="btn btn-primary col-2 my-4"
                    // onClick={this.toggleShowing}
                  >
                    Show Cars
                  </button>
                  <div className="form-group my-4 col-4">
                    <Field
                      component="select"
                      name="year"
                      className="form-control"
                    >
                      <option value="select">Select</option>
                      <option value="showAll">show All</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="showNone">show None</option>
                    </Field>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
          <div>
            {this.state.isShowing ? (
              <div className="row m-3">{this.state.carsMapped}</div>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Cars);
