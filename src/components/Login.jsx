import React from "react";
import Fade from "@material-ui/core/Fade";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as userService from "../services/userService";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required").min(3),
});

class Login extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
      tenantId: "U01RTQ85QN5",
    },
  };

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;
    console.log({ currentTarget, newValue });

    this.setState(() => {
      let formData = { ...this.state.formData };
      formData[inputName] = newValue;
      return { formData };
    });
  };

  handleSubmit = (values) => {
    console.log("Form data", values);
    console.log("Email: " + values.email);
    console.log("Password: " + values.password);
    userService
      .logIn(values)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };

  onActionSuccess = (response) => {
    console.log(response);
    window.location = "/home";
  };

  onActionError = (errResponse) => {
    console.warn(errResponse);
    window.location = "/login";
  };

  render() {
    return (
      <Fade in={true} style={{ transitionDelay: `250ms` }}>
        <div className="p-4 mb-4 bg-light rounded-3">
          <h4 style={{ textAlign: "center" }}>Login a user</h4>
          <div className="container-fluid py-3">
            <Formik
              enableReinitialize={true}
              initialValues={this.state.formData}
              onSubmit={this.handleSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control"
                  ></Field>
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red" }}
                  ></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                  ></Field>
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red" }}
                  ></ErrorMessage>
                </div>
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  className="btn btn-primary mr-3 m-3 mb-1"
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Login;
