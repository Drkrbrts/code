import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      tenantId: "U025CN3CN01",
    },
  };

  onFormFieldChanged = (e) => {
    // this is esentially how you bind your state to form fields
    let currentTarget = e.currentTarget; // read current target value
    let newValue = currentTarget.value; // new property value
    let inputName = currentTarget.name; // name of the current target input field example: "<input name='firstName'>"
    // inputName is coordinated with the properties of state.

    this.setState(() => {
      let formData = { ...this.state.formData }; // spread and copy all existing props of formData

      formData[inputName] = newValue;
      //away from dot notation and use bracket notation
      //by using bracket notation we're able to access the property
      //console.log("newState", newState.firstName);

      return { formData };
    });
  };

  handleSubmit = (e) => {
    //console.log("A name was submitted: " + this.state.firstName);
    e.preventDefault();
    let data = this.state.formData;

    userService
      .register(data)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };

  onActionSuccess = (response) => {
    toast.success("Registered successfully!");
    this.props.history.push("/");
  };

  onActionError = (errResponse) => {
    console.log("login error:", { error: errResponse });
    toast.error("Registration error!");
  };

  onLoginButtonClicked = (e) => {
    this.props.history.push("/Login");
  };

  render() {
    return (
      <React.Fragment>
        <div className="Container col-md-6 p-5">
          <div className="form-content-right">
            <form>
              <h1>Register Here:</h1>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  value={this.state.formData.firstName}
                  onChange={this.onFormFieldChanged}
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  className="form-control"
                  id="firstName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  value={this.state.formData.lastName}
                  onChange={this.onFormFieldChanged}
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="lastName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={this.state.formData.email}
                  onChange={this.onFormFieldChanged}
                  placeholder="Email"
                  name="email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={this.state.formData.password}
                  onChange={this.onFormFieldChanged}
                  placeholder="Password"
                  name="password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="passwordConfirm" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword1"
                  value={this.state.formData.passwordConfirm}
                  onChange={this.onFormFieldChanged}
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="avatarUrl" className="form-label">
                  Image URL
                </label>
                <input
                  value={this.state.formData.avatarUrl}
                  onChange={this.onFormFieldChanged}
                  placeholder="Image URL"
                  type="text"
                  className="form-control"
                  id="avatarUrl"
                  name="avatarUrl"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Register
              </button>
              <div className="form-input-login">Already have an account? </div>
              <button
                onClick={this.onLoginButtonClicked}
                className="btn btn-outline-primary"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Register;

// An input form element whose value is controlled by React in this way is called
//a "controlled component"
