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
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U025GSH64FN",
    },
  };

  registerClicked = () => {
    register(this.state.membershipForm)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onFormChange = (e) => {
    let membershipForm = { ...this.state.membershipForm };
    membershipForm[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ membershipForm });
  };

  onRegisterSuccess = (response) => {
    console.log("response: ", response);
    toast.success(`You have registered successfully!)`);
    this.props.history.push("/");
  };

  onRegisterError = (response) => {
    console.log("error: ", response);
    toast.error(`Registration failed: ${response}`);
  };
  render() {
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
                name="passwordConfirm"
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

            {/* <!-- Submit button --> */}
            <button
              type="button"
              className="btn btn-primary btn-block register mb-4"
              onClick={this.registerClicked}
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
