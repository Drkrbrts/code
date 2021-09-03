import React, { Component } from "react";
import userService from "../services/userServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "",
  };

  onRegisterFormChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};

      newState[inputName] = newValue;

      return newState;
    });
  };

  onRegisterFormClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("I done been clicked");
    let registerPayload = this.state;

    userService
      .register(registerPayload)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    toast.success("Success: You Are Now Registered");
    console.log(response);
  };

  onRegisterError = (errResponse) => {
    console.log({ errResponse });
    toast.error(`Error: ${errResponse.response.data.errors}`);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-5 border p-4 shadow">
              <h2>Register Now</h2>
              <hr className="my-4" />
              <form className="register-form">
                <div className="col-12">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    onChange={this.onRegisterFormChanged}
                    value={this.state.firstName}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    onChange={this.onRegisterFormChanged}
                    value={this.state.lastName}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    onChange={this.onRegisterFormChanged}
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
                    onChange={this.onRegisterFormChanged}
                    value={this.state.password}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="passwordConfirm" className="form-label">
                    Password <span className="text-muted">(Confirm)</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    onChange={this.onRegisterFormChanged}
                    value={this.state.passwordConfirm}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="avatar" className="form-label">
                    Avatar Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="avatarUrl"
                    name="avatarUrl"
                    onChange={this.onRegisterFormChanged}
                    value={this.state.avatarUrl}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="tenantId" className="form-label">
                    TenantId
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tenantId"
                    name="tenantId"
                    onChange={this.onRegisterFormChanged}
                    value={this.state.tenantId}
                  />
                </div>
                <div className="mt-2 col-6">
                  <button
                    id="registerNow"
                    className="w-100 btn btn-primary btn"
                    type="submit"
                    onClick={this.onRegisterFormClick}
                  >
                    Register Now
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

export default Register;
