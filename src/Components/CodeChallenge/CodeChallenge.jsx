import React from "react";
import * as codeFile from "../services/codeFile";

class CodeChallenge extends React.Component {
  onSubmitClicked = () => {
    console.log("Submit was clicked");
    codeFile.submit().then(this.onSubmitSuccess).catch(this.onSubmitError);
  };
  onSubmitSuccess = (response) => {
    console.log(response);
  };
  onSubmitError = (errResponse) => {
    console.log(errResponse);
  };
  state = {
    formData: {
      firstName: "Carl",
      lastName: "Weasley",
      email: "cweasley@yahoo.com",
      password: "Password1!",
      confirm: "Password1!",
      avatarUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
      tenantId: "sabio",
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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputFirstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.firstName}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.lastName}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputManufacturer" className="form-label">
                  Manufacturer
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Manufacturer"
                  name="Manufacturer"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.maufacturer}
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
