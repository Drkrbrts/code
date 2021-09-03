import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: "",
        password: "",
      },
    };
  }

  onLoginClicked = () => {
    console.log("onLoginClicked firing");
    this.props.onLoginRequested(this.state.formData);
  };

  onFormFieldsChanged = (e) => {
    console.log("onFormFieldChanged firing", e.currentTarget);
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
      <div className="row flex mt-4 justify-content-center">
        <div className="col-2 mb-4 p-4 border border-primary rounded shadow">
          <h3 className="mb-4">Login</h3>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="email">Enter Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={this.state.formData.email}
                onChange={this.onFormFieldsChanged}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                value={this.state.formData.password}
                onChange={this.onFormFieldsChanged}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={this.onLoginClicked}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
