import React from "react";
import { toast } from "react-toastify";
import * as userService from "../services/userService";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: "",
      },
    };
  }

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    console.log(currentTarget);
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    console.log("new value: ", newValue, "input name: ", inputName);
    this.setState((prevState) => {
      let formData = { ...prevState.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSubmitLoginForm = () => {
    console.log("login button clicked.");
    let data = { ...this.state.formData };
    data.tenantId = "U020QCZUJG6";

    userService.logIn(data).then(this.onLoginSuccess).catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    console.log(response);
    this.props.updateUserStatus(true);
    toast.success("You have successfully logged in");
  };
  onLoginError = (response) => {
    console.log(response);
    toast.error("Login Error");
  };

  render() {
    return (
      <div className="container mx-auto my-5">
        <div className="row">
          <form className="col-10 col-md-8 col-lg-6  mx-auto" id="login-form">
            <div className="mx-auto">
              <h3>Sign In</h3>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label"></label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                value={this.state.formData.email}
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label"></label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                value={this.state.formData.password}
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="row">
              <div className="d-flex gap-2 text-right mx-auto justify-content-between">
                <div>
                  <NavLink to="/recover">I forgot my password</NavLink>

                  <br />
                  <NavLink to="/register">Register as a new user</NavLink>
                </div>
                <button
                  type="button"
                  className="btn btn-primary px-md-5"
                  id="login"
                  aria-label="Login"
                  onClick={this.onSubmitLoginForm}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
