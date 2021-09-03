import React from "react";
import * as userService from "../services/userService";

class Assessment extends React.Component {
  state = {
    formData: {
      title: "",
      body: "",
      userId: "",
      id: 1,
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

  onSubmitButtonClicked = () => {
    userService
      .assessmentAxios(this.state.formData)
      .then(this.onSubmitButtonClickedSuccess)
      .catch(this.onSubmitButtonClickedError);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      formData: {
        title: "",
        body: "",
        userId: "",
      },
    });
  };
  onSubmitButtonClickedSuccess = (response) => {
    console.log(response);
  };
  onSubmitButtonClickedError = (err) => {
    console.warn(err);
  };

  render() {
    return (
      <div className="container">
        <div className="row col-12 p-5">
          <div className="col-md-4"></div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="title"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.title}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="body"
              placeholder="body"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.body}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="number"
              name="userId"
              placeholder="userId"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.userId}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary col-1"
            onClick={this.onSubmitButtonClicked}
          >
            Submit
          </button>
          <div />
        </div>
      </div>
    );
  }
}

export default Assessment;
