import React from "react";
import { NavLink, withRouter } from "react-router-dom";
//import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Thelogin.css";
import { toast } from "react-toastify";

//import { toast } from "react-toastify";
//import "react-toastify/dist/react-toastify.css";
//import * as UserService from "./UserService";
// import * as SiteNav from "./UserService";

class Thelogin extends React.Component {
  state = {
    email: "",
    password: "",
    tenantId: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = () => {
    const config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/users/login",
      data: JSON.stringify({ ...this.state }),
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config)
      .then((response) => {
        console.log(response.data);
        toast.success("Successful Login");
        this.props.history.push("/Thehome");
      })
      .catch((response) => {
        console.warn(response);
        toast.error("Login Error");
      });
  };

  doFormSubmit = (e) => {
    e.preventDefault();
    console.log("form data", this.state);
    this.login();

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
export default withRouter(Thelogin);

/*    $('#success').modal("show")...

  if (form.checkValidity() === false) {
     event.preventDefault();
     event.stopPropagation();
  }
  else if (form.checkValidity() == true) {
       $('#success').modal("show");
  }    */
