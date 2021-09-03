import React from "react";
import * as userServices from "../services/userServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./register";


class Login extends React.Component {
  state = {
    email: "",
    password: "",
    tenantId: "U025G4MMDEH",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSignInClicked = (e) => {
    e.preventDefault();

    const payload = { ...this.state };

    userServices
      .login(payload)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onLoginSuccess = (response) => {
    console.log("User Credentials Verified...User Logged In", response.data)
    toast.success("Logged In!")
      
  };

  onLoginError = (response) => {
    console.log("User Credentials Failed Verification..", response.data);
    toast.error("Ooops! Credentails wasnt verified");
  };

  onRegisterClicked = (e) => {
    console.log("Register was clicked");
    let ticks = new Date().getSeconds();
    this.props.history.push("/register" + ticks);
  };
  componentDidUpdate(prevProps){
    let currentPath= this.props.location.pathname;
    let prevPath= prevProps.location.pathname;

    console.log({currentPath, prevPath});
  }
  render() {
    let { email, password } = this.state;

    return (
      <main className="form-Login">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <form>
                <h1 className="h3 mb-3 fw-normal text-center">Login Here</h1>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" defaultValue="remember-me" />{" "}
                    Remember me
                  </label>
                </div>
                <div className="d-grid gap-2 d-md-block">
                  <div className="col-12">
                    <button
                      className="btn  btn-primary"
                      type="submit"
                      onClick={this.onSignInClicked}
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={this.onRegisterClicked}>
                      Register
                    </button>
                  </div>
                </div>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
