import React from "react";
import { logIn } from "../services/userService";
import { BrowserRouter, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class Login extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "U024PTVBSP9",
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({ newValue, currentTarget });

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      console.log(formData);
      return { formData };
    });
  };

  onLoginClicked = () => {
    logIn(this.state.formData)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };
  onLoginSuccess = (response) => {
    console.log(response);
    const notify = () => {
      toast.success("You have been logged in successfully!");
    };
    notify();
    this.props.history.push("/home");
  };

  onLoginError = (response) => {
    console.warn(response);
    const notify = () => {
      toast.error("Oh no, it appears there's an error in one of your lines");
    };
    notify();
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="col-lg-4 p-3">
            <form>
              <h3>Login</h3>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password1"
                  name="password"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.password}
                />
              </div>
              <NavLink to="/register">
                <p className="forgot-password text-right">
                  Don't have an account?
                </p>
              </NavLink>
              <button
                type="button"
                className="btn btn-primary "
                onClick={this.onLoginClicked}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
