import React from "react";
import axios from "axios";
import Buttons from "./loginPageButtons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      tenantId: "U025G4MMDEH",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  LoginHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://api.remotebootcamp.dev/api/users/login", this.state)
      .then((response) => {
        toast.success("Successfully Signed In")
        console.log("User Logged in Successfully", response.data);
      })
      .catch((error) => {
        toast.error("User Login failed..")
        console.log(error);
      });
  };
  render() {
    let { email, password } = this.state;

    return (
      <main className="form-Login">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <form onSubmit={this.LoginHandler}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
                    <Buttons {...this.props}/>
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
