import React from "react";
import * as userService from "../services/userService";
import { toast } from "react-toastify";
import "../App.css";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

toast.configure();
class LogIn extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "714213",
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

  onLoginSubmitButtonClicked = () => {
    userService
      .logIn(this.state.formData)
      .then(this.onLoginSubmitButtonSuccess)
      .catch(this.onLoginSubmitButtonError);
  };

  onLoginSubmitButtonSuccess = (response) => {
    console.log(response);
    toast.success("Successful login");
    this.props.history.push("/homepage/");
  };
  onLoginSubmitButtonError = (err) => {
    console.warn(err);
    toast.warn("Failed to login");
  };

  render() {
    return (
      <div className="container">
        <div className="row col-5 p-3">
          <div className="col-md-4">
            <h2>Login</h2>
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.email}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={this.onFormFieldChanged}
              value={this.state.formData.password}
            />
          </div>

          <div className="p-2">
            <NavLink to="/signup">Need to register account?</NavLink>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary col-3 p-2"
              onClick={this.onLoginSubmitButtonClicked}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
