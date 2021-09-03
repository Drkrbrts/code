import React from "react";
import * as userService from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logIn from "../services/logIn.css";

const logInSuccess = () => {
  toast.success("🦄 Registration Success!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const logInError = () =>
  toast.error("Registration Failed", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

class LoginPage extends React.Component {
  // constructor(props)

  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "afgjkh27i8asdgaog5tlk",
    },
  };

  // componentDidMount()
  // {
  //     this.props.setLoginStatus()
  // }

  onInputLogIn = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({newValue, currentTarget});

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      // newState.emailAddress = newValue;
      // console.log("newState", newState.emailAddress, {newState})

      // console.log(formData)
      return { formData };
    });
  };

  onSignInClicked = (e) => {
    e.preventDefault();

    userService
      .logIn(this.state.formData)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  };

  onLogInSuccess = (response) => {
    // response = this.state

    // console.log(response.config.data.tenantId)

    console.log("log in is successful", response);

    this.props.history.push("/home");

    logInSuccess();
  };

  onLogInError = (errResponse) => {
    console.log("Login Fail", errResponse);

    logInError();
  };

  render() {
    return (
      <form>
        <h3 className="text-center">Log in</h3>

        <div className="form-group col-2">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.formData.email}
            onChange={this.onInputLogIn}
          />
        </div>

        <div className="form-group col-2">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.formData.password}
            onChange={this.onInputLogIn}
          />
        </div>

        <div className="form-group col-2">
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

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block col-2"
            onClick={this.onSignInClicked}
          >
            Sign in
          </button>
        </div>
        <p className="here forgot-password text-center">
          Forgot <a href="#">password?</a>
        </p>
        <p className="register text-center">
          If you don't have an account{" "}
          <a href="http://localhost:3000/register">Register Here</a>
        </p>
      </form>
    );
  }
}

export default LoginPage;

// {
//     super(props);

//     this.state={
//         newState: this.props.userCurrent.state
//     }}

// componentDidMount() {

//     userService.currentUser(this.state)
//     .then(this.onSuccessfulLoginSuccess)
//     .catch(this.onSuccessfulLoginError)
// }

// onLogInClicked = () => {

//   console.log("Login Clicked")
// }
