import React from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";

import { withRouter } from "react-router-dom";

class LogIn extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "testingTenantId1",
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

  onLoginClicked = (e) => {
    // console.log("login firing", e);
    e.preventDefault();

    userService
      .logIn(this.state.formData)
      .then(this.onUserLoginSuccess)
      .catch(this.onUserLoginError);
  };

  onUserLoginSuccess = (response) => {
    console.log("register success", response);
    this.loginSuccessMessage();

    this.props.history.push("/HomePage");
    this.getCurrentUser(response);
  };

  onUserLoginError = (errResponse) => {
    console.log("register fail", errResponse);
    this.loginErrorMessage();
    this.props.history.push("/login");
  };

  getCurrentUser(response) {
    userService
      .currentUser(this.state.formData)
      .then(this.onCurrentSuccess)
      .catch(this.onCurrentError);
  }

  onCurrentSuccess(response) {
    let getCurrentUserInfo = response.data.item.name;
    console.log(getCurrentUserInfo);
    this.setState({ getCurrentUserInfo });
    this.props.history.push("/HomePage");
  }

  onCurrentError(response) {
    console.log(response);
  }

  // componentDidUpdate(prevProps) {
  //   let currentPath = this.props.location.pathname;
  //   let previousPath = prevProps.location.pathname;

  //   console.log({ currentPath, previousPath });
  // }

  loginSuccessMessage = () => {
    toast.success("🦄 Login Successful!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  loginErrorMessage = () => {
    toast.error("🦄 Please enter valid email & password", {
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
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        name="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        onChange={this.onFormFieldChanged}
                        value={this.state.formData.email}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        name="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={this.onFormFieldChanged}
                        value={this.state.formData.password}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={this.onLoginClicked}
                    >
                      User Login
                    </button>
                    <Route
                      path="/HomePage"
                      component={HomePage}
                      exact={true}
                    ></Route>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?
                      <a href="/registerForm" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(LogIn);
