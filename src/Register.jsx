import React, { Component } from "react";
import * as userService from "./services/userService";
import { toast, ToastContainer } from "react-toastify";

class Register extends Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U01Q442CE4F",
    },
  };

  onFormFieldChanged = (e) => {
    let name = e.target.name;
    let newValue = e.target.value;

    this.setState((prevState) => {
      let newState = { ...prevState.formData };
      newState[name] = newValue;
      return { formData: newState };
    });
  };

  onSubmitBtnClicked = (e) => {
    e.preventDefault();
    console.log("onSubmitBtnClicked was clicked");

    userService
      .register(this.state.formData)
      .then(this.onSubmitBtnSuccess)
      .catch(this.onSubmitBtnError);
  };

  onSubmitBtnSuccess = (res) => {
    console.log(res);
    toast.success("You've been added! :)");
  };

  onSubmitBtnError = (err) => {
    console.error({ error: err });
    toast.error("Oh no! Something went wrong");
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <form>
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="card">
                  <div className="card-header">
                    <h1 className="text-center">Register User</h1>
                    <p className="text-center">
                      Please Fill In This Form To Create An Account
                    </p>
                  </div>
                  <div className="form-group m-2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.firstName}
                      name="firstName"
                      className="form-control"
                      required
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      name="lastName"
                      className="form-control"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.lastName}
                      required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      placeholder="name@example.com"
                      name="email"
                      className="form-control"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.email}
                      required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="form-control"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.password}
                      required
                    />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="confirm password"
                      name="passwordConfirm"
                      className="form-control"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.passwordConfirm}
                      required
                    />

                    <label htmlFor="avatarUrl">Avatar Url</label>
                    <input
                      type="url"
                      placeholder="https://"
                      name="avatarUrl"
                      className="form-control"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.avatarUrl}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.onSubmitBtnClicked}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
