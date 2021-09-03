import React from "react";
import defaultExport from "./userService";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

class Registry extends React.Component {
  state = {
    formData: {
      firstName: " ",
      lastName: " ",
      email: " ",
      password: " ",
      passwordConfirm: " ",
      avatarURL: " ",
      tenantId: 123,
    },
  };

  setRegData = (e) => {
    let target = e.target;
    let name = target.name;
    let val = target.type === "checkbox" ? target.checked : target.value;
    this.setState((prevState) => {
      const formData = { ...prevState.formData, [name]: val };
      return { formData: formData };
    });
  };

  submitRegData = () => {
    defaultExport
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterFailure);
  };

  onRegisterSuccess = (data) => {
    console.log(data);
    toast.success("Success");
    this.props.history.push("/home");
  };

  onRegisterFailure = (data) => {
    console.warn(data);
    toast.error("error");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container registryPage">
          <div className="container-form">
            <h2>Register New User</h2>
            <form className="col" id="registryForm">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.setRegData}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.setRegData}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="example@user.com"
                  onChange={this.setRegData}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={this.setRegData}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="passwordConfirm"
                  placeholder="Retype Password"
                  onChange={this.setRegData}
                />
              </div>
              <div className="form-group">
                <label>Avatar URL</label>
                <input
                  type="text"
                  className="form-control"
                  name="avatarURL"
                  placeholder="URL"
                  onChange={this.setRegData}
                />
              </div>
            </form>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  name="TermsConditions"
                  style={{ display: "inline" }}
                  required
                  onChange={this.setRegData}
                />
                <label className="form-check-label" htmlFor="TermsConditions">
                  Agree to all terms and conditions
                </label>
                <button
                  type="submit"
                  className="btn btn-primary addUser"
                  style={{ display: "inline", float: "right" }}
                  onClick={this.submitRegData}
                >
                  Register Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Registry;
