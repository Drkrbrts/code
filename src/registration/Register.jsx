import React from "react";
import { register } from "../services/userService";
import { toast } from "react-toastify";

// toast.configure();
class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "123123",
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    register(this.state).then(this.onSuccess).catch(this.onError);
  };

  onSuccess(response) {
    console.log(response);
    toast.success(
      <strong>Registration Successful, Welcome to the Team</strong>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      }
    );
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatar: "",
    });
  }

  onError(response) {
    console.log(response);
    toast.error(
      <strong>
        Error: <em>Something went wrong. Member Registration Failed!</em>
      </strong>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      }
    );
  }

  render() {
    return (
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p
                        className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                        style={{ color: "red" }}
                      >
                        Member Registration
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="firstName"
                              className="form-control"
                              value={this.state.firstName}
                              onChange={(e) => this.change(e)}
                              placeholder="First Name"
                            />
                            <label className="form-label"></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="lastName"
                              value={this.state.lastName}
                              onChange={(e) => this.change(e)}
                              className="form-control"
                              placeholder="Last Name"
                            />
                            <label className="form-label"></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="email"
                              value={this.state.email}
                              onChange={(e) => this.change(e)}
                              className="form-control"
                              placeholder="Email"
                            />
                            <label className="form-label"></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="password"
                              type="password"
                              value={this.state.password}
                              onChange={(e) => this.change(e)}
                              className="form-control"
                              placeholder="Password"
                            />
                            <label className="form-label"></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="passwordConfirm"
                              type="password"
                              value={this.state.passwordConfirm}
                              onChange={(e) => this.change(e)}
                              className="form-control"
                              placeholder="Confirm Password"
                            />
                            <label className="form-label"></label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="avatarUrl"
                              value={this.state.avatarUrl}
                              onChange={(e) => this.change(e)}
                              className="form-control"
                              placeholder="Avatar URL"
                            />
                            <label className="form-label"></label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                          />
                          <label className="form-check-label">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={this.onSubmit}
                            //   onClick={this.notify}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                        className="img-fluid"
                        alt="Sample"
                      ></img>
                    </div>
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

export default Register;
