import React from "react";
import { register } from "../services/userServices";
import { ToastContainer, toast } from "react-toastify";

class Register extends React.Component {
  state = {
    membershipForm: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      retypePassword: "",
      avatarUrl: "",
    },
  };

  registerClicked = (payload) => {
    register(payload).then(this.onRegisterSuccess).catch(this.onRegisterError);
  };

  onFormChange = (e) => {
    let membershipForm = { ...this.state.membershipForm };
    membershipForm[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ membershipForm });
  };

  onRegisterSuccess = (response) => {
    console.log("response: ", response);
    toast.success("You have registered successfully!", "Registration Success");
  };

  onRegisterError = (response) => {
    console.log("error: ", response);
    toast.error(response, "Registration failed");
  };
  render() {
    console.log(this.state.membershipForm);
    return (
      <div className="container ps-10 pe-2 pt-5 pb-5">
        <div className="row shadow">
          <h6 className="text-center">Register a new membership</h6>
          <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

            <div className="form-outline mb-4">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                onChange={this.onFormChange}
              />
            </div>

            <div className="form-outline mb-4">
              <input
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={this.onFormChange}
              />
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={this.onFormChange}
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onFormChange}
              />
            </div>

            <div className="form-outline mb-4">
              <input
                name="retypePassword"
                type="password"
                className="form-control"
                placeholder="Retype Password"
                onChange={this.onFormChange}
              />
            </div>

            {/* <!--Avatar URL--> */}

            <div className="form-outline mb-4">
              <input
                name="avatarUrl"
                type="text"
                className="form-control avatar-url"
                placeholder="Avatar Url"
                onChange={this.onFormChange}
              />
            </div>

            {/* <!-- Checkbox --> */}
            <div className="form-check d-flex mb-4">
              {/* <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3"
                checked={true}
              /> */}
              <label className="form-check-label" htmlFor="form2Example3">
                I agree to the terms
              </label>

              {/* <!-- Submit button --> */}
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block register mb-4"
              onClick={() => {
                this.registerClicked(this.state.membershipForm);
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
