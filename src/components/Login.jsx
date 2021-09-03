import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogin } from "../services/userService";
import { userCurrent } from "../services/userService";

toast.configure();
class Login extends React.Component {
  state = {
    email: "",
    password: "",
    tenantId: 1234,
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = newValue;
      return newState;
    });
  };

  loginSuccess = (response) => {
    this.props.history.push("/home");
    toast.success("🦄 Login Successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(response);
  };

  loginError = (err) => {
    toast.error("Login Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.error(err);
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Email </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onChange={this.onFormFieldChanged}
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Password </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Please use at least 1 capital letter, a number, and a special character"
            onChange={this.onFormFieldChanged}
            value={this.state.password}
          />
        </div>
        <div>
          <input
            type="button"
            onClick={() =>
              userLogin(this.state)
                .then(this.loginSuccess)
                .catch(this.loginError)
            }
            className="btn btn-primary "
            value="Submit"
          />
        </div>
      </form>
    );
  }
}

export default Login;
