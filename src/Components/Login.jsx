import React from "react";
import { toast } from "react-toastify";
import * as userService from "../services/userService";

class LogIn extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "",
    },
  };
  onLogInClicked = (e) => {
    e.preventDefault();
    // console.log("login was clicked");
    // this.props.history.push("/home");

    userService
      .logIn(this.state.formData)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  };
  onLogInSuccess = (response) => {
    toast.success("Success");
    console.log(response);
    this.props.history.push("/home");
    // userService
    //   .userId(this.state.formData)
    //   .then(this.onUserIdSuccess)
    //   .catch(this.onUserIdError);
  };
  // onUserIdSuccess = (response) => {
  //   console.log(response);
  // };
  // onUserIdError = (response) => {
  //   console.log(response);
  // };
  onLogInError = (errResponse) => {
    toast.error("Error");
    console.log(errResponse);
    this.props.history.push("/login");
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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.email}
                />
                <div name="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.password}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tenantId" className="form-label">
                  TenantId
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tenantId"
                  name="tenantId"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.tenantId}
                />
              </div>
              <div className="button-login">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onLogInClicked}
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

export default LogIn;
