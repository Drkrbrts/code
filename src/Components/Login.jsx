import React from "react";
import { logIn } from "../services/userService";
import "rc-pagination/assets/index.css";
// import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class Login extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "U016011FGJE",
    },
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  onLogInClicked = () => {
    logIn(this.state.formData)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  };
  onLogInSuccess = (response) => {
    console.log(response);

    toast("Log In Success");
    this.props.history.push("/Home");
  };
  onLogInError = (response) => {
    console.warn(response);
    toast("error...");
  };

  render() {
    return (
      <React.Fragment>
        <main role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-5">
                <form>
                  <div className="mb-3 form-check">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={this.onFormFieldChange}
                        value={this.state.formData.email}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={this.onFormFieldChange}
                        value={this.state.formData.password}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onLogInClicked}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default Login;
