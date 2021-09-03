import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
  console.log("Email: " + values.email);
  console.log("Password: " + values.password);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required").min(3),
});

function Login() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("Visited fields: ", formik.touched);
  console.log("Visited values: ", formik.values);

  return (
    <div className="p-4 mb-4 bg-light rounded-3">
      <h4 style={{ textAlign: "center" }}>Login a user</h4>
      <div className="container-fluid py-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group p-1">
            <label htmlFor="email"></label>
            <input
              type="email"
              autoComplete="email"
              className="form-control"
              style={{ width: "30%", margin: `auto` }}
              id="email"
              name="email"
              placeholder="Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            ></input>
            <div>
              {formik.touched.email && formik.errors.email ? (
                <div
                  className="error"
                  style={{ marginLeft: "433px", color: "red" }}
                >
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div className="form-group p-1">
            <label htmlFor="password"></label>
            <input
              type="password"
              autoComplete="current-password"
              className="form-control"
              style={{ width: "30%", margin: `auto` }}
              id="password"
              name="password"
              placeholder="Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            ></input>
            <div>
              {formik.touched.password && formik.errors.password ? (
                <div
                  className="error"
                  style={{ marginLeft: "433px", color: "red" }}
                >
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>
          <div className="p-3 ml-3" style={{ marginLeft: `420px` }}>
            <button id="login" type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div
            className="row"
            style={{ marginLeft: `570px`, marginTop: `-62px` }}
          >
            <a href="/">I forgot my password</a>
            <a href="/">Register a new membership</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
