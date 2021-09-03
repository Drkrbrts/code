import React from "react";
import { NavLink } from "react-router-dom";
import * as userService from "../services/userService";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      tenantId: "U025KDV7D19",
    };
  }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = newValue;
      return newState;
    });
  };

  onSignInClicked = () => {
    console.log(this.state);
    userService
      .logIn(this.state)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    console.log("Successfully logged in", response);
    // show login success message using toast
    this.props.history.push("/home");
  };

  onLoginError = (error) => {
    console.warn(error);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <h6 style={{ textAlign: "center" }}>Sign in</h6>
            <div className="container-fluid py-4">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="name@example.com"
                    value={this.state.email}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
              </form>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={this.onSignInClicked}
                >
                  Sign in
                </button>
              </div>
              <div>
                <NavLink to="/register">Register a new member</NavLink>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
