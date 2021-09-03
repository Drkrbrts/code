import React from "react";
import { Formik, Form, FastField, Field } from "formik";

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

  onLoginClicked = (values) => {
    console.log("onLoginClicked firing");
    this.props.onLoginRequested(values);
  };

  // onFormFieldsChanged = (e) => {
  //   console.log("onFormFieldChanged firing", e.currentTarget);
  //   let currentTarget = e.currentTarget;
  //   let newValue = currentTarget.value;
  //   let inputName = currentTarget.name;

  //   this.setState(() => {
  //     let formData = { ...this.state.formData };

  //     formData[inputName] = newValue;

  //     return { formData };
  //   });
  // };

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
            <Form>
              <div className="form-group my-3">
                <label htmlFor="email">Email</label>
                <FastField
                  component="input"
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              <div className="d-flex justify-content-end flex-row px-3">
                <div>
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    );
  }
}

export default LoginForm;
