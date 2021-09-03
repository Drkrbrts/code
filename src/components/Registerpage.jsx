import React from "react";
import userService from "../services/userService";
import { toast } from "react-toastify";

class Registerpage extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U024X2E8E13",
    },
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ newValue, currentTarget });

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  onSubmitClicked = (e) => {
    e.preventDefault();

    userService
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = (response) => {
    console.log({ Success: response });

    toast.success("🦄 Successfully registered", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    window.location.replace("/login");
  };

  onRegisterError = (errResponse) => {
    console.log({ Error: errResponse });

    toast.error("Error: Register Failed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <div className="body-container">
        <div className="registerform">
          <form>
            <h2>Register a new membership</h2>
            <div className="mb-3">
              <input
                type="firstName"
                className="form-control"
                id="firstNameField"
                placeholder="First Name"
                name="firstName"
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="lastName"
                className="form-control"
                id="lastNameField"
                placeholder="Last Name"
                name="lastName"
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="emailField"
                placeholder="Email"
                name="email"
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="passwordField"
                placeholder="Password"
                name="password"
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="Password"
                className="form-control"
                id="retypePasswordField"
                placeholder="Retype password"
                name="passwordConfirm"
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="avatarUrl"
                className="form-control"
                id="avatarUrlField"
                placeholder="Avatar Url"
                name="avatarUrl"
                onChange={this.onFormFieldChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="agree"
                // checked={this.state.formData.agree}
                // onChange={this.onFormFieldChange}
                value="132423"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                <p>
                  I agree to the <a href="http://www.google.com">terms</a>
                </p>
              </label>
              <div type="hyperlink" id="alreadyHave" className="form-text">
                <p>
                  <a href="http://www.naver.com">Already have an account?</a>
                </p>
              </div>
              <div className="d-grid gap-2  d-md-flex justify-content-md-end">
                <button
                  type="submit"
                  className="btn btn-primary submit"
                  onClick={this.onSubmitClicked}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Registerpage;
