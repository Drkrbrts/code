import React from "react";
import { toast } from "react-toastify";
import * as userService from "../services/userService";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U0284AT6EP7",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    console.log("Form submitted");
    e.preventDefault();
    userService
      .register(this.state)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log(response);
    toast.success("You have registered successfully.");
  };

  onRegisterError = (errResponse) => {
    console.log(errResponse);
    toast.error("Registration failed.");
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputFirstName1">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputLastName1">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmailAddress1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Enter Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    value={this.state.passwordConfirm}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputAvatarUrl">Avatar URL</label>
                  <input
                    type="url"
                    className="form-control"
                    id="avatarUrl"
                    name="avatarUrl"
                    placeholder="Avatar URL"
                    value={this.state.avatarUrl}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-warning"
                    onClick={this.handleSubmit}
                  >
                    Submit
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
