import React from "react";
import userService from "../services/userService";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import "./compStyle.css";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    tenantId: "",
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let NewValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = NewValue;
      return newState;
    });
  };

  onLogInClick = () => {
    let CurrentState = this.state;

    userService
      .logIn(CurrentState)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  };

  onLogInSuccess = (response) => {
    console.log(response);
    toast.success("Log In Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.history.push("/homePage");
  };

  onLogInError = (response) => {
    console.log({ response });
    toast.warn(`${response.response.data.errors}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col p-5">
            <div className="card">
              <form className="p-5">
                <div className="card-header text-center my-3">
                  <h1>Log In</h1>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Terry@TheOtherGuys.com"
                    onChange={this.onFormFieldChange}
                    value={this.state.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onFormFieldChange}
                    value={this.state.password}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tenantId" className="form-label">
                    Tenant Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tenantId"
                    name="tenantId"
                    placeholder="1738"
                    onChange={this.onFormFieldChange}
                    value={this.state.tenantId}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onLogInClick}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default withRouter(Login);
