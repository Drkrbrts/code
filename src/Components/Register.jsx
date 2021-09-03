import React from "react";
import * as userService from "../services/userService";

class Register extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "",
    },
  };
  onRegisterClicked = (e) => {
    e.preventDefault();
    console.log("register was clicked");
    this.props.history.push("/login");
    userService
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };
  onRegisterSuccess = (response) => {
    console.log(response);
  };

  onRegisterError = (errResponse) => {
    console.log(errResponse);
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
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputFirstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.firstName}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.lastName}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.email}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputPassword" className="form-label">
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
              <div className="col-12">
                <label htmlFor="inputPasswordConfirm" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.passwordConfirm}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAvatarUrl" className="form-label">
                  Avatar Url
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input Avatar URL"
                  id="avatarUrl"
                  name="avatarUrl"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.avatarUrl}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputTenantId" className="form-label">
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

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onRegisterClicked}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
