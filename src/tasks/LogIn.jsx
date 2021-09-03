import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as userService from "../services/userService";

class LogIn extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "U025CN3CN01",
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

  onSignInClicked = (e) => {
    e.preventDefault();
    let data = this.state.formData;

    userService
      .logIn(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };

  onActionSuccess = (response) => {
    toast.success("You are signed in!");
    this.props.history.push("/userHome");
  };

  onActionError = (errResponse) => {
    console.log("login error:", { error: errResponse });
    toast.error("Something went wrong, try again.");
  };

  onRegisterButtonClicked = (e) => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container col-md-3">
          <form className="row gy-2 gx-3 align-items-center p-3">
            <h3 className="p-3"> Sign in here:</h3>
            <div className="col-auto">
              <label className="visually-hidden" htmlFor="autoSizingInput">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="autoSizingInput"
                placeholder="Email"
                name="email"
                value={this.state.formData.email}
                onChange={this.onFormFieldChanged}
              />
            </div>
            <div className="col-auto">
              <label className="visually-hidden" htmlFor="autoSizingInputGroup">
                Password
              </label>
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  id="autoSizingInputGroup"
                  placeholder="Password"
                  name="password"
                  value={this.state.formData.password}
                  onChange={this.onFormFieldChanged}
                  required
                />
              </div>
            </div>

            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSignInClicked}
              >
                Log In
              </button>
            </div>
            <div className="col-auto">
              Don't have an account? Register here:{" "}
            </div>
            <button
              onClick={this.onRegisterButtonClicked}
              className="btn btn-outline-primary col-auto"
            >
              Register
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default LogIn;
