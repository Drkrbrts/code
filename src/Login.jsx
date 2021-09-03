import React, { Component } from "react";
import * as userService from "./services/userService";
import { toast, toastContainer } from "react-toastify";

class Login extends Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "U01Q442CE4F",
    },
  };

  onFormFieldChanged = (e) => {
    let name = e.target.name;
    let newValue = e.target.value;

    this.setState((prevState) => {
      let newState = { ...prevState.formData };
      newState[name] = newValue;
      return { formData: newState };
    });
  };

  onLoginBtnClicked = (e) => {
    e.preventDefault();
    console.log("onLoginBtnClicked was clicked");

    userService
      .login(this.state.formData)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onRegisterBtnClicked = () => {
    this.props.history.push("/register");
  };

  // componentDidUpdate(prevProps) {
  //   let currentPath = this.props.location.pathname;
  //   let previousPath = prevProps.location.pathname;

  //   console.log("buttons", currentPath, previousPath);
  // }

  onLoginSuccess = (res) => {
    this.props.history.push("/home");
  };
  onLoginError = (err) => console.error({ error: err });

  render() {
    return (
      <form className="px-4 py-2">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card">
                <div className="card-header">
                  <h1 className="text-center">Welcome</h1>
                  <p className="text-center">Sign In To Continue</p>
                </div>
                <div className="form-group m-5">
                  <label htmlFor="userEmail">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="name@example.com"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.email}
                  />
                  <label htmlFor="userPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.password}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary m2"
                  onClick={this.onLoginBtnClicked}
                >
                  Login
                </button>
                <div className="card-footer text-center">
                  <p>Need to SignUp?</p>
                  <button
                    type="button"
                    className="btn btn-secondary justify-content-center"
                    onClick={this.onRegisterBtnClicked}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
