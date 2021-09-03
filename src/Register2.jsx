import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as userService from "./services/userService";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too Long!")
    .required("Is Required"),
  lastName: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too Long!")
    .required("Is Required"),
  email: Yup.string().email().required("Please Enter your Email"),
  password: Yup.string()
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Is Required"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  avatarUrl: Yup.string()
    .url()
    .min(5, "Too short!")
    .max(150)
    .required("Is Required"),
});

const Register2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "U01Q442CE4F",
  });

  const onSubmitBtnClick = (e) => {
    e.preventDefault();

    userService
      .register(formData)
      .then(onSubmitBtnSuccess)
      .catch(onSubmitBtnError);
  };

  const onSubmitBtnSuccess = (res) => {
    console.log(res);
  };

  const onSubmitBtnError = (err) => {
    console.error({ error: err });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Register User</h1>
              <p className="text-center">
                Please Fill In This Form To Create An Account
              </p>
            </div>
            <Formik
              enableReinitialize={true}
              initialValues={formData}
              validationSchema={validationSchema}
              onRegister={onSubmitBtnClick}
            >
              <Form>
                <div className="form-group m-2">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    type="text"
                    placeholder="John"
                    name="firstName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    type="text"
                    placeholder="Doe"
                    name="lastName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="email">Email</label>
                  <Field
                    type="text"
                    placeholder="name@example.com"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    placeholder="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    type="password"
                    placeholder="confirm password"
                    name="passwordConfirm"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="passwordConfirm"
                    component="div"
                    className="has-error"
                  />
                  <label htmlFor="avatarUrl">Avatar Url</label>
                  <Field
                    type="url"
                    placeholder="https://"
                    name="avatarUrl"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="avatarUrl"
                    component="div"
                    className="has-error"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register2;
