import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { resetPassword } from "../services/usersService";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const passwordResetSchema = Yup.object().shape({
  password: Yup.string()
    .required("Is Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default class ResetPassword extends React.Component {
  state = {
    formData: {
      password: "",
      passwordConfirm: "",
    },
  };

  onHandleSubmit = (values) => {
    values.email = this.props.match.params.email;
    console.log(values);
    resetPassword(values).then(this.onResetSuccess).catch(this.onResetError);
  };

  onResetSuccess = () => {
    //console.log("onResetSuccess firing", response);
    let notify = () =>
      toast.success("Password Reset Successful", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    notify();

    this.props.history.push("/login");
  };
  onResetError = (err) => {
    console.log("onResetError firing", err);
    let notify = () =>
      toast.error(
        "Login Error: Verify your email and password are correct and try again",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
    notify();
  };
  render() {
    return (
      <div className="row flex mt-4 justify-content-center">
        <div className="col-3 col-xl-2 mb-4 p-4 border border-primary rounded shadow">
          <h3 className="mb-4">Password Reset</h3>
          <Formik
            enableReinitialize={true}
            initialValues={this.state.formData}
            onSubmit={this.onHandleSubmit}
            validationSchema={passwordResetSchema}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className="form-group my-3">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="has-error"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="passwordConfirm">Confirm Password</label>
                  <Field
                    name="passwordConfirm"
                    type="password"
                    className="form-control mt-2"
                    placeholder="Confirm Password"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="passwordConfirm"
                    component="div"
                    className="has-error"
                  />
                </div>
                <div className="d-flex justify-content-end flex-row px-3">
                  <div>
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
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
