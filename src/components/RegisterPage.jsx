import React from "react";
import * as userService from "../services/userServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SiteNav from "./SiteNav"

class RegisterPage extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      agree: 0,
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({ newValue, currentTarget });
    this.setState(() => {
      let formData = { ...this.state.formData };
      //   newState.firstName = newValue;
      formData[inputName] = newValue;
      //   console.log("newState", newState.firstName, { newState });
      return { formData };
    });
  };

  onSubmitClick = (e) => {
    //register data
    e.preventDefault();
    var copy = { ...this.state.formData };
    let data = {
      firstName: copy.firstName,
      lastName: copy.lastName,
      email: copy.email,
      password: copy.password,
      passwordConfirm: copy.passwordConfirm,
      avatarUrl: copy.avatarUrl,
      tenantId: "003",
    };
    copy.agree === true
      ? userService
          .register(data)
          .then(this.onRegisterSuccess)
          .catch(this.onRegisterError)
      : toast.warn("Missing field");
    console.log("Content button was clicked", data);
  };

  onRegisterSuccess = (response) => {
    console.log("successful", response);
    let ticks = new Date().getSeconds();
    this.props.history.push("/login/" + ticks)
    toast.success("Successful Registration");
  };

  onRegisterError = (errResponse) => {
    // do something
    console.warn({ error: errResponse });
    toast.error("Registration Error");
  };

  render() {
    return (
      <React.Fragment>
        <SiteNav></SiteNav>
        <main role="main">
          <div className="container">
            <div className="row">
              <h5>Register a new membership</h5>
              <div className="col-md-4 pd-5 ">
                <form>
                  <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.firstName}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.lastName}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.password}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordConfirm">Retype password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="passwordConfirm"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.passwordConfirm}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="avatarUrl">Avatar Url</label>
                    <input
                      type="url"
                      className="form-control"
                      name="avatarUrl"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.avatarUrl}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="agree"
                      checked={this.state.formData.agree}
                      onChange={this.onFormFieldChanged}
                      value="123"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I agree to the{" "}
                    </label>{" "}
                    <a href="url">terms</a>
                  </div>
                  <a href="/login/1" className="login-link">
                    Already have an account?
                  </a>
                  <div className="col-md-4">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      //   value="registration"
                      onClick={this.onSubmitClick}
                    >
                      <a href="#">Submit</a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <div></div>
      </React.Fragment>
    );
  }
}
export default RegisterPage;
