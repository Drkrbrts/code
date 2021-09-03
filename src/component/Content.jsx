import React, { Component } from "react";
import { logIn } from "../services/userService";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class Content extends Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "123123",
      agree: false,
    },
    hasMadeAjax: true,
    isModalOpen: false,
  };

  onChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    logIn(this.state.formData).then(this.onSuccess).catch(this.onError);
  };

  onSuccess = (response) => {
    console.log(response);
    toast.success(<strong>Login Successful</strong>, {
      position: "top-center",
      autoClose: 3000,
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
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 p-5">
            <h2>Sign In</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.formData.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.formData.password}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={this.onChange}
                  name="agree"
                  value="999"
                  checked={this.state.formData.agree}
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>

              <div className="p-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={(e) => {
                    this.onSubmit(e);
                  }}
                >
                  Sign In
                </button>
                &nbsp;
                <button
                  type="success"
                  className="btn btn-dark btn-lg btn-block"
                >
                  <NavLink to="/register">Register</NavLink>
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Content;
