import React from "react";
import { register } from "../services/userService";

class Register extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
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

  onRegisterClicked = () => {
    register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };
  onRegisterSuccess = (response) => {
    console.log(response);
  };
  onRegisterError = (response) => {
    console.warn(response);
  };

  render() {
    return (
      <React.Fragment>
        <main role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-5">
                <form>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.firstName}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.lastName}
                    />
                  </div>
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
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword2"
                      className="htmlForm-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="passwordConfirm"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.passwordConfirm}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="avatarURL" className="form-label">
                      Avatar URL
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      name="avatarUrl"
                      onChange={this.onFormFieldChange}
                      value={this.state.formData.avatarUrl}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onRegisterClicked}
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
export default Register;
