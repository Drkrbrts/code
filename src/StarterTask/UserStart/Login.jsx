import React from "react";
import defaultExport from "./userService";
import { toast } from "react-toastify";

class LogIn extends React.Component {
  state = {
    formData: {
      email: " ",
      password: " ",
      tenantId: 123,
    },
  };

  setLoginData = (e) => {
    let target = e.target;
    let name = target.name;
    let val = target.value;
    this.setState((prevState) => {
      const formData = { ...prevState.formData, [name]: val };
      return { formData: formData };
    });
  };

  loginSubmit = () => {
    defaultExport
      .logIn(this.state.formData)
      .then(this.onLogInSuccess)
      .catch(this.onFailure);
  };

  onLogInSuccess = (data) => {
    console.log(data);
    toast.success("Success");
    this.props.history.push("/home");
  };

  onFailure = (data) => {
    console.warn(data);
    toast.error("error");
  };

  render() {
    return (
      <div className="container">
        <div className="card-body">
          <form className="col">
            <div className="form-group emailLogIn">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="example@user.com"
                name="email"
                onChange={this.setLoginData}
              />
            </div>
            <div className="form-group pwLogIn">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Password Here"
                name="password"
                onChange={this.setLoginData}
              />
            </div>
          </form>
          <div className="footContainer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.loginSubmit}
            >
              Log In
            </button>
            <button type="button" className="btn btn-link wantedToReg">
              <a href="./register">Wanted to Register?</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
