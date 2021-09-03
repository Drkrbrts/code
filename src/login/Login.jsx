import React, { Component } from "react";
import { logIn } from "../services/userService";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class Login extends Component {
  state = { email: "", password: "", tenantId: "123123" };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    logIn(this.state).then(this.onSuccess).catch(this.onError);
  };

  onSuccess = (response) => {
    console.log(response);
    toast.success(<strong>Login Successful</strong>, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

    this.setState({ email: "", password: "" });
  };

  onError = (response) => {
    console.log(response);
    toast.error(<strong>Incorrect username or password.</strong>, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  render() {
    return (
      <form style={{ width: "400px" }}>
        <h3>Log in</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={(e) => this.change(e)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(e) => this.change(e)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={(e) => this.onSubmit(e)}
        >
          Sign in
        </button>
        &nbsp;
        <button type="success" className="btn btn-dark btn-lg btn-block">
          <NavLink to="../register">Register</NavLink>
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="/#">password?</a>
        </p>
      </form>
    );
  }
}

export default Login;
