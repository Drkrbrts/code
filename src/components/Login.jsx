import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: "",
        tenantId: this.props.tenantId,
      },
    };
  }
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

  onConfirmClick = (e) => {
    e.preventDefault();
    this.props.onLoginRequest(this.state.formData);
  };

  render() {
    return (
      <form className="container shadow bg-white border border-light rounded col-md-4">
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={this.onFormFieldChange}
            value={this.state.password}
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
