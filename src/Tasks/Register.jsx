import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  onFormFieldChanged = (e) => {
    this.setState({ value: e.target.value });
  };

  onClickRegisterHandler = (e) => {
    e.preventDefault();
    toast.success("Registered successfully!");
  };

  onActionSuccess = (response) => {
    toast.success("Registered successfully!");
    this.props.history.push("/");
  };

  onActionError = (errResponse) => {
    console.log("login error:", { error: errResponse });
    toast.danger("Registration error!");
  };

  render() {
    return (
      <React.Fragment>
        <div className="Container col-md-6">
          <h1>Register Here:</h1>
          <form>
            <div className="mb-3">
              <label for="exampleInputFirstName" className="form-label">
                First Name
              </label>
              <input
                // value={this.state.firstName}
                onChange={this.onFormFieldChanged}
                placeholder="First Name"
                type="text"
                className="form-control"
                id="firstName"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputFirstName" className="form-label">
                Last Name
              </label>
              <input
                // value={this.state.lastName}
                onChange={this.onFormFieldChanged}
                placeholder="Last Name"
                type="text"
                className="form-control"
                id="lastName"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                // value={this.state.email}
                onChange={this.onFormFieldChanged}
                placeholder="Email"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                //value={this.state.password}
                onChange={this.onFormFieldChanged}
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <label for="confirmPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword1"
                //value={this.state.passwordConfirm}
                onChange={this.onFormFieldChanged}
                placeholder="Confirm Password"
              />
            </div>
            <div className="mb-3">
              <label for="avatarUrl" className="form-label">
                Image URL
              </label>
              <input
                //value={this.state.avatarUrl}
                onChange={this.onFormFieldChanged}
                placeholder="Image URL"
                type="text"
                className="form-control"
                id="avatarUrl"
              />
            </div>
            <div className="mb-3">
              <label for="tenantId" className="form-label">
                Slack ID
              </label>
              <input
                //value={this.state.tenantId}
                onChange={this.onFormFieldChanged}
                placeholder="Slack ID"
                type="text"
                className="form-control"
                id="tenantId"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Register;
console.log("form is firing");
