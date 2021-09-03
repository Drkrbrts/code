import React from "react";
import * as userService from "../services/userService";
import "rc-pagination/assets/index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = () => {
  toast.success("🦄 Registration Success!", {
    position: "top-right ",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const notifyError = () =>
  toast.error("Registration Failed", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

class RegisterPage extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarurl: "",
      tenantId: "randomTenantId123",
    },
  };

  onFormFieldChanged = (e) => {
    // console.log(e)
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    // console.log({newValue, currentTarget});

    // console.log(this.state.formData)

    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      // newState.emailAddress = newValue;
      // console.log("newState", newState.emailAddress, {newState})

      return { formData };
    });
  };

  onRegisterClicked = (e) => {
    // const data = {}
    console.log("register is firing");
    e.preventDefault();

    // console.log(submittedInput)

    userService
      .register(this.state.formData) //state
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);

    // this.resetForm();
  };

  onRegisterSuccess = (response) => {
    console.log("Register Successful", response);
    this.resetForm();

    notifySuccess();
  };

  onRegisterError = (errResponse) => {
    console.log("Register Fail", errResponse);

    notifyError();
  };

  resetForm = () => {
    this.setState({
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatarurl: "",
      },
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

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control form-control-lg"
                          value={this.state.formData.firstName}
                          onChange={this.onFormFieldChanged}
                        />
                        <label className="form-label" htmlFor="firstName">
                          First Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control form-control-lg"
                          value={this.state.formData.lastName}
                          onChange={this.onFormFieldChanged}
                        />
                        <label className="form-label" htmlFor="lastName">
                          Last Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control form-control-lg"
                          value={this.state.formData.email}
                          onChange={this.onFormFieldChanged}
                        />
                        <label className="form-label" htmlFor="email">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control form-control-lg"
                          value={this.state.formData.password}
                          onChange={this.onFormFieldChanged}
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="passwordConfirm"
                          id="passwordConfirm"
                          className="form-control form-control-lg"
                          value={this.state.formData.passwordConfirm}
                          onChange={this.onFormFieldChanged}
                        />
                        <label className="form-label" htmlFor="passwordConfirm">
                          Confirm your password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="avatar-url"
                          name="avatarurl"
                          id="avatarurl"
                          className="form-control form-control-lg"
                          value={this.state.formData.avatarurl}
                          onChange={this.onFormFieldChanged}
                        />
                        <label className="form-label" htmlFor="avatarurl">
                          Include Avatar Picture Link
                        </label>
                      </div>

                      {/* <div className="form-outline mb-4">
                        <input type="tenantId" name="tenantId" id="tenantId" className="form-control form-control-lg d-none" value={this.state.formData.tenantId} onChange={this.onFormFieldChanged}/>
                        <label className="form-label" htmlFor="tenantId"></label>
                      </div> */}

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={this.onRegisterClicked}
                        >
                          Register
                        </button>
                      </div>
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

export default RegisterPage;
