import React, { Component } from "react";
import { toast } from "react-toastify";
import * as userService from "../services/userService";
import "./../StarterProjectAll.css";
import { NavLink } from "react-router-dom";

class RegistrationForm extends Component {
  state = {
    newUserInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantid: "U01T60J4U1J",
    },
  };
  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newUserInfo = { ...this.state.newUserInfo };
      newUserInfo[inputName] = newValue;
      return { newUserInfo };
    });
  };

  onCreateUserClicked = (e) => {
    e.preventDefault();
    let registerNewUser = this.state.newUserInfo;
    userService
      .newUser(registerNewUser)
      .then(this.onRegisterNewSuccess)
      .catch(this.onRegisterNewError);
  };
  onRegisterNewSuccess = (response) => {
    console.log({ response });
    var userName = this.state.newUserInfo.firstName;
    toast.success(`Welcome ${userName}!, New Account Created`);
    let userLoginInfo = {
      email: this.state.newUserInfo.email,
      password: this.state.newUserInfo.password,
      tenantId: "U01T60J4U1J",
    };
    userService
      .logIn(userLoginInfo)
      .then(this.loginAfterRegisterSuccess)
      .catch(this.loginAfterRegisterError);
  };
  onRegisterNewError = (response) => {
    console.log({ Error: response });
    var userName = this.state.newUserInfo.firstName;
    if (!userName) {
      toast.error(
        "There seems to be an error. Please check your information and try again."
      );
    } else {
      toast.error(
        `We're Sorry, ${userName}. Please check your information and try again.`
      );
    }
  };

  loginAfterRegisterSuccess = (response) => {
    console.log("OnLoginSuccess", { response });
    var loginUserState = { type: "LOGGEDIN", payload: null };
    this.props.history.push("/", loginUserState);
  };

  loginAfterRegisterError = (response) => {
    console.warn({ Error: response });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid form-container registerForm">
          <div className="row ">
            <div className="col text-center">
              <h1>Register Today!</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <form id="registerForm">
                <div className="form-group">
                  <label htmlFor="fName"></label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="firstName"
                    placeholder="First name"
                    onChange={this.onFormFieldChanged}
                    value={this.state.newUserInfo.firstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lName"></label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="lastName"
                    placeholder="Last name"
                    onChange={this.onFormFieldChanged}
                    value={this.state.newUserInfo.lastName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userEmail"></label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="Enter email"
                    name="email"
                    onChange={this.onFormFieldChanged}
                    value={this.state.newUserInfo.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userPassword"></label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    placeholder="Enter Password"
                    name="password"
                    onChange={this.onFormFieldChanged}
                    value={this.state.newUserInfo.password}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordConfirm"></label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    onChange={this.onFormFieldChanged}
                    value={this.state.newUserInfo.passwordConfirm}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userImg"></label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    style={{ marginBottom: "5px" }}
                    placeholder="Image Url"
                    name="avatarUrl"
                    onChange={this.onFormFieldChanged}
                    value={this.state.newUserInfo.avatarUrl}
                  />
                </div>
                <NavLink to="/Login">Already have an Account? </NavLink>
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-block rounded-pill btn-outline-dark"
                    style={{ marginTop: "5px" }}
                    onClick={this.onCreateUserClicked}
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegistrationForm;
