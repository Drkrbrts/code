import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Register.css";

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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  register = () => {
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/register",
      data: JSON.stringify({ ...this.state }),
      // the above line is same as :
      // data: JSON.stringify( {
      //   firstName: this.state.firstName,
      //   lastName: this.state.lastName,
      //   email: this.state.email,
      //   password: this.state.password,
      //   password: this.state.password,
      //   ...
      // }),
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config)
      .then((response) => {
        console.log(response.data);
        toast.success("Successful Login");
        this.props.history.push("/thelogin");
      })
      .catch((response) => {
        console.warn(response);
        console.log("loginerror");
        toast.error("Login Error");
      });
  };

  doFormSubmit = (e) => {
    e.preventDefault();
    console.log("form data", this.state);
    this.register();
  };

  render() {
    return (
      <div class="signup-form form-container">
        <form onSubmit={this.doFormSubmit}>
          <h2>Register</h2>
          <p class="hint-text">
            Create your account. It's free and only takes a minute.
          </p>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  placeholder="First Name"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  name="lastName"
                  value={this.state.lastName}
                  placeholder="Last Name"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              required="required"
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Password"
              required="required"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Confirm Password"
              required="required"
              value={this.state.passwordConfirm}
              onChange={this.handleChange}
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="avatarUrl"
              id="avatarUrl"
              placeholder="Avatar"
              required="required"
              value={this.state.avatarUrl}
              onChange={this.handleChange}
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="tenantId"
              id="tenantId"
              placeholder="Tenant ID"
              required="required"
              value={this.state.tenantId}
              onChange={this.handleChange}
            />
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">
              Register Now
            </button>
            <NavLink to="/thelogin">
              <Button> Login</Button>
            </NavLink>
          </div>
        </form>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(Register);
