import React, { Component } from "react";
import { toast } from "react-toastify";
import * as userService from "../services/userService";
import "./../StarterProjectAll.css";
import { NavLink } from "react-router-dom";
class LoginForm extends Component {
  state = {
    type: "LoginUser",
    userLoginInfo: {
      email: "",
      password: "",
      tenantId: "U01T60J4U1J",
    },
  };

  onLoginFormDataChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let userLoginInfo = { ...this.state.userLoginInfo };
      userLoginInfo[inputName] = newValue;
      return { userLoginInfo };
    });
  };
  onLoginUserClicked = (e) => {
    e.preventDefault();
    let loginUserInfo = this.state.userLoginInfo;
    userService
      .logIn(loginUserInfo)
      .then(this.onLoginUserSuccess)
      .catch(this.onLoginUserError);
  };

  onLoginUserSuccess = (response) => {
    console.log("OnLoginSuccess", { response });

    var loginUserState = { type: "LOGGEDIN", payload: null };
    toast.success("Welcome back!");
    this.props.history.push("/", loginUserState);
  };

  onLoginUserError = (response) => {
    console.warn({ Error: response });
    toast.error(
      "There seems to be an error please check your info and try again."
    );
  };

  render() {
    return (
      <div className="container-fluid form-container loginForm">
        <div className="row ">
          <div className="col text-center">
            <h1> Member Login</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <form>
              <div className="form-group" style={{ marginBottom: "0" }}>
                <label htmlFor="userEmail"></label>
                <input
                  type="email"
                  className="form-control rounded-pill "
                  name="email"
                  placeholder="Email"
                  onChange={this.onLoginFormDataChanged}
                  value={this.state.userLoginInfo.email}
                />
              </div>
              <div className="form-group" style={{ marginBottom: "10px" }}>
                <label htmlFor="userPassword"></label>
                <input
                  type="password"
                  className="form-control rounded-pill"
                  name="password"
                  placeholder="Password"
                  onChange={this.onLoginFormDataChanged}
                  value={this.state.userLoginInfo.password}
                />
              </div>
              <NavLink to="/Login">Forgot Password?</NavLink>
              <br />
              <NavLink to="/Registration">No Account? No Problem </NavLink>

              <div className="d-grid">
                <button
                  type="button"
                  className="btn btn-block rounded-pill btn-outline-dark"
                  id="loginUser"
                  style={{ marginTop: "5px" }}
                  onClick={this.onLoginUserClicked}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
