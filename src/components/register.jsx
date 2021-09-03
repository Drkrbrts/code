import React from "react";
import * as userServices from "../services/userServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Register extends React.Component {
  
    state =  {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U025G4MMDEH",
    };


  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onRegisterClicked = (e) => {
    e.preventDefault();

    const payload = { ...this.state };

    userServices
      .register(payload)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log("User Credentials Verified...User Registered", response.data);
    toast.success("Registered Successfully")
  };

  onRegisterError = (response) => {
    console.warn("User Credentials Failed Verification..", response.data);
    toast.error("Ooops! Could not Register.");
  };

  render() {
    let { firstName, lastName, email, password, passwordConfirm, avatarUrl } =
      this.state;

    return (
      <main role="main">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <form>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={firstName}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={lastName}
                    onChange={this.changeHandler}
                  />
                </div>
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password Confirm</label>
                  <input
                    type="password"
                    className="form-control"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Avatar Image</label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://example.com"
                    name="avatarUrl"
                    value={avatarUrl}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.onRegisterClicked}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Register;
