import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class LoginPage extends React.Component {
  //callback for .then()
  onLoginSucces(response) {
    toast.success("You have Logged in Successfully!", "Login Success");
  }

  //callback for .catch()
  onLoginError(response) {
    toast.error(response, "Login failed");
  }
  render() {
    return (
      <React.Fragment>
        <div className="container p-3">
          <div className="row p-3">
            <div className="col-md-4"></div>
            <form className="d-inline-block col-md-4 shadow">
              <h5 className="text-center">Sign in</h5>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example1"
                  className="form-control email"
                  placeholder="Email"
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control password"
                  placeholder="password"
                />
              </div>

              {/* <!-- 2 column grid layout for inline styling --> */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                      checked
                    />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="col">
                  {/* <!-- Simple link --> */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="button"
                className="btn btn-primary btn-block mb-4 login"
              >
                <a href="homepage.html">Sign in</a>
              </button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>
                  Not a member? <a href="registerPage.html">register</a>
                </p>
              </div>
            </form>
            <div className="col-md-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;
