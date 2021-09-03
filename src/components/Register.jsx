// import { response } from "express";
import React from "react";
import { toast } from "react-toastify";
import * as userService from "../services/userService";
// import Toast from "react-toastify";

class Register extends React.Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U025L0H5TCJ",
    },
  };

  checkPass = () => {
    //change message to toaster noties for the messages!!
    var get_elem = document.getElementById,
      pass1 = document.getElementById("password"),
      pass2 = document.getElementById("password2"),
      message = document.getElementById("confirmMessage"),
      colors = {
        goodColor: "#fff",
        goodColored: "#087a08",
        badColor: "#fff",
        badColored: "#ed0b0b",
      },
      strings = {
        confirmMessage: ["good", "bad"],
      };
    console.log(get_elem);
    if (pass1.value === pass2.value && pass1.value + pass2.value !== "") {
      pass2.style.backgroundColor = colors["goodColor"];
      message.style.color = colors["goodColored"];
      message.innerHTML = strings["confirmMessage"][0];
    } else if (!(pass2.value === "")) {
      pass2.style.backgroundColor = colors["badColor"];
      message.style.color = colors["badColored"];
      message.innerHTML = strings["confirmMessage"][1];
    } else {
      message.innerHTML = "";
    }
  };

  onChange = (event) => {
    // let cTarget = event.currentTarget;
    let newValue = event.target.value;
    let inputName = event.target.name;

    // console.log(newValue, inputName);
    this.setState((prevState) => {
      let user = { ...prevState.user };
      user[inputName] = newValue;
      return { user };
    });
  };

  submitRegistration = (e) => {
    console.log("Submit registration processing!");
    let userData = { ...this.state.user };
    console.log(userData);

    userService
      .register(userData)
      .then(this.onRegSuccess)
      .catch(this.onRegError);
  };

  onRegSuccess = (response) => {
    toast.success("Registration Approved");
  };

  onRegError = (response) => {
    toast.error("Registration Failed, Please Try Again");
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form
            className="row gy-2 gx-3 align-items-center"
            style={{ width: "500px", marginLeft: "center", margin: "auto" }}
          >
            <div className="col-12">
              <div className="input-container">
                <h3>Input Your Registration Data Here!</h3>
                <i className="fa fa-user icon"></i>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.onChange}
                  required
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div className="row-auto">
              <div className="input-container">
                <i className="fa fa-user icon"></i>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.onChange}
                  required
                ></input>
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="row-auto form-floating mb-3">
              <div className="input-container">
                <i className="fa fa-envelope icon"> </i>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email: name@example.com"
                  onChange={this.onChange}
                  required
                ></input>
              </div>
              <div className="invalid-feedback">
                Please provide a valid email address.
              </div>
            </div>

            <div className="row-auto form-floating mb-3">
              <div className="input-container">
                <i className="fa fa-key icon"> </i>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.onChange}
                  placeholder="Password"
                  required
                ></input>
              </div>
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
            </div>
            <div className="row-auto form-floating mb-3">
              <div className="input-container">
                <i className="fa fa-key icon"> </i>
                <input
                  type="password"
                  className="form-control"
                  name="passwordConfirm"
                  onChange={this.onChange}
                  placeholder="Retype Password"
                  required
                ></input>
                <div className="invalid-feedback">
                  Please provide a valid password.
                </div>
              </div>
            </div>
            <div className="row-auto">
              <div className="input-container">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon3">
                    Avatar URL
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="avatarUrl"
                    onChange={this.onChange}
                    aria-describedby="avatarUrl"
                    required
                  ></input>
                </div>
                <div className="invalid-feedback">
                  Please select a valid URL.
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                ></input>
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary submit"
                type="button"
                onClick={this.submitRegistration}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
