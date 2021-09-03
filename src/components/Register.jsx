import React from "react";
import * as usersService from "../services/usersService";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        avatarUrl: "",
        tenantId: this.props.tenantId,
      },
    };
  }

  onRegisterSuccess = (response) => {
    console.log(response);
  };
  onRegisterError = (error) => {
    console.log(error);
  };
  onConfirmClick = (e) => {
    e.preventDefault();
    usersService
      .register(this.state.formData)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
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

  render() {
    return (
      <form className="container shadow col-md-6 border border-light bg-white rounded">
        <div className="row">
          <div className="form-group col-6">
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              onChange={this.onFormFieldChange}
              value={this.state.firstName}
            />
          </div>
          <div className="form-group col-6">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              type="text"
              className="form-control"
              onChange={this.onFormFieldChange}
              value={this.state.lastName}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.email}
          />
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label htmlFor="inputPassword">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={this.onFormFieldChange}
              value={this.state.password}
            />
          </div>
          <div className="form-group col-6">
            <label htmlFor="passwordConfirn">Confirm Password</label>
            <input
              name="passwordConfirm"
              type="password"
              className="form-control"
              onChange={this.onFormFieldChange}
              value={this.state.passwordConfirm}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="avatarUrl">Avatar URL</label>
          <input
            name="avatarUrl"
            type="url"
            className="form-control"
            placeholder="https://www.example.com"
            onChange={this.onFormFieldChange}
            value={this.state.avatarUrl}
          />
        </div>
        <button
          type="button"
          className="mt-2 mb-2 btn btn-primary"
          onClick={this.onConfirmClick}
        >
          Confirm
        </button>
      </form>
    );
  }
}
