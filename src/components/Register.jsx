import React from "react";
import * as userServices from "../services/userServices";
import { toast } from "react-toastify";

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
      tenantId: "U02503X26QJ",
      agree: false,
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };
  onButtonClicked = (e) => {
    e.preventDefault();
    console.log("I was clicked");

    userServices
      .register(this.state.formData)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };

  onActionSuccess = (response) => {
    console.log(response);
    toast.success("Registration Success");
  };
  onActionError = (err) => {
    console.log(err);
    toast.error("Registration failed ");
  };

  render() {
    return (
      <main role="main">
        <div className="container border border-warning border-3">
          <div className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-lg">
              <form>
                <h1 className="display-7 fw-bold text-center">Register Here</h1>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label" />
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.firstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label" />
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="LastName"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.lastName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label" />
                  <input
                    name="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email address"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.email}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.password}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  />
                  <input
                    type="password"
                    name="passwordConfirm"
                    className="form-control"
                    placeholder="Password Confirm"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.passwordConfirm}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="form-label" />
                  <input
                    type="text"
                    className="form-control"
                    name="avatarUrl"
                    placeholder="Avatar Url"
                    onChange={this.onFormFieldChanged}
                    value={this.state.formData.avatarUrl}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="agree"
                    checked={this.state.formData.agree}
                    onChange={this.onFormFieldChanged}
                    value="true"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to the terms
                  </label>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.onButtonClicked}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Register;
