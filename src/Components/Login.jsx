import React from "react";
import "rc-pagination/assets/index.css";
import { logIn } from "../services/userService";
import { toast } from "react-toastify";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import { current } from "../services/userService";

class Login extends React.Component {
  state = {
    formData: { email: "", password: "", tenantId: "U024X2DMAKX" },
  };

  onFormLoginChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onLoginClicked = () => {
    console.log("clicked!");
    logIn(this.state.formData).then(this.logInSuccess).catch(this.logInError);
  };

  logInSuccess(response) {
    console.log({ "logIn Success": response });
    if (response) {
      toast("Success!!!");
    }

    //current().then(this.currentSuccess).catch(this.currentError);
  }
  currentSuccess(response) {
    console.log({ "currentSuccess!!": response });
  }
  currentError(response) {
    console.log({ "currentError..": response });
  }

  logInError(response) {
    console.log({ "logIn Error": response });
    if (response) {
      toast("error...");
    }
  }

  onGoToRegistration() {
    console.log("click Registration!");
    this.props.history.push("/Register");
  }
  render() {
    return (
      <form>
        <React.Fragment>
          <div className="mb-3 p-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.onFormLoginChanged}
              value={this.state.formData.email}
            ></input>
          </div>
          <div className="mb-3 p-5">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.onFormLoginChanged}
              value={this.state.formData.password}
            ></input>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input"></input>
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <Link to="/Home">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onLoginClicked}
            >
              Submit
            </button>
          </Link>
          <Buttons {...this.props}></Buttons>
        </React.Fragment>
      </form>
    );
  }
}

export default Login;
