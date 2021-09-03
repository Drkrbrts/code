import React, { Component } from "react";
import * as starterService from "../services/starterService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Register extends Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U02811Y0V2Q",
    },
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  onRegister = (e) => {
    e.preventDefault();
    e.stopPropagation();

    starterService
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log(response, "Register Success");
    toast.success("Register Success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/login");
  };

  onRegisterError = (error) => {
    console.error(error);
    toast.error("Fill out all required inputs", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <>
        <div className="main-container">
          <form className="form-container m-4 col">
            <h1>Register</h1>
            <div className="form-group my-3">
              <div className="row">
                <div className="col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First name"
                    onChange={this.onFormFieldChange}
                    value={this.state.firstName}
                    required
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Last name"
                    onChange={this.onFormFieldChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                onChange={this.onFormFieldChange}
                required
              />
              <p className="validEmail"></p>
            </div>
            <div className="form-group my-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={this.onFormFieldChange}
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!$%^&*-]).{8,}"
                required
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="passwordConfirm"
                placeholder="Confirm Password"
                onChange={this.onFormFieldChange}
                required
              />

              <div className="passDoesNotMatch text-danger" hidden>
                Password does not match.
              </div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="avatar">Avatar URL</label>
              <input
                type="text"
                className="form-control"
                name="avatarUrl"
                placeholder="Avatar URL"
                onChange={this.onFormFieldChange}
                required
              />
            </div>
            <button
              onClick={this.onRegister}
              type="button"
              className="btn btn-primary submit"
            >
              Register
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
