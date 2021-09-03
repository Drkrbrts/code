import React, { useState, useEffect } from "react";
import * as userService from "./services/userService";
import { toast, toastContainer } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is Invalid").required("Is Required"),
  password: Yup.string()
    .min(10, "Too short!")
    .max((30, "Too long!"))
    .required("Is Required"),
});

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    tenantId: "U01Q442CE4F",
  });

  useEffect(() => {
    console.log("ComponentDidMount-like function");
  }, []); // this empty array is a dependency array, place nothing in it if you want componentDidMount

  const onLoginBtnClicked = (e) => {
    e.preventDefault();
    console.log("onLoginBtnClicked was clicked");

    userService.login(formData).then(onLoginSuccess).catch(onLoginError);
  };

  const onRegisterBtnClicked = () => {
    props.history.push("/register");
  };

  const onLoginSuccess = (res) => {
    props.history.push("/home");
  };
  const onLoginError = (err) => console.error({ error: err });

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Welcome</h1>
              <p className="text-center">Sign In To Continue</p>
            </div>
            <Formik
              enableReinitialize={true}
              initialValues={formData}
              validationSchema={validationSchema}
              onRegister={onRegisterBtnClicked}
              onLogin={onLoginBtnClicked}
            >
              <Form className="m-5">
                <label htmlFor="userEmail">Email Address</label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="has-error"
                />
                <label htmlFor="userPassword">Password</label>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="has-error"
                />
                <button type="submit" className="btn btn-primary mt-3 mb-3">
                  Login
                </button>
                <div className="card-footer text-center">
                  <p>Need to SignUp?</p>
                  <button
                    type="button"
                    className="btn btn-secondary justify-content-center"
                  >
                    Register Now
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
