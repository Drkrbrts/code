import React, { Component } from "react";
import userService from "../services/userServices";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    tenantId: "00000150",
  };

  onLoginFormChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};

      newState[inputName] = newValue;

      return newState;
    });
  };

  onLoginFormClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("I done been clicked");
    let loginPayload = this.state;

    userService
      .logIn(loginPayload)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    toast.success("Success: You Are Now Logged In");
    this.props.history.push("/home");
    console.log(response);
  };

  onLoginError = (errResponse) => {
    console.log({ errResponse });
    toast.error(`Error: ${errResponse.response.data.errors}`);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container m-5">
          <div className="row center">
            <div className="col-md-5 border p-4 shadow">
              <h2>Sign In</h2>
              <hr className="my-4" />
              <form className="register-form">
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    onChange={this.onLoginFormChanged}
                    value={this.state.email}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onLoginFormChanged}
                    value={this.state.password}
                  />
                </div>
              </form>
              <div className="mt-3 col-4">
                <button
                  id="registerNow"
                  className="w-100 btn btn-primary btn"
                  type="submit"
                  onClick={this.onLoginFormClick}
                >
                  Login
                </button>
              </div>
              <div className="mt-2">
                <NavLink to="/register">Need to register?</NavLink>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
