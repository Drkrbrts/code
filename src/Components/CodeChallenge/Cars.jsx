import React from "react";
import SingleCar from "./CarSingle";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const filterSchema = Yup.object().shape({
  year: Yup.string().required("Year required to filter"),
});

class Cars extends React.Component {
  state = {
    carsArray: [
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
    mappedCars: "",
    showCars: false,
    filterByYear: { year: "" },
    filtering: false,
  };

  componentDidMount() {
    this.setState((prevState) => {
      let newState = { ...this.prevState };

      newState.mappedCars = this.state.carsArray.map(this.mapCars);

      return newState;
    });
  }

  mapCars = (singleCar) => {
    return (
      <React.Fragment key={singleCar.year + "-" + singleCar.model}>
        <SingleCar car={singleCar} {...this.props} />
      </React.Fragment>
    );
  };

  toggleCars = () => {
    this.setState((prevState) => {
      return { showCars: !prevState.showCars };
    });
  };

  handleCarFilter = (data) => {
    console.log(data);

    this.setState((prevState) => {
      let newState = { ...prevState };

      newState.mappedCars = prevState.mappedCars.filter((item) => {
        let result = false;

        if (item.key.includes(data.year)) {
          result = true;
        }
        return result;
      });
      newState.filtering = true;

      return newState;
    });
  };

  clearFilter = () => {
    this.setState((prevState) => {
      let newState = { ...this.prevState };
      newState.mappedCars = this.state.carsArray.map(this.mapCars);
      newState.filtering = false;
      return newState;
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container my-4">
          <div className="row">
            {this.state.showCars ? (
              <button
                className="btn btn-secondary col-3 me-3"
                onClick={this.toggleCars}
              >
                Hide Cars
              </button>
            ) : (
              <button
                className="btn btn-primary col-3 me-3"
                onClick={this.toggleCars}
              >
                Show Cars
              </button>
            )}
            <div className="col-6">
              {this.state.filtering ? (
                <button
                  type="button"
                  className="btn btn-outline-danger col-3 mt-2"
                  onClick={this.clearFilter}
                >
                  Clear Filter
                </button>
              ) : (
                <Formik
                  enableReinitialize={true}
                  initialValues={this.state.filterByYear}
                  onSubmit={this.handleCarFilter}
                  validationSchema={filterSchema}
                >
                  <Form>
                    <div className="row">
                      <Field
                        component="select"
                        name="year"
                        className="form-control col-6"
                      >
                        <option value="">Filter By Year</option>
                        <option value="2021">Show 2021</option>
                        <option value="2020">Show 2020</option>
                        <option value="2019">Show 2019</option>
                      </Field>
                      <ErrorMessage
                        name="year"
                        component="div"
                        className="has-error"
                      />

                      <button
                        type="submit"
                        className="btn btn-outline-warning col-3 mt-2"
                      >
                        Filter
                      </button>
                    </div>
                  </Form>
                </Formik>
              )}
            </div>
          </div>
        </div>
        <div className="container mb-4">
          {this.state.showCars ? (
            <div className="row">{this.state.mappedCars}</div>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Cars;
