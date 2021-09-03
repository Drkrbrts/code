import React from "react";
import * as userServices from "../services/userServices";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema } from "../schemas/userSchemas";

toast.configure();

class Register extends React.Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U02503X26QJ",
      agree: false,
    },
  };
  onActionSuccess = (response) => {
    console.log(response);
    toast.success("Registration Success");
  };
  onActionError = (err) => {
    console.log(err);
    toast.error("Registration failed ");
  };
  handleSubmit = (values) => {
    userServices
      .register(values)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };

  render() {
    return (
      <main role="main">
        <div className="container border border-warning border-3">
          <div className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-lg">
              <Formik
                enableReinitialize={true}
                initialValues={this.state.formData}
                onSubmit={this.handleSubmit}
                validationSchema={registerSchema}
              >
                {({ values }) => (
                  <Form>
                    <h1 className="display-7 fw-bold text-center">
                      Register Here
                    </h1>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" />
                      <Field
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" />
                      <Field
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" />
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" />
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" />
                      <Field
                        type="password"
                        name="passwordConfirm"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                      <ErrorMessage
                        name="passwordConfirm"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1" />
                      <Field
                        type="text"
                        name="avatarUrl"
                        className="form-control"
                        placeholder="Avatar Url"
                      />
                      <ErrorMessage
                        name="avatarUrl"
                        component="div"
                        className="has-error"
                      />
                    </div>
                    <div className="form=check">
                      <Field
                        type="checkbox"
                        name="agree"
                        className="form-check-input"
                      />
                      <label htmlFor="agree" className="form-check-label">
                        {`${values.agree}`}
                      </label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Register;
