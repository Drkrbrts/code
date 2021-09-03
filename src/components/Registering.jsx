import React from "react";
import { register } from "../services/userService";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class Registering extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U024PTVBSP9",
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
      console.log(formData);
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
    const notify = () => {
      toast.success("You have registered successfully!");
    };
    notify();
    this.props.history.push("/login");
  };
  onRegisterError = (response) => {
    console.warn(response);
    const notify = () => {
      toast.error("Oh no, it appears there's an error in one of your lines");
    };
    notify();
  };

  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="col-lg-4 p-3">
            <form>
              <h3>Register</h3>

              <div className=" mb-3 form-group">
                <label className="form-label">First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  id="firstName"
                  name="firstName"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.firstName}
                />
              </div>

              <div className=" mb-3 form-group">
                <label className="form-label">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  id="lastName"
                  name="lastName"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.lastName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="password1"
                  name="password"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.password}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  id="password2"
                  name="passwordConfirm"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.passwordConfirm}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Avatar</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Enter avatar url"
                  id="avatarUrl"
                  name="avatarUrl"
                  onChange={this.onFormFieldChanged}
                  value={this.state.formData.avatarUrl}
                />
              </div>
              <NavLink to="/login">
                <p className="forgot-password text-right">
                  Already have an account?
                </p>
              </NavLink>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.onRegisterClicked}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </main>

      /* <form>
<div className="mb-3">
  <label for="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1">
  <label className="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form> */
    );
  }
}
export default Registering;
