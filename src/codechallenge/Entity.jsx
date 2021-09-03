import React from "react";

import * as carService from "../services/carService";

class Entity extends React.Component {
  state = {
    formData: {
      make: "",
      model: "",
      color: "",
      tenantId: "",
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
                    id="make"
                    name="make"
                    placeholder="make of car"
                    value={this.state.formData.make}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="model"
                    name="model"
                    placeholder="Model of Car"
                    value={this.state.formData.model}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="color"
                    name="color"
                    placeholder="Color of the car"
                    value={this.state.formData.color}
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
