import React from "react";
import userService from "../services/userService";

import { toast } from "react-toastify";

class LogIn extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "U024X2E8E13",
    },
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSubmitClicked = (e) => {
    e.preventDefault();

    userService
      .logIn(this.state.formData)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    console.log({ loginSuccess: response });
    toast.success("🦄 Log in Success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    window.location.replace("/home");
  };

  onLoginError = (errResponse) => {
    console.log({ LoginError: errResponse });

    toast.error("Log in Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="body-container">
          <div className="form center">
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  name="email"
                  onChange={this.onFormFieldChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  name="password"
                  onChange={this.onFormFieldChange}
                />
              </div>
              <div className="d-grid gap-2  d-md-flex justify-content-md-end">
                <button
                  type="submit"
                  className="btn btn-primary submit"
                  onClick={this.onSubmitClicked}
                >
                  Submit
                </button>
              </div>
              <div type="hyperlink" id="forgotPassword" className="form-text">
                <p>
                  <a href="http://www.naver.com">I forgot my password</a>
                </p>
              </div>
              <div type="hyperlink" id="alreadyHave" className="form-text">
                <p>
                  <a href="/register">Register a new membership</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LogIn;
