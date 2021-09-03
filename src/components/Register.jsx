import React from "react";
import Fade from "@material-ui/core/Fade";
import * as userService from "../services/userService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  passwordConfirm: Yup.string().required("Required"),
  avatarUrl: Yup.string().required("Required"),
});

class Register extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U01RTQ85QN5",
    },
  };

  handleSubmit = (values) => {
    console.log("values: ", values);
    userService
      .register(values)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };

  onActionSuccess = (response) => {
    console.log(response);
  };

  onActionError = (errResponse) => {
    console.warn(errResponse);
  };

  render() {
    return (
      <Fade in={true} style={{ transitionDelay: "250ms" }}>
        <div className="p-4 mb-4 bg-light rounded-3">
          <h4
            style={{
              textAlign: "center",
            }}
          >
            Register a user
          </h4>
          <div className="container-fluid py-3">
            <Formik
              enableReinitialize={true}
              initialValues={this.state.formData}
              onSubmit={this.handleSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name: </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                  ></Field>
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    style={{ color: "red" }}
                  ></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name: </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                  ></Field>
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    style={{ color: "red" }}
                  ></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    autoComplete="username"
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
                    className="form-control"
                    id="password"
                    name="password"
                    autoComplete="new-password"
                  ></Field>
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red" }}
                  ></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="passwordConfirm">Confirm Password: </label>
                  <Field
                    type="password"
                    className="form-control"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    autoComplete="new-password"
                  ></Field>
                  <ErrorMessage
                    name="passwordConfirm"
                    component="div"
                    style={{ color: "red" }}
                  ></ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="avatarUrl">Avatar Url: </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="avatarUrl"
                    name="avatarUrl"
                  ></Field>
                  <ErrorMessage
                    name="avatarUrl"
                    component="div"
                    style={{ color: "red" }}
                  ></ErrorMessage>
                </div>
                <div className="form-check m-3 p-3">
                  <Field
                    type="checkbox"
                    className="form-check-input"
                    id="checkBox"
                    name="checkBox"
                  ></Field>
                  <label className="form-check-label" htmlFor="checkBox">
                    <b>
                      I agree to the <font color="blue">terms</font>
                    </b>
                  </label>
                </div>
                <div className="form-group">
                  <button
                    id="submit"
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Register;
