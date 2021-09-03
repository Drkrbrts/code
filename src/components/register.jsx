import React from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatar: "",
        agree: false,
        tenantId: "U020QCZUJG6",
      },
    };
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    let inputName = currentTarget.name;

    console.log(newValue, inputName);
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  submitRequestForm = (e) => {
    console.log("submit button clicked.");

    let data = { ...this.state.formData };
    delete data.agree;
    console.log(data);

    userService
      .register(data)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log("Registration successful", response);
    toast.success("Registration successful");
  };
  onRegisterError = (response) => {
    console.error("Registration error...", response);
    toast.error("Registration error.");
  };

  render() {
    return (
      //registration form goes here
      <div className="container mx-auto my-5">
        <div className="row">
          <form className="col-md-8 mx-auto" id="register-form">
            <div className="mx-auto">
              <h3>Register As A New User</h3>
            </div>
            <div className="form-group row">
              <div className="col-md">
                <label htmlFor="firstName" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  value={this.state.formData.firstName}
                  onChange={this.onFormFieldChange}
                />
              </div>
              <div className="col-md align-right">
                <label htmlFor="lastName" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  value={this.state.formData.lastName}
                  onChange={this.onFormFieldChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label"></label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                aria-label="Email"
                value={this.state.formData.email}
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label"></label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                aria-label="Password"
                value={this.state.formData.password}
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm" className="form-label"></label>
              <input
                type="password"
                className="form-control"
                name="passwordConfirm"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                value={this.state.formData.passwordConfirm}
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="avatar" className="form-label"></label>
              <input
                type="url"
                className="form-control"
                name="avatar"
                placeholder="Avatar URL"
                aria-label="Avatar URL"
                value={this.state.formData.avatar}
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="form-check mt-3 d-flex">
              <input
                className=" form-check-input align-self-center"
                type="checkbox"
                name="agree"
                value={this.state.formData.test}
                onChange={this.onFormFieldChange}
              />
              <label
                className="form-check-label mx-3 align-self-center"
                htmlFor="checkTerms"
              >
                I agree to the terms & conditions.
              </label>

              {this.state.formData.agree === false && (
                <button
                  type="button"
                  className="btn btn-primary px-5 ms-auto disabled"
                  name="register"
                  onClick={this.submitRequestForm}
                >
                  Register
                </button>
              )}
              {this.state.formData.agree === true && (
                <button
                  type="button"
                  className="btn btn-primary px-5 ms-auto"
                  name="register"
                  onClick={this.submitRequestForm}
                >
                  Register
                </button>
              )}
            </div>
            <div className="form-group">
              <NavLink to="/login">Already have an account?</NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
