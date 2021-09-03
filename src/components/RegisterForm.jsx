import React from "react";

class RegisterForm extends React.Component {
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
      },
    };
  }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    // console.log("onFormFieldChanged", newValue);
    this.setState((prevState) => {
      let formData = { ...prevState.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  onRegisterClicked = () => {
    console.log("onRegisterClicked firing");
    this.props.onRegister(this.state.formData);
  };

  render() {
    return (
      <form>
        <div className="row">
          <div className="col">
            <div className="form-group mb-3">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="First Name"
                value={this.state.formData.firstName}
                onChange={this.onFormFieldChanged}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Last Name"
                value={this.state.formData.lastName}
                onChange={this.onFormFieldChanged}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email@example.com"
            value={this.state.formData.email}
            onChange={this.onFormFieldChanged}
          />
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter Password"
                value={this.state.formData.password}
                onChange={this.onFormFieldChanged}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group mb-3">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="passwordConfirm"
                placeholder="Confirm Password"
                value={this.state.formData.confirmPassword}
                onChange={this.onFormFieldChanged}
              />
            </div>
          </div>
          <small className="form-text text-muted mb-2">
            At least 8 characters with 1 number and 1 special character
          </small>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="avatarUrl">Avatar Url</label>
          <input
            type="text"
            className="form-control"
            name="avatarUrl"
            placeholder="ex. http://www.example.com/image/jpg"
            value={this.state.formData.avatarUrl}
            onChange={this.onFormFieldChanged}
          />
          <small className="form-text text-muted mb-2">
            File types accepted include .jpg, .png, and .bmp
          </small>
        </div>
        <button
          className="btn btn-primary mt-2"
          type="button"
          onClick={this.onRegisterClicked}
        >
          Register
        </button>
        {/* <div className="row flex">
          <div className="align-items-center border">
            <span>or</span>
            <p>
              <button className="btn btn-link">Login</button>
            </p>
          </div>
        </div> */}
      </form>
    );
  }
}
export default RegisterForm;
