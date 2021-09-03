import React from "react";
import * as userService from "../services/userService";
class Register extends React.Component {
  onRegisterClicked = () => {
    console.log("Clicked");
    userService
      .register()
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };
  onRegisterSuccess = (response) => {
    console.log(response);
  };
  onRegisterError = (errResponse) => {
    console.log(errResponse);
  };
  state = {
    formData: {
      firstName: "Carl",
      lastName: "Weasley",
      email: "cweasley@yahoo.com",
      password: "Password1!",
      confirm: "Password1!",
      avatarUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
      tenantId: "sabio",
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
                  type="text"
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
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.password}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputConfirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm"
                  name="confirm"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.confirm}
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
                  id="avatar"
                  name="avatar"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.avatar}
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
