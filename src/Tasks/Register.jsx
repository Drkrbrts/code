import React from "react";
import { toast } from "react-toastify";

import * as userService from "../services/userService";

toast.configure();
class Register extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "8644940",
    },
  };

  onFormFieldChanged = (e) => {
    console.log(e.currentTarget.name);
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;

      return { formData };
    });
  };

  onSignUpClicked = (e) => {
    e.preventDefault();
    userService
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log(response);
    this.resetForm();
    toast.success("Registration success");
  };
  onRegisterError = (err) => {
    console.warn(err);
    toast.error("Registration failed");
  };

  resetForm = () => {
    this.setState({
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatarUrl: "",
      },
    });
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>Register a new membership</p>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.formData.firstName}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.formData.lastName}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.formData.email}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.formData.password}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="Retype password"
                    value={this.state.formData.passwordConfirm}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="url"
                    className="form-control"
                    id="avatarUrl"
                    name="avatarUrl"
                    placeholder="Avatar Url"
                    value={this.state.formData.avatarUrl}
                    required="required"
                    onChange={this.onFormFieldChanged}
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to the terms
                  </label>
                </div>

                <div className="mb-3 form-group"></div>

                <button
                  variant="primary"
                  type="submit"
                  onClick={this.onSignUpClicked}
                >
                  Register
                </button>
                <div>
                  <p>Already have an account?</p>
                </div>
              </form>
            </div>
          </div>

          <hr />
        </div>
      </main>
    );
  }
}

export default Register;
