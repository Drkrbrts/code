import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "@material-ui/core";
import { Modal } from "reactstrap";
//import { passwordReset } from "../services/usersService";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: "",
        password: "",
      },
      reset: {
        passwordReset: "",
      },
      isOpen: true,
    };
  }

  onLoginClicked = (values) => {
    console.log("onLoginClicked firing");
    this.props.onLoginRequested(values);
  };

  toggleModal = (e) => {
    e.preventDefault();
    console.log("toggleModal");
    this.setState((prevState) => {
      let newState = { ...prevState };
      newState.isOpen = !prevState.isOpen;
      return newState;
    });
  };

  onPasswordReset = (e) => {
    e.preventDefault();
    console.log("onPasswordReset", this.state.reset.passwordReset);
    // passwordReset(this.state.reset.passwordReset)
    //   .then(this.onPasswordSuccess)
    //   .catch(this.onPasswordError)
  };

  onPasswordSuccess = (response) => {
    console.log("onPasswordSuccess firing", response);
  };

  onPasswordError = (err) => {
    console.log("onPasswordError firing", err);
  };

  onFormFieldChange = (e) => {
    let target = e.currentTarget;
    let newValue = target.value;
    let inputName = target.name;
    this.setState((prevState) => {
      let reset = { ...prevState.passwordReset };
      reset[inputName] = newValue;
      return { prevState, reset };
    });
  };

  render() {
    return (
      <div className="row flex mt-4 justify-content-center">
        <div className="col-2 mb-4 p-4 border border-primary rounded shadow">
          <h3 className="mb-4">Login</h3>
          <Formik
            enableReinitialize={true}
            initialValues={this.state.formData}
            onSubmit={this.onLoginClicked}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className="form-group my-3">
                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-between flex-row px-3">
                  <div className="d-flex">
                    <span
                      className="h-50 align-self-center"
                      style={{ fontSize: "12px" }}
                    >
                      Forgot your password?
                    </span>
                    <button
                      type="button"
                      className="btn btn-link btn-sm"
                      onClick={this.toggleModal}
                    >
                      Click Here
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <Modal
          zIndex={5000}
          centered
          size="s"
          isOpen={this.state.isOpen}
          toggle={this.toggleModal}
          contentClassName="border-1 p-3 p-lg-3"
        >
          <div className="container">
            <div className="d-flex flex-row justify-content-end">
              <div className="d-flex-inline">
                <button
                  className="btn btn-danger btn-sm"
                  type="button"
                  name="close"
                  onClick={this.toggleModal}
                >
                  X
                </button>
              </div>
            </div>
            <form>
              <div className="mt-3">
                <TextField
                  fullWidth
                  name="passwordReset"
                  label="Enter your email to reset your password"
                  value={this.state.reset.passwordReset}
                  onChange={this.onFormFieldChange}
                />
              </div>
              <div className="d-flex mt-4 flex-row justify-content-end">
                <div className="d-flex-inline">
                  <button
                    className="btn btn-primary"
                    onClick={this.onPasswordReset}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginForm;
