import React from "react";
import { toast } from "react-toastify";
import * as userService from "../services/userService";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
      .logIn(this.state)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    console.log(response);
    toast.success("Login successful");
    this.props.history.push("/home");
  };

  onLoginError = (errResponse) => {
    console.log(errResponse);
    toast.error("Login failed");
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-5">
              <form>
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
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
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

export default Login;
