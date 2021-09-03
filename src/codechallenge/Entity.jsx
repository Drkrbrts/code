import React from "react";
import { toast } from "react-toastify";

import * as carService from "../services/carService";

class Entity extends React.Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: {},
    },
  };

  onFormFieldChanged = (e) => {
    console.log(e.currentTarget.name);
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;

      return { formData };
    });
  };

  onSignUpClicked = (e) => {
    e.preventDefault();
    carService
      .entity(this.state.formData)
      .then(this.onSubmitSuccess)
      .catch(this.onSubmitError);
  };

  onSubmitSuccess = (response) => {
    console.log(response);
    this.resetForm();
    toast.success("Submission success");
  };
  onSubmitError = (err) => {
    console.warn(err);
    toast.error("Submission error");
  };

  resetForm = () => {
    this.setState({
      formData: {
        name: "",
        manufacturer: "",
        description: "",
        cost: {},
      },
    });
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>Cars</p>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name of car"
                    value={this.state.formData.name}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="manufacturer"
                    name="manufacturer"
                    placeholder="Manufacturer of Car"
                    value={this.state.formData.manufacturer}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Color of the car"
                    value={this.state.formData.description}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="cost"
                    name="cost"
                    placeholder="Color of the car"
                    value={this.state.formData.cost}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3 form-group"></div>

                <button
                  variant="primary"
                  type="submit"
                  onClick={this.onSignUpClicked}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <hr />
        </div>
      </main>
    );
  }
}

export default Entity;
