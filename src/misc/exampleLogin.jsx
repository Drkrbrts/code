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


import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedin: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedin: true });
  }
  handleLogoutClick() {
    <Logout />;
    this.setState({ isLoggedin: false });
  }

  render() {
    const isLoggedin = this.props.isLoggedin;
    let button;

    if (isLoggedin) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedin={isLoggedin} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h5>Welcome back!</h5>;
}

function GuestGreeting(props) {
  return (
    <center>
      <h5>Please Log In</h5>
    </center>
  );
}

function Greeting(props) {
  const isLoggedin = props.isLoggedin;
  if (isLoggedin) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <nav>
      <div className="text-end">
        <button
          type="submit"
          // onClick={this.onClick}
          className="btn btn-outline-light me-2"
          onClick={props.onClick}
        >
          <NavLink to="/login">Login</NavLink>
        </button>
        <button type="button" className="btn btn-warning">
          <NavLink to="/register">Sign-up</NavLink>
        </button>
      </div>
    </nav>
  );
}

function LogoutButton(props) {
  console.log(props);
  return (
    <button
      type="submit"
      className="btn btn btn-danger btn-lg"
      onClick={props.handleLogoutClick}
    >
      Logout
    </button>
  );
}

export default LoginControl;
