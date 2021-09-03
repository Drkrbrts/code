import React from "react";
import * as userService from "../services/userService";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U025KDV7D19",
    };
  }

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

  onSubmitClicked = () => {
    userService
      .register(this.state)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log(response);
    // show registration successful using toast
    // automatically log user in (use response data to log user in with new payload)
    this.props.history.push("/login");
  };

  onRegisterError = (error) => {
    console.warn(error);
    // display registration error message using toast
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <h6 style={{ textAlign: "center" }}>Register a new membership</h6>
            <div className="container-fluid py-4">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control form-firstName"
                    name="firstName"
                    placeholder="John"
                    value={this.state.firstName}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control form-lastName"
                    name="lastName"
                    placeholder="Smith"
                    value={this.state.lastName}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingPassword">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control form-email"
                    name="email"
                    placeholder="name@example.com form-email"
                    value={this.state.email}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control form-password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control form-passwordConfirm"
                    name="passwordConfirm"
                    placeholder="Password"
                    value={this.state.passwordConfirm}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Confirm Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control form-avatar"
                    name="avatarUrl"
                    placeholder="avatar url"
                    value={this.state.avatarUrl}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingPassword">Avatar Url</label>
                </div>
              </form>
              <button
                type="submit"
                className="btn btn-primary px-5"
                onClick={this.onSubmitClicked}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
