import React from "react";
import { toast } from "react-toastify";
import * as userService from "../services/userService";

class Loginmenu extends React.Component {
  state = {
    formLogData: {
      email: "",
      password: "",
      tenantId: "8644940",
    },
  };

  onFormHandleChanged = (e) => {
    console.log(e.currentTarget.name);
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formLogData = { ...this.state.formLogData };
      formLogData[inputName] = newValue;
      return { formLogData };
    });
  };

  onItemRegClick = (e) => {
    e.preventDefault();
    console.log("Yep Let's log in");
    userService
      .logIn(this.state.formLogData)
      .then(this.onLogSuccess)
      .catch(this.onLogError);
  };
  onLogSuccess = (response) => {
    console.log(response);
    this.resetForm();
    this.props.history.push("/home");
    toast.success("Login success");
  };
  onLogError = (err) => {
    console.warn(err);
    toast.error("Login failed");
  };

  resetForm = () => {
    this.setState({
      formLogData: {
        email: "",
        password: "",
      },
    });
  };

  toRegisterClick = () => {
    this.props.history.push("/register");
  };

  //  goToHomePage = () => {
  //this.props.history.push("/home");
  //};

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>Sign in</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.formLogData.email}
                    required="required"
                    onChange={this.onFormHandleChanged}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.formLogData.password}
                    required="required"
                    onChange={this.onFormHandleChanged}
                  />
                </div>
                <div id="passwordHelp" className="form-text">
                  I forgot my password &raquo;
                </div>
                <div>
                  {" "}
                  <button
                    className="form-text"
                    id="goToRegister"
                    onClick={this.toRegisterClick}
                  >
                    Register a new membership
                  </button>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onItemRegClick}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Loginmenu;
