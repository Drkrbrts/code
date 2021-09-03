import React from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import "../App.css";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class SignUp extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "714213",
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

  onRegisterButtonClicked = () => {
    userService
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatarUrl: "",
      },
    });
  };
  onRegisterSuccess = (response) => {
    console.log(response);
    toast.success("Successful Registration!");
  };
  onRegisterError = (err) => {
    console.warn(err);
    toast.warn("Failed to Register!");
  };

  render() {
    return (
      <div className="container">
        <div className="row col-12 p-5">
          <div className="col-md-4">
            <h2>Register New Account</h2>
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.firstName}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.lastName}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.email}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.password}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="passwordConfirm"
              placeholder="Confirm Password"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.passwordConfirm}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="avatarUrl"
              placeholder="Avatar Url"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.avatarUrl}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-1"
            onClick={this.onRegisterButtonClicked}
          >
            Register
          </button>

          <div />
        </div>
      </div>
    );
  }
}

export default SignUp;
