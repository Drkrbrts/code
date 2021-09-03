import React from "react";
import * as userService from "../services/userService";

class EntitiesAssessment extends React.Component {
  state = {
    formData: {
      title: "",
      body: "",
      userId: "",
    },
  };

  onSubmitClicked = (e) => {
    e.preventDefault();
    console.log("submit was clicked");
    userService
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
            <form>
              <div className="mb-3">
                <label htmlFor="inputTitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputBody" className="form-label">
                  Body
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="body"
                  name="body"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.body}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="userId" className="form-label">
                  UserId
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userId"
                  name="userId"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.userId}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmitClicked}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default EntitiesAssessment;
