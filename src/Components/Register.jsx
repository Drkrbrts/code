import React from "react";
//import * as userService from "../services/userService";
import "rc-pagination/assets/index.css";
import { register } from "../services/userService";
import { toast } from "react-toastify";

class Register extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U024X2DMAKX",
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
  onRegisterClicked = () => {
    console.log("clicked");

    register(this.state.formData)
      .then(this.registerSuccess)
      .catch(this.registerError);
  };

  registerSuccess = (response) => {
    console.log("registerSuccess", response);
    toast("Success!!");
  };

  registerError = (response) => {
    console.error("registerError", response);
    toast("Error!");
  };

  render() {
    return (
      <div className="container p-5">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputFirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={this.onFormFieldChanged}
              placeholder="First Name"
              value={this.state.formData.firstName}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={this.onFormFieldChanged}
              placeholder="Last Name"
              value={this.state.formData.lastName}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.onFormFieldChanged}
              placeholder="Email"
              value={this.state.formData.email}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.onFormFieldChanged}
              placeholder="Password"
              value={this.state.formData.password}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputRetypePassword" className="form-label">
              Retype Password
            </label>
            <input
              type="password"
              className="form-control"
              name="passwordConfirm"
              onChange={this.onFormFieldChanged}
              placeholder="Confirm password"
              value={this.state.formData.passwordConfirm}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAvatar" className="form-label">
              Avatar URL
            </label>
            <input
              type="url"
              className="form-control"
              name="avatarUrl"
              onChange={this.onFormFieldChanged}
              placeholder="Avatar"
              value={this.state.formData.avatarUrl}
            ></input>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree to the terms
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={this.onRegisterClicked}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
