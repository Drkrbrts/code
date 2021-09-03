import React from "react";
import { NavLink, withRouter } from "react-router-dom";
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { toast } from "react-toastify";
import { userLogin } from "./UserService";
//import { toast } from "react-toastify";
//import "react-toastify/dist/react-toastify.css";
//import * as UserService from "./UserService";
// import * as SiteNav from "./UserService";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    tenantId: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  doFormSubmit = (e) => {
    e.preventDefault();
    console.log("form data", this.state);
    userLogin({ ...this.state })
      .then(() => {
        toast.success("Successful Login");
        this.props.history.push("/home");
      })
      .catch((err) => {
        console.warn(err);
        toast.error("Login Error");
      });

    // do handling after regiter is done here ...
  };

  //const LoginPage = () => {
  render() {
    return (
      <div class="login-form form-container">
        <form onSubmit={this.doFormSubmit}>
          <h2>Login</h2>
          <p class="hint-text">Let's Login.</p>

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
              Login Now
            </button>

            <NavLink to="/register">
              <Button> Register </Button>
            </NavLink>
          </div>
        </form>
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(Login);

/*    $('#success').modal("show")...

  if (form.checkValidity() === false) {
     event.preventDefault();
     event.stopPropagation();
  }
  else if (form.checkValidity() == true) {
       $('#success').modal("show");
  }    */
