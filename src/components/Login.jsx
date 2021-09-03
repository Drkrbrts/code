import React from "react";
import * as userService from "../services/userServices";
import SiteNav from "./basicComponents/SiteNav"

class LoginPage extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
    }, 
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSubmitClick = (e) => {
    //register data
    e.preventDefault();
    var loginCopy = { ...this.state.formData };
    let data = {
      email: loginCopy.email,
      password: loginCopy.password,
      tenantId: "003",
    };
    userService
      .loginUser(data)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
    console.log("Login button was clicked", data);
  };

  onLoginSuccess = (response) => {
    // do something
    let ticks = new Date().getSeconds();
    this.props.history.push("/home/" + ticks)
    console.log("successful", response);
  };

  onLoginError = (errResponse) => {
    // do something
    console.warn({ error: errResponse });
  };

  render() {
    return (
      <React.Fragment>
        <SiteNav></SiteNav>
        <main role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pd-5">
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.onFormFieldChanged}
                      value={this.state.formData.password}
                    />
                  </div>
                  <div className="row">
                    <a href="https://www.google.com/">I forgot my password</a>
                  </div>
                  <div className="row">
                    <a href="/register/">Register for a new membership</a>
                  </div>
                  <div className="col-md-4 mb-3">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      onClick={this.onSubmitClick}
                    >
                      <a href="HomePage.html">Sign in</a>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default LoginPage;
