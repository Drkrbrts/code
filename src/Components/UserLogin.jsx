import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../services/userServices";

class UserLogin extends React.Component {
  state = {
    account: { email: "", password: "", tenantId: "U025GSH64FN" },
  };

  handleSubmit = () => {
    console.log("submit!");
    //call the server
    login(this.state.account).then(this.onLoginSucces).catch(this.onLoginError);
  };

  //callback for .then()
  onLoginSucces = (response) => {
    toast.success("You have Logged in Successfully!", "Login Success");
    console.log("before push");
    console.log(this.props.history);
    this.props.history.push("/home");
    console.log("loginsuccess after push");
  };

  //callback for .catch()
  onLoginError = (response) => {
    toast.error(`${response}`);
    console.log("error in loginerror");
  };

  formFieldChange = (e) => {
    //console.log(e.currentTarget);
    //console.log(e); //can work with ID as well.
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  // componentDidUpdate() {
  //   console.log("updated");
  // }

  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <div className="container p-5">
          <div className="row p-5 m-5">
            <div className="col-md-4"></div>
            <form className="d-inline-block col-md-4 shadow">
              <h5 className="text-center">Sign in</h5>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  value={account.email}
                  onChange={this.formFieldChange}
                  name="email"
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  value={account.password}
                  onChange={this.formFieldChange}
                  name="password"
                  type="password"
                  id="password"
                  className="form-control password"
                  placeholder="password"
                />
              </div>

              {/* <!-- 2 column grid layout for inline styling --> */}

              {/* <!-- Submit button --> */}
              <button
                type="button"
                className="btn btn-primary btn-block mb-4"
                onClick={this.handleSubmit}
              >
                Login
              </button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  Not a member? <NavLink to="/Register">Register</NavLink>
                </p>
              </div>
            </form>
            <div className="col-md-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserLogin;
