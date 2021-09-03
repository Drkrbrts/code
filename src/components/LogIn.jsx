import React, { Component } from "react";
import { toast } from "react-toastify";
import * as userService from "../services/userService";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    tenantId : "U01JBQH4TFB", 
  };

  onSubmit = (e) => {
    console.log("onSubmit", "this button is firing ok");
    e.preventDefault();
    userService
      .userLogIn(this.state)
        .then(this.onLogInSuccess)
        .catch(this.onLogInError);
  };

  onLogInSuccess = (response) => {
    toast.success("You are now logged in!");
    console.log("onLogInSuccess", response);
    this.props.history.push("/home");

  };

  onLogInError = (errResponse) => {
    toast.error("Please fill in the indicated fields.");
    console.log(errResponse);
  };

    registerUser = (e) => {
      e.preventDefault(); 
      console.log("registerUser", "button firing ok");
      this.props.history.push("/registration");

    }


  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};

      newState[inputName] = newValue;
      console.log({ newState });

      return newState;
    });
  };

  render() {
    return (
      <React.Fragment>
        <main
          role="main"
          style={{
            marginTop: "100px",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          <div className="container p-5">
            <div className="row">
              <div className="col-md-5 p-5">
                <form>
                  <div className="mb-3">
                    <label className="form-label">
                      Email
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      onChange={this.onFormFieldChanged}
                      value={this.state.email}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.onFormFieldChanged}
                      value={this.state.password}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.onSubmit.bind(this)}
                  >
                    Submit
                  </button>

                  <div>
                    <button
                      type="button"
                      className="btn btn-link forgotPassword p-3"
                    >
                      Forgot Password
                    </button>

                    <button
                      type="button"
                      className="btn btn-link register"
                      onClick={this.registerUser.bind(this)}
                    >
                      Register New Member
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <hr />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default LogIn;

//render NavBar only after user has logged in
