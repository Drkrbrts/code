import React from "react";
import userService from "../services/userService";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import "./compStyle.css";

class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "",
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = NewValue;
      return newState;
    });
  };

  onRegisterClick = () => {
    let CurrentState = this.state;

    userService
      .register(CurrentState)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log(response);
    toast.success("Registration Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  onRegisterError = (response) => {
    console.log(response.response.data.errors);
    toast.warn(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <div className="card">
              <form className="p-5">
                <div className="mb-3">
                  <div className="card-header text-center my-3">
                    <h1>Register User</h1>
                  </div>
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Terry"
                    onChange={this.onFormFieldChange}
                    value={this.state.firstName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Hoitz"
                    onChange={this.onFormFieldChange}
                    value={this.state.lastName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Terry@TheOtherGuys.com"
                    onChange={this.onFormFieldChange}
                    value={this.state.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onFormFieldChange}
                    value={this.state.password}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordConfirm" className="form-label">
                    Verify Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="Verify Password"
                    onChange={this.onFormFieldChange}
                    value={this.state.passwordConfirm}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="avatarUrl" className="form-label">
                    Avatar Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="avatarUrl"
                    name="avatarUrl"
                    placeholder="https://bit.ly/3x2IBKo"
                    onChange={this.onFormFieldChange}
                    value={this.state.avatarUrl}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tenantId" className="form-label">
                    Tenant Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tenantId"
                    name="tenantId"
                    placeholder="1738"
                    onChange={this.onFormFieldChange}
                    value={this.state.tenantId}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onRegisterClick}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default withRouter(Register);
