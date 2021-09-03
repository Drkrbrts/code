import React from "react";
import { NavLink } from "react-router-dom";
import * as userServices from "../services/userServices";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const basicSchema = Yup.object().shape({
  email: Yup.string().email("Is Valid Email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /[a-zA-Z]/,
      " One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
toast.configure();
class logIn extends React.Component {
  state = {
    formData: { email: "", password: "", tenantId: "U02503X26QJ" },
  };

  onActionSuccess = (response) => {
    toast.success("Registration Success");
    this.props.history.push("/loggedin");
  };

  onActionError = (errResponse) => {
    toast.error("Registration failed ");
  };
  handleSubmit = (values) => {
    console.log(values);
    userServices
      .logIn(values)
      .then(this.onActionSuccess)
      .catch(this.onActionError);
  };
  render() {
    return (
      <main role="main">
        <div className="container border border-warning border-3">
          <h1 className="display-7 fw-bold text-center">Log In</h1>
          <div className="mb-3">
            <Formik
              enableReinitialize={true}
              initialValues={this.state.formData}
              onSubmit={this.handleSubmit}
              validationSchema={basicSchema}
            >
              {({ Values }) => (
                <Form>
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
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <NavLink to="/Register"> Register Here</NavLink>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>
    );
  }
}
export default logIn;
