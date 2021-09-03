import React from "react";
import * as userService from "../services/userService";
import { ToastContainer, toast } from "react-toastify";

class Forms extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "testingTenantId1",
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({ newValue, currentTarget });

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      //   newState.firstName = newValue;
      //   console.log("newState", newState.firstName, { newState });

      return { formData };
    });
  };

  resetForm = () => {
    this.setState({
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatarUrl: "",
        tenantId: "testingTenantId1",
      },
    });
  };

  onRegisterClicked = (e) => {
    console.log("register firing");
    e.preventDefault();

    userService
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);

    this.resetForm();
  };
  onRegisterSuccess = (response) => {
    console.log("register success", response);
    this.successMessage();
  };

  onRegisterError = (errResponse) => {
    console.log("register fail", errResponse);
    this.errorMessage();
  };

  successMessage = () => {
    toast.success("🦄 Registration complete!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  errorMessage = () => {
    toast.error("🦄 Please fill all input fields", {
      position: "top-center",
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
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form className="form-container">
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="form-control form-control-lg firstName-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.firstName}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          First Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="form-control form-control-lg lastName-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.lastName}
                        />
                        <label className="form-label" htmlFor="form3Example2cg">
                          Last Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg email-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.email}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg password-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.password}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="passwordConfirm"
                          name="passwordConfirm"
                          className="form-control form-control-lg passwordConfirm-input"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.passwordConfirm}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Repeat your password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="avatar"
                          id="avatarUrl"
                          name="avatarUrl"
                          className="form-control form-control-lg"
                          onChange={this.onFormFieldChanged}
                          value={this.state.formData.avatarUrl}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example5cdg"
                        >
                          Avatar URL
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="checkbox"
                          name="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={this.onRegisterClicked}
                        >
                          Register
                        </button>
                      </div>
                      <ToastContainer></ToastContainer>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Forms;
