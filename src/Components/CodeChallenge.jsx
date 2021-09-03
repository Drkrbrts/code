import React from "react";
import * as codeFile from "../services/codeFile";

class CodeChallenge extends React.Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: Number,
    },
  };
  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };
  onSubmitClicked = (e) => {
    e.preventDefault();
    console.log("Submit was clicked");
    codeFile
      .submit(this.state.formData)
      .then(this.onSubmitSuccess)
      .catch(this.onSubmitError);
  };
  onSubmitSuccess = (response) => {
    console.log(response);
  };
  onSubmitError = (errResponse) => {
    console.log(errResponse);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.name}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputManufacturer" className="form-label">
                  Manufacturer
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="manufacturer"
                  name="manufacturer"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.maufacturer}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputDescription" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.description}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputCost" className="form-label">
                  Cost
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cost"
                  name="cost"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.cost}
                />
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onSubmitClicked}
                >
                  Code Challenge
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CodeChallenge;
