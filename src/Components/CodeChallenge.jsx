import React, { Component } from "react";
import { toast } from "react-toastify";
import entityServices from "../services/entityServices";

class CodeChallenge extends Component {
  state = {
    recentlyAddedId: "",
    carForm: {
      name: "",
      manufacturer: "",
      description: "",
      cost: "",
    },
  };

  onCarFormChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState((prevState) => {
      let newCarForm = { ...prevState.carForm };

      if (inputName !== "cost") {
        newCarForm[inputName] = newValue;
      } else {
        newCarForm[inputName] = parseInt(newValue);
      }

      return { carForm: newCarForm };
    });
  };

  onCarFormClick = (e) => {
    e.preventDefault();
    let payload = this.state.carForm;
    console.log(typeof payload.cost);
    entityServices
      .newCar(payload)
      .then(this.onNewCarSuccess)
      .catch(this.onNewCarError);
  };

  onNewCarSuccess = (response) => {
    console.log(response);
    toast.success(`Success: new fast car added. ID: ${response.data.item}`);
  };
  onNewCarError = (errResponse) => {
    console.log(errResponse);
    toast.error(
      `Error: failed to add new car, ${errResponse.response.data.errors}`
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-5 border p-4 shadow">
              <h2>Add Fast Car</h2>
              <hr className="my-4" />
              <form className="register-form">
                <div className="col-12">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="car name"
                    onChange={this.onCarFormChanged}
                    value={this.state.carForm.name}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="manufacturer" className="form-label">
                    Manufacturer
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="manufacturer"
                    name="manufacturer"
                    placeholder="car manufacturer"
                    onChange={this.onCarFormChanged}
                    value={this.state.carForm.manufacturer}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="car description"
                    onChange={this.onCarFormChanged}
                    value={this.state.carForm.description}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="cost" className="form-label">
                    Cost
                  </label>
                  <input
                    type="integer"
                    className="form-control"
                    id="cost"
                    name="cost"
                    placeholder="car cost"
                    onChange={this.onCarFormChanged}
                    value={this.state.carForm.cost}
                  />
                </div>

                <div className="mt-2 col-6">
                  <button
                    className="w-100 btn btn-primary btn"
                    type="submit"
                    onClick={this.onCarFormClick}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CodeChallenge;
