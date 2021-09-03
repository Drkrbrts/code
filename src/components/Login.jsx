import React, { Component } from "react";
import * as starterService from "../services/starterService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends Component {
  state = {
    formData: {
      email: "",
      password: "",
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

  onLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();

    starterService
      .logIn(this.state.formData)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    console.log(response, "Login Success");
    toast.success("Login Success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/home");
  };

  onLoginError = (error) => {
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
            <h1>Sign In</h1>
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
            <button
              type="button"
              className="btn btn-primary submit"
              onClick={this.onLogin}
            >
              Sign In
            </button>
            <button type="button" className="btn btn-warning mx-2">
              Register for New Users
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
