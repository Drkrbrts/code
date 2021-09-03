import React from "react";
import { NavLink } from "react-router-dom";
import * as userServices from "../services/userServices";
import { toast } from "react-toastify";

toast.configure();
class logIn extends React.Component {
  state = {
    formData: { email: "", password: "", tenantId: "U02503X26QJ" },
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
  onLogInClicked = (e) => {
    e.preventDefault();

    userServices
      .logIn(this.state.formData)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };
  onActionSuccess = (response) => {
    toast.success("Registration Success");
    this.props.history.push("/loggedin");
  };

  onActionError = (errResponse) => {
    toast.error("Registration failed ");
  };

  render() {
    return (
      <form>
        <main role="main">
          <div className="container border border-warning border-3">
            <h1 className="display-7 fw-bold text-center">Log In</h1>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Email Address"
                name="email"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.email}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
              ></label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={this.onFormFieldChanged}
                value={this.state.formData.password}
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <NavLink to="/Register"> Register Here</NavLink>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onLogInClicked}
              >
                Sign In
              </button>
            </div>
          </div>
        </main>
      </form>
    );
  }
}
export default logIn;
