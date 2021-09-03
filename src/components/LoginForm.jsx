import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "@material-ui/core";

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
                  {/* <label htmlFor="email">Email</label> */}
                  {/* <FastField
                  component="input"
                  name="email"
                  className="form-control"
                /> */}
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
                <div className="d-flex justify-content-end flex-row px-3">
                  <div>
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default LoginForm;
