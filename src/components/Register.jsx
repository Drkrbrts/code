import React from "react";
import * as userServices from "../services/userServices";
import { toast } from "react-toastify";

class Register extends React.Component {
  state = {
    person: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "YR34509Q",
      agree: true,
    },
  };

  onChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(() => {
      let updatedFormData = {
        ...this.state.person,
      };

      updatedFormData[name] = value;

      return { person: updatedFormData };
    });
  };

  onClickRegister = () => {
    const payload = { ...this.state.person };

    userServices
      .register(payload)
      .then(this.registerSuccess)
      .catch(this.registerError);
  };

  registerSuccess = (response) => {
    toast.success("Registration Complete");
  };

  registerError = (error) => {
    toast.error("Please try again.");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <main>
            <h2>Register a new membership</h2>
          </main>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="First Name"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Last Name"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="passwordConfirm"
              placeholder="Retype Password"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="url"
              className="form-control"
              name="avatarUrl"
              id="inputAvatar"
              placeholder="Avatar URL"
              onChange={this.onChange}
            />
          </div>
          <div className="row">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="agree"
                checked={this.state.person.agree}
                onChange={this.onChange}
                value="999"
              />
              <label className="form-check-label" htmlFor="agreeTerms">
                I agree to the terms
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary register"
              onClick={this.onClickRegister}
            >
              Register
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
