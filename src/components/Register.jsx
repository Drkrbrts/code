import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userRegister } from "../services/userService";
toast.configure();
class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "",
  };

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

  registerSuccess = (response) => {
    toast.success("🦄 Registration Successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(response);
  };

  registerError = (err) => {
    toast.error("Registration Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.error(err);
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputForm">First Name </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="fName"
            value={this.state.firstName}
            onChange={this.onFormFieldChanged}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Last Name </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lName"
            onChange={this.onFormFieldChanged}
            value={this.state.lastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Email </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onChange={this.onFormFieldChanged}
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Password </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Please use at least 1 capital letter, a number, and a special character"
            onChange={this.onFormFieldChanged}
            value={this.state.password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Password Confirm </label>
          <input
            type="password"
            name="passwordConfirm"
            className="form-control"
            id="passwordConfirm"
            placeholder="Please use at least 1 capital letter, a number, and a special character"
            onChange={this.onFormFieldChanged}
            value={this.state.passwordConfirm}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Avatar URL </label>
          <input
            type="url"
            name="avatarUrl"
            alt="avatar"
            className="form-control"
            id="avatar"
            onChange={this.onFormFieldChanged}
            value={this.state.avatarUrl}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputForm">Create a TenantId </label>
          <input
            type="number"
            name="tenantId"
            id="tenantId"
            className="form-control"
            placeholder="Must be a unique ID!"
            onChange={this.onFormFieldChanged}
            value={this.state.tenantId}
          />
        </div>
        <div>
          <input
            type="button"
            onClick={() =>
              userRegister(this.state)
                .then(this.registerSuccess)
                .catch(this.registerError)
            }
            className="btn btn-primary "
            value="Submit"
          />
        </div>
      </form>
    );
  }
}

export default Register;
